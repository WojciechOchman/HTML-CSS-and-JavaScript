// get the current date
now = newDate();
// split into hours, minutes, seconds
hours = now.getHours();
minutes = now.getMinutes();
seconds = now.getSeconds();
// display the time
document.write("<h2>");
document.write(hours + ":" + mins + ":" + secs);
document.write("</h2>");
// display a greeting
document.write("<p>");
if (hours < 10) {
  document.write ("Good morning");
} else if (hours >= 14 && hours <= 17) {
  document.write ("Good afternoon");
} else if (hours >= 17) {
  document.write ("Good evening");
} else {
  document.write ("Good day");
}
document.write("</p>");
