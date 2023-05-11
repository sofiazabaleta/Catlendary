export const formatDate = (date) =>
  date
    .toUTCString()
    .split(" ")
    .slice(1, 4)
    .concat(date.toLocaleTimeString())
    .join(" ");
