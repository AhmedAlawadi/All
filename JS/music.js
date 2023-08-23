// Array of song tracks
const tracks = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

const pic = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop = document.getElementsByClassName('ButtonPlayStop');
let PlayStopImg = document.getElementById('PlayStopImg');
let ButtonStop = document.getElementsByClassName('ButtonStop');
let ButtonStop1 = document.getElementsByClassName('ButtonStop1');
let Rang = document.getElementById('Range');
let musicTitle = document.getElementById('musicTitle');
let whatsapp = document.getElementById('whatsapp');
let count_rang = document.getElementById('count_rang');
const audioElement = document.getElementsByTagName('audio');
let whats = document.querySelectorAll('musics-1');

var audio = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop.length; i++) 
{
    ButtonPlayStop[i].addEventListener('click', function()
     {
        ButtonPlayStop[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop.length; dd++)
        {
            if(dd != i)
            {
                Ran[dd].value = 0;
                count_song[dd].textContent = '00:00'; 
            }           
            ButtonStop1[dd].style.display='none';
            ButtonPlayStop[dd].style.display='block';
            ButtonPlayStop[dd].querySelector('img#PlayStopImg').src=pic[1];
        }           
        const MusicName = ButtonPlayStop[i].getAttribute('data-music');
        for(let j = 0; j < tracks.length; j++)
        {
            if(MusicName == tracks[j].path)
            {
                audio.src = tracks[i].path;
                audio.currentTime = Ran[i].value;
                audio.play();
                ButtonStop1[i].style.display='block';
                ButtonPlayStop[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop1.length; i++) 
{
    ButtonStop1[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop1.length; y++)
        {
            const ButtonStopName = ButtonStop1[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop1.length; d++)
            {
                if(ButtonStopName == tracks[y].path)
                {
                    audio.pause();
                    ButtonStop1[i].style.display='none';
                    ButtonPlayStop[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////


/////////////////////////////////// واتساب ////////////////////////////

for(i = 0;i < ButtonPlayStop.length; i++)
{
    ButtonPlayStop[i].parentElement.querySelector('#button#whatsapp').onclik = function()
    {
        console.log("Hello");
    };
}



///////////////////////////////////////////////
audio.addEventListener('ended', function()
{
    Ran[s].value = 0;
    count_song[s].textContent = '00:00'; 
    ButtonStop1[s].style.display='none';
    ButtonPlayStop[s].style.display='block';
});


////////////////////////////////////////////////////////
let music = document.getElementsByClassName('music');
let Ran = document.getElementsByClassName('Range');
let range_conut = document.getElementsByClassName('range_conut');
let count_song = document.getElementsByClassName('count_song');

for(let i = 0; i < ButtonPlayStop; i++)
{
    Ran[i] = music[i].querySelector('input#Rang');
    count_song[i] = range_conut[i].querySelector('small#count_song');
}
////////////////////////////////

audio.addEventListener('loadedmetadata', function()
{
    const duration = audio.duration;
    Ran[s].max =  duration;
    count_song[s].textContent = formtTime(duration);
});

audio.addEventListener('timeupdate', function()
{
    const currentTimeValue = audio.currentTime;
    Ran[s].value = currentTimeValue;
    count_song[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran.length; i++)
{
    Ran[i].addEventListener('input', function()
    {
        const sektime = Ran[s].value;
        audio.currentTime = sektime;
        count_song[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    const min = Math.floor(time/60);
    const sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}
