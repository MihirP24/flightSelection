/*
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */

// creating container and main section
let container = document.querySelector(".container")
let secMain = document.createElement("section")
secMain.className = "flight-info"

// using for loop to access all elements
for (let data in FlightInfo) {

   // creating section
   let sec1 = document.createElement("section")
   sec1.className = "flight-availability-info"

   let sec2 = document.createElement("section")
   sec2.className = "time-info"

   let sec3 = document.createElement("section")
   sec3.className = "list-class"

   let sec4 = document.createElement("section")
   sec4.className = "sec4"

   //creating main heading
   let h1 = document.createElement("h1")
   h1.className = "h1"


   // creating paragraphs and lists
   let p1 = document.createElement("p")
   p1.className = "p1"

   let p2 = document.createElement("li")
   p2.className = "p2"

   let p3 = document.createElement("li")
   p3.className = "p3"

   let p4 = document.createElement("li")
   p4.className = "p4"

   // creating button
   let button = document.createElement("button")
   button.className = "button_class"
   sec4.appendChild(button)

   // creating on click button event
   button.addEventListener("click", clickme)

   // adding flight name to aside on selecting a flight for particular city
   function clickme() {
      let sideText = document.createElement("p")
      sideText.innerText = `Flight ${FlightInfo[data].code} to ${FlightInfo[data].destination} added`
      document.querySelector(".flights-selection-bag").appendChild(sideText)
   }

   // adding content in html
   h1.innerHTML = FlightInfo[data].destination

   // if-else condition to print number of stops
   if (FlightInfo[data].stops != 0) {
      p1.innerHTML = `${FlightInfo[data].stops}, ${FlightInfo[data].time}min <br> Depart time: ${FlightInfo[data].departTime}`
   } else {
      p1.innerHTML = `Non-Stop, ${FlightInfo[data].time}min <br> Depart time:  ${FlightInfo[data].departTime}`
   }

   // adding flight details
   p2.innerHTML = `Airline: ${FlightInfo[data].airline}`
   p3.innerHTML = `Airport: ${FlightInfo[data].airport}`
   p4.innerHTML = `Details: ${FlightInfo[data].info}`
   button.innerHTML = "Select"


   // linking all the content using append
   sec4.appendChild(button)
   p4.appendChild(sec4)
   p3.appendChild(p4)
   p2.appendChild(p3)
   sec3.appendChild(p2)
   p1.append(sec3)
   sec2.appendChild(p1)
   h1.append(sec2)
   sec1.appendChild(h1)
   sec4.appendChild(button)
   sec1.appendChild(sec4)
   secMain.appendChild(sec1)


}

// adding the main section to the page
container.appendChild(secMain)
