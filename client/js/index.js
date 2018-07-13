/*
author: Sohom[Sohom.h@vcloudx.com]
description: js file for index page manipulation
*/
window.onload = function () {
    $(".login_join_div").show();
    document.getElementById('moderator').setAttribute('checked', 'true');
}


/*
* Author:Sohom[sohom.h@vcloudx.com]
* Description: After submitting the roomId,Role and name in Landing page i.e  https://localhost:5004/
*               it checks the credentials and load the confo.html[i.e the basic calling environment]
*               */

document.getElementById('joinRoom').addEventListener('click', function (event) {
    joinRoom(document.getElementById('roomName').value, function (data) {
        var resData = JSON.parse(data);
        if (!jQuery.isEmptyObject(resData)) {
            /*var username=document.getElementById('userName').value;*/
            var user_ref = document.getElementById('nameText').value;
            var usertype = undefined;
            if (document.getElementById('moderator').checked) {
                usertype = document.getElementById('moderator').value;
            }
            if (document.getElementById('participant').checked) {
                usertype = document.getElementById('participant').value;
            }
            /* Load the basic clling environment*/
            window.location.href = "confo.html?roomId=" + resData.room_id + "&usertype=" + usertype + "&user_ref=" + user_ref;
        } else {
            alert('No room found');
        }
    });
});
