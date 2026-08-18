// BOTÃO PARA VOLTAR AO TOPO //

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        btnTopo.style.display = "block";

    } else {
        btnTopo.style.display = "none";

    }

});


function voltarAoTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// CERTIFICADO //

function abrirCertificado() {
    alert("Aqui vamos colocar o seu certificado!");
}