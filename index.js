//Background code starts here. 
function tile(src, positionLeft, positionBottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(src, positionLeft + w*100, positionBottom + h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile("assets/sky.png", 0, horizon, window.innerWidth/100, heightOfSky/100);
tile("assets/grass.png", 0, 0, window.innerWidth/100, heightOfGrass/100);

//Background code ends here. 

//Adding imgaes to the screen code starts here. 

function newImage (src, positionLeft, positionBottom){  // When this fuction is executed all images appear on screen. Added as arguments below. 

    let landImages = document.createElement('img');
    landImages.src = src;
    landImages.style.position = 'fixed';
    landImages.style.left = positionLeft + "px";
    landImages.style.bottom = positionBottom + "px";
    landImages.draggable = true;
    document.body.append(landImages);
    return landImages;
}

newInventory()
newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300 );
newImage("assets/pillar.png",350, 100);
newImage("assets/crate.png", 250, 200);
newImage("assets/well.png", 500, 425);
newImage("assets/red-character.gif", 50, 150); //testing adding characters. 

//Adding images to screen ends here... 

//Adding inventory items a starts here.

const inventory = newInventory()

function newItem(src, positionLeft, positionBottom){ // This fuction runs to add new items on screen. 
    let  landImages = newImage(src, positionLeft, positionBottom); //links newImage and newItem functions. Not sure about this statememt. 

        landImages.addEventListener("dblclick", () => {// Items disappeared after double clicking the on the item. 
            landImages.remove();
            let inventoryItem = document.createElement("img")
            inventoryItem.src = src
            inventory.append(inventoryItem)
        })
        return landImages

}


function newInventory() {
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
    
}



newItem("assets/sword.png",500,405);
newItem("assets/shield.png", 165, 185);
newItem("assets/staff.png", 600, 250);


