(function(){

	var slider = document.querySelector(".slider");
	var navigation = slider.querySelectorAll(".slider-navigation");
	var parent = slider.parentElement;

	var animatedSlider = document.createElement("div");
	animatedSlider.className = animatedSlider.className + " " + "animatedSlider";

	var previousSlide = 0;

	animatedSlider.addEventListener("click", function(event){
		if(event.target.className.indexOf("slider-navigationItem") != -1){
			var slideIndex = event.target.href.replace(/.*(?=\d)/, "");

			var translate = -1 * (slideIndex - 1) * 33.3;
			slider.style.transform = "translateX(" + translate + "%)";

			if(previousSlide != slideIndex){
				[].forEach.call(navigation[0].querySelectorAll(".slider-navigationItem"), function(e, index){
					if(index == slideIndex - 1){
						e.className = e.className + " " + "slider-navigationItemCurrent";
					}else {
						e.className = e.className.replace("slider-navigationItemCurrent", "");
					}
				})
			}

			previousSlide = slideIndex

			event.stopPropagation();
			event.preventDefault();
		}
	});

	slider.remove();
	[].forEach.call(navigation, function(element){
		element.remove()
	})
	animatedSlider.appendChild(slider);
	animatedSlider.appendChild(navigation[0]);
	parent.appendChild(animatedSlider);

})();