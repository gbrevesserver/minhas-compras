import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,setPersistence,browserLocalPersistence} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import {getFirestore,doc,onSnapshot,setDoc} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const firebaseConfig = {apiKey:"AIzaSyBJQI5osSZU0uIHAJhy55Wns0IHfpL-2UY",authDomain:"compras-familia-84c35.firebaseapp.com",projectId:"compras-familia-84c35",storageBucket:"compras-familia-84c35.firebasestorage.app",messagingSenderId:"566346973763",appId:"1:566346973763:web:551d1a2be2c03844444af6"};
const app=initializeApp(firebaseConfig), auth=getAuth(app), db=getFirestore(app);
const status=document.getElementById('nuvem-status'), login=document.getElementById('nuvem-entrar'), sair=document.getElementById('nuvem-sair'), bloqueio=document.getElementById('nuvem-bloqueio');
const OWNER='gbreves.server@gmail.com';
let liberado=false, unsubscribe=[], filas=new Map();
function limpar(){liberado=false;window.firebaseSalvar=null;unsubscribe.forEach(f=>f());unsubscribe=[];bloqueio.style.display='flex';}
function mensagem(t){status.textContent=t;}
login.onclick=async()=>{try{mensagem('Abrindo login Google…');await setPersistence(auth,browserLocalPersistence);await signInWithPopup(auth,new GoogleAuthProvider());}catch(e){mensagem('Falha no login: '+e.code);}};
sair.onclick=()=>signOut(auth);
function acompanhar(ref,tipo){return new Promise((resolve,reject)=>{let primeiro=true;const stop=onSnapshot(ref,snap=>{if(snap.metadata.hasPendingWrites)return;const dado=snap.exists()?snap.data().valor:(tipo==='compras'?[]:{atual:[],historico:[],mercados:['Guanabara','Assaí Atacadista','Atacadão','Supermarket','Mundial','Prezunic','Dom Atacadista','Costa Azul'],selecionado:'Guanabara',catalogoExtra:[]});window.aplicarNuvem(tipo,dado);if(primeiro){primeiro=false;resolve();}},e=>{if(primeiro)reject(e);else{limpar();mensagem('Sem permissão ou conexão: '+e.message);}});unsubscribe.push(stop);});}
onAuthStateChanged(auth,async user=>{limpar();login.style.display=user?'none':'inline-block';sair.style.display=user?'inline-block':'none';if(!user){mensagem('Entre com sua conta Google para acessar os dados.');return;}
if(!user.email_verified){mensagem('Sua conta Google precisa ter e-mail verificado.');return;}
if(user.email.toLowerCase()!==OWNER){mensagem('Esta conta não é autorizada para o aplicativo Compras.');return;}
mensagem('Carregando seus dados da nuvem…');
const mercadoRef=doc(db,'familias','familia-principal','dados','supermercado');
const comprasRef=doc(db,'usuarios',user.uid,'dados','compras');
try{const refs=[acompanhar(mercadoRef,'mercado')];
refs.push(acompanhar(comprasRef,'compras'));
await Promise.all(refs);if(auth.currentUser?.uid!==user.uid)return;
window.firebaseSalvar=(chave,valor)=>{if(!liberado)return;const ref=chave==='minhas-compras-supermercado-v2'?mercadoRef:comprasRef;if(!ref)return;const id=ref.path;const anterior=filas.get(id)||Promise.resolve();const proxima=anterior.catch(()=>{}).then(()=>setDoc(ref,{valor,atualizadoEm:new Date().toISOString()}));filas.set(id,proxima);proxima.catch(e=>{limpar();mensagem('Não foi possível salvar na nuvem: '+e.message+' — atualize depois de corrigir.');});};
liberado=true;bloqueio.style.display='none';
}catch(e){limpar();mensagem('Falha ao carregar dados: '+e.message);}
});
