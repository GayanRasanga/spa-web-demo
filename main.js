function hideContent(page) {
    //document.getElementById('seles').style.display="none";
   // document.getElementById('mainContainer').innerHTML="";

   switch (page) {
    case 'home':
        document.getElementById('home').style.display="block";
        document.getElementById('about').style.display="none";
        document.getElementById('seles').style.display="none";
        document.getElementById('contact').style.display="none";
        break;
        case 'about':
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="block";
        document.getElementById('seles').style.display="none";
        document.getElementById('contact').style.display="none";
        break;
        case 'selse':
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="none";
        document.getElementById('seles').style.display="block";
        document.getElementById('contact').style.display="none";
        break;
        case 'contact':
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display="none";
        document.getElementById('seles').style.display="none";
        document.getElementById('contact').style.display="block";
        break;
    default:
        document.getElementById('home').style.display="none";
        break;
   }

  

   
}