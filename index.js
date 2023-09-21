function newImage (src, positionLeft, postionBottom){
    let landImages = document.createElement('img')
    landImages.src = src;
    landImages.style.position = 'fixed'
    landImages.style.left = positionLeft
    landImages.style.bottom = postionBottom
    document.body.append(landImages)
}


function newItem(src, positionLeft, postionBottom){
    let  item = newImage(src, positionLeft, postionBottom)
}




newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px" )
newImage("assets/pillar.png","350px", "100px")
newImage("assets/crate.png", "250px", "200px")
newImage("assets/well.png", "500px", "425px")


newItem("assets/sword.png","500px","405px");
newItem("assets/shield.png", "165px", "185px")
newItem("assetes")