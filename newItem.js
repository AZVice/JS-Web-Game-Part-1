
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