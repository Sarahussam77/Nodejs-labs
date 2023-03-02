


class Tickets {
    flightTickets = [];
    addTickets(id, seatNum, flightNum, departureAirPort, arrivalAirPort, travellingDate) {
        let ticket = {
            id,
            seatNum,
            flightNum,
            departureAirPort,
            arrivalAirPort,
            travellingDate
        }
        this.flightTickets.push(ticket);
    };
    displayTickets() {
        this.flightTickets.forEach(ticket => {
            console.log(ticket);
        });
    };
    getTickets(id) {
        this.flightTickets.forEach(ticket => {
            if (ticket.id == id) {
                console.log(ticket);
            }
        }

        );
    }
    updateTickets(id){
       
        var updatedTicket = this.flightTickets.findIndex((ticket) => ticket.id == id);
    return this.flightTickets[updatedTicket];
    }
}
module.exports = {
    Tickets
}