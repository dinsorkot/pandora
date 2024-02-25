<script setup>
import { ref , onMounted } from 'vue';
import { useCreateUser } from '@/stores/createUser'

const sign_in = useCreateUser()
const canvas = ref(null);
const video = ref(null);
const ctx = ref(null);

const constraints = ref({
    audio: false,
    video: true
});

onMounted(async () => {
    if (video.value && canvas.value) {
        ctx.value = canvas.value.getContext("2d");

        await navigator.mediaDevices
            .getUserMedia(constraints.value)
            .then(setStream)
            .catch(error => {
                console.error(error);
            });
    }
});

const setStream = (stream) => {
    video.value.srcObject = stream;
    video.value.play();

    requestAnimationFrame(draw);
};

const draw = () => {
    ctx.value.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

    requestAnimationFrame(draw);
};

const takePicture = async () => {
    // Convert canvas image to base64
    const imageDataURL = canvas.value.toDataURL('image/jpeg');
    sign_in.new_user.faceID = imageDataURL;
    const apiKey = 'acc_2e937fa34f76b76';
    const apiSecret = 'cbe4fac324cd45b6c9296b33e2f789b5';

    const formData = new FormData();
    formData.append('image', dataURLtoBlob(imageDataURL), 'snapshot.jpg');

    try {
        const response = await fetch('https://api.imagga.com/v2/faces/detections', {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(apiKey + ':' + apiSecret),
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            sign_in.createUser();
            console.log(data);
        } else {
            console.log('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

// Function to convert data URL to Blob
const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};
</script>

<template>
    <div>
        <video ref="video" autoplay playsinline webkit-playsinline muted hidden></video>
        <canvas ref="canvas" width="1280" height="720"></canvas>
        <div>
            <button @click="takePicture">
                Take Picture
            </button>
        </div>
    </div>
</template>
