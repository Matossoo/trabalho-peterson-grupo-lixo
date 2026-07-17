const API = "http://localhost:3001/filmes";

listar();

function listar(){

    fetch(API)

    .then(res=>res.json())

    .then(dados=>{

        let tabela="";

        dados.forEach(f=>{

            tabela+=`

            <tr>

            <td>${f.id}</td>

            <td>${f.titulo}</td>

            <td>${f.diretor}</td>

            <td>${f.genero}</td>

            <td>${f.ano_lancamento}</td>

            <td>

            <button class="btn btn-danger btn-sm"

            onclick="excluir(${f.id})">

            Excluir

            </button>

            </td>

            </tr>

            `;

        });

        document.getElementById("tabela").innerHTML=tabela;

    });

}

function salvar(){

    const filme={

        titulo:document.getElementById("titulo").value,

        sinopse:document.getElementById("sinopse").value,

        ano_lancamento:document.getElementById("ano").value,

        duracao_min:document.getElementById("duracao").value,

        classificacao:document.getElementById("classificacao").value,

        poster:null,

        diretor_id:document.getElementById("diretor").value,

        genero_id:document.getElementById("genero").value

    };

    fetch(API,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(filme)

    })

    .then(()=>{

        alert("Filme cadastrado!");

        listar();

    });

}

function excluir(id){

    if(confirm("Deseja excluir este filme?")){

        fetch(API+"/"+id,{

            method:"DELETE"

        })

        .then(()=>listar());

    }

}