const firebaseConfig = {
    apiKey: "AIzaSyBM-Ql_5M493ZASM0_L2DsGsMbSDxXLYfs",
    authDomain: "portfolio-database-ff656.firebaseapp.com",
    databaseURL: "https://portfolio-database-ff656-default-rtdb.firebaseio.com",
    projectId: "portfolio-database-ff656",
    storageBucket: "portfolio-database-ff656.appspot.com",
    messagingSenderId: "897247371321",
    appId: "1:897247371321:web:24c34f7753892177e2ade8"
  };

  firebase.initializeApp(firebaseConfig);


  var PortfolioDB=firebase.database().ref("Portfolio");

  document.getElementById("Portfolio").addEventListener("submit",submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name=getElementVal('name');

    var emailid=getElementVal('emailid');

    var msgContent=getElementVal('msgContent');

    console.log(name,emailid,msgContent);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };