// define the functions 
function PrintCard () {
  line1 = "<strong>Name: </strong>" + this.name + "<br/>\n";
  line1 = "<strong>Address: </strong>" + this.address + "<br/>\n";
  line1 = "<strong>Work Phone: </strong>" + this.workphone + "<br/>\n";
  line1 = "<strong>Home Phone: </strong>" + this.homephone + "<br/>\n";
  document.write (line1, line2, line3, line4);
}
function Card (name, address, work, home) {
  this.name = name;
  this.address = address;
  this.workphone = work;
  this.homephone = home;
  this.PrintCard = PrintCard;
}
// Create the objects
sue = new Card ("Sue Suthers", "123 Elm Street", "555-1234", "555-9876");
phred = new Card ("Phred Madsen", "233 Oak Lane", "555-2222", "555-4444");
henry = new Card ("Henry Tillman", "233 Walnut Circle", "555-1299", "555-1344");
// Add print them
sue.PrintCard();
phred.PrintCard();
henry.PrintCard();