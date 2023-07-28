const seatElements = document.querySelectorAll('.showAvailable');//Accessing Available seats element
const totalPriceElement = document.getElementById('totalPrice');//For price element
const selectedSeatsElement = document.getElementById('selectedSeats');//for seats name

let selectedSeats = new Set();//for unique selection, to store the name of the selected seats.


//iterates through each seatElement that is representing available seats 
seatElements.forEach(seatElement => {
  const seatName = seatElement.dataset.seat;
  seatElement.addEventListener('click', () => {
    if (!seatElement.classList.contains('booked')) {
      toggleSeatSelection(seatName);
    }
  });
});


//for selection of seats
function toggleSeatSelection(seatName) {
  const seatElement = document.querySelector(`[data-seat="${seatName}"]`);

  if (seatElement.classList.contains('selected')) {
    selectedSeats.delete(seatName);
    seatElement.classList.remove('selected');
  }else {
    selectedSeats.add(seatName);
    seatElement.classList.add('selected');
  }

  updateTotalPrice();
  updateSelectedSeats();
}


//Price calculation

const seatPrices = {
  A: 150, // for row A
  B: 200, // for row B
  C: 220, // for row C
  D: 250, // for row D
  E: 320, // for row E
  F: 350  // for row F
}

console.log(seatPrices);

function updateTotalPrice() {
  let totalPrice = 0;
  selectedSeats.forEach(seatName => {
    const row = seatName.charAt(0);
    if (seatPrices[row]) {
      totalPrice += seatPrices[row];
    }
  })
  totalPriceElement.textContent = `${totalPrice}`;
}
  
//To display Name of selected seats
function updateSelectedSeats(){
    selectedSeatsElement.textContent = selectedSeats.size > 0 ? `Selected Seats: ${Array.from(selectedSeats).join(', ')}` : 'Selected Seats:0';
}





