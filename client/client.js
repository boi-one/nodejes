console.log("hello client");

const inputfield = document.getElementById('input');
const sendButton = document.getElementById('send');

const serverLocation = 'http://localhost:3000';

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
    e.preventDefault();
    if(inputfield.value === '') {return};
    const res = await fetch(serverLocation,
        {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                parcel: inputfield.value
            })
        }
    )
}

document.addEventListener('click', (event) => postInfo(event));

document.addEventListener("keydown", (event) => 
{
    if(event.key == 'Enter')
    {
        getInfo(event);
        postInfo(event);
        inputfield.value = "";
    }
});