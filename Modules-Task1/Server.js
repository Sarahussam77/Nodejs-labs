var myModule=require("./Module");
// let Tickets = myModule.Tickets;
let ticket1=new myModule.Tickets();
ticket1.addTickets(1, 25, 3, "Alexandria", "paris", "18/12/2023");
ticket1.displayTickets();

ticket1.updateTickets(1).flightNum=55;
ticket1.getTickets(1);
