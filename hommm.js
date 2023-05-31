var stdNo = 0;
    var tbody = document.getElementById('tbody1');

    function AddItemsToTable(name ,roll ,sec,gen,lati,long){
      let trow = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      let td6 = document.createElement('td');
      let td7 = document.createElement('td');


      console.log("Hello, World!");




      td1.innerHTML = ++stdNo;
      td2.innerHTML = name;
      td3.innerHTML = roll;
      td4.innerHTML = sec;
      td5.innerHTML = gen;
      td6.innerHTML = lati;
      td7.innerHTML = long;

      trow.appendChild(td1)
      trow.appendChild(td2)
      trow.appendChild(td3)
      trow.appendChild(td4)
      trow.appendChild(td5)
      trow.appendChild(td6)
      trow.appendChild(td7)

      tbody.appendChild(trow);
    }
    function AddAllItemsToTable(TheStudent){
      stdNo=0;
      tbody.innerHTML="";
      TheStudent.forEach(element =>{
        AddItemsToTable(element.name,element.emailid,element.Phone_Number,element.Facebook,element.latitude,element.longitude);
      });
    }
    

    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
 
    const firebaseConfig = {
      apiKey: "AIzaSyD0asHo0qDj5zYplavVzFUsNWL1Da1e1c8",
      authDomain: "sendinfo-9f1cb.firebaseapp.com",
      databaseURL: "https://sendinfo-9f1cb-default-rtdb.firebaseio.com",
      projectId: "sendinfo-9f1cb",
      storageBucket: "sendinfo-9f1cb.appspot.com",
      messagingSenderId: "842821060420",
      appId: "1:842821060420:web:47008a44a86e78be69b911"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    import {getDatabase,ref,child,onValue, get}
    from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js"
    
    
    const db=getDatabase();

    function GetAllDataOnce(){
      const dbRef = ref(db);

      get(child(dbRef,"contactForm"))
      .then((snapshot)=>{
        var students=[];
        
        snapshot.forEach(childSnapshot => {
          students.push(childSnapshot.val())
        });
        AddAllItemsToTable(students);
      })
    }




    function GetAllDatatime(){
      
      const dbRef = ref(db,"contactForm");
      
      onValue(dbRef,(snapshot)=>{
        var students=[];
      
        snapshot.forEach(childSnapshot => {
          students.push(childSnapshot.val())
  });
      AddAllItemsToTable(students);
 })
    }
