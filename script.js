const webhook = "https://discord.com/api/webhooks/1514432539245285456/Jwbtj1FwM4jYLkobq7po6wKFsF6kt-aRzuuxX13qTKjp1Xyy9M0U4x1DSCIjnEcMTcue";

document.getElementById("pedidoForm")
.addEventListener("submit", async (e)=>{

e.preventDefault();

const data = {
embeds:[{
title:"👤 Procurando Cliente",
color:10038562,

fields:[
{
name:"🎬 Editor",
value:document.getElementById("nome").value
},
{
name:"💬 Discord",
value:document.getElementById("discord").value
},
{
name:"🎥 Especialidade",
value:document.getElementById("tipo").value
},
{
name:"💰 Valor",
value:document.getElementById("orcamento").value || "Não informado"
},
{
name:"📝 Detalhes",
value:document.getElementById("detalhes").value || "Nenhum"
}
]
}]
};

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

alert("Pedido enviado!");
});acao
},
{
name: "📅 Prazo",
value: prazo
},
{
name: "💰 Orçamento",
value: orcamento
},
{
name: "📝 Detalhes",
value: detalhes || "Nenhum"
}
]
}]
};

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

alert("Pedido enviado!");
});