// Write a function that will return an array of 6 numbers (random). Ensure that the same numbers aren't repeated. To start the lotto numbers will only be from 1-10.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function drawingNumbers() {
  let lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    let randomNum = getRandomNumber(1, 69);
    if (!validateNumber(randomNum, lottoNumbers)) {
      lottoNumbers.push(randomNum);
    }
  }
  return lottoNumbers;
}

function validateNumber(numberToCheck, lottoNumbers) {
  return lottoNumbers.includes(numberToCheck);
}

let leifTicket = drawingNumbers();
let lottoNumbers = drawingNumbers();
// console.log(lottoNumbers);
// console.log(leifTicket);

// Create a function that takes the lottoNumbers and a customer's purchased numbers and reports back of how many did it match.

function validateTicket(lottoNumbers, ticketToCompare) {
  const matchFound = ticketToCompare
    .map((num) => validateNumber(num, lottoNumbers))
    .filter((match) => match === true).length;
  return matchFound === 6
    ? 'Jackpot'
    : `You had matched ${matchFound} number(s)`;
}

let ticketComparison = validateTicket(lottoNumbers, leifTicket);

console.log(ticketComparison);

//  Write a function that will return said number of lotto tickets

function processBulkTicketOrder(orderQuantity) {
  let lottoTickets = [];
  for (let i = 0; i < orderQuantity; i++) {
    lottoTickets.push(drawingNumbers());
  }
  return lottoTickets;
}

let order1 = processBulkTicketOrder(100);

// validateBulkTickets should return an array of objects with the following{ticket: [], message:""}
function validateBulkTickets(lottoNumbers, ticketsToCompare) {
  const bulkResult = ticketsToCompare.map((ticket) => {
    const message = validateTicket(lottoNumbers, ticket);
    return { ticket: ticket, message: message };
  });

  return bulkResult;
}

const validateMyBulkTickets = validateBulkTickets(lottoNumbers, order1);
console.log(summarizeWinnings(validateMyBulkTickets)
);

function summarizeWinnings(ticketsThatWereValidated){
    const summary = {
        jackpotTotal: ticketsThatWereValidated.filter((ticket) => ticket.message === 'Jackpot').length,
        matched5: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('5')).length,
        matched4: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('4')).length,
        matched3: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('3')).length,
        matched2: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('2')).length,
        matched1: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('1')).length,
        duds: ticketsThatWereValidated.filter((ticket) => ticket.message.includes('0')).length,
    }
    return summary;
}
