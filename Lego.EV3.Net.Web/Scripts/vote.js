﻿$(function () {
  
    $.ajaxSetup({ cache: false });


    /*Signal R*/
    // Reference the auto-generated proxy for the hub.
    var voteHub = $.connection.voteDriveHub;


    voteHub.client.commandToRun = function (cmd) {
        console.log("cmdToRun:" + cmd);
    }

    // Start the connection.
    $.connection.hub.start().done(function () {
        $("button").button().click(function () {
            //send the current button value
            $.getJSON("http://localhost:22640/home/SendMovement/?" + $.param({ movement: this.value }), "", function () { });

            //send the current button value
            voteHub.server.sendDriveCommand(this.value);

        });
    });


}());