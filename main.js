var review;

function data(){
	var review=document.querySelector("#review").value;
  var name=document.querySelector("#name").value;
	if(review==""){
		document.getElementById("review").style.border="1px solid red";
	} else if(name==""){
    document.getElementById("name").style.border="1px solid red";
  } else {
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

	// var db;
	request = indexedDB.open("Reviews", 1);

	request.onupgradeneeded = function(e) {
    var dbHandler = e.target.result;
    storeDB = dbHandler.createObjectStore("productReviews", {keyPath: "id", autoIncrement:true});
	console.log("upgraded");
}


request.onerror = function(event) {
    // Do something with request.errorCode!
    console.log("error " + event);
    alert("Why didn't you allow my web app to use IndexedDB?!");
  };


  request.onsuccess = function(event) {
    var dbHandler = event.target.result;
    transaction = dbHandler.transaction(["productReviews"], 'readwrite'),
      storeDB = transaction.objectStore('productReviews');
storeDB.put({
      proid: param[i],
      name:name,
      review:review
    });
    // Do something with request.result!
    alert("Your review was submitted successfully. Thank you....!");
    location.reload();
  };

}
}