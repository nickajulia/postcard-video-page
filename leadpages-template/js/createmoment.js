
//createmoment.js
$(function(){

	var plusPeriod = '2';
	var periodMeasure = 'days';

	var d=moment().add(plusPeriod,periodMeasure).format("dddd, MMMM Do YYYY"),n=document.getElementById("displayMoment");n.innerHTML=d})();
