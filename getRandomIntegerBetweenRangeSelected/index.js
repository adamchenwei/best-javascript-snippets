//it allows random intervals that do not start with 1. So you can get a random number from 10 to 15 for example. Flexibility.
export default function (min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
//ref https://stackoverflow.com/a/7228322/2646226
