// referências do DOM

const h2Valor  = document.getElementById('h2Valor');
const btnConsultar = document.getElementById('btnConsultar');

//lógica

const api = axios.create({
    baseURL: 'https://www.mercadobitcoin.net/api/BTC/ticker/'
});


async function consultarBTC(){
   const response = await api.get();
   console.log(response.data.ticker.high);
   lblBTC.innerHTML = response.data.ticker.high;
}

 btnConsultar.onclick = ()=>{
 consultarBTC();

 };
