
//Background code starts here. 
function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            let landImages = document.createElement("img")// I could not figure out how to make the background work without adding the next few lines or creating a function for them. 
            landImages.src = url
            landImages.style.position = "fixed"
            landImages.style.left = left + w * 100 + "px"
            landImages.style.bottom = bottom + h * 100 + "px"
            document.body.append(landImages)
            
        }
    }
}

let horizon = window.innerHeight / 1.75;
let heightOfSky = window.innerHeight - horizon;
let heightOfGrass = horizon;

tile("assets/sky.png", 0, horizon, window.innerWidth / 100, heightOfSky / 100);
tile("assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

//Background code ends here. 

//Adding imgaes to the screen code starts here. 

function newImage (url){  // When this fuction is executed all images appear on screen. Added as arguments below. 

    let landImages = document.createElement('img');
    landImages.src = url
    document.body.append(landImages)
    return landImages
}

function newInventory(){
    let inventory = document.createElement('div')
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

function newItem(url){ // This fuction runs to add new items on screen. 
    let item = newImage(url); //links move(newImage) and newItem functions. Not sure about this statememt. 
    item.addEventListener("dblclick", () => {// Items disappeared after double clicking the on the item. 
            item.remove()
            let inventoryItem = document.createElement("img")
            inventoryItem.src = url
            inventory.append(inventoryItem)
        })
        return item
}

const inventory = newInventory()//Mede inventory variable global, so inventory would append as a new inventory item. 

move(inventory).to(0, 0)

const character = newImage("assets/green-character/static.gif")
character.style.zIndex = "1"

function handleDirectionChange(direction){
    
    if(direction === null){
        character.src = "assets/green-character/static.gif"
    }
    if(direction === "west"){
        character.src = "assets/green-character/west.gif"
    }
    if(direction === "north"){
        character.src = "assets/green-character/north.gif"
    }
    if(direction === "east"){
        character.src = "assets/green-character/east.gif"
    }
    if(direction === "south"){
        character.src = "assets/green-character/south.gif"
    }
}
    move(character).moveWithArrowKeys(100, 250, handleDirectionChange)

    move(newImage("assets/tree.png")).to(200, 300)
    move(newImage("assets/pillar.png")).to (350, 100)
    move(newImage("assets/crate.png")).to(250, 200)
    move(newImage("assets/well.png")).to(500, 425)
    move(newImage("assets/red-character.gif")).to(50, 150); //testing adding extra characters. 
    move(newItem("assets/sword.png")).to( 500,405)
    move(newItem("assets/shield.png")).to(165, 185)
    move(newItem("assets/staff.png")).to(600, 250)


function move(element){
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom){
        element.style.left = left + "px";
        element.style.bottom = bottom + "px";

    }
    function moveWithArrowKeys(left, bottom, onDirectionChange){
        let direction = null
        let x = left
        let y = bottom

        element.style.left = x + "px"
        element.style.bottom = y + "px"

    function moveCharacter(){
            if(direction === "west"){
                x-=1
            }
            if(direction === "north"){
                y+=1
            } 
            if(direction === "east"){
                x+=1
            } 
            if(direction === "south"){
                y-=1
            }
            element.style.left = x + "px"
            element.style.bottom = y + "px"
        }
    
        setInterval(moveCharacter, 1)

        document.addEventListener("keydown", function(e){
            if(e.repeat) return;

            if(e.key === "ArrowLeft"){
                direction = "west"
            }
            if(e.key === "ArrowUp"){
                direction = "north"
            }
            if(e.key === "ArrowRight"){
                direction = "east"
            }
            if(e.key === "ArrowDown"){
                direction = "south"
            }
            onDirectionChange(direction)
    })

    document.addEventListener("keyup", function(e){
        direction = null
        onDirectionChange(direction)
    })
}

    return{
            to: moveToCoordinates,
            moveWithArrowKeys: moveWithArrowKeys
    }
}



































//Adding images to screen ends here... 

//Adding inventory items a starts here.

//New item code starts here.


//New item code ends here.

//New inventory code starts here.



///////////////////////////////////////////////////



/*
let character = newImage("assets/green-character.gif", 100, 100)

document.addEventListener("keydown", (event) =>{
    const speed = 10;

    const characterRect = character.getBoundingClientRect();
    let newLeft = characterRect.left;
    let newBottom = characterRect.bottom;

    switch(event.key){
        case "ArrowLeft":
            newLeft -= speed;
            break;
        case "ArrowUp":
            newBottom += speed;
            break;
        case "ArrowRight":
            newLeft += speed;
            break;
        case "ArrowDown":
            newBottom -= speed;
            break;
    
    }

    character.style.left = newLeft + "px"
    character.style.bottom = newBottom + "px"

})
*/