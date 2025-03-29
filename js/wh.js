
	// Wait for the DOM to be fully loaded before showing chat buttons
	document.addEventListener("DOMContentLoaded", function () {
		setTimeout(function () {
			var chatContainer = document.getElementById("chat-container");
			chatContainer.style.display = "flex"; // Show the container
			var chatItems = document.querySelectorAll('.chat-item');
			
			// Display each chat button
			chatItems.forEach(function(item) {
				item.style.display = "block"; 
			});
		}, 2000); // 2-second delay after page load
	});