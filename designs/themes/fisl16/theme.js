(function($) {

  var $translations = {
    en: {
      'prefix': 'english',
      'Inscrições': ['Registrations'],
      'Participantes': ['Attendants', 'inscricoes/registration-for-participants'],
      'Palestrante': ['Speakers', 'inscricoes/registration-of-speakers-call-for-papers-for-the-2015-edition'],
      'Voluntários': ['Volunteers', 'inscricoes/volunteer-registration-how-to-help-the-international-free-software-forum'],
      'O Evento': ['The Event'],
      'Sobre o FISL': ['About FISL', 'o-evento/about-fisl'],
      'Informações úteis': ['FAQ', 'o-evento/useful-information'],
      'Imprensa': ['Pressroom', 'o-evento/pressroom'],
      'Política anti-assédio': ['Anti-harassment policy', 'o-evento/anti-harassment-policy-of-the-international-free-software-forum'],
      'Patrocinadores': ['Sponsors', 'o-evento/sponsors'],
      'Divulgue': ['Publish'],
      'Páginas Amigas': ["Friends' Pages", 'noticias/friends-pages'],
      'Guia de Hospedagem': ['Hosting Guide', 'noticias/hosting-guide-fisl16'],
      'Conteúdos': ['Content'],
      'Programação': ['Schedule', 'conteudos/grid-lectures'],
      'Destaques': ['Highlights'],
      'Convidados': ['Special guests'],
      'WSL': 'WSL',
      'Área de exposição': ['Exhibition Area', 'conteudos/exhibition-area'],
      'Zonas': ['Zones'],
      'eu vou!': ["i'm in!"],
      '16º Fórum Internacional de Software Livre': '16º International Free Software Forum',
      '8 a 11 de Julho de 2015': ['July, 8 to 11, 2015'],
      'Realização': ["Realization"],
      '| Porto Alegre | Brasil': ['Porto Alegre | Brazil'],
      'Fale Conosco': ["Contact us"],
      'Chamada de trabalhos': ['Call for works', 'o-evento/call-for-works'],
      'Caravanas': ['Convoys'],
      'Grupos de Usuários': ['Users Groups', 'o-evento/users-groups'],
      'Patrocine': ['Sponsor', 'o-evento/sponsor'],
      'Quem faz o fisl': ['Who is FISL?', 'o-evento/who-is-fisl'],
      'Banners': 'Banners',
      'GT-Mobilização': ['Mobilization Team'],
      'Palestras': ['Lectures'],
      'Robótica Livre': ['Free Robotics', 'programacao/free-robotics'],
      'Cultura Livre': ['Free Culture', 'programacao/free-culture'],
      'Rodada de Negócios': ['Business Round', 'programacao/business-round'],
      'Encontros Comunitários': ['Community Meetings', 'programacao/workshops'],
      'Oficinas': ['Workshops', 'programacao/workshop'],
      'Educação': ['Education', 'programacao/education'],
      'Mostra de Projetos Livres': ['Free Projects Show', 'programacao/free-projects'],
      'Mostra de Projetos': ['Projects Show', 'programacao/free-projects'],
      'Porto Alegre': 'Porto Alegre',
      'Hospedagem': ['Hosting', 'porto-alegre/hosting'],
      'Como Chegar': ['How do I get there', 'porto-alegre/how-do-i-get-there'],
      'Roteiro de Bares e Festas': ['Bars and parties route', 'porto-alegre/bars-and-parties'],
      'Turismo': ['Tourism', 'porto-alegre/tourism'],
      'Inscreva-se': ['Registration'],
      'Desenvolvido pela': ["Developed by"],
      'Faltam': [""],
      'dias para o FISL15': ["Days until FISL15!"],
      'Falta': [""],
      'dia para o FISL15': ["Day until FISL15!"],
      'Inscritos': ["Registered people"],
      'participantes': ["participants"],
      'Divirta-se!': ["Have fun!"]
    },
    es: {
      'prefix': 'espanol',
      'Inscrições': ['Inscripciones'],
      'Participantes': ['Participantes', 'inscricoes/inscripciones-de-participantes'],
      'Palestrante': ['Orador'],
      'Voluntários': ['Voluntarios'],
      'O Evento': ['El Evento'],
      'Sobre o FISL': ['Sobre el FISL', 'o-evento/sobre-el-fisl'],
      'Informações úteis': ['Informaciones', 'o-evento/informaciones-utiles'],
      'Imprensa': ['Sala de Prensa', 'o-evento/sala-de-prensa'],
      'Política anti-assédio': ['Política anti acoso', 'o-evento/politica-anti-acoso-del-foro-internacional-software-libre'],
      'Patrocinadores': ['Patrocinadores', 'o-evento/patrocinios'],
      'Divulgue': ['Difunde', 'noticias/ayuda-a-difundir-el-fisl16'],
      'Guia de Hospedagem': ['Guía de Hospedajes', 'noticias/guia-de-hospedajes-fisl16'],
      'Comunidades': ['Comunidades', 'noticias/llamada-para-el-area-de-las-comunidades'],
      'Caravanas': ['Caravanas', 'noticias/inscripciones-abiertas-para-las-caravanasfisl16'],
      'Conteúdos': ['Contenidos'],
      'Programação': ['Programación', 'conteudos/programacion'],
      'Destaques': ['Destacados', 'conteudos/destacados'],
      'Convidados': ['Invitados', 'conteudos/invitados'],
      'WSL': ['WSL', 'conteudos/wsl-workshop-software-libre'],
      'Área de exposição': ['Área de Exposición', 'conteudos/area-de-exposicion'],
      'Zonas': ['Zonas'],
      'eu vou!': ["yo voy!"],
      '16º Fórum Internacional de Software Livre': '16º Foro Internacional Software Libre',
      'Realização': ["Realización"],
      'Fale Conosco': ["Habla con nosotros"],
      'O FISL': ['El FISL', 'o-evento/el-fisl'],
      'Chamada de trabalhos': ['Call for papers', 'o-evento/call-for-papers'],
      'Grupos de Usuários': ['Grupos de usuarios', 'o-evento/grupo-de-usuarios'],
      'Quem faz o fisl': ['Comité Organizador', 'o-evento/¿quien-hace-el-fisl'],
      'Patrocinadores': ['Patrocinadores', 'o-evento/patrocinadores'],
      'Banners': 'Banners',
      'Páginas Amigas': ['Páginas Amigas', 'o-evento/sitios-amigos'],
      'GT-Mobilização': ['Mobilization Team'],
      'Palestras': ['Ponencias'],
      'Robótica Livre': ['Robótica Libre', 'programacao/robotica-libre'],
      'Cultura Livre': ['Cultura Libre', 'programacao/cultura-libre'],
      'Rodada de Negócios': ['Rueda de negocios', 'programacao/ronda-de-negocios'],
      'Encontros Comunitários': ['Encuentros comunitarios', 'programacao/encuentros-comunitarios'],
      'Oficinas': ['Talleres', 'programacao/talleres'],
      'Educação': ['Educación', 'programacao/educacion'],
      'Mostra de Projetos Livres': ['Muestra de Proyectos Libres', 'programacao/proyectos-libres'],
      'Mostra de Projetos': ['Muestra de Proyectos', 'programacao/proyectos-libres'],
      'Porto Alegre': 'Porto Alegre',
      'Hospedagem': ['Hospedaje', 'porto-alegre/hospedaje'],
      'Como Chegar': ['Como llegar', 'porto-alegre/como-llegar'],
      'Roteiro de Bares e Festas': ['Bares y fiestas', 'porto-alegre/tour-de-bares-y-fiestas'],
      'Turismo': ['Tourismo', 'porto-alegre/tourismo'],
      'Inscreva-se': ['Registro'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro de Eventos de la PUCRS | Porto Alegre | Brasil'],
      'Desenvolvido pela': ["Desarrollado por"],
      'Faltam': ["¡Faltan"],
      'dias para o FISL15': ["días para el FISL15!"],
      'Falta': ["¡Falta"],
      'dia para o FISL15': ["día para el FISL15!"],
      'Inscritos': ["Inscriptos"],
      'participantes': ["participants"],
      'Divirta-se!': ["¡A divertirse!"]
    },
    eo: {
      'prefix': 'esperanto',
      'Inscrições': ['Aliĝo'],
      'Participantes': ['Partoprenantoj', 'inscricoes/aliĝoj-de-partoprenantoj'],
      'Palestrante': ['Prelegantoj',
'inscricoes/aliĝoj-de-prelegantoj-voko-por-verkoj-por-la-okazigo-de-2015'],
      'Voluntários': ['Volontuloj', 'inscricoes/aliĝoj-de-volontuloj-kiel-helpi-la-forumon-internacian-pri-softvaro-libera'],
      'O Evento': ['La evento'],
      'Sobre o FISL': ['Pri FISL', 'o-evento/pri-fisl'],
      'Informações úteis': ['Utilaj informoj', 'o-evento/utilaj-informoj'],
      'Imprensa': ['Gazetara ĉambro', 'o-evento/gazetara-ĉambro'],
      'Política anti-assédio': ['Kontraŭ-molesta politiko', 'o-evento/kontraŭ-molesta-politiko-de-forumo-internacia-pri-softvaro-libera'],
      'Patrocinadores': ['Patronoj', 'o-evento/patronoj'],
      'Divulgue': ['Diskonigu', 'noticias/helpu-diskonigi-fisl16'],
      'Guia de Hospedagem': ['Gvido pri gastado', 'noticias/gvido-pri-gastado-fisl16'],
      'Conteúdos': ['Enhavo'],
      'Programação': ['Programo'],
      'Destaques': ['Elstaraj prelegantoj', 'conteudos/elstaraj-prelegantoj'],
      'Convidados': ['Invititoj'],
      'WSL': 'WSL',
      'Área de exposição': ['Ekspoziciejo', 'conteudos/ekspoziciejo'],
      'Zonas': ['Zonoj'],
      'eu vou!': ["mi iros!"],
      '16º Fórum Internacional de Software Livre': '16-a Forumo Internacia pri Softvaro Libera',
      '8 a 11 de Julho de 2015': ['Ekde la 8-a ĝis la 11-a de julio 2015'],
      'Realização': ["Realigado"],
      '| Porto Alegre | Brasil': ['| Porto Alegre | Brazilo'],
      'Fale Conosco': ["Kontaktu nin"],
      'O FISL': ['FISL', 'o-evento/fisl-15'],
      'Chamada de trabalhos': ['Alvoko por verkoj', 'o-evento/alvoko-por-verkoj'],
      'Caravanas': ['Karavanoj'],
      'Grupos de Usuários': ['Uzanto-grupoj'],
      'Quem faz o fisl': ['Kiu faras fisl-on', 'o-evento/kiu-faras-fisl-on'],
      'Banners': 'Standardoj',
      'Páginas Amigas': ['Amikaj paĝoj', 'o-evento/amikoj-pa%C4%9Doj'],
      'GT-Mobilização': ['Mobilization Team'],
      'Palestras': ['Prelegoj'],
      'Robótica Livre': ['Libera robotiko', 'programacao/libera-robotiko'],
      'Cultura Livre': ['Libera kulturo', 'programacao/libera-kulturo'],
      'Rodada de Negócios': ['Rondo de negocoj', 'programacao/rondo-de-negocoj'],
      'Encontros Comunitários': ['Komunumaj renkontiĝoj', 'programacao/komunumaj-renkontiĝoj'],
      'Oficinas': ['Metiejoj', 'programacao/oficina'],
      'Educação': ['Edukado', 'programacao/edukado'],
      'Mostra de Projetos Livres': ['Ekspozicio de liberaj projektoj', 'programacao/montras-projekto-libera'],
      'Mostra de Projetos': ['Ekspozicio de projektoj', 'programacao/montras-projekto-libera'],
      'Porto Alegre': 'Porto Alegre',
      'Hospedagem': ['Gastado', 'porto-alegre/gastado'],
      'Como Chegar': ['Kiel alveni', 'porto-alegre/kiel-alveni'],
      'Roteiro de Bares e Festas': ['Vojplano de drinkejoj kaj festoj', 'porto-alegre/vojplano-de-drinkejoj-kaj-festoj'],
      'Turismo': ['Turismo', 'porto-alegre/turismo-porto-alegre'],
      'Inscreva-se': ['Aliĝo'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro de Eventoj de PUC-RS | Porto Alegre | Brazilo'],
      'Desenvolvido pela': ["Disvolvita de"],
      'Faltam': ["Restas"],
      'dias para o FISL15': ["tagoj ĝis FISL15!"],
      'Falta': ["Restas"],
      'dia para o FISL15': ["tago ĝis FISL15!"],
      'Inscritos': ["Aliĝintoj"],
      'participantes': ["partoprenantoj"],
      'Divirta-se!': ["Amuziĝu!"]
    },
    it: {
      'prefix': 'italian',
      'Inscrições': ['Iscrizione'],
      'Participantes': ['Partecipanti', 'inscricoes/iscrizioni-dei-partecipanti'],
      'Palestrante': ['Relatori',
'inscricoes/iscrizioni-dei-relatori-call-for-papers-per-l’edizione-2015'],
      'Voluntários': ['Volontari',
'inscricoes/iscrizioni-dei-volontari-come-collaborare-con-il-forum-internazionale-del-software-libero'],
      'O Evento': ['L´Evento', 'l-evento'],
      'Sobre o FISL': ['Sul FISL', 'o-evento/sul-fisl'],
      'Informações úteis': ['Informazioni Utili'],
      'Imprensa': ['Stampa', 'o-evento/ufficio-stampa'],
      'Política anti-assédio': ['politica anti-stalking', 'o-evento/politica-anti-stalking-del-forum-internazionale-del-software-libero'],
      'Patrocinadores': ['Sponsor', 'o-evento/sponsor'],
      'Divulgue': ['Divulga', 'noticias/aiuta-a-diffondere-il-fisl16'],
      'Conteúdos': ['Programma'],
      'Programação': ['Programmazione', 'conteudos/programma'],
      'Destaques': ['Keynote speaker', 'programacao/keynote-speaker'],
      'Convidados': ['Invitati'],
      'WSL': 'WSL',
      'Área de exposição': ['Area espositiva', 'conteudos/area-espositiva'],
      'Zonas': ['Le aree'],
      'eu vou!': ["Vengo anch'io"],
      '16º Fórum Internacional de Software Livre': '16º Forum Internazionale Software Livre',
      '8 a 11 de Julho de 2015': ['8 - 11 luglio 2015'],
      'Realização': ["Realizzazione"],
      '| Porto Alegre | Brasil': ['| Porto Alegre | Brasile'],
      'Fale Conosco': ["Contattaci"],
      'O FISL': ['Il FISL', 'o-evento/il-fisl'],
      'Chamada de trabalhos': ['Call for papers', 'o-evento/call-for-paper'],
      'Caravanas': ['Carovane'],
      'Grupos de Usuários': ['Gruppi di Utenti', 'o-evento/gruppo-di-utenti'],
      'Patrocine': ['Sponsorizza', 'o-evento/sponsorizza'],
      'Quem faz o fisl': ['Chi Siamo', 'o-evento/chi-siamo'],
      'Banners': 'Banner',
      'Páginas Amigas': ['Pagine degli amici', 'o-evento/pagine-degli-amici'],
      'GT-Mobilização': ['Mobilization Team'],
      'Palestras': ['Conferenze'],
      'Robótica Livre': ['Robotica Libera', 'programacao/robotica-libera'],
      'Cultura Livre': ['Cultura Libera', 'programacao/cultura-libera'],
      'Rodada de Negócios': ['Business Roundtable', 'programacao/business-roundtable'],
      'Encontros Comunitários': ['Incontri Comunitari', 'programacao/incontri-comunitari'],
      'Oficinas': ['Officine', 'programacao/officine'],
      'Educação': ['Educazione', 'programacao/educazione'],
      'Mostra de Projetos Livres': ['Mostra di Progetti Liberi', 'programacao/mostra-di-progetti-liberi'],
      'Mostra de Projetos': ['Mostra di Progetti', 'programacao/mostra-di-progetti-liberi'],
      'Porto Alegre': 'Porto Alegre',
      'Hospedagem': ['Alloggio', 'porto-alegre/alloggio'],
      'Como Chegar': ['Come arrivare', 'porto-alegre/come-arrivare'],
      'Roteiro de Bares e Festas': ['Bar e feste', 'porto-alegre/elenco-dei-bar-e-delle-feste'],
      'Turismo': ['Turismo', 'porto-alegre/turismo-a-porto-alegre'],
      'Inscreva-se': ['Iscrizione'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro degli Eventi PUCRS | Porto Alegre | Brasile'],
      'Realização': ["Realizzazione"],
      'Fale Conosco': ["Contattaci"],
      'Desenvolvido pela': ["Sviluppata da"],
      'Faltam': ["Mancano"],
      'dias para o FISL15': ["giorni per il FISL15!"],
      'Falta': ["Manca"],
      'dia para o FISL15': ["giorno per il FISL15!"]
    }
  }

  $('.blog-posts > div').each(function(index, value) {
    var post = $(value);
    if (post.attr('class').match(/(odd|even)-post$/)) {
      post.addClass('post-' + index);
    }
  })

  // Reestrutura as datas de posts na visualização de blog
  if ( jQuery('html').attr('lang') == 'en' )
    jQuery('.profile-homepage .blog-post .date').html(function(pos, txt){
      return txt.replace(
        /^\s*([^ ]{3}).* ([0-9]+), (.+)/,
        "<div class='month'>$1</div> <div class='day'>$2</div> <div class='year'>$3</div>"
      );
    });
  if ( jQuery('html').attr('lang') == 'pt' )
    jQuery('.profile-homepage .blog-post .date').html(function(pos, txt){
      return txt.replace(
        /([0-9]+) ([^\s]+) ([^\s]{3}).* [^\s]+ ([0-9]+)/,
        "<div class='month'>$3</div> <div class='day'>$1</div> <div class='year'>$4</div>"
      );
    });

  // Coloca a imagem acima do título da notícia
  $('.profile-homepage .blog-post').each(function(num, post) {
    var img = $('zoomable-image:first', post).remove();
    if ( img.length == 0 ) {
      var img = $('img:first', post).remove();
    }
    img.prependTo(post);
  });

  $('.box-1 .members-block').insertAfter('#footer-registration');

  $('.box-1 .gallery-block').insertBefore('#theme-footer #theme-footer-inner');
  $('.profile-homepage .gallery-block').insertBefore('#footer-registration');

  $('#site-title').prependTo('#theme-header-inner-2');

  // Move search and user menu to top bar:
  $('#user').appendTo('#theme-header-inner');
  $('#top-profile-search').insertAfter('.search-link');

//  stylePeopleCounter();
  /* Add number of subscribers manually on footer and on sideblock on internal pages*/
  $('#fisl16-npeople').html($('#subscribers-by-hand').html());

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#top-menu li a, #mapsite li a, #fisl-data, #fisl-local, #block-577333 .block-title a, #block-581237 .block-title, .block-title span, #footer-org h2, #footer-contato, .box2-contact span, #countdown-block span, #fisl16-npeople div').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html().replace(/^\s*|\s*$/g,'')];
      if (translated) {
        if (translated.constructor != Array) translated = [translated];
        element.html(translated[0]);
        if (element.attr('href') && translated[1]) {
          element.attr('href', '/fisl16/' + translated[1]);
        }
      }
    });
  };

  $('.lt850 #top-menu').on('click', '.menu-drop', function() {
    $('#top-menu .menu-links').toggle();
  });

  $('.lt850 #top-menu .menu-links').on('click', 'li', function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });

  if ( $('.controller-custom_forms_plugin_profile').length ) {
    $("label[for='author_name']").text('Nome');
    $("label[for='author_email']").text('E-mail');
  };

})(jQuery);

function countdown_clock(year, month, day, hour, minute, format) {
    // esta div será inclusa no local destinado ao contador
    /*pode-se escolher praticamente qualquer local para a insercao do contador */
    html_code = '<div id="countdown" </div>';

     document.write(html_code);

     countdown(year, month, day, hour, minute, format);
}

function splitNumbers(numbers) {
  var numbersArray = numbers.toString().split("");
  var numbersSpans = ""
  for (var i = 0; i < numbersArray.length; i++) {
    numbersSpans = numbersSpans + "<span class='number'>" + numbersArray[i] + "</span>";
  }
  return numbersSpans;
}

function countdown(year, month, day, hour, minute, format) {
     Today = new Date();
     Todays_Year = Today.getFullYear() ;
     Todays_Month = Today.getMonth();

     //Converte a data aqual e a data-alvo em milisegundos.
     Todays_Date = (new Date(Todays_Year, Todays_Month, Today.getDate(),
                             Today.getHours(), Today.getMinutes(), Today.getSeconds())).getTime();
     Target_Date = (new Date(year, month - 1, day+1, hour, minute, 00)).getTime();

     //Calcula a diferenca entre as datas e converte em segundos
     Time_Left = Math.round((Target_Date - Todays_Date) / 1000);

     if(Time_Left < 0)
        Time_Left = 0;

     //Opcao de formato: somente segundos ou detalaho (dia,hora,minuto,segundo)
     switch(format) {
        case 1:
             //Forma detalhada
             days = Math.floor(Time_Left / (60 * 60 * 24));
             Time_Left %= (60 * 60 * 24);

             dps = 's';
             //sufixo de pluralidade.
             if(days == 1) dps ='';

             //split days in spans
             daysSpans = splitNumbers(days);

             // SAIDA - uma forma simples de definir o que sera impresso
             document.getElementById('countdown').innerHTML = daysSpans;
             break;
        default:
             document.getElementById('countdown').innerHTML = Time_Left + ' seconds';
     }

     //Chamada recursiva - Mantem o relogio funcionando
     setTimeout('countdown(' + year + ',' + month + ',' + day + ',' + hour + ',' + minute + ',' + format + ');', 100000);
}

function stylePeopleCounter() {
  var peopleDiv = jQuery('#fisl16-npeople');
  var npeople = peopleDiv.html();
  peopleDiv.html(splitNumbers(npeople));
  jQuery('#fisl-people-counter div').show().appendTo(peopleDiv);
}
