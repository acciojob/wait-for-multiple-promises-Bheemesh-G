//your JS code here. If required.
const tables = document.getElementsByClassName('table-hover')[0];

// var row = tables.insertRow();
// var cell1 = row.insertCell(0);
// var cell2 = row.insertCell(1);
// cell1.innerHTML = "Loading...";
// cell2.innerHTML = "Loading...";
// Create a new row element
var newRow = document.createElement("tr");

// Create new cells
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");

// Add content to the cells
cell1.textContent = "Loading...";
cell2.textContent = "Loading...";

// Append cells to the new row
newRow.appendChild(cell1);
newRow.appendChild(cell2);

// Append the new row to the table
tables.querySelector("tbody").appendChild(newRow);

function promiseOne()
{
	return new Promise((resolve,reject)=>{
		var num1 = Math.floor(Math.random() * 3) + 1;
		setTimeout(()=>{
			cell1.innerHTML= "Promise 1";
			cell2.innerHTML = num1;
			resolve(num1);
		},num1);
	})
}


function promiseSecond()
{
	return new Promise((resolve,reject)=>{
		var num1 = Math.floor(Math.random() * 3) + 1;
		setTimeout(()=>{
			var row = tables.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			cell1.innerHTML= "Promise 2";
			cell2.innerHTML = num1;
			resolve(num1);
		},num1);
	})
}


function promiseThree()
{
	return new Promise((resolve,reject)=>{
		var num1 = Math.floor(Math.random() * 3) + 1;
		setTimeout(()=>{
			var row = tables.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			cell1.innerHTML= "Promise 3";
			cell2.innerHTML = num1;
			resolve(num1);
		},num1);
	})
}


Promise.all([promiseOne(),promiseSecond(),promiseThree()])
.then((results)=>{
	var sum =0;
	for(let i=0;i<results.length;i++)
		{
			sum = sum + results[i];
		}
	var row = tables.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			cell1.innerHTML= "Total";
			cell2.innerHTML = sum;
})
.catch((error)=>{
	console.log(error);
})







