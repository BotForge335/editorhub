const webhook =
"https://discord.com/api/webhooks/1514348407123087491/dQQqm_o0vnNrFZYnRrbaTb_OfKA1amPS1aiX2353WDnSe2egdF-wKc8SEqsXJqAzNbm2";

document.getElementById("pedidoForm")
.addEventListener("submit", async (e) => {

e.preventDefault();

const nome = document.getElementById("nome").value;
const discord = document.getElementById("discord").value;
const tipo = document.getElementById("tipo").value;
const duracao = document.getElementById("duracao").value;
const prazo = document.getElementById("prazo").value;
const orcamento = document.getElementById("orcamento").value;
const detalhes = document.getElementById("detalhes").value;

const data = {
embeds: [{
title: "📥 Novo Pedido",
color: 5793266,

fields: [
{
name: "👤 Cliente",
value: nome
},
{
name: "💬 Discord",
value: discord
},
{
name: "🎬 Tipo",
value: tipo
},
{
name: "⏱️ Duração",
value: duracao
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