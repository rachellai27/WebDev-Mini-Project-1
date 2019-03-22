var ol = document.getElementById("todoList");
var add = document.getElementById("add");
var del = document.getElementById("delete");
var len = document.getElementsByTagName("li").length;
var list = [];
var counter = document.getElementById("counter");
var c = 0;

//with arrays
add.addEventListener("click", function()
{
	var newTask = prompt("Enter new  task!");
	list.push(String(newTask));
	console.log(list);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(String(newTask)));
	ol.appendChild(li);
})
del.addEventListener("click", function()
{
	var delIndex = prompt("Enter the task's number!");
	if(delIndex > list.length)
	{
		if(delIndex == 1)
		{
			alert("There aren't any to-dos");
		}
		else if(delIndex == 2)
		{
			alert("There isn't a second to-do");
		}
		else if(delIndex == 3)
		{
			alert("There isn't a third to-do");
		}

		else
		{
			alert("There isn't a " + String(delIndex) + "th to-do");
		}
		
	}
	console.log(delIndex);
	list.splice(delIndex - 1, 1);
	console.log(list);
	ol.removeChild(ol.childNodes[delIndex]);
	c++;
	counter.textContent = String(c);
})

