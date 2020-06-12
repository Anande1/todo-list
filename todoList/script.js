let myList = document.querySelector('#myUL');
let input = document.querySelector('#myInput');
let addButton = document.querySelector('.addBtn');

myList.addEventListener('click',
function(event)
{
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
    }
    
}
);

addButton.addEventListener('click',
function()
{
    let newItem = document.createElement('LI');
    newItem.innerText = input.value;
    myList.append(newItem);
    input.value = '';
}
);