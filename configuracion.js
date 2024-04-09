
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import {getFirestore,collection,addDoc,query,getDocs} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBE4WV-vxGTDqxOI3ckujzBJ-5rK3E3iNE",
    authDomain: "bdtics-7a92e.firebaseapp.com",
    projectId: "bdtics-7a92e",
    storageBucket: "bdtics-7a92e.appspot.com",
    messagingSenderId: "187744087098",
    appId: "1:187744087098:web:793a8131b1ea62c3699903"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);

  let botonenviar=document.getElementById("Btnenviar");
  let btnconsulta=document.getElementById("btnConsulta");
 const list=document.querySelector("ul");

  botonenviar.addEventListener("click",guardar);
  btnconsulta.addEventListener("click",Consultar);


  function guardar() {
    var peso = document.getElementById('peso').value;
    var talla = document.getElementById('talla').value;
  
    var imc = peso / (talla * talla);
  
    var resultadoElem = document.getElementById('resultado2');
    if (imc < 18.5) {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Bajo peso. Debes aumentar tu peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Adecuado. Tu peso está en un rango saludable.';
    } else if (imc >= 24.9 && imc < 29.9) {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Sobrepeso. Debes reducir tu peso.';
    } else if (imc >= 30.0 && imc < 34.9) {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 1. Debes reducir tu peso.';
    } else if (imc >= 35.0 && imc < 39.9) {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 2. Debes reducir tu peso.';
    } else {
      resultadoElem.textContent = 'Tu IMC es ' + imc.toFixed(2) + '. Estás en el rango de Obesidad grado 3. Debes reducir tu peso urgentemente.';
    }
  
    
    const docRef = addDoc(collection(db, "baseicm2"), {
      peso: peso,
      talla: talla,
      resultado: resultadoElem.textContent
    });
  
    alert("Almacenado correctamente");
    document.getElementById("peso").value = "";
    document.getElementById("talla").value = "";
    resultadoElem.textContent = "";
  }


  async function Consultar()
  {
    const consulta=query(collection(db,"baseicm2"));
    const query_consulta=await getDocs(consulta);

    query_consulta.forEach((doc)=>
    {
        console.log(doc.id, " =>", doc.data());
        console.log(doc.data().peso);
        console.log(doc.data().talla);
        console.log(doc.data().resultado);

        let html =`
            <div>${doc.data().peso} </div>
            <div>${doc.data().talla} </div>
            <div>${doc.data().resultado} </div>
        
        `;
         list.innerHTML +=html;

     });
  }


