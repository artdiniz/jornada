(function(doc, s){
	if(s.availWidth >= 1200){
		var video = doc.createElement("video")
		video.autoplay = true
		video.loop = true
		video.poster = "images/intro-bg.jpg"
		video.classList.add("intro-video")

		var mp4Source = document.createElement("source")
		mp4Source.src = "video/intro.mp4"
		mp4Source.type = "video/mp4"

		var webmSource = document.createElement("source")
		webmSource.src = "video/intro.webm"
		webmSource.type = "video/webm"

		video.appendChild(mp4Source)
		video.appendChild(webmSource)

		var intro = doc.querySelector(".intro")
		intro.insertBefore(video, intro.firstChild)
	}
})(window.document, window.screen)