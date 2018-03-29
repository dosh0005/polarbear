
console.log("this is javascript....");

//var url = "https://dosh0005.edumedia.ca/api/chat/";
//function make_url(){
//    return url + "?authkey=asdmasdmasdmasdm&query=" + encodeURIComponent(text);
//}

var url = "https://dosh0005.edumedia.ca/api_dialogflow/";
function make_url(text){
    return url + "?q=" + encodeURIComponent(text);
}

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
    var headers = new Headers(
        {
            'Origin': 'https://dosh0005.edumedia.ca'
        });
    params = {
        method: 'GET',
        mode: 'cors',
        headers: headers
    };
    var urlquery = make_url(text);
    console.log ("fetching "+ urlquery);
    fetch(urlquery, params).then(callback1).then(callback2).catch(callback3);
}
function callback1(response) {
    console.log("RESP: ", response);
    return response.text();
}
function callback2(json) {
    console.log("DATA: ", json);
}
function callback3(err) {
    console.log("FETCHERROR: " + err);
}

var button = document.getElementById("send");
button.addEventListener("click", send_message);
