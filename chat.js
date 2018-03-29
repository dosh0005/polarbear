
console.log("this is javascript....");
//var url = "http://dosh0005.edumedia.ca/api/chat/";
var url = "https://dosh0005.edumedia.ca/api_dialogflow/";


var main = document.getElementById('chat');

function add_message(from, text) {
    var entity = document.createElement('span');
    entity.className = from;
    entity.textContent = text;
    
    var blank = document.createElement('span');
    blank.className = "blank";
    var row = document.createElement('div');
    if (from == "bot") {
        row.appendChild(entity);
        row.appendChild(blank);
    } else {        
        row.appendChild(blank);
        row.appendChild(entity);
    }
    
    main.appendChild(row);
}

function send_message(event) {
    var input = document.getElementById("textentry");
    var text = input.value;
    add_message("user", text);
//    var headers = new Headers(
//        {
//            'Access-Control-Allow-Origin': "*"
//        });
    params = { 
        method: 'GET',
        mode: 'no-cors',
//        headers: headers
    };
//    var urlquery = url + "?authkey=asdmasdmasdmasdm&query=" + encodeURIComponent(text);
    var urlquery = url + "?q=" + encodeURIComponent(text);
    console.log ("fetching "+ urlquery);
    fetch(urlquery, params).then(callback1).then(callback2).catch(callback3);
}
function callback1(response) {
    console.log("RESP: ", response);
    return response.json();
//    return "{}".json();
}
function callback2(json) {
    console.log("JSON: ", json);
}
function callback3(err) {
    console.log("FETCHERROR: " + err);
}

var button = document.getElementById("send");
button.addEventListener("click", send_message);

add_message("bot", "how's it going?");
