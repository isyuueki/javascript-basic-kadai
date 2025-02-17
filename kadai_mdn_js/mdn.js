let date = new Date(2025, 1, 17)
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
console.log(date.toLocaleDateString('ja-jp', options))


