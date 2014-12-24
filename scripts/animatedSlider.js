(function(){

	var slider = document.querySelector(".slider");
	var navigation = slider.querySelectorAll(".slider-navigation");
	var parent = slider.parentElement;

	var animatedSlider = document.createElement("div");
	animatedSlider.className = animatedSlider.className + " " + "animatedSlider";

	var previousSlidePosition = 0;

	animatedSlider.addEventListener("click", function(event){
		if(event.target.className.indexOf("slider-navigationItem") != -1){

			var slideToGoPosition = event.target.href.replace(/.*(?=\d)/, "");

			slider.from(previousSlidePosition).to(slideToGoPosition).go()

			var translate = -1 * (slideToGoPosition - 1) * 100;
			slider.style.marginLeft = translate + "%";

			if(previousSlidePosition != slideToGoPosition){
				[].forEach.call(navigation[0].querySelectorAll(".slider-navigationItem"), function(link, index){
					if(index == slideToGoPosition - 1){
						link.className = link.className + " " + "slider-navigationItemCurrent";
					}else {
						link.className =  link.className.replace("slider-navigationItemCurrent", "");
					}
				})
			}

			previousSlidePosition = slideToGoPosition

			event.stopPropagation();
			event.preventDefault();
		}
	});

	parent.removeChild(slider);
	animatedSlider.appendChild(slider);
	animatedSlider.appendChild(navigation[0]);
	parent.appendChild(animatedSlider);

})();