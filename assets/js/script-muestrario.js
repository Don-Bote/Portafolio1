var tareas = [
    { tarea: "Pintar el pasto" },
    { tarea: "Regar el perro" },
    { tarea: "Paserar la casa" }
]

llenarTabla();

function agregarTarea(){
    let tarea = document.getElementById('nuevaTarea').value;
    tareas.push({ tarea: "" + tarea + "" });
    document.getElementById("formulariooo").reset();
    alert("Se ha guardado la tarea:  " + tarea);
    document.getElementById('formulario').style.display = "none";
    llenarTabla();
}

function abrirFormulario(){
    if(document.getElementById('formulario').style.display == "none"){
    document.getElementById('formulario').style.display = "block";
    }else{
    document.getElementById('formulario').style.display = "none";
    }
}

function armarFila(fila, i){
    return "<tr><td>"+ fila +"</td><td> <button type=\"button\" class=\"btn btn-danger\" onclick=\"eliminarTarea("+ i +")\">Finalizar</button> </td></tr>";
}

function llenarTabla(){
    let tablacompleta = "";
    for(let i=0;i<tareas.length;i++){
        tablacompleta = tablacompleta + armarFila(tareas[i].tarea, i);
    }
    document.getElementById('cuerpo-tabla').innerHTML = tablacompleta;
}

function eliminarTarea(i){
    tareas.splice(i,1);
    llenarTabla();
}

$("#muestrario6text1").mouseenter(function(){
    $("#muestrario6text2").toggle();
});

$("#muestrario6text1").mouseleave(function(){
    $("#muestrario6text2").toggle();
});

$("#muestrario6img").click(function(){
    $("#muestrario6img").css("100%");
    $('#muestrario6img').css({'width': '100%'});
});

$("#muestrario6img").mouseleave(function(){
    $('#muestrario6img').css({'width': '20%'});
});

$("#muestrario6caja3").dblclick(function(){
    $('#muestrario6caja3').css({'fontSize' : '200%'});
});
$("#muestrario6caja3").click(function(){
    $('#muestrario6caja3').css({'fontSize' : '100%'});
});