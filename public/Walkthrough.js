const contentmessage1 = document.getElementById('ContentMessage1');
const contentmessage2 = document.getElementById('ContentMessage2');
const contentmessage3 = document.getElementById('ContentMessage3');
const contentboxen= document.getElementById('Contentbox');
const formtypeofContent= document.getElementById('typeOfContent');
const typesubmit= document.getElementById('subtype')





contentmessage1.style.display = 'none';
contentmessage2.style.display = 'none';
contentmessage3.style.display = 'none';
contentboxen.style.display ='none';
typesubmit.style.width = '25px';
typesubmit.style.height ='20px';

function SelectedContent(){
    let formcontentV = document.getElementById('userChoise').value;
    switch(formcontentV){
        case 'text':
            contentmessage1.style.display = 'inline';
            contentboxen.style.display = 'inline';
            break;
        case 'image':
            contentmessage2.style.display ='inline';
            contentboxen.style.display ='inline';
            break;
        case 'Video':
            contentmessage3.style.display = 'inline';
            contentboxen.style.display = 'inline';
    }
    
}


