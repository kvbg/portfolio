document.addEventListener('DOMContentLoaded', () => {
  const PHOTO = '';
  if (PHOTO) { const im = document.getElementById('avatar'); im.src = PHOTO; im.hidden = false; im.nextElementSibling.hidden = true; }

  // Materiały do karuzeli kreatywnej
  const MEDIA = [
    { 
      type: 'post', 
      title: 'Jak pisać dobre polecenia dla AI?', 
      tag: 'Social media', 
      src: '', 
      poster: 'zdjecia/ai2.png', 
      image: 'zdjecia/ai2.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'Limes - reklama szkoły online', 
      tag: 'Wideo', 
      src: 'filmy/limes.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'Łodzią przez świat! - plakat AI', 
      tag: 'Grafka AI', 
      src: '', 
      poster: 'zdjecia/lodzia-przez-swiat.png', 
      image: 'zdjecia/lodzia-przez-swiat.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'The Legend of Chocolate - storytelling (EN)', 
      tag: 'Wideo', 
      src: 'filmy/czekolada.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'Ciekawostki statystyczne - post edukacyjny', 
      tag: 'Social media', 
      src: '', 
      poster: 'zdjecia/ciekawostka-stomatologia.png', 
      image: 'zdjecia/ciekawostka-stomatologia.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'Odbiór Welcome Packa w iSpot - Ambasador Apple', 
      tag: 'Wideo', 
      src: 'filmy/video3.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: '11 mln wyświetleń w 60 dni - analityka kanału', 
      tag: 'Social Media', 
      src: '', 
      poster: 'zdjecia/statystyki1.png', 
      image: 'zdjecia/statystyki1.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: '2,9 mln wyświetleń i 28,3% retencji - wynik pojedynczego wideo', 
      tag: 'Social Media', 
      src: '', 
      poster: 'zdjecia/statystyki2.png', 
      image: 'zdjecia/statystyki2.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'FERRUM - reklama lokalna', 
      tag: 'Wideo', 
      src: 'filmy/okna.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'PODZIW - koncept plakatu serialowego AI', 
      tag: 'Grafika AI', 
      src: '', 
      poster: 'zdjecia/podziw.png', 
      image: 'zdjecia/podziw.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'Apple Tips & Tricks - ładowanie AirPods z iPhone’a', 
      tag: 'Wideo', 
      src: 'filmy/video2.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'Korzystasz z ChatGPT? - karuzela', 
      tag: 'Social media', 
      src: '', 
      poster: 'zdjecia/grafika1.png', 
      image: 'zdjecia/grafika1.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'Znieczulenie - plakat serialowy AI', 
      tag: 'Grafika AI', 
      src: '', 
      poster: 'zdjecia/znieczulenie.png', 
      image: 'zdjecia/znieczulenie.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'IG Stories - współpraca / RMF MAXX', 
      tag: 'Social media', 
      src: '', 
      poster: 'zdjecia/grafika4.png', 
      image: 'zdjecia/grafika4.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'Najbogatsza wieś w Polsce - ciekawostka short-form', 
      tag: 'Wideo', 
      src: 'filmy/miejscowosc.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'post', 
      title: 'Format newsowy', 
      tag: 'Social media', 
      src: '', 
      poster: 'zdjecia/grafika3.png', 
      image: 'zdjecia/grafika3.png', 
      embed: '', 
      url: '' 
    },
    { 
      type: 'video', 
      title: 'Humorystyczny format produktowy Apple', 
      tag: 'Wideo', 
      src: 'filmy/video1.mp4', 
      poster: '', 
      image: '', 
      embed: '', 
      url: '' 
    },
  ];
  const BG = ['linear-gradient(160deg,#ff375f,#5e5ce6)','linear-gradient(160deg,#ff9f0a,#ff375f)','linear-gradient(160deg,#5e5ce6,#0a84ff)','linear-gradient(160deg,#30d158,#0a84ff)','linear-gradient(160deg,#bf5af2,#ff375f)','linear-gradient(160deg,#64d2ff,#5e5ce6)'];
  const BGT = ['linear-gradient(160deg,#0a84ff,#1c1c3a)','linear-gradient(160deg,#5e5ce6,#12122a)','linear-gradient(160deg,#30d158,#0b2a1c)','linear-gradient(160deg,#64d2ff,#10243a)','linear-gradient(160deg,#bf5af2,#1d1030)','linear-gradient(160deg,#ff9f0a,#2b1a08)'];

  // Materiały do karuzeli technologicznej
  const TECH_MEDIA = [
    { 
      type: 'shot', 
      icon: 'git-branch', 
      title: 'Semantic Web & grafy wiedzy - SPARQL, RDF i ontologie', 
      tag: 'AI', 
      image: 'zdjecia/sparql-ontologie.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'layout', 
      title: 'ASYSDENT 2025 - landing page konferencji', 
      tag: 'Web Design', 
      image: 'zdjecia/grafika6.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'terminal', 
      title: 'Analiza statystyczna cen w Pythonie', 
      tag: 'Python', 
      image: 'zdjecia/analiza-danych2.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'cpu', 
      title: 'TicketStar - symulator kolejki i rezerwacji biletów', 
      tag: '.NET', 
      image: 'zdjecia/ticketstar.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'cpu', 
      title: 'Symulator Stable Diffusion - interaktywna wizualizacja AI', 
      tag: 'Edukacja AI', 
      image: 'zdjecia/symulator-sd.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'bar-chart-2', 
      title: 'Analiza ruchu i konwersji - raport z wnioskami', 
      tag: 'Analiza danych', 
      image: 'zdjecia/analiza-danych.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'code', 
      title: 'MorSitch (Java Swing) - tłumacz kodu Morse’a', 
      tag: 'Java', 
      image: 'zdjecia/morsitch.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'layout', 
      title: 'strefaZ - portal pracy dla Gen Z', 
      tag: 'Projekt', 
      image: 'zdjecia/strefaz-strona.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'cpu', 
      title: 'Gemini 4 Argon - infografika edukacyjna', 
      tag: 'Edukacja AI', 
      image: 'zdjecia/gemini.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'cpu', 
      title: 'InsightAI - interaktywny kurs AI dla uczniów', 
      tag: 'Edukacja AI', 
      image: 'zdjecia/insightai.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
    { 
      type: 'shot', 
      icon: 'layout', 
      title: 'Agencja SZUM - landing page agencji kreatywnej', 
      tag: 'Web Design', 
      image: 'zdjecia/szum.png', 
      url: '', 
      embed: '', 
      src: '' 
    },
  ];

  const reelHTML = (m, i, tag) => { const shot = m.type === 'shot', pic = m.poster || m.image; return `<${tag} class="reel ${m.type==='post'?'post':''} ${shot?'shot':''}" style="--bg:${shot?BGT[i%BGT.length]:BG[i%BG.length]}" data-i="${i}" data-t="${m.type}" ${tag==='button'?`aria-label="Otwórz: ${m.title}"`:''}>
    ${m.src?`<video src="${m.src}#t=0.1" ${m.poster?`poster="${m.poster}"`:''} muted loop playsinline preload="metadata"></video>`:pic?`<img src="${pic}" alt="" decoding="async">`:''}
    ${(m.src||pic)?'':(shot?`<span class="ic"><i data-lucide="${m.icon}" width="44" height="44"></i></span>`:'<span class="ph">Tu trafi Twój materiał</span>')}
    ${m.type==='video'?'<span class="pl"><i data-lucide="play" width="15" height="15" fill="currentColor"></i></span>':''}
    <div class="meta"><small>${m.tag}</small><h3>${m.title}</h3></div></${tag}>`; };
  const rail = document.getElementById('rail');
  const fillRail = (el, arr) => {
    el.dataset.setLen = arr.length;
    el.innerHTML = '<div class="ctrack">' + [...arr,...arr,...arr,...arr].map((m,i)=>reelHTML(m,i%arr.length,'button')).join('') + '</div>';
  };
  fillRail(rail, MEDIA); fillRail(document.getElementById('rail-tech'), TECH_MEDIA);

  // Nieskończona karuzela z przeciąganiem myszką
  document.querySelectorAll('.rail').forEach(rl => {
    const track = rl.querySelector('.ctrack');
    if (track) track.style.animation = 'none';
    const setLen = parseInt(rl.dataset.setLen || '0', 10);

    let isDown = false, startX = 0, lastX = 0, velocity = 0, moved = false;
    let currentScroll = 0, targetScroll = 0, loopW = 0, initialized = false;

    const measureLoop = () => {
      if (!track || !setLen || track.children.length < setLen * 2) return;
      const exactW = track.children[setLen].offsetLeft - track.children[0].offsetLeft;
      if (exactW > 0) {
        if (!initialized) {
          loopW = exactW;
          currentScroll = targetScroll = rl.scrollLeft = loopW;
          initialized = true;
        } else if (Math.abs(exactW - loopW) > 1) {
          const ratio = exactW / loopW;
          loopW = exactW;
          currentScroll *= ratio;
          targetScroll *= ratio;
        }
      }
    };

    measureLoop();
    window.addEventListener('load', measureLoop);
    if (track) new ResizeObserver(measureLoop).observe(track);

    rl.style.cursor = 'grab';
    rl.style.scrollBehavior = 'auto';

    const loop = () => {
      if (loopW > 0) {
        if (!isDown && Math.abs(velocity) < 0.05) {
          targetScroll += 0.2;
        }

        currentScroll += (targetScroll - currentScroll) * 0.09;
        velocity *= 0.92;

        while (currentScroll >= loopW * 2) {
          currentScroll -= loopW;
          targetScroll -= loopW;
        }
        while (currentScroll < loopW) {
          currentScroll += loopW;
          targetScroll += loopW;
        }

        rl.scrollLeft = currentScroll;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    rl.addEventListener('mousedown', e => {
      isDown = true;
      moved = false;
      startX = lastX = e.pageX;
      velocity = 0;
      rl.style.cursor = 'grabbing';
      rl.style.userSelect = 'none';
    });

    window.addEventListener('mousemove', e => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 5) moved = true;

      velocity = e.pageX - lastX;
      lastX = e.pageX;
      targetScroll -= velocity * 1.25;
    });

    window.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      rl.style.cursor = 'grab';
      rl.style.userSelect = '';
      targetScroll -= velocity * 6;
    });

    rl.addEventListener('click', e => {
      if (moved) {
        e.stopImmediatePropagation();
        e.preventDefault();
        moved = false;
      }
    }, true);
  });

  const tcard = (m, i) => `<div class="tc" style="--bg:${BGT[i%BGT.length]}">${m.image?`<img src="${m.image}" alt="">`:''}<i data-lucide="${m.icon}" width="18" height="18"></i><span class="sk"><i></i><i></i><i></i><i></i></span><span><b>${m.title}</b><small>${m.tag}</small></span></div>`;
  document.getElementById('vcols-t').innerHTML = '<div class="vin">' + [0,2,4].map(o => { const all = TECH_MEDIA.map((m,i)=>[{...m, image:'', poster:'', src:''},i]); const set = all.concat(all).slice(o,o+4).map(([m,i])=>tcard(m,i)).join(''); return `<div class="vcol">${set}${set}</div>`; }).join('') + '</div>';
  document.getElementById('vcols').innerHTML = '<div class="vin">' + [0,2,4].map(o => { const all = MEDIA.map((m,i)=>[{...m, image:'', poster:'', src:''},i]); const set = all.concat(all).slice(o,o+4).map(([m,i])=>reelHTML(m,i,'div')).join(''); return `<div class="vcol">${set}${set}</div>`; }).join('') + '</div>';

  // Lista projektów
  const PROJECTS = [
    {
      cat: 'creative',
      kind: 'Music & Creator Community',
      icon: 'music',
      title: 'Warner Music Creator - społeczność twórców Warner Music Poland',
      desc: 'Udział w zamkniętej grupie twórców zrzeszonych przy Warner Music Poland - uczestnictwo w wydarzeniach branżowych, premierach oraz projektach łączących muzykę i social media.',
      longDesc: 'Aktywne uczestnictwo w programie Warner Music Creator - zamkniętej społeczności twórców działającej przy Warner Music Poland. Projekt pozwala łączyć pasję do muzyki z tworzeniem treści wideo i obecnością w kulturze internetowej. W ramach programu biorę udział w dedykowanych wydarzeniach, spotkaniach branżowych oraz inicjatywach organizowanych przez wytwórnię, poznając od kulis promocję premier muzycznych, współpracę z artystami i budowanie zasięgów wokół muzyki w social mediach.',
      stack: ['Warner Music Poland', 'Music Marketing', 'Social Media', 'Eventy branżowe', 'Content'],
      thumb: 'zdjecia/warner.png',
      video: '',
      embed: '',
      image: 'zdjecia/warner.png',
      url: '',
      repo: ''
    },
    {
      cat: 'creative',
      kind: 'Social Media & Content Strategy',
      icon: 'zap',
      title: 'Budowa i skalowanie kanałów tematycznych',
      desc: 'Kompleksowe tworzenie, prowadzenie i rozwijanie autorskich profili short-form (TikTok) o zróżnicowanej tematyce - od technologii i storytellingu po newsy oraz projekt społeczny.',
      longDesc: 'Projekt obejmujący stworzenie i rozwijanie sieci autorskich profili wideo (m.in. @fomskyle, @nowinkapl, @bdwszg oraz powiązanych kanałów tematycznych), które łącznie zgromadziły ponad 115 tys. obserwujących i przeszło 4,5 mln polubień. Każdy kanał posiadał odrębną strategię narracyjną i grupę docelową - @fomskyle (89,4 tys. obserwujących) łączył storytelling z praktycznymi funkcjami ekosystemu Apple i ciekawostkami; @nowinkapl (22,4 tys. obserwujących, pojedyncze materiały do 2,8 mln wyświetleń) dostarczał dynamiczne newsy i fakty ze świata; natomiast @bdwszg („będzie wszystko git” – 2,8 mln polubień) powstał jako lekki projekt społeczny, którego celem było wywołanie uśmiechu i zatrzymanie widza w codziennym biegu.',
      stack: ['Short-Form Video', 'Content Strategy', 'Storytelling', 'Analiza retencji', 'Social Media Growth'],
      thumb: 'zdjecia/profile.png',
      video: '',
      embed: '',
      image: 'zdjecia/profile.png',
      url: '',
      repo: ''
    },
    {
      cat: 'tech',
      kind: 'Project Management',
      icon: 'layers',
      title: 'zobacz.to - kierowanie projektem i dokumentacja',
      desc: 'Zarządzanie 5-osobowym zespołem projektowym oraz opracowanie pełnej dokumentacji technicznej dla miejskiej platformy wydarzeń studenckich w Łodzi.',
      longDesc: 'Rola Project Managera w 5-osobowym zespole realizującym koncepcję platformy internetowej zobacz.to integrującej wydarzenia studenckie w Łodzi (projekt przygotowany z myślą o współpracy z Departamentem Cyfryzacji Urzędu Marszałkowskiego Województwa Łódzkiego). Odpowiadałem za koordynację prac zespołu, harmonogramowanie kamieni milowych oraz przygotowanie kompletnej dokumentacji SRS: zdefiniowanie 18 wymagań funkcjonalnych dla trzech ról (Student, Organizator, Administrator), zaprojektowanie logicznego modelu i słownika bazy danych (8 encji), diagramu przypadków użycia UML, identyfikacji wizualnej oraz wymagań niefunkcjonalnych (wydajność, bezpieczeństwo, zgodność z RODO) pod architekturę Python / Django 5.2.1.',
      stack: ['Project Management', 'SRS / dokumentacja', 'Python', 'Django', 'UML & modelowanie danych', 'Analiza wymagań'],
      thumb: 'zdjecia/zobacz-to.png',
      video: '',
      embed: '',
      image: 'zdjecia/zobacz-to.png',
      url: '',
      repo: ''
    },
    { cat:'tech', kind:'Technologia - system RAG', icon:'sparkle', title:'Caffusia AI - asystent kawiarni (RAG)', desc:'Lokalny system Q&A oparty na architekturze RAG - przeszukuje dokumentację PDF (menu, cennik, FAQ) i generuje odpowiedzi ze wskazaniem źródeł.', longDesc:'Aplikacja typu Retrieval-Augmented Generation (RAG) zbudowana w Pythonie i Streamlit, zaprojektowana jako inteligentny asystent dla kawiarni Caffusia. System przetwarza dokumenty źródłowe PDF (menu, cennik usług, adres i FAQ), dzieli je na semantyczne fragmenty i indeksuje w bazie wektorowej FAISS z wykorzystaniem wielojęzycznych osadzeń (HuggingFace Multilingual Embeddings). Po zadaniu pytania silnik wyszukuje najtrafniejsze fragmenty kontekstu i przekazuje je do lokalnego modelu językowego Gemma 2 (uruchamianego przez Ollama i LangChain), generując naturalne odpowiedzi w czasie rzeczywistym wraz z odnośnikami do konkretnych dokumentów i stron źródłowych.', stack:['Python','LangChain','Ollama (Gemma 2)','FAISS','HuggingFace Embeddings','Streamlit'], thumb:'zdjecia/caffusia-rag.png', video:'', embed:'', image:'zdjecia/caffusia-rag.png', url:'', repo:'' },
    { cat:'tech', kind:'Technologia - iOS App', icon:'smile', title:'moodzik - aplikacja iOS do śledzenia nastroju', desc:'Natywna aplikacja na iPhone’a stworzona w Xcode (Swift) - dziennik samopoczucia z kamieniami milowymi w ciągu dnia, statystykami i funkcją dzielenia się nastrojem.', longDesc:'Autorska aplikacja mobilna dla systemu iOS zaprojektowana i zbudowana w środowisku Xcode w języku Swift. „moodzik” to połączenie codziennego dziennika emocji z funkcjami społecznościowymi - pozwala rejestrować samopoczucie o określonych porach dnia (dzienne kamienie milowe: 09:00, 14:00, 19:00), zapisywać kontekst i przyczyny nastroju, analizować historyczne statystyki oraz rozkład emocji w kalendarzu, a także udostępniać swój aktualny stan innym. Projekt obejmował zarówno warstwę programistyczną, jak i autorski projekt interfejsu (UI/UX) oraz ikony aplikacji zgodnie z wytycznymi Apple Human Interface Guidelines.', stack:['Swift','SwiftUI','Xcode','iOS','UI/UX Design'], thumb:'zdjecia/moodzik-app.png', video:'', embed:'', image:'zdjecia/moodzik-app.png', url:'', repo:'' },
    { cat:'creative', kind:'Creative Tech - koncept', icon:'zap', title:'ENERGOL - Your Energy Has a Roommate', desc:'Koncept aplikacji AI dla Gen Z, która zamienia dane z licznika prądu w cyfrowego współlokatora komentującego Twój domowy rytm.', longDesc:'Koncepcja kampanii oraz projekt doświadczenia produktu przygotowane dla sektora energetycznego z myślą o pokoleniu Z (18–25 lat), dla którego tradycyjne oszczędzanie prądu jest nieatrakcyjne. Zamiast surowych wykresów zużycia, pomysł zakłada połączenie danych z licznika zdalnego odczytu (LZO) z analizą wzorców i modelami AI, nadając energii osobowość (np. „Night Creator”) oraz generując spersonalizowane powiadomienia. W ramach projektu opracowałem pełny storytelling, makiety interfejsu (UI) oraz koncepcyjną architekturę wdrożenia (ścieżkę od walidacji na danych syntetycznych po docelową integrację z API operatora).', stack:['Creative Concept','AI & Data','UI Mockups','Storytelling','Smart Metering (LZO)'], thumb:'zdjecia/energol-cover.png', video:'', embed:'', image:'zdjecia/energol-cover.png', url:'', repo:'' },
    { cat:'tech', kind:'Technologia - case study', icon:'cpu', title:'Benchmarki modeli LLM na GPU (Comtegra S.A.)', desc:'Badanie wydajności i jakości generatywnych modeli open-source na infrastrukturze GPU - metodologia testów, raportowanie i wnioski wdrożeniowe.', longDesc:'Prace badawczo-inżynieryjne realizowane w Comtegra S.A., obejmujące ewaluację i benchmarki wydajności otwartych modeli językowych (LLM) na infrastrukturze GPU. Projekt skupiał się na analizie szybkości generowania, obciążenia zasobów sprzętowych oraz jakości odpowiedzi w zastosowaniach biznesowych. Ze względu na charakter komercyjny prac projekt prezentuję od strony metodologii oraz publicznie udostępnionych wyników i wniosków na moim profilu LinkedIn.', stack:['LLM','GPU','Open-Source AI','Benchmarki','Analiza danych'], thumb:'zdjecia/gpu.png', video:'', embed:'', image:'zdjecia/gpu.png', url:'https://www.linkedin.com/feed/update/urn:li:activity:7449762401001959424/', repo:'' },
    { cat:'tech', kind:'Technologia - interactive web', icon:'box', title:'O/K Studio - interaktywny landing page 3D', desc:'Autorski landing page dla studia łączącego kreację z AI - zbudowany z użyciem Three.js (scenografia 3D reagująca na scroll), GSAP i Lenis.', longDesc:'Kompleksowy projekt i realizacja interaktywnego landing page’a dla pracowni kreatywno-technologicznej O/K. Strona została zaprojektowana i zakodowana w HTML5, CSS3 i JavaScript z wykorzystaniem silnika WebGL (Three.js) - zawiera proceduralny model laptopa 3D z dynamicznie renderowanym ekranem i zawiasem zsynchronizowanym ze scrollem oraz obracającą się kostkę 3D prezentującą ofertę. Całość dopełnia płynny scroll (Lenis), animacje w GSAP + ScrollTrigger, kursor kinetyczny, przyciski magnetyczne oraz warstwowy konstruktor 3D.', stack:['Three.js / WebGL','GSAP','Lenis','HTML / CSS / JS','Creative Coding'], thumb:'zdjecia/ok-studio-cover.png', video:'', embed:'', image:'zdjecia/ok-studio-cover.png', url:'', repo:'' },
    { cat:'tech', kind:'Technologia - data storytelling', icon:'presentation', title:'Interaktywny Tech Storytelling - Gemini 4 Argon', desc:'Webowa prezentacja w stylu Keynote przekładająca złożone benchmarki modeli AI na interaktywną narrację.', longDesc:'Autorska prezentacja webowa stworzona w estetyce Apple Keynote, której celem było przełożenie złożonych danych technicznych i benchmarków nowego modelu AI (limit 1M tokenów, testy cyberbezpieczeństwa CWE-bench, rankingi Vals Index oraz analiza kosztów API) na przystępny, wizualny storytelling. Całość została zbudowana od zera bez zewnętrznych frameworków, z wykorzystaniem autorskiego silnika slajdów, animowanych wykresów oraz płynnych przejść typograficznych.', stack:['HTML / CSS / JS','Data Storytelling','UI Motion','AI Benchmarks'], thumb:'zdjecia/gemini-argon.png', video:'', embed:'', image:'zdjecia/gemini-argon.png', url:'', repo:'' },
    { cat:'tech', kind:'Technologia - uczenie maszynowe', icon:'shield-alert', title:'Detekcja deepfake’ów twarzy (praca inżynierska)', desc:'System uczenia maszynowego (98,20% skuteczności) oparty na fine-tuningu DINOv3 z mapami ciepła Grad-CAM, analizą metadanych oraz integracją z Gemini API i FastAPI.', longDesc:'Projekt realizowany w ramach pracy inżynierskiej z obszaru uczenia maszynowego i wizji komputerowej. W środowisku Google Colab (Python, PyTorch) przeprowadziłem transfer learning i fine-tuning architektonicznego modelu DINOv3 na zróżnicowanym zbiorze 20 000 zdjęć twarzy pochodzących z różnych źródeł, obejmującym zarówno fotografie autentyczne, jak i obrazy wygenerowane przez różne modele oraz generatory dyfuzyjne. Dzięki wysokiej jakości reprezentacjom cech (embeddings) sieć osiągnęła skuteczność 98,20% accuracy już po 2 epokach treningu, zachowując wysoką zdolność generalizacji. Całość została wdrożona w postaci aplikacji webowej opartej na FastAPI (przystosowanej do uruchomienia lokalnego oraz na Hugging Face Spaces), wzbogaconej o moduł wyjaśnialności (Explainable AI z wykorzystaniem metody Grad-CAM generującej mapy ciepła wskazujące obszary manipulacji), analizę metadanych EXIF, eksport raportów oraz integrację z Google Gemini API do automatycznej interpretacji wyników.', stack:['Python','PyTorch','DINOv3','Grad-CAM','FastAPI','Gemini API','Hugging Face'], thumb:'zdjecia/deepfake-app.png', video:'', embed:'', image:'zdjecia/deepfake-app.png', url:'', repo:'' },
    { cat:'creative', kind:'Kreacja', icon:'headphones', title:'Spotify × AirPods - spot reklamowy', desc:'Autorski spot koncepcyjny zrealizowany w celach edukacyjnych - od pomysłu i copywritingu, po animację, sound design i postprodukcję.', longDesc:'Autorski spot reklamowy zrealizowany w celach edukacyjnych. Odpowiadałem za całą koncepcję kreatywną, copywriting, kierunek wizualny oraz pełną animację i montaż w Premiere Pro oraz After Effects. Warstwę dźwiękową i lektorską zbudowałem w oparciu o ElevenLabs oraz zasoby z repozytoriów GitHub, a cały proces produkcyjny wspierałem narzędziami AI (m.in. Claude).', stack:['Premiere Pro','After Effects','ElevenLabs','Claude','AI','Sound Design'], thumb:'https://img.youtube.com/vi/1pKqe14r1x8/maxresdefault.jpg', video:'', embed:'https://www.youtube.com/embed/1pKqe14r1x8', image:'', url:'https://youtu.be/1pKqe14r1x8', repo:'' },
    { cat:'creative', kind:'Kreacja', icon:'credit-card', title:'Revolut - spot reklamowy', desc:'Dynamiczny spot reklamowy łączący modelowanie i animację 3D w Blenderze z postprodukcją wideo oraz udźwiękowieniem AI.', longDesc:'Autorski spot reklamowy stworzony w celach edukacyjnych. Zrealizowałem całość od scenariusza i designu, przez modelowanie, oświetlenie i animację obiektów 3D w Blenderze, aż po compositing, montaż w Premiere Pro / After Effects oraz sound design przy wsparciu narzędzi generatywnej AI.', stack:['Blender','After Effects','Premiere Pro','AI','Sound Design'], thumb:'https://img.youtube.com/vi/wMkv3Lv6o5o/maxresdefault.jpg', video:'', embed:'https://www.youtube.com/embed/wMkv3Lv6o5o', image:'', url:'https://youtu.be/wMkv3Lv6o5o', repo:'' },
    {
      cat: 'creative',
      kind: 'Kreacja',
      icon: 'sparkles',
      title: '#ŚWIĘTAOFFLINE - koncepcyjna animacja świąteczna',
      desc: 'Autorski spot z animacją typograficzną zachęcający do cyfrowego detoksu w święta, oparty na metaforze stałych powiadomień z internetu i światełek choinkowych, jako sięgnięcia po telefon.',
      longDesc: 'Autorski projekt kreatywno-animacyjny zrealizowany jako koncepcja świątecznej kampanii społecznej (#ŚWIĘTAOFFLINE), zachęcającej do odłożenia smartfona i skupienia się na obecności z bliskimi. Spot opiera się na minimalistycznej, kinetycznej typografii, płynnych przejściach oraz wizualnej metaforze 96 iskierek - symbolizujących średnią liczbę dziennych sprawdzeń telefonu (co ok. 10 minut), które układają się w kształt świątecznych lampek, a finalnie ustępują miejsca bezpośredniemu spotkaniu. Odpowiadałem za całą koncepcję kreatywną, copywriting, animację oraz udźwiękowienie.',
      stack: ['Premiere Pro', 'After Effects', 'AI', 'Motion Design', 'Social Campaign', 'Sound Design'],
      thumb: 'https://img.youtube.com/vi/2vVCTn_KDwI/maxresdefault.jpg',
      video: '',
      embed: 'https://www.youtube.com/embed/2vVCTn_KDwI',
      image: '',
      url: 'https://youtu.be/2vVCTn_KDwI',
      repo: ''
    },
    { cat:'creative', kind:'Kreacja', icon:'utensils', title:'Uber Eats - spot reklamowy', desc:'Anglojęzyczny spot reklamowy zrealizowany od zera - dynamiczny montaż, animacja typograficzna i sound design.', longDesc:'Autorski spot reklamowy stworzony w języku angielskim w celach edukacyjnych. Samodzielnie przygotowałem koncepcję, angielski copywriting, rytmiczny montaż w Premiere Pro, animacje w After Effects oraz udźwiękowienie, dopracowując warstwę kreatywną przy wsparciu narzędzi AI.', stack:['Premiere Pro','After Effects','AI','English','Sound Design'], thumb:'https://img.youtube.com/vi/l3B_GFc6rYk/maxresdefault.jpg', video:'', embed:'https://www.youtube.com/embed/l3B_GFc6rYk', image:'', url:'https://youtu.be/l3B_GFc6rYk', repo:'' },
    {
      cat: 'creative',
      kind: 'Projekt kreatywny - wideo & AI',
      icon: 'video',
      title: 'Claude Skills - tutorial wideo',
      desc: 'Kompleksowa produkcja dynamicznego materiału wideo o funkcjach AI - od scenariusza, syntezy głosu i montażu, po autorskie slajdy i projekt karty zadań PDF.',
      longDesc: 'Projekt kreatywno-edukacyjny zrealizowany od zera na podstawie dokumentacji Claude Skills. Proces obejmował szybki research technologiczny i przetestowanie funkcji w praktyce, napisanie scenariusza, wygenerowanie naturalnego lektora w ElevenLabs oraz nagranie przebitek ekranowych w OBS Studio. Całość zmontowałem w CapCut, przeplatając nagrania interfejsu autorskimi slajdami utrzymującymi dynamikę i uwagę widza, a także zaprojektowałem spójną wizualnie kartę zadań praktycznych w formacie PDF dopasowaną do identyfikacji wizualnej.',
      stack: ['CapCut', 'ElevenLabs', 'OBS Studio', 'Storytelling'],
      thumb: 'https://img.youtube.com/vi/cY6q8kp2fMA/maxresdefault.jpg',
      video: 'https://youtu.be/cY6q8kp2fMA',
      embed: 'https://www.youtube.com/embed/cY6q8kp2fMA',
      image: '',
      url: 'https://youtu.be/cY6q8kp2fMA',
      repo: ''
    },
    {
      cat: 'creative',
      kind: 'Projekt kreatywny - edukacja & design',
      icon: 'sparkle',
      title: 'Przyszłość AI - warsztaty i prezentacje dla szkół oraz administracji',
      desc: 'Autorski cykl edukacyjny i oprawa wizualna prelekcji o sztucznej inteligencji, realizowany dla uczniów w szkołach oraz pracowników administracji publicznej.',
      longDesc: 'Kompleksowy projekt edukacyjno-komunikacyjny obejmujący opracowanie merytoryczne, zaprojektowanie dedykowanych prezentacji wizualnych oraz prowadzenie prelekcji i warsztatów na temat sztucznej inteligencji. Program został zrealizowany w dwóch różnych środowiskach - w szkołach oraz w jednostkach administracji samorządowej (gminie) - co wymagało elastycznego dopasowania narracji do odbiorców. Materiały obejmowały obecność AI w codziennych urządzeniach, wpływ technologii na rynek pracy i nowe zawody oraz zagadnienia etyczne i bezpieczeństwo. Projekt połączył przystępny storytelling z autorskim designem slajdów utrzymującym uwagę słuchaczy.',
      stack: ['Edukacja AI', 'Presentation Design', 'Wystąpienia publiczne', 'Storytelling', 'Sektor publiczny & edukacja'],
      thumb: 'zdjecia/ai-future-slides.png',
      video: '',
      embed: '',
      image: 'zdjecia/ai-future-slides.png',
      url: '',
      repo: ''
    },
    {
      cat: 'tech',
      kind: 'Programowanie obiektowe - C++',
      icon: 'terminal',
      title: 'Crossy Road - obiektowa gra konsolowa w C++',
      desc: 'Wielopoziomowa gra zręcznościowa typu arcade napisana w C++ z architekturą obiektową (dziedziczenie, polimorfizm), systemem kolizji, zapisem postępów oraz dokumentacją UML.',
      longDesc: 'Gra terminalowa Crossy Road (v1.0.3) zrealizowana w języku C++ z pełnym podziałem na pliki nagłówkowe i źródłowe (.h/.cpp) oraz kompletną dokumentacją techniczną. Architektura opiera się na polimorficznej klasie bazowej ObiektGry oraz klasach pochodnych (Gracz, Auto, Moneta, Przeszkoda) zarządzanych przez główną klasę Gra. Projekt obejmuje obsługę wejścia w czasie rzeczywistym, wykrywanie kolizji, skalowanie poziomu trudności oraz trwały zapis punktów graczy do pliku tekstowego.',
      stack: ['C++', 'Polimorfizm', 'UML', 'Dokumentacja techniczna', 'Terminal / ASCII'],
      thumb: 'zdjecia/crossy-road-cpp.png',
      video: '',
      embed: '',
      image: 'zdjecia/crossy-road-cpp.png',
      url: '',
      repo: ''
    },
    {
      cat: 'tech',
      kind: 'Web App - Java MVC',
      icon: 'layers',
      title: 'InfluKampanie - system do planowania kampanii influencer marketingowych',
      desc: 'Kompleksowa aplikacja webowa w Javie (MVC, Hibernate, SQLite) do analizy statystyk twórców z TikToka, obliczania wskaźnika Engagement Rate (ER) oraz kosztorysowania kampanii.',
      longDesc: 'Autorski system webowy wspomagający procesy influencer marketingu, zbudowany w oparciu o architekturę MVC (Java, Jakarta Servlet/JSP, Apache Tomcat 11, Maven) oraz warstwę Hibernate/JPA z bazą SQLite. Aplikacja umożliwia marketerom przeglądanie bazy twórców TikTok, automatyczne wyliczanie wskaźnika Engagement Rate (ER), kompletowanie kampanii w sesyjnym koszyku (HttpSession) oraz generowanie podsumowań zasięgów i kosztów. System posiada chroniony panel administratora z pełnym CRUD-em, udostępnia endpoint REST API (/api/influencers) zwracający dane w formacie JSON (Jackson) oraz został pokryty testami jednostkowymi w JUnit 5.',
      stack: ['Java', 'Jakarta Servlet / JSP', 'Hibernate / JPA', 'SQLite', 'REST API (JSON)', 'JUnit 5', 'MVC'],
      thumb: 'zdjecia/influkampanie.png',
      video: '',
      embed: '',
      image: 'zdjecia/influkampanie.png',
      url: '',
      repo: ''
    },
  ];

  const pcard = (p, i) => `
    <article class="project-card pc reveal-el" data-proj-cat="${p.cat}" data-p="${i}" tabindex="0" role="button" aria-label="Otwórz projekt: ${p.title}">
      <div class="pc-thumb">
        ${p.thumb && isNaN(p.thumb)?`<img src="${p.thumb}" alt="" loading="lazy">`:p.video?`<video src="${p.video}#t=${!isNaN(p.thumb)&&p.thumb!==''?p.thumb:3}" muted playsinline preload="auto"></video>`:`<i data-lucide="${p.icon}" width="40" height="40"></i>`}
        <span class="tag-pill ${p.cat==='tech'?'tech':'creative'}">${p.kind}</span>
      </div>
      <div class="pc-body">
        <div><h3>${p.title}</h3><p>${p.desc}</p></div>
        <div class="chips">${p.stack.map(t=>`<span>${t}</span>`).join('')}</div>
        <span class="pc-open">Zobacz projekt <i data-lucide="arrow-up-right" width="15" height="15"></i></span>
      </div>
    </article>`;
  ['creative','tech'].forEach(c => { document.getElementById('projects-' + c).innerHTML = PROJECTS.map((p, i) => p.cat === c ? pcard(p, i) : '').join(''); });

  // Certyfikaty
  const CERTS = [['tech','IBM','Podstawy cyberbezpieczeństwa','2024'],['tech','Santander Open Academy','Podstawy Python','2024'],['tech','Santander Open Academy','Podstawy Power BI','2024'],['tech','Santander Open Academy','Sztuczna inteligencja (AI) dla każdego','2025'],['tech','Google','Artificial Intelligence and Productivity','2025'],['creative','Generator Pomysłów','AIDEAS – rozwój kompetencji AI'],['tech','Google','Umiejętności Jutra'],['creative','Santander Open Academy','Marketing w e-commerce','2023'],['tech','Google','Gemini Certified Educator'],['other','Santander Open Academy','Zarządzanie projektami','2023'],['creative','iSpot / Apple','Program Ambasadorów Rozwiązań Apple']];
  const GRP = { tech:['Technologia i AI','cpu','linear-gradient(145deg,#0a84ff,#5ac8fa)','#0a84ff'], creative:['Kreacja, marketing i edukacja','sparkles','linear-gradient(145deg,#ff9f0a,#ff375f)','#ff9f0a'], other:['Zarządzanie','briefcase','linear-gradient(145deg,#30d158,#248a3d)','#30d158'] };
  document.getElementById('certs').innerHTML = Object.keys(GRP).map(k => { const g = GRP[k], l = CERTS.filter(c => c[0] === k);
    return `<div class="ck reveal-el" style="--g:${g[2]};--c:${g[3]}"><div class="ck-h"><span class="ck-sq"><i data-lucide="${g[1]}" width="22" height="22"></i></span><div><h3>${g[0]}</h3><small>${l.length} ${l.length >= 5 ? 'certyfikatów' : 'certyfikaty'}</small></div></div><ul>${l.map(c => `<li><i data-lucide="badge-check" width="18" height="18"></i><div><b>${c[2]}</b><span>${c[1]}${c[3] ? ', ' + c[3] : ''}</span></div></li>`).join('')}</ul></div>`; }).join('');

  // Twarde spacje po spójnikach
  const nbsp = root => {
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => /^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const list = []; while (tw.nextNode()) list.push(tw.currentNode);
    list.forEach(n => { const v = n.nodeValue.replace(/(?<=^|[\s(„"“])([aiouwzAIOUWZ])[ \t\n]+(?=\S)/g, '$1\u00A0'); if (v !== n.nodeValue) n.nodeValue = v; });
  };
  lucide.createIcons();
  nbsp(document.body);
  gsap.registerPlugin(ScrollTrigger);

  // Animacje startowe i scroll
  gsap.timeline()
    .to('#opening-veil', {
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      onComplete: () => { document.getElementById('opening-veil').style.display = 'none'; }
    })
    .from('.hi', { y: 22, opacity: 0, duration: 1, stagger: 0.09, ease: 'power3.out' }, '-=0.4');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    gsap.fromTo('.bento .tile', { scale: 0.92 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.bento', start: 'top 105%', end: 'top 55%', scrub: true } });
    gsap.to('.hero-top', { y: -70, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '50% top', scrub: true } });
  }
  let lenis = null;
  if (!prefersReducedMotion) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        if (lenis) lenis.scrollTo(target);
        else target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Nawigacja Dynamic Island
  const island = document.getElementById('floating-island');
  const scrollRing = document.getElementById('scroll-ring');
  const circumference = 56.55;

  function updateNav() {
    const y = window.scrollY || window.pageYOffset;
    const heroH = document.querySelector('.hero').offsetHeight;
    if (y > Math.min(340, heroH * 0.48)) island.classList.add('visible');
    else island.classList.remove('visible');

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    scrollRing.style.strokeDashoffset = circumference * (1 - pct);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  ['about', 'creativity', 'technology', 'experience', 'education'].forEach(id => {
    const sec = document.getElementById(id);
    const link = document.querySelector(`[data-nav="${id}"]`);
    if (sec && link) {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: (s) => {
          if (s.isActive) {
            document.querySelectorAll('.island-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }
  });

  gsap.utils.toArray('.story-line').forEach(line => {
    gsap.to(line, {
      opacity: 1,
      scrollTrigger: {
        trigger: line,
        start: 'top 80%',
        end: 'top 46%',
        scrub: true
      }
    });
  });

  gsap.utils.toArray('.reveal-el').forEach(el => {
    gsap.from(el, {
      y: 26,
      opacity: 0,
      duration: 0.72,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });

  // Lightbox i podgląd materiałów
  gsap.from('#rail', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '#rail', start: 'top 90%', once: true } });
  const lb = document.getElementById('lb'), lbc = document.getElementById('lb-c');
  const LN = () => (typeof lenis !== 'undefined' && lenis) ? lenis : null;
  let kbdNav = false;
  addEventListener('keydown', e => { if (e.key === 'Tab') kbdNav = true; }, true);
  addEventListener('pointerdown', () => { kbdNav = false; }, true);
  const openDlg = (d, from) => {
    if (from) { const r = from.getBoundingClientRect(); d.style.setProperty('--dx', (r.left + r.width/2 - innerWidth/2) + 'px'); d.style.setProperty('--dy', (r.top + r.height/2 - innerHeight/2) + 'px'); }
    d.showModal(); if (LN()) LN().stop();
    requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('show')));
  };
  const closeDlg = d => { if (!d.open || d._c) return; d._c = true; d.classList.remove('show'); setTimeout(() => { d.close(); d._c = false; }, 450); };
  ['pm','lb'].forEach(id => { const d = document.getElementById(id);
    d.addEventListener('cancel', e => { e.preventDefault(); closeDlg(d); });
    d.addEventListener('click', e => { if (e.target === d) closeDlg(d); });
    d.addEventListener('close', () => { if (LN()) LN().start();
      if (!kbdNav) setTimeout(() => { const a = document.activeElement; if (a && a !== document.body && a.blur) a.blur(); }, 0); }); });
  lb.addEventListener('close', () => { lbc.innerHTML = ''; });
  document.querySelectorAll('.rail').forEach(rl => rl.addEventListener('click', e => {
    const c = e.target.closest('.reel'); if (!c) return;
    const m = (rl.id === 'rail-tech' ? TECH_MEDIA : MEDIA)[c.dataset.i]; let h = '';
    if (m.embed) h = `<iframe src="${m.embed}?autoplay=1" allow="autoplay;encrypted-media;fullscreen" title="${m.title}"></iframe>`;
    else if (m.src) h = `<video src="${m.src}" controls autoplay playsinline></video>`;
    else if (m.image) h = `<img src="${m.image}" alt="${m.title}" style="display:block;max-width:92vw;max-height:86svh;border-radius:20px">`;
    if (!h) { if (m.url) window.open(m.url, '_blank', 'noopener'); return; }
    lbc.innerHTML = h; openDlg(lb, c);
  }));
  document.querySelector('.lb-x').addEventListener('click', () => closeDlg(lb));
  document.querySelectorAll('.rail video').forEach(v => {
    const c = v.parentElement;
    c.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') v.play().catch(()=>{}); });
    c.addEventListener('pointerleave', () => { v.pause(); v.currentTime = 0.1; });
  });
  document.querySelectorAll('[data-f]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-f]').forEach(x => x.classList.toggle('active', x === b));
    rail.querySelectorAll('.reel').forEach(r => { r.style.display = (b.dataset.f==='all' || r.dataset.t===b.dataset.f) ? '' : 'none'; });
  }));

  document.querySelectorAll('[data-proj-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-proj-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.projFilter;
      document.querySelectorAll('.project-card').forEach(c => {
        const show = f === 'all' || c.dataset.projCat.includes(f);
        c.style.display = show ? 'flex' : 'none';
        if (show) gsap.fromTo(c, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35 });
      });
    });
  });

  // Okno szczegółów projektu
  const pm = document.getElementById('pm');
  const openProject = (i, from) => {
    const p = PROJECTS[i];
    document.getElementById('pm-media').innerHTML = p.embed ? `<iframe src="${p.embed}?autoplay=1" allow="autoplay;encrypted-media;fullscreen" title="${p.title}"></iframe>`
      : p.video ? `<video src="${p.video}" ${p.thumb&&isNaN(p.thumb)?`poster="${p.thumb}"`:''} controls autoplay playsinline></video>`
      : (p.image||p.thumb) ? `<img src="${p.image||p.thumb}" alt="${p.title}">` : `<i data-lucide="${p.icon}" width="56" height="56"></i>`;
    document.getElementById('pm-kind').textContent = p.kind;
    document.getElementById('pm-title').textContent = p.title;
    document.getElementById('pm-desc').textContent = p.longDesc || p.desc;
    document.getElementById('pm-stack').innerHTML = p.stack.map(t=>`<span>${t}</span>`).join('');
    const pmLinks = document.getElementById('pm-links');
    pmLinks.innerHTML = (p.url?`<a href="${p.url}" target="_blank" rel="noopener">Zobacz <i data-lucide="arrow-up-right" width="15" height="15"></i></a>`:'') + (p.repo?`<a href="${p.repo}" target="_blank" rel="noopener">Kod na GitHub <i data-lucide="arrow-up-right" width="15" height="15"></i></a>`:'');
    pmLinks.style.display = (p.url || p.repo) ? 'flex' : 'none';
    lucide.createIcons(); nbsp(pm); openDlg(pm, from);
  };
  document.addEventListener('click', e => { const c = e.target.closest('.pc'); if (c) openProject(c.dataset.p, c); });
  document.addEventListener('keydown', e => { if (e.key === 'Enter') { const c = e.target.closest('.pc'); if (c) openProject(c.dataset.p, c); } });
  pm.addEventListener('close', () => { document.getElementById('pm-media').innerHTML = ''; });
  document.querySelector('.pm-x').addEventListener('click', () => closeDlg(pm));
});

// Stopka i rotacja fraz w kontakcie
(function () {
  const foot = document.getElementById('contact');
  foot.addEventListener('pointermove', e => {
    const r = foot.getBoundingClientRect();
    foot.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    foot.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  const words = [
    'sztucznej inteligencji',
    'viralowych filmikach',
    'czymś kreatywnym',
    'edukacji',
    'automatyzacji',
    'montażu',
    'czymś technologicznym',
    'kodzie',
    'nowych pomysłach',
  ];
  const stage = document.getElementById('rot-stage');
  const RESPECT_SYSTEM_REDUCED_MOTION = false;
  const reduceMotion = RESPECT_SYSTEM_REDUCED_MOTION && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EASE_IN = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const EASE_OUT = 'cubic-bezier(0.4, 0, 1, 1)';
  stage.innerHTML = '';

  const makePhrase = text => {
    const p = document.createElement('span');
    p.className = 'ct-phrase';
    const sr = document.createElement('span');
    sr.className = 'ct-sr'; sr.textContent = text;
    p.appendChild(sr);
    Array.from(text).forEach(ch => {
      const c = document.createElement('span');
      c.className = 'ct-ch'; c.setAttribute('aria-hidden', 'true');
      c.textContent = ch === ' ' ? '\u00A0' : ch;
      p.appendChild(c);
    });
    return p;
  };
  const chars = p => Array.from(p.querySelectorAll('.ct-ch'));

  let current = makePhrase(words[0]);
  stage.appendChild(current);

  function swapPhrase(text) {
    const prev = current;
    const next = makePhrase(text);
    stage.appendChild(next);
    current = next;
    if (reduceMotion) { prev.remove(); return; }

    const outs = chars(prev).map((c, i) => c.animate(
      [{ opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
       { opacity: 0, transform: 'translateY(-0.28em)', filter: 'blur(6px)' }],
      { duration: 480, delay: i * 14, easing: EASE_OUT, fill: 'forwards' }
    ));
    Promise.all(outs.map(a => a.finished)).then(() => prev.remove()).catch(() => prev.remove());

    chars(next).forEach((c, i) => c.animate(
      [{ opacity: 0, transform: 'translateY(0.32em)', filter: 'blur(8px)' },
       { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' }],
      { duration: 900, delay: 240 + i * 22, easing: EASE_IN, fill: 'backwards' }
    ));
  }

  let wi = 0, visible = false, running = false, timer = 10000;
  function loop() {
    clearTimeout(timer);
    if (!visible) { running = false; return; }
    running = true;
    timer = setTimeout(() => {
      wi = (wi + 1) % words.length;
      swapPhrase(words[wi]);
      loop();
    }, 1500);
  }
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !running) loop();
  }, { threshold: 0.2 }).observe(stage);
})();
