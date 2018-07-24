var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var myImage = document.getElementById("myImage");

function submitClick() {

    var firebaseRef = firebase.database().ref();

    var messageText = mainText.value;

    firebaseRef.push("Text").set(messageText);

}

var fileRef = firebase.storage().ref('20171110_100240_101.jpg');
fileRef.getDownloadURL().then((url)=>{
    myImage.src = url;//assuming you have an <img /> tag in your html with id "myImage"
});

