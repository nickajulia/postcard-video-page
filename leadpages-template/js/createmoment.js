//create moment js


			$(function()
{
  // instantiate a moment object
	  var NowMoment = moment().add(2,'days').format("dddd, MMMM Do YYYY");
	  
	  
	  // display value of moment object in #displayMoment div
	  var eDisplayMoment = document.getElementById('displayMoment');
	  eDisplayMoment.innerHTML = NowMoment;
	  
	  
	})();
