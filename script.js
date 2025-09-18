const messagesEl=document.getElementById('messages');
const textInput=document.getElementById('text');
const senderSel=document.getElementById('sender');
const sendBtn=document.getElementById('send');
const randBtn=document.getElementById('random');
const toggleBtn=document.getElementById('toggleMode');

const samples=[
  "Hari ini indah banget ☀️",
  "Lagi apa nih?",
  "Kamu sudah makan?",
  "Nanti malam nonton yuk!",
  "Semangat terus ya 💪",
  "Aku kangen deh 😅"
];

function now(){
  const d=new Date();
  return d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}
function addMessage(text,who){
  const div=document.createElement('div');
  div.className='bubble '+(who==='me'?'me':'them');
  div.innerHTML=`<div>${escape(text)}</div><div class="time">${now()}</div>`;
  messagesEl.appendChild(div);
  messagesEl.scrollTop=messagesEl.scrollHeight;
}
function escape(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

sendBtn.onclick=()=>{
  const t=textInput.value.trim();
  if(!t) return;
  addMessage(t,senderSel.value);
  textInput.value='';
};
textInput.onkeydown=(e)=>{
  if(e.key==='Enter') sendBtn.click();
};
randBtn.onclick=()=>{
  const t=samples[Math.floor(Math.random()*samples.length)];
  const who=Math.random()>0.5?'me':'them';
  addMessage(t,who);
};

toggleBtn.onclick=()=>{
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  toggleBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
};

// isi awal
addMessage("Halo, ini chat demo pertama!","them");
addMessage("Sekarang bisa pilih Light/Dark Mode 🌗","me");
