//inicializ la app firebase
import {initializeApp} from
 "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {getDatabase, ref, push, onValue, remove} from 
 "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// objeto con la base de datos base de datos
const appSettings= {
    databaseURL:
    "https://app-recordatorio-ae1f3-default-rtdb.firebaseio.com/"

}


//comunicacion enre base de datos y firebase
const app= initializeApp(appSettings);
const database= getDatabase(app);
//ref o crea  un obj en la DB6
const cosas_recorar= ref(database,"recordatorios")

//actualizar los datos en la paginatomar datos de la base
onValue(cosas_recorar,(snapshot)=>{
    if(snapshot.exists()){
        let recordatorios_guardados= Object.entries(snapshot.val())
        elementos.innerHTML=""
        //let fragmento= document.createDocumentFragment()
        recordatorios_guardados.forEach(element => {
            let keyId=element[0];
            let value = element[1]
            add_to_list(keyId, value);
            
        });
    }else{
        elementos.innerHTML= `<h2>no hay elementos</h2>`
    }
    
})

//console.log(app)
//caputra de elemento
const input_texto = document.getElementById("input-field");
const button_add= document.getElementById("add-button");
const elementos= document.getElementById("elementos")


//
//TAREA. PODER AGRAGAR A UN FRAGMETO EN LOS CASSOS QUE SEAN MUCHOS ELEMENTOS
function add_to_list(id, elemento) {
    let nelemento= document.createElement("div")
    nelemento.textContent= elemento;
    nelemento.setAttribute("id",id)
    nelemento.setAttribute("class","elemento")
    nelemento.addEventListener("click",()=>{
        let idevento= ref(database,`recordatorios/${id}`)
        remove(idevento)
    })
    elementos.append(nelemento);
          
}
function clearInput() {
    input_texto.value=""    
}

//console. log
button_add.addEventListener("click",()=>{
    //console.log("activo")
    let valor_input= input_texto.value
   
    push(cosas_recorar, valor_input)
    //add_to_list(valor_input);
    clearInput();
    //666console.log(valor_input, "agregando a la base")
    //console.log("activo")
}) 


/// base de datos
