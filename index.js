const card =document.getElementById('card');
const drop =document.getElementById('drop');
card.addEventListener('dragstart',function(event){
    console.log(event)
})
dropZone.addEventListener('dragover',function(event){
    event.preventdefault()
})
dropZone.addEventListener('drop',function(event){
    dropZone.prepend(card)

})