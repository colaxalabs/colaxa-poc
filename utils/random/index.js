// Generate random number (999 - 999999)

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max -min) + 1);
}

export default randomNumber;