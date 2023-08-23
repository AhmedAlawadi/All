
/////////////////////////////// الملف الخاص بشيلات العروس ///////////////////////////////////////////////////
{
    // Array of song tracks
const tracks = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

const pic = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop = document.querySelectorAll('#musics-1 .ButtonPlayStop');
let PlayStopImg = document.querySelectorAll('#musics-1 #PlayStopImg');
let ButtonStop111 = document.querySelectorAll('#musics-1 .ButtonStop');
let ButtonStop11 = document.querySelectorAll('#musics-1 .ButtonStop1');
let Rang = document.querySelectorAll('#musics-1 #Range');
let musicTitle = document.querySelectorAll('#musics-1 #musicTitle');
let whatsapp = document.querySelectorAll('#musics-1 #whatsapp');
let count_rang = document.querySelectorAll('#musics-1 #count_rang');
const audioElement = document.getElementsByTagName('audio');

var audio = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop.length; i++) 
{
    ButtonPlayStop[i].addEventListener('click', function()
     {
        ButtonPlayStop[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop111.length; dd++)
        {
            if(dd != i)
            {
                Ran[dd].value = 0;
                count_song[dd].textContent = '00:00'; 
            }           
            ButtonStop11[dd].style.display='none';
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
                ButtonStop11[i].style.display='block';
                ButtonPlayStop[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop11.length; i++) 
{
    ButtonStop11[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop11.length; y++)
        {
            const ButtonStopName = ButtonStop11[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop11.length; d++)
            {
                if(ButtonStopName == tracks[y].path)
                {
                    audio.pause();
                    ButtonStop11[i].style.display='none';
                    ButtonPlayStop[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio.addEventListener('ended', function()
{
    Ran[s].value = 0;
    count_song[s].textContent = '00:00'; 
    ButtonStop11[s].style.display='none';
    ButtonPlayStop[s].style.display='block';
});


////////////////////////////////////////////////////////
let music = document.querySelectorAll('#musics-1 .music');
let Ran = document.querySelectorAll('#musics-1 .Range');
let range_conut = document.querySelectorAll('#musics-1 .range_conut');
let count_song = document.querySelectorAll('#musics-1 .count_song');

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


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu = document.getElementsByClassName('menu-item');
for(i = 0; i < menu.length; i++)
{
    if(i != 0){
    menu[i].addEventListener('click', function()
    {
        audio.pause();
        ButtonStop11[s].style.display='none';
        ButtonPlayStop[s].style.display='block';
        Ran[s].value = 0;
    });}
}
}


/////////////////////////////// الملف الخاص بشيلات العريس ///////////////////////////////////////////////////
{
    /////////////////////////////// الملف الخاص بشيلات العريس ///////////////////////////////////////////////////

// Array of song tracks2
let tracks2 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic2 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop1 = document.querySelectorAll('#musics-2 .ButtonPlayStop');
let PlayStopImg1 = document.querySelectorAll('#musics-2 #PlayStopImg');
let ButtonStop = document.querySelectorAll('#musics-2 .ButtonStop');
let ButtonStop1 = document.querySelectorAll('#musics-2 .ButtonStop1');
let Rang1 = document.querySelectorAll('#musics-2 #Range');
let musicTitle2 = document.querySelectorAll('#musics-2 #musicTitle');
let whatsapp1 = document.querySelectorAll('#musics-2 #whatsapp');
let count_rang1 = document.querySelectorAll('#musics-2 #count_rang');
let audioElement1 = document.getElementsByTagName('audio');

var audio1 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop1.length; i++) 
{
    ButtonPlayStop1[i].addEventListener('click', function()
     {
        ButtonPlayStop1[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop1[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop.length; dd++)
        {
            if(dd != i)
            {
                Ran1[dd].value = 0;
                count_song1[dd].textContent = '00:00'; 
            }           
            ButtonStop1[dd].style.display='none';
            ButtonPlayStop1[dd].style.display='block';
            ButtonPlayStop1[dd].querySelector('img#PlayStopImg').src=pic2[1];
        }           
        let MusicName = ButtonPlayStop1[i].getAttribute('data-music');
        for(let j = 0; j < tracks2.length; j++)
        {
            if(MusicName == tracks2[j].path)
            {
                audio1.src = tracks2[i].path;
                audio1.currentTime = Ran1[i].value;
                audio1.play();
                ButtonStop1[i].style.display='block';
                ButtonPlayStop1[i].style.display='none';
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
            let ButtonStopName = ButtonStop1[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop1.length; d++)
            {
                if(ButtonStopName == tracks2[y].path)
                {
                    audio1.pause();
                    ButtonStop1[i].style.display='none';
                    ButtonPlayStop1[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio1.addEventListener('ended', function()
{
    Ran1[s].value = 0;
    count_song1[s].textContent = '00:00'; 
    ButtonStop1[s].style.display='none';
    ButtonPlayStop1[s].style.display='block';
});


////////////////////////////////////////////////////////
let music1 = document.querySelectorAll('#musics-2 .music');
let Ran1 = document.querySelectorAll('#musics-2 .Range');
let range_conut1 = document.querySelectorAll('#musics-2 .range_conut');
let count_song1 = document.querySelectorAll('#musics-2 .count_song');

for(let i = 0; i < ButtonPlayStop1; i++)
{
    Ran1[i] = music1[i].querySelector('input#Rang');
    count_song1[i] = range_conut1[i].querySelector('small#count_song');
}
////////////////////////////////

audio1.addEventListener('loadedmetadata', function()
{
    let duration = audio1.duration;
    Ran1[s].max =  duration;
    count_song1[s].textContent = formtTime(duration);
});

audio1.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio1.currentTime;
    Ran1[s].value = currentTimeValue;
    count_song1[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran1.length; i++)
{
    Ran1[i].addEventListener('input', function()
    {
        let sektime = Ran1[s].value;
        audio1.currentTime = sektime;
        count_song1[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}

//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu1 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu1.length; i++)
{
    if(i != 1){
    menu1[i].addEventListener('click', function()
    {
        audio1.pause();
        ButtonStop1[s].style.display='none';
        ButtonPlayStop1[s].style.display='block';
        Ran1[s].value = 0;
    });}
}

}


/////////////////////////////// الملف الخاص بشيلات ام العروس ///////////////////////////////////////////////////
{
    ////////////////////////////////////// الملف الخاص بقائمة شيلات ام العروس ///////////////////////////////////////
// Array of song tracks3
let tracks3 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic3 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop2 = document.querySelectorAll('#musics-3 .ButtonPlayStop');
let PlayStopImg2 = document.querySelectorAll('#musics-3 #PlayStopImg');
let ButtonStop2 = document.querySelectorAll('#musics-3 .ButtonStop');
let ButtonStop22 = document.querySelectorAll('#musics-3 .ButtonStop1');
let Rang2 = document.querySelectorAll('#musics-3 #Range');
let musicTitle1 = document.querySelectorAll('#musics-3 #musicTitle');
let whatsapp2 = document.querySelectorAll('#musics-3 #whatsapp');
let count_rang2 = document.querySelectorAll('#musics-3 #count_rang');
let audioElement2 = document.getElementsByTagName('audio');

var audio2 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop2.length; i++) 
{
    ButtonPlayStop2[i].addEventListener('click', function()
     {
        ButtonPlayStop2[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop2[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop2.length; dd++)
        {
            if(dd != i)
            {
                Ran2[dd].value = 0;
                count_song2[dd].textContent = '00:00'; 
            }           
            ButtonStop22[dd].style.display='none';
            ButtonPlayStop2[dd].style.display='block';
            ButtonPlayStop2[dd].querySelector('img#PlayStopImg').src=pic3[1];
        }           
        let MusicName = ButtonPlayStop2[i].getAttribute('data-music');
        for(let j = 0; j < tracks3.length; j++)
        {
            if(MusicName == tracks3[j].path)
            {
                audio2.src = tracks3[i].path;
                audio2.currentTime = Ran2[i].value;
                audio2.play();
                ButtonStop22[i].style.display='block';
                ButtonPlayStop2[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop22.length; i++) 
{
    ButtonStop22[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop22.length; y++)
        {
            let ButtonStopName = ButtonStop22[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop22.length; d++)
            {
                if(ButtonStopName == tracks3[y].path)
                {
                    audio2.pause();
                    ButtonStop22[i].style.display='none';
                    ButtonPlayStop2[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio2.addEventListener('ended', function()
{
    Ran2[s].value = 0;
    count_song2[s].textContent = '00:00'; 
    ButtonStop22[s].style.display='none';
    ButtonPlayStop2[s].style.display='block';
});


////////////////////////////////////////////////////////
let music2 = document.querySelectorAll('#musics-3 .music');
let Ran2 = document.querySelectorAll('#musics-3 .Range');
let range_conut2 = document.querySelectorAll('#musics-3 .range_conut');
let count_song2 = document.querySelectorAll('#musics-3 .count_song');

for(let i = 0; i < ButtonPlayStop2; i++)
{
    Ran2[i] = music2[i].querySelector('input#Rang');
    count_song2[i] = range_conut2[i].querySelector('small#count_song');
}
////////////////////////////////

audio2.addEventListener('loadedmetadata', function()
{
    let duration = audio2.duration;
    Ran2[s].max =  duration;
    count_song2[s].textContent = formtTime(duration);
});

audio2.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio2.currentTime;
    Ran2[s].value = currentTimeValue;
    count_song2[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran2.length; i++)
{
    Ran2[i].addEventListener('input', function()
    {
        let sektime = Ran2[s].value;
        audio2.currentTime = sektime;
        count_song2[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu2 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu2.length; i++)
{
    if(i != 2){
    menu2[i].addEventListener('click', function()
    {
        audio2.pause();
        ButtonStop22[s].style.display='none';
        ButtonPlayStop2[s].style.display='block';
        Ran2[s].value = 0;
    });}
}
}


/////////////////////////////// الملف الخاص بشيلات ام العريس ///////////////////////////////////////////////////
{
    ////////////////////////////////////// الملف الخاص بقائمة شيلات ام العريس ///////////////////////////////////////
// Array of song tracks4
let tracks4 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic4 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop4 = document.querySelectorAll('#musics-4 .ButtonPlayStop');
let PlayStopImg4 = document.querySelectorAll('#musics-4 #PlayStopImg');
let ButtonStop4 = document.querySelectorAll('#musics-4 .ButtonStop');
let ButtonStop44 = document.querySelectorAll('#musics-4 .ButtonStop1');
let Rang4 = document.querySelectorAll('#musics-4 #Range');
let musicTitle4 = document.querySelectorAll('#musics-4 #musicTitle');
let whatsapp4 = document.querySelectorAll('#musics-4 #whatsapp');
let count_rang4 = document.querySelectorAll('#musics-4 #count_rang');
let audioElement4 = document.getElementsByTagName('audio');

var audio4 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop4.length; i++) 
{
    ButtonPlayStop4[i].addEventListener('click', function()
     {
        ButtonPlayStop4[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop4[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop4.length; dd++)
        {
            if(dd != i)
            {
                Ran4[dd].value = 0;
                count_song4[dd].textContent = '00:00'; 
            }           
            ButtonStop44[dd].style.display='none';
            ButtonPlayStop4[dd].style.display='block';
            ButtonPlayStop4[dd].querySelector('img#PlayStopImg').src=pic4[1];
        }           
        let MusicName = ButtonPlayStop4[i].getAttribute('data-music');
        for(let j = 0; j < tracks4.length; j++)
        {
            if(MusicName == tracks4[j].path)
            {
                audio4.src = tracks4[i].path;
                audio4.currentTime = Ran4[i].value;
                audio4.play();
                ButtonStop44[i].style.display='block';
                ButtonPlayStop4[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop44.length; i++) 
{
    ButtonStop44[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop44.length; y++)
        {
            let ButtonStopName = ButtonStop44[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop44.length; d++)
            {
                if(ButtonStopName == tracks4[y].path)
                {
                    audio4.pause();
                    ButtonStop44[i].style.display='none';
                    ButtonPlayStop4[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio4.addEventListener('ended', function()
{
    Ran4[s].value = 0;
    count_song4[s].textContent = '00:00'; 
    ButtonStop44[s].style.display='none';
    ButtonPlayStop4[s].style.display='block';
});


////////////////////////////////////////////////////////
let music4 = document.querySelectorAll('#musics-4 .music');
let Ran4 = document.querySelectorAll('#musics-4 .Range');
let range_conut4 = document.querySelectorAll('#musics-4 .range_conut');
let count_song4 = document.querySelectorAll('#musics-4 .count_song');

for(let i = 0; i < ButtonPlayStop4; i++)
{
    Ran4[i] = music4[i].querySelector('input#Rang');
    count_song4[i] = range_conut4[i].querySelector('small#count_song');
}
////////////////////////////////

audio4.addEventListener('loadedmetadata', function()
{
    let duration = audio4.duration;
    Ran4[s].max =  duration;
    count_song4[s].textContent = formtTime(duration);
});

audio4.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio4.currentTime;
    Ran4[s].value = currentTimeValue;
    count_song4[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran4.length; i++)
{
    Ran4[i].addEventListener('input', function()
    {
        let sektime = Ran4[s].value;
        audio4.currentTime = sektime;
        count_song4[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu4 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu4.length; i++)
{
    if(i != 3){
    menu4[i].addEventListener('click', function()
    {
        audio4.pause();
        ButtonStop44[s].style.display='none';
        ButtonPlayStop4[s].style.display='block';
        Ran4[s].value = 0;
    });}
}
}


////////////////////////////////////// الملف الخاص بقائمة شيلات المواليد ///////////////////////////////////////
{
////////////////////////////////////// الملف الخاص بقائمة شيلات المواليد ///////////////////////////////////////
// Array of song tracks5
let tracks5 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic4 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop4 = document.querySelectorAll('#musics-5 .ButtonPlayStop');
let PlayStopImg4 = document.querySelectorAll('#musics-5 #PlayStopImg');
let ButtonStop4 = document.querySelectorAll('#musics-5 .ButtonStop');
let ButtonStop44 = document.querySelectorAll('#musics-5 .ButtonStop1');
let Rang4 = document.querySelectorAll('#musics-5 #Range');
let musicTitle4 = document.querySelectorAll('#musics-5 #musicTitle');
let whatsapp4 = document.querySelectorAll('#musics-5 #whatsapp');
let count_rang4 = document.querySelectorAll('#musics-5 #count_rang');
let audioElement4 = document.getElementsByTagName('audio');

var audio5 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop4.length; i++) 
{
    ButtonPlayStop4[i].addEventListener('click', function()
     {
        ButtonPlayStop4[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop4[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop4.length; dd++)
        {
            if(dd != i)
            {
                Ran4[dd].value = 0;
                count_song4[dd].textContent = '00:00'; 
            }           
            ButtonStop44[dd].style.display='none';
            ButtonPlayStop4[dd].style.display='block';
            ButtonPlayStop4[dd].querySelector('img#PlayStopImg').src=pic4[1];
        }           
        let MusicName = ButtonPlayStop4[i].getAttribute('data-music');
        for(let j = 0; j < tracks5.length; j++)
        {
            if(MusicName == tracks5[j].path)
            {
                audio5.src = tracks5[i].path;
                audio5.currentTime = Ran4[i].value;
                audio5.play();
                ButtonStop44[i].style.display='block';
                ButtonPlayStop4[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop44.length; i++) 
{
    ButtonStop44[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop44.length; y++)
        {
            let ButtonStopName = ButtonStop44[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop44.length; d++)
            {
                if(ButtonStopName == tracks5[y].path)
                {
                    audio5.pause();
                    ButtonStop44[i].style.display='none';
                    ButtonPlayStop4[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio5.addEventListener('ended', function()
{
    Ran4[s].value = 0;
    count_song4[s].textContent = '00:00'; 
    ButtonStop44[s].style.display='none';
    ButtonPlayStop4[s].style.display='block';
});


////////////////////////////////////////////////////////
let music4 = document.querySelectorAll('#musics-5 .music');
let Ran4 = document.querySelectorAll('#musics-5 .Range');
let range_conut4 = document.querySelectorAll('#musics-5 .range_conut');
let count_song4 = document.querySelectorAll('#musics-5 .count_song');

for(let i = 0; i < ButtonPlayStop4; i++)
{
    Ran4[i] = music4[i].querySelector('input#Rang');
    count_song4[i] = range_conut4[i].querySelector('small#count_song');
}
////////////////////////////////

audio5.addEventListener('loadedmetadata', function()
{
    let duration = audio5.duration;
    Ran4[s].max =  duration;
    count_song4[s].textContent = formtTime(duration);
});

audio5.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio5.currentTime;
    Ran4[s].value = currentTimeValue;
    count_song4[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran4.length; i++)
{
    Ran4[i].addEventListener('input', function()
    {
        let sektime = Ran4[s].value;
        audio5.currentTime = sektime;
        count_song4[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu4 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu4.length; i++)
{
    if(i != 4){
    menu4[i].addEventListener('click', function()
    {
        audio5.pause();
        ButtonStop44[s].style.display='none';
        ButtonPlayStop4[s].style.display='block';
        Ran4[s].value = 0;
    });}
}
}


////////////////////////////////////// الملف الخاص بقائمة شيلات تخرج ///////////////////////////////////////
{
////////////////////////////////////// الملف الخاص بقائمة شيلات تخرج ///////////////////////////////////////
// Array of song tracks5
let tracks5 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic4 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop4 = document.querySelectorAll('#musics-6 .ButtonPlayStop');
let PlayStopImg4 = document.querySelectorAll('#musics-6 #PlayStopImg');
let ButtonStop4 = document.querySelectorAll('#musics-6 .ButtonStop');
let ButtonStop44 = document.querySelectorAll('#musics-6 .ButtonStop1');
let Rang4 = document.querySelectorAll('#musics-6 #Range');
let musicTitle4 = document.querySelectorAll('#musics-6 #musicTitle');
let whatsapp4 = document.querySelectorAll('#musics-6 #whatsapp');
let count_rang4 = document.querySelectorAll('#musics-6 #count_rang');
let audioElement4 = document.getElementsByTagName('audio');

var audio6 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop4.length; i++) 
{
    ButtonPlayStop4[i].addEventListener('click', function()
     {
        ButtonPlayStop4[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop4[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop4.length; dd++)
        {
            if(dd != i)
            {
                Ran4[dd].value = 0;
                count_song4[dd].textContent = '00:00'; 
            }           
            ButtonStop44[dd].style.display='none';
            ButtonPlayStop4[dd].style.display='block';
            ButtonPlayStop4[dd].querySelector('img#PlayStopImg').src=pic4[1];
        }           
        let MusicName = ButtonPlayStop4[i].getAttribute('data-music');
        for(let j = 0; j < tracks5.length; j++)
        {
            if(MusicName == tracks5[j].path)
            {
                audio6.src = tracks5[i].path;
                audio6.currentTime = Ran4[i].value;
                audio6.play();
                ButtonStop44[i].style.display='block';
                ButtonPlayStop4[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop44.length; i++) 
{
    ButtonStop44[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop44.length; y++)
        {
            let ButtonStopName = ButtonStop44[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop44.length; d++)
            {
                if(ButtonStopName == tracks5[y].path)
                {
                    audio6.pause();
                    ButtonStop44[i].style.display='none';
                    ButtonPlayStop4[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio6.addEventListener('ended', function()
{
    Ran4[s].value = 0;
    count_song4[s].textContent = '00:00'; 
    ButtonStop44[s].style.display='none';
    ButtonPlayStop4[s].style.display='block';
});


////////////////////////////////////////////////////////
let music4 = document.querySelectorAll('#musics-6 .music');
let Ran4 = document.querySelectorAll('#musics-6 .Range');
let range_conut4 = document.querySelectorAll('#musics-6 .range_conut');
let count_song4 = document.querySelectorAll('#musics-6 .count_song');

for(let i = 0; i < ButtonPlayStop4; i++)
{
    Ran4[i] = music4[i].querySelector('input#Rang');
    count_song4[i] = range_conut4[i].querySelector('small#count_song');
}
////////////////////////////////

audio6.addEventListener('loadedmetadata', function()
{
    let duration = audio6.duration;
    Ran4[s].max =  duration;
    count_song4[s].textContent = formtTime(duration);
});

audio6.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio6.currentTime;
    Ran4[s].value = currentTimeValue;
    count_song4[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran4.length; i++)
{
    Ran4[i].addEventListener('input', function()
    {
        let sektime = Ran4[s].value;
        audio6.currentTime = sektime;
        count_song4[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu4 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu4.length; i++)
{
    if(i != 5){
    menu4[i].addEventListener('click', function()
    {
        audio6.pause();
        ButtonStop44[s].style.display='none';
        ButtonPlayStop4[s].style.display='block';
        Ran4[s].value = 0;
    });}
}
}




////////////////////////////////////// الملف الخاص بقائمة باجمل زفات ///////////////////////////////////////
{
////////////////////////////////////// الملف الخاص بقائمة باجمل زفات ///////////////////////////////////////
// Array of song tracks5
let tracks5 = [
    {'id':'music1', 'title':'شيلة ام العريس جديدة 2023', 'path':'a.mp3'},
    {'id':'music2', 'title':'شيلة عروس باسم سحر 2023', 'path':'a2.mp3'},
    {'id':'music3', 'title':'شيلة السلام العسكري 2023', 'path':'a3.mp3'}
];

let pic4 = [ 'stop.png', 'a11.png' ];

//let songs = document.getElementById('');
let ButtonPlayStop4 = document.querySelectorAll('#musics-7 .ButtonPlayStop');
let PlayStopImg4 = document.querySelectorAll('#musics-7 #PlayStopImg');
let ButtonStop4 = document.querySelectorAll('#musics-7 .ButtonStop');
let ButtonStop44 = document.querySelectorAll('#musics-7 .ButtonStop1');
let Rang4 = document.querySelectorAll('#musics-7 #Range');
let musicTitle4 = document.querySelectorAll('#musics-7 #musicTitle');
let whatsapp4 = document.querySelectorAll('#musics-7 #whatsapp');
let count_rang4 = document.querySelectorAll('#musics-7 #count_rang');
let audioElement4 = document.getElementsByTagName('audio');

var audio7 = new Audio();


var s = 0;
for (let i = 0; i < ButtonPlayStop4.length; i++) 
{
    ButtonPlayStop4[i].addEventListener('click', function()
     {
        ButtonPlayStop4[s].parentElement.parentElement.style.backgroundColor='#f9ced5';
        ButtonPlayStop4[i].parentElement.parentElement.style.backgroundColor='#ffeef1';
        s = i;
        for(let dd = 0; dd < ButtonStop4.length; dd++)
        {
            if(dd != i)
            {
                Ran4[dd].value = 0;
                count_song4[dd].textContent = '00:00'; 
            }           
            ButtonStop44[dd].style.display='none';
            ButtonPlayStop4[dd].style.display='block';
            ButtonPlayStop4[dd].querySelector('img#PlayStopImg').src=pic4[1];
        }           
        let MusicName = ButtonPlayStop4[i].getAttribute('data-music');
        for(let j = 0; j < tracks5.length; j++)
        {
            if(MusicName == tracks5[j].path)
            {
                audio7.src = tracks5[i].path;
                audio7.currentTime = Ran4[i].value;
                audio7.play();
                ButtonStop44[i].style.display='block';
                ButtonPlayStop4[i].style.display='none';
                return;
            }
        }
    });
}

///////////////////////////

for (let i = 0; i < ButtonStop44.length; i++) 
{
    ButtonStop44[i].addEventListener('click', function()
     {
        for(let y = 0; y < ButtonStop44.length; y++)
        {
            let ButtonStopName = ButtonStop44[y].getAttribute('data-stop');
            for(let d = 0; d < ButtonStop44.length; d++)
            {
                if(ButtonStopName == tracks5[y].path)
                {
                    audio7.pause();
                    ButtonStop44[i].style.display='none';
                    ButtonPlayStop4[i].style.display='block';
                }
            }
        }
    });
}
////////////////////////////////////////////////////////

audio7.addEventListener('ended', function()
{
    Ran4[s].value = 0;
    count_song4[s].textContent = '00:00'; 
    ButtonStop44[s].style.display='none';
    ButtonPlayStop4[s].style.display='block';
});


////////////////////////////////////////////////////////
let music4 = document.querySelectorAll('#musics-7 .music');
let Ran4 = document.querySelectorAll('#musics-7 .Range');
let range_conut4 = document.querySelectorAll('#musics-7 .range_conut');
let count_song4 = document.querySelectorAll('#musics-7 .count_song');

for(let i = 0; i < ButtonPlayStop4; i++)
{
    Ran4[i] = music4[i].querySelector('input#Rang');
    count_song4[i] = range_conut4[i].querySelector('small#count_song');
}
////////////////////////////////

audio7.addEventListener('loadedmetadata', function()
{
    let duration = audio7.duration;
    Ran4[s].max =  duration;
    count_song4[s].textContent = formtTime(duration);
});

audio7.addEventListener('timeupdate', function()
{
    let currentTimeValue = audio7.currentTime;
    Ran4[s].value = currentTimeValue;
    count_song4[s].textContent = formtTime(currentTimeValue);
});
for(i = 0; i < Ran4.length; i++)
{
    Ran4[i].addEventListener('input', function()
    {
        let sektime = Ran4[s].value;
        audio7.currentTime = sektime;
        count_song4[s].textContent = formtTime(sektime);
    });
}

function formtTime(time)
{
    let min = Math.floor(time/60);
    let sec = Math.floor(time%60).toString().padStart(2, '0');
    return min + ':' + sec;
}


//////////////// ايقاف الصوت عند الانتقال الى قائمة اخرى
let menu4 = document.getElementsByClassName('menu-item');
for(i = 0; i < menu4.length; i++)
{
    if(i != 5){
    menu4[i].addEventListener('click', function()
    {
        audio7.pause();
        ButtonStop44[s].style.display='none';
        ButtonPlayStop4[s].style.display='block';
        Ran4[s].value = 0;
    });}
}
}

