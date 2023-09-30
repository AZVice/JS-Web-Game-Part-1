function newImage (url){  // When this fuction is executed all images appear on screen. Added as arguments below. 

    let landImages = document.createElement('img');
    landImages.src = url
    document.body.append(landImages)
    return landImages
}