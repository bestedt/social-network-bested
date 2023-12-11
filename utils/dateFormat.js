// created a function that will format the date to MM/DD/YYYY HH:MM:SS
const addZero = (num) => (num < 10 ? `0${num}` : num);
// this is the function that will be exported and called in the controllers
module.exports = (timestamp) => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hours = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
// this is the format that will be returned
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
};
