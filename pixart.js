console.log("Linked");



// Commit 1
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// Use jQuery to select the element and add an event listener

// Change color of brush to be whatever color is entered in the text box

// $(".brush").css("background", "red")

const button = $("button")

const text = $("#color-field")


// const input =

// console.log(text)

button.on("click", function(event) {
	console.log(event)
	event.preventDefault()

const colorChange = text.val()

const brush = $(".brush")

brush.css("background-color", colorChange)

})


// Commit 3
// Create 20 divs of the "square" class and append them to the body
// Hint: use .append()

const makeDiv = () => {



	for(let i = 0; i < 8000; i++) {
	const div = $("<div class='square')>")
	div.appendTo($("body"))
}
	
}

makeDiv();


$(".square").on("mouseover", function(event) {
	 console.log(event.currentTarget)
	const changeSquare = $(event.currentTarget)
	console.log(changeSquare) 
	changeSquare.css("background-color", $(".brush").css("background-color"))

})

//above
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body elemen

// Commit 6
// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!



