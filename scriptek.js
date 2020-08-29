startTime();

function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
				
		m = checkTime(m);
		s = checkTime(s);
				
		document.getElementById('hr').innerHTML = h + ":" + m + ":" + s;
		var t = setTimeout(startTime, 500);
}

function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
}
			
function scaleTextUp(){
	var style = window.getComputedStyle(document.getElementById('egricsillagok'), null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 
	
	document.getElementById('egricsillagok').style.fontSize = (fontSize + 1) + 'px';
}

function scaleTextDown(){
	var style = window.getComputedStyle(document.getElementById('egricsillagok'), null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 
	
	document.getElementById('egricsillagok').style.fontSize = (fontSize - 1) + 'px';
}

function selectSize(){
	var size = document.getElementById("szovegMeret").value;
	document.getElementById('egricsillagok').style.fontSize = (size) + 'px';
}

function selectSize(){
	var size = document.getElementById("szovegMeret").value;
	document.getElementById('egricsillagok').style.fontSize = (size) + 'px';
}

function selectFont(selectTag){
	var listValue = selectTag.options[selectTag.selectedIndex].text;
   document.getElementById("egricsillagok").style.fontFamily = listValue;
}	

function setItalic(){
	document.getElementById("egricsillagok").style.fontWeight = "normal";
	document.getElementById("egricsillagok").style.textDecoration = "none";
	document.getElementById("egricsillagok").style.fontStyle = "italic";
}

function setNormal(){
	document.getElementById("egricsillagok").style.fontStyle = "normal";
	document.getElementById("egricsillagok").style.fontWeight = "normal";
	document.getElementById("egricsillagok").style.textDecoration = "none";
}

function setBold(){
		document.getElementById("egricsillagok").style.fontStyle = "normal";
	document.getElementById("egricsillagok").style.fontWeight = "bold";
	document.getElementById("egricsillagok").style.textDecoration = "none";
}

function setUnderline(){
	document.getElementById("egricsillagok").style.fontStyle = "normal";
	document.getElementById("egricsillagok").style.fontWeight = "normal";
	document.getElementById("egricsillagok").style.textDecoration = "underline";
}

function setStrike(){
	document.getElementById("egricsillagok").style.fontStyle = "normal";
	document.getElementById("egricsillagok").style.fontWeight = "normal";
	document.getElementById("egricsillagok").style.textDecoration = "line-through";
}

var a=[];
var tmp;
var good = 1;
var i = 0;
var reset = 0;

do{
	reset = 0;
	
	a[i] = Math.floor(Math.random() * 9) + 1;
	
	for (var j=0; j<4; j++){
		if(i == j){
			j++;
		}
		
		if(a[i] == a[j]){
				a[i] = Math.floor(Math.random() * 9) + 1;
				reset = 1;
			}
	}
		if(reset == 0){
			i++;
		}
	
}
while(i < 4);


var tries = 0;

for (i=0; i<4; i++){   
		console.log(a[i]);
	}

function tryNumber(){
	
	var probaSzam = document.getElementById("tryInput").value;
	
	
	tries++;
	
	var correctCount = 0;
	var correctPosition = 0;
	   
	   for (i=0; i<4; i++){
		   if(a[i] == probaSzam[i]){
				correctPosition++;
		   }
	   }
	   
	   for (i=0; i<4; i++){
		     for (j=0; j<4; j++){
				if(a[i] == probaSzam[j]){
						correctCount++;
				}
			}		
	   }
	   
	   var wrongPosition = correctCount - correctPosition;
	   
	   document.getElementById("output").innerHTML += tries + ". próba" + " (" + wrongPosition +" rossz helyen, " + correctPosition + " jó helyen.)<br>";
	   
	   if(correctPosition == 4){
		  alert("Kitaláltad!!!");
	   }
}