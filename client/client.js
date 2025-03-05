console.log("hello client");

const inputfield = document.getElementById('input');
const sendButton = document.getElementById('send');

const serverLocation = 'http://localhost:3000';

function sendMessage()
{
    console.log("send message");
    
}

async function getInfo(e)
{
    e.preventDefault();
    const res = await fetch(serverLocation, 
        {
            method: 'GET'
        }
    );
    console.log(res);
}

async function postInfo(e)
{
    
}

document.addEventListener('click', getInfo);

document.addEventListener("keypress", (event) => 
{
    if(event.key == 'Enter')
    {
        sendMessage();
        getInfo();
    }
        
});