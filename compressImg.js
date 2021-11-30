const imgCompressCdn = document.createElement('script');
imgCompressCdn.setAttribute('src','https://cdn.jsdelivr.net/npm/browser-image-compression@1.0.17/dist/browser-image-compression.js');
document.head.appendChild(imgCompressCdn);

const handleImageUpload = async (imageFile, uploadToServer) => {
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
  
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
      await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
      console.log(error);
    }
}

// https://www.npmjs.com/package/browser-image-compression
