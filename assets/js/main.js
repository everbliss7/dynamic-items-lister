document.cookie = "";
var button1 = document.getElementById('button1');
var hd = document.getElementById('header-title');
var box = document.getElementById('box');
box.addEventListener("mousemove", logCoordinates);
box.addEventListener("mouseleave", (e)=>{
    box.style.display = "none";
});

var box2 = document.getElementById('box2');
box2.addEventListener("click", (e) => {
    box.style.display = "block";
})

function logCoordinates(e) {
    var y = e.offsetY;
    var x = e.offsetX;
    document.querySelectorAll('.card')[0].style.backgroundColor = "rgb("+x+","+y+","+150+")";
    document.querySelectorAll('#main-header')[0].style.backgroundColor = "rgb("+x+","+y+","+150+")";
} 
var filter = document.getElementById('filter');
var form = document.getElementById('addform');
var items = document.getElementById('items');
form.addEventListener("submit", addItem);
var input;
items.addEventListener("click", removeElement);
filter.addEventListener('keyup', searchEngine);

function searchEngine(e) {
    var query = e.target.value.toLowerCase();
    //change item collection to array
    var itemsCollection = document.getElementsByClassName('list-group-item');
    var itemsArray      = Array.from(itemsCollection);
    itemsArray.forEach(item => {
        if(item.className == "list-group-item")
        {
            var itemValue = item.firstChild.textContent.toLowerCase();
            console.log(itemValue);
            if(itemValue.indexOf(query) != -1)
            {
                item.style.display = "block";
            }
            else
            {
                item.style.display = "none";
            }
        }
        
    });

}
  
//Add an Item to the List
function addItem(e) {
    e.preventDefault();
    var input = document.querySelector('input[type=text]').value;
    var newItem           = document.createElement('li');
    newItem.className     = "list-group-item";
    newItem.textContent   = input;
    items.appendChild(newItem);
    var delBtn = document.createElement('button');
    delBtn.className = "btn btn-danger btn-sm float-right delete";
    delBtn.textContent = "delete";
    newItem.appendChild(delBtn);
}

//Remove an Item from the List
function removeElement(e) {
    if(e.target.className == 'btn btn-danger btn-sm float-right delete')
    {
        if(confirm("Are you sure you want to delete this list item permanently!"))
        {
            items.removeChild(e.target.parentElement);
        }
    }
}