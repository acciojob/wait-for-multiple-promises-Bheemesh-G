//your JS code here. If required.
const tables = document.getElementsByClassName('table-hover')[0];

var row = tables.insertRow();
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "Loading...";
cell2.innerHTML = "Loading...";

function promiseOne()
{
	return new Promise((resolve,reject)=>{
		var num1 = Math.floor(Math.random() * 3) + 1;
		setTimeout(()=>{
			
			var row = tables.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			cell1.innerHTML= "Promise 1";
			cell2.innerHTML = num1;
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
		},num1);
	})
}

function promiseFourth()
{
	return new Promise((resolve,reject)=>{
		var num1 = Math.floor(Math.random() * 3) + 1;
		setTimeout(()=>{
			var row = tables.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
			cell1.innerHTML= "Total";
			cell2.innerHTML = num1;
		},num1);
	})
}


Promise.all([promiseOne(),promiseSecond(),promiseThree(),promiseFourth()])
.then((results)=>{
	console.log("completed");
})
.catch((error))
{
	console.log("error");
}







