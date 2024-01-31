function DisplayStatus(input) {

    switch (input) {
        case -3:
            return "Vooraf geaccepteerd";
        case 0:
            return "zonder instelling/afdeling, kon niet aanvard worden";
        case 3:
            return "Aanvaard";
        case 5:
            return "Geweigerd, zie lijn stagebespreking";
        case 8:
            return "Aanvaard, uurrooster toegevoegd";
        default:
            return "niet gedefinieerd";
    }
   

};

export default DisplayStatus;