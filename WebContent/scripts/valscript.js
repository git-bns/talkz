function loadAllInitDropdowns(){
	$.ajax({
		type: "GET",
		url: "resources/movies.xml",
		dataType: "xml",
		  success: function(xml) {
			var select = $('#movie-select-box');
			select.append('<option value="xxNNxx">-- Select a Movie --</option>');				
			$(xml).find('movie').each(function(){											
			var filename = $(this).find('filename').text();
			var name = $(this).find('name').text();
			// Movie path is read as folder name/filename. So provide exact folder name and file name in the XML
			select.append("<option value='" + name +"/" + filename +"'>"+name+"</option>");
		  });
		}
	});	
	
	$.ajax({
		type: "GET",
		url: "resources/tvseries.xml",
		dataType: "xml",
		  success: function(xml) {
			var select = $('#tv-series-select-box');
			select.append('<option value="xxNNxx">-- Select a Series --</option>');				
			$(xml).find('serial').each(function(){											
			var folderpath = $(this).find('folderpath').text();
			var name = $(this).find('name').text();
			select.append("<option value='"+ folderpath +"'>"+name+"</option>");
		  });
		}
	});	
}

function toggleLoadingButton(){
	var movieSelect = document.getElementById("movie-select-box");
	if (movieSelect.selectedIndex == 0){
		document.getElementById("movie-load-button").disabled = true;
		var movieVdo = document.getElementById("movie-video");
		var movieVdoSrc = document.getElementById("movie-video-source");
		movieVdo.pause();
		movieVdoSrc.src = "/resources/Feast.2014.FRENCH.BDRip.x264-AYMO.mkv";
		movieVdo.load();
		document.getElementById("movie-legend").innerHTML = "The Movie Trailer";
	}else if (movieSelect.selectedIndex > 0)
		document.getElementById("movie-load-button").disabled = false;
}

function loadMovie(){
	var movieSelect = document.getElementById("movie-select-box");
	var movieVdo = document.getElementById("movie-video");
	var movieVdoSrc = document.getElementById("movie-video-source");
	movieVdo.pause();
	movieVdoSrc.src = "/resources/" + movieSelect.value;
	movieVdo.load();
	var movieName = movieSelect.options[movieSelect.selectedIndex].innerHTML;
	var movieLegend = document.getElementById("movie-legend");
	movieLegend.innerHTML = movieName;
}