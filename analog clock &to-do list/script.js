setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);






let addButton = document.getElementById('add')
let inputfield = document.getElementById('IF')
let todoitem = document.getElementById('itemid')
function addsitem()
{
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    paragraph.classList.add('paragraph-styling');
    todoitem.appendChild(paragraph);
    inputfield.value="";

    paragraph.addEventListener('click',function()
    {
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function()
    {
        todoitem.removeChild(paragraph);
    })
}
addButton.addEventListener('click',addsitem);
