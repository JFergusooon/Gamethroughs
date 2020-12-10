const contentmessage1 = document.getElementById('ContentMessage1');
const contentmessage2 = document.getElementById('ContentMessage2');
const contentmessage3 = document.getElementById('ContentMessage3');
const contentboxen= document.getElementById('Contentbox');
const formtypeofContent= document.getElementById('typeOfContent');
const typesubmit= document.getElementById('subtype');
const submitcontent= document.getElementById('submitContent');
const contentmessage4 = document.getElementById('ContentMessage4');
const contentmessage5 = document.getElementById('ContentMessage5');
const contentmessage6 = document.getElementById('ContentMessage6');
const contentmessage7 = document.getElementById('ContentMessage7');
const contentmessage8 = document.getElementById('ContentMessage8');
const contentmessage9 = document.getElementById('ContentMessage9');
const contentmessage10 = document.getElementById('ContentMessage10');
const contentmessage11 = document.getElementById('ContentMessage11');
const contentmessage12 = document.getElementById('ContentMessage12');
const contentboxen2= document.getElementById('Contentbox2');
const contentboxen3= document.getElementById('Contentbox3');
const contentboxen4= document.getElementById('Contentbox4');
const typesubmit2= document.getElementById('subtype2');
const typesubmit3= document.getElementById('subtype3');
const typesubmit4= document.getElementById('subtype4');
const submitcontent2= document.getElementById('submitContent2');
const submitcontent3= document.getElementById('submitContent3');
const submitcontent4= document.getElementById('submitContent4');
const formtypeofContent2= document.getElementById('typeOfContent2');
const formtypeofContent3= document.getElementById('typeOfContent3');
const formtypeofContent4= document.getElementById('typeOfContent4');






contentmessage1.style.display = 'none';
contentmessage2.style.display = 'none';
contentmessage3.style.display = 'none';
contentmessage4.style.display = 'none';
contentmessage5.style.display = 'none';
contentmessage6.style.display = 'none';
contentmessage7.style.display = 'none';
contentmessage8.style.display = 'none';
contentmessage9.style.display = 'none';
contentmessage10.style.display = 'none';
contentmessage11.style.display = 'none';
contentmessage12.style.display = 'none';
contentboxen2.style.display ='none';
contentboxen3.style.display ='none';
contentboxen4.style.display ='none';
typesubmit2.style.display ='none';
typesubmit3.style.display ='none';
typesubmit4.style.display ='none';
submitcontent2.style.display ='none';
submitcontent3.style.display ='none';
submitcontent4.style.display ='none';
formtypeofContent2.style.display ='none';
formtypeofContent3.style.display ='none';
formtypeofContent4.style.display ='none';


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
            break;
        
    }
    
}
function shownextfield(){
    formtypeofContent2.style.display ='inline';
}
function shownextfield2(){
    formtypeofContent3.style.display ='inline';
}
function shownextfield3(){
    formtypeofContent4.style.display ='inline';
}
function AddElements1(){
    let formcontentV = document.getElementById('userChoise2').value;
    switch(formcontentV){
        case 'text':
            contentmessage4.style.display = 'inline';
            contentboxen2.style.display = 'inline';
            break;
        case 'image':
            contentmessage5.style.display ='inline';
            contentboxen2.style.display ='inline';
            break;
        case 'Video':
            contentmessage6.style.display = 'inline';
            contentboxen2.style.display = 'inline';
            break;
        
    }
    function AddElements2(){
        let formcontentV = document.getElementById('userChoise3').value;
        switch(formcontentV){
            case 'text':
                contentmessage7.style.display = 'inline';
                contentboxen3.style.display = 'inline';
                break;
            case 'image':
                contentmessage8.style.display ='inline';
                contentboxen3.style.display ='inline';
                break;
            case 'Video':
                contentmessage9.style.display = 'inline';
                contentboxen3.style.display = 'inline';
                break;
            
        }
    }
    function AddElements3(){
        let formcontentV = document.getElementById('userChoise4').value;
        switch(formcontentV){
            case 'text':
                contentmessage10.style.display = 'inline';
                contentboxen3.style.display = 'inline';
                break;
            case 'image':
                contentmessage11.style.display ='inline';
                contentboxen3.style.display ='inline';
                break;
            case 'Video':
                contentmessage12.style.display = 'inline';
                contentboxen3.style.display = 'inline';
                break;
            
        }
    }
    function submitInformation(){
        
    }




    // var formn = document.createElement('form');
    // var lable = document.createElement('label');
    // var texting = document.createTextNode('Select type');
    // var selecttag= document.createElement('select'); 
    // var option1= document.createElement('option');
    // var opAddon = document.createAttribute('value');
    // var valee = 'text'; 
    // var option2= document.createElement('option');
    // var OpAddon = document.createAttribute('value');
    // var valeet = document.createTextNode('Image');
    // var option3= document.createElement('option');
    // var OPAddon = document.createAttribute('value');
    // var valeeter = document.createTextNode('Video'); 
    // var subbutton = document.createElement('input');
    // var typeofB= document.createAttribute('type')
    // var elemnteplace = document.getElementById('contenContent')
    

    // elemnteplace.appendChild(
    //     formn.appendChild(
    //         lable,
    //         selecttag.appendChild(option1.setAttributeNode(opAddon)),
    //         selecttag.appendChild(option2),
    //         selecttag.appendChild(option3),
    //         subbutton))

}


