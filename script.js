// Lista de músicas
  const musicas = [
    'img/musica1.mp3',
    'img/musica2.mp3',
    'img/musica3.mp3'
  ];

  let musicaAtual = 0;
  const player = document.getElementById('bgMusic');

  // Função para tocar a próxima música
  function tocarProxima() {
    musicaAtual++;
    if (musicaAtual >= musicas.length) musicaAtual = 0; // volta pro início
    player.src = musicas[musicaAtual];
    player.play();
  }

  // Começa tocando a primeira
  player.src = musicas[musicaAtual];
  player.play();

  // Quando uma música acabar, toca a próxima
  player.addEventListener('ended', tocarProxima);


/***** CONFIG: troque os links abaixo por suas imagens/vídeos (até 80) *****/
    const mediaItems = [
       {type:'video', url:'img/vidio04.mp4', title:'Vídeo 4 '},
      {type:'image', url:'img/foto1-jpg.jpg', title:'Foto 1'},
      {type:'image', url:'img/foto2-jpg.jpg', title:'Foto 2'},
      {type:'image', url:'img/foto3-jpg.jpg', title:'Foto 3'},
      {type:'image', url:'img/foto4-jpg.jpg', title:'Foto 4'},
      {type:'image', url:'img/foto5-jpg.jpg', title:'Foto 5'},
       {type:'video', url:'img/vidio01.mp4', title:'Vídeo 1 '},
      {type:'image', url:'img/foto6-jpg.jpg', title:'Foto 6'},
      {type:'image', url:'img/foto7-jpg.jpg', title:'Foto 7'},
      {type:'image', url:'img/foto8-jpg.jpg', title:'Foto 8'},
      {type:'image', url:'img/foto9-jpg.jpg', title:'Foto 9'},
      {type:'image', url:'img/foto10-jpg.jpg', title:'Foto 10'},
      {type:'image', url:'img/foto11-jpg.jpg', title:'Foto 11'},
      {type:'image', url:'img/foto12-jpg.jpg', title:'Foto 12'},
      {type:'image', url:'img/foto13-jpg.jpg', title:'Foto 13'},
      {type:'image', url:'img/foto14-jpg.jpg', title:'Foto 14'},
      {type:'image', url:'img/foto15-jpg.jpg', title:'Foto 15'},
      {type:'image', url:'img/foto61.jpg', title:'Foto 16'},
      {type:'image', url:'img/foto17-jpg.jpg', title:'Foto 17'},
      {type:'image', url:'img/foto18-jpg.jpg', title:'Foto 18'},
      {type:'image', url:'img/foto19-jpg.jpg', title:'Foto 19'},
      {type:'image', url:'img/foto20-jpg.jpg', title:'Foto 20'},
      {type:'image', url:'img/foto21-jpg.jpg', title:'Foto 21'},
      {type:'image', url:'img/foto22-jpg.jpg', title:'Foto 22'},
      {type:'image', url:'img/foto23-jpg.jpg', title:'Foto 23'},
      {type:'image', url:'img/foto24-jpg.jpg', title:'Foto 24'},
      {type:'image', url:'img/foto25-jpg.jpg', title:'Foto 25'},
      {type:'image', url:'img/foto26-jpg.jpg', title:'Foto 26'},
      {type:'image', url:'img/foto27-jpg.jpg', title:'Foto 27'},
      {type:'image', url:'img/foto28-jpg.jpg', title:'Foto 28'},
      {type:'image', url:'img/foto29-jpg.jpg', title:'Foto 29'},
      {type:'image', url:'img/foto30-jpg.jpg', title:'Foto 30'},
      {type:'image', url:'img/foto31-jpg.jpg', title:'Foto 31'},
      {type:'image', url:'img/foto43-jpg.jpg', title:'Foto 32'},
      {type:'video', url:'img/vidio02.mp4', title:'Vídeo 1 '},
      {type:'image', url:'img/foto33-jpg.jpg', title:'Foto 33'},
      {type:'image', url:'img/foto34-jpg.jpg', title:'Foto 34'},
      {type:'image', url:'img/foto35-jpg.jpg', title:'Foto 35'},
      {type:'image', url:'img/foto36-jpg.jpg', title:'Foto 36'},
      {type:'video', url:'img/vidio04.mp4', title:'Vídeo 2 '},
      {type:'image', url:'img/foto37-jpg.jpg', title:'Foto 37'},
      {type:'image', url:'img/foto38-jpg.jpg', title:'Foto 38'},
      {type:'image', url:'img/foto39-jpg.jpg', title:'Foto 39'},
      {type:'image', url:'img/foto40-jpg.jpg', title:'Foto 40'},
      {type:'video', url:'img/vidio05.mp4', title:'Vídeo 3 '},
      {type:'image', url:'img/foto41-jpg.jpg', title:'Foto 41'},
      {type:'video', url:'img/vidio01.mp4', title:'Vídeo 4 '},
      {type:'image', url:'img/foto42-jpg.jpg', title:'Foto 42'},
      {type:'image', url:'img/foto43-jpg.jpg', title:'Foto 43'},
      {type:'image', url:'img/foto44-jpg.jpg', title:'Foto 44'},
      {type:'image', url:'img/foto45-jpg.jpg', title:'Foto 45'},
      {type:'image', url:'img/foto46-jpg.jpg', title:'Foto 46'},
      {type:'image', url:'img/foto47-jpg.jpg', title:'Foto 47'},
      {type:'image', url:'img/foto48-jpg.jpg', title:'Foto 48'},
      {type:'image', url:'img/foto49-jpg.jpg', title:'Foto 49'},
      {type:'image', url:'img/foto50-jpg.jpg', title:'Foto 50'},
      {type:'image', url:'img/foto51.jpg', title:'Foto 51'},
      {type:'image', url:'img/foto52.jpg', title:'Foto 52'},
      {type:'image', url:'img/foto61.jpg', title:'Foto 53'},
       {type:'video', url:'img/vidio07.mp4', title:'Vídeo 7 '},
      {type:'image', url:'img/foto54.jpg', title:'Foto 54'},
      {type:'image', url:'img/foto62.jpg', title:'Foto 55'},
      {type:'image', url:'img/foto63.jpg', title:'Foto 56'},
      {type:'image', url:'img/foto64.jpg', title:'Foto 57'},
      {type:'image', url:'img/foto65.jpg', title:'Foto 58'},
      {type:'video', url:'img/vidio06.mp4', title:'Vídeo 5 '},
      {type:'video', url:'img/vidio03.mp4', title:'Vídeo 6 '},
    ];

    // A senha definida
    const ACCESS_PWD = 'amordepai';
    function toggleSenha() {
  const senhaInput = document.getElementById('senha');
  if (senhaInput.type === 'password') {
    senhaInput.type = 'text'; // mostra a senha
  } else {
    senhaInput.type = 'password'; // oculta novamente
  }
}

    // elementos
    const entryScreen = document.getElementById('entryScreen');
    const pwdInput = document.getElementById('pwdInput');
    const enterBtn = document.getElementById('enterBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const siteHeader = document.getElementById('siteHeader');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');

    // gallery elements
    const mainViewer = document.getElementById('mainViewer');
    const thumbs = document.getElementById('thumbs');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalTitle');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const playMusicBtn = document.getElementById('playMusicBtn');

    let currentIndex = 0;
    let autoInterval = null;
    const AUTO_DELAY = 3000; // 3s

    // render thumbnails
    function createThumb(item, idx){
      const el = document.createElement('div'); el.className='thumb';
      if(item.type==='image'){
        const img = document.createElement('img'); img.src=item.url; img.alt=item.title||('Foto '+(idx+1)); el.appendChild(img);
      } else {
        const vid = document.createElement('video'); vid.src=item.url; vid.muted=true; vid.playsInline=true; vid.preload='metadata'; el.appendChild(vid);
      }
      el.addEventListener('click', ()=>{ setActive(idx); openModal(idx); });
      return el;
    }

    function renderThumbs(){ thumbs.innerHTML=''; mediaItems.forEach((it,i)=>{ const t = createThumb(it,i); if(i===0) t.classList.add('active'); thumbs.appendChild(t); }); }

    function renderViewer(idx){
      const item = mediaItems[idx]; mainViewer.innerHTML='';
      if(item.type==='image'){
        const img = document.createElement('img'); img.src=item.url; img.alt=item.title||('Foto '+(idx+1)); mainViewer.appendChild(img);
      } else {
        const v = document.createElement('video'); v.src=item.url; v.controls=true; v.playsInline=true; v.style.maxHeight='100%'; mainViewer.appendChild(v);
      }
    }

    function setActive(idx){ currentIndex = idx; renderViewer(idx); [...thumbs.children].forEach((c,i)=> c.classList.toggle('active', i===idx)); }

    function openModal(idx){
      const item = mediaItems[idx]; modalBody.innerHTML=''; modalTitle.textContent = item.title || ('Mídia '+(idx+1));
      if(item.type==='image'){
        const img = document.createElement('img'); img.src=item.url; img.style.maxWidth='100%'; img.style.borderRadius='8px'; modalBody.appendChild(img);
      } else {
        const v = document.createElement('video'); v.src=item.url; v.controls=true; v.autoplay=true; v.playsInline=true; v.style.maxWidth='100%'; modalBody.appendChild(v);
      }
      stopAuto();
      modal.classList.add('open');
    }

    document.getElementById('closeModal').addEventListener('click', ()=>{ modal.classList.remove('open'); modalBody.innerHTML=''; startAuto(); });
    modal.addEventListener('click', (e)=>{ if(e.target===modal){ modal.classList.remove('open'); modalBody.innerHTML=''; startAuto(); } });

    prevBtn.addEventListener('click', ()=>{ setActive((currentIndex-1+mediaItems.length)%mediaItems.length); resetAuto(); });
    nextBtn.addEventListener('click', ()=>{ setActive((currentIndex+1)%mediaItems.length); resetAuto(); });

    // flip card
    document.getElementById('flipBtn').addEventListener('click', ()=> document.getElementById('tributeCard').classList.add('flipped'));
    document.getElementById('closeCardBtn').addEventListener('click', ()=> document.getElementById('tributeCard').classList.remove('flipped'));

    // music control
    playMusicBtn.addEventListener('click', ()=>{
      if(bgMusic.paused){ bgMusic.play().catch(()=>{ alert('Clique novamente para permitir a reprodução de música no navegador.'); }); playMusicBtn.textContent='Pausar música'; }
      else { bgMusic.pause(); playMusicBtn.textContent='Tocar música'; }
    });

    // download page
    document.getElementById('downloadBtn').addEventListener('click', (e)=>{ e.preventDefault(); const html = '<!doctype html>'+document.documentElement.outerHTML; const blob = new Blob([html], {type:'text/html'}); const url = URL.createObjectURL(blob); e.target.href = url; e.target.download = 'homenagem_jhamilly.html'; setTimeout(()=>URL.revokeObjectURL(url), 60000); });

    // auto carousel
    function startAuto(){ if(autoInterval) return; autoInterval = setInterval(()=>{ setActive((currentIndex+1)%mediaItems.length); }, AUTO_DELAY); }
    function stopAuto(){ if(autoInterval){ clearInterval(autoInterval); autoInterval = null; } }
    function resetAuto(){ stopAuto(); startAuto(); }

    // pause on hover
    mainViewer.addEventListener('mouseenter', stopAuto); mainViewer.addEventListener('mouseleave', startAuto);

    // keyboard
    window.addEventListener('keydown', (e)=>{ if(e.key==='ArrowRight') nextBtn.click(); if(e.key==='ArrowLeft') prevBtn.click(); if(e.key==='Escape') modal.classList.remove('open'); });

    // initialize gallery (called after correct password)
    function initGallery(){
      renderThumbs(); setActive(0); startAuto();
    }

    // ENTRY logic
    enterBtn.addEventListener('click', ()=>{
      const val = pwdInput.value.trim();
      if(val === ACCESS_PWD){
        entryScreen.style.display='none'; siteHeader.style.display='flex'; mainContent.style.display='block'; bgMusic.play().catch(()=>{}); initGallery();
      } else {
        alert('Senha incorreta. Tente novamente.'); pwdInput.focus();
      }
    });

    cancelBtn.addEventListener('click', ()=>{ entryScreen.style.display='none'; alert('Você fechou a homenagem.'); });

    // Access via Enter key
    pwdInput.addEventListener('keypress', (e)=>{ if(e.key==='Enter') enterBtn.click(); });

    // For testing locally without typing password, uncomment:
    // entryScreen.style.display='none'; siteHeader.style.display='flex'; mainContent.style.display='block'; initGallery();
