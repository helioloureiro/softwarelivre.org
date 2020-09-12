(function($) {

  var $translations = {
    en: {
      'prefix': 'english',
      'Inscrições': ['Registrations'],
      'Participantes': ['Attendants', 'inscricoes/sign-in'],
      'Palestrantes': ['Speakers', 'inscricoes/speakers'],
      'O Evento': ['The Event'],
      'Sobre o FISL': ['About FISL', 'o-evento/about-fisl'],
      'Informações Úteis': ['FAQ', 'o-evento/useful-information'],
      'Imprensa e Comunicação': ['Pressroom', 'o-evento/pressroom'],
      'Política Anti-Assédio': ['Anti-harassment policy', 'o-evento/anti-harassment-policy-of-the-international-free-software-forum'],
      'Patrocinadores': ['Sponsors', 'o-evento/sponsors'],
      'Divulgue': ['Publish'],
      'Conteúdos': ['Program'],
      'Programação': ['Schedule'],
      'Grade de atividades': ['Activities List', 'programacao/activities-list'],
      'Destaques': ['Highlights'],
      'Convidados': ['Special guests'],
      'Workshop SL': 'Free Software Workshop',
      'Áreas temáticas': ['Thematic Areas', 'programacao/thematic-areas'],
      'Todas as notícias': ["All news"],
      'Eu vou!': ["I'm in!"],
      '17º Fórum Internacional de Software Livre': '17º International Free Software Forum',
      'A tecnologia que liberta': 'The technology that frees',
      'Posts mais novos': 'Recent posts',
      'Posts mais antigos': 'Older posts',
      'Realização': ["Made by"],
      'Centro de Eventos PUCRS | Porto Alegre | RS | Brasil': ['PUCRS Center of Events | Porto Alegre | Brazil'],
      'Desenvolvido pela': ["Developed by"],
      'Fale Conosco': ["Contact us"],
      'Olá,': 'Hi,',
      'As informações preenchidas no formulário serão enviadas para os administradores.': 'The informations filled into the form will be sent to admnistrators.',
      'Nome': 'Name',
      'E-mail': 'E-mail',
      'Categoria': 'Category',
      'Dúvida Reclamação Sugestão': 'Questions Complaints Suggestions',
      'Assunto': 'Subject',
      'Mensagem': 'Message',
      'Cancelar': 'Cancel',
      'Inscreva-se <br>aqui': ['Submit your<br/>presentation'],
      'Cadastre-se': ['Sign up'],
      'Inscreva-se na newsletter do FISL': ['Sign up for FISL newsletter'],
      'Internet das coisas ou das pessoas?': ['Internet of the things or the people?'],
      'O papel do Software Livre para o futuro de todos (os) nós.': ['The role of Free Software in the future of people and of our connections.'],
      '13 a 16 de Julho de 2016': ['July 13th to 16th 2016'],
      'Mais vídeos': ["More videos"],
      'Hospedagem': ['Accommodation', 'o-evento/accommodation'],
      'Voluntários': ['Volunteers', 'inscricoes/volunteers'],
      'Expositores': ['Exhibitors'],
      'Caravanas': ['Convoys'],
      'Comunidades': ['Communities', 'programacao/communities'],
      'Porto Alegre': 'Porto Alegre',
      'Como Chegar': ['How do I get there'],
      'Roteiro de Bares e Festas': ['Bars and parties route'],
      'Turismo': ['Tourism'],
      'Minieventos': ['Lightning talks', 'programacao/lightning-talks'],
      '<b>Minieventos</b>': ['<b>Lightning talks</b>', 'programacao/lightning-talks'],
      'Páginas Amigas': ['Partner links'],
      'Programação Cultural': ['Cultural agenda'],
      'participantes': ["participants"]
    },
    es: {
      'prefix': 'espanol',
      'Inscrições': ['Inscripciones'],
      'Participantes': ['Participantes', 'inscricoes/inscripciones-de-participantes'],
      'Palestrantes': ['Orador', 'inscricoes/oradores'],
      'Voluntários': ['Voluntarios', 'inscricoes/inscripcion-de-voluntarios'],
      'O Evento': ['El evento'],
      'Sobre o FISL': ['Sobre el FISL', 'o-evento/sobre-el-fisl'],
      'Informações Úteis': ['Informaciones Utiles', 'o-evento/informaciones-utiles'],
      'Imprensa e Comunicação': ['Prensa y Comunicación', 'o-evento/prensa-y-comunicacion'],
      'Política Anti-Assédio': ['Política anti acoso', 'o-evento/politica-anti-acoso'],
      'Patrocinadores': ['Patrocinadores', 'o-evento/patrocinadores-del-fisl'],
      'Divulgue': ['Difunde'],
      'Conteúdos': ['Contenidos'],
      'Programação': ['Programación'],
      'Grade de atividades': ['Grilla de actividades', 'programacao/grilla-de-actividades'],
      'Destaques': ['Destacados'],
      'Convidados': ['Invitados'],
      'Workshop SL': ['Workshop SL', 'programacao/workshopsl'],
      'Áreas temáticas': ['Áreas Temáticas', 'programacao/areas-tematicas-del-fisl'],
      'Todas as notícias': ["Todas las noticias"],
      'Eu vou!': ["Yo voy!"],
      '17º Fórum Internacional de Software Livre': '17º Foro Internacional Software Libre',
      'A tecnologia que liberta': 'La tecnología que libera',
      'Realização': ["Realización"],
      'Centro de Eventos PUCRS | Porto Alegre | RS | Brasil': ['Centro de Eventos de la PUCRS | Porto Alegre | Brasil'],
      'Desenvolvido pela': ["Desarrollado por Colivre"],
      'Fale Conosco': ["Habla con nosotros"],
      'Olá,': 'Hola,',
      'As informações preenchidas no formulário serão enviadas para os administradores.': 'Los datos rellenados en el formulario serán enviados para los administradores',
      'Nome': 'Nombre',
      'E-mail': 'E-mail',
      'Categoria': 'Categoría',
      'Dúvida Reclamação Sugestão': 'Dudas, Reclamos, Sugerencias',
      'Assunto': 'Tema',
      'Mensagem': 'Mensaje',
      'Cancelar': 'Cancelar',
      'Inscreva-se <br>aqui': ['Inscribí tu<br/>conferencia'],
      'Cadastre-se': ['Registrate'],
      'Inscreva-se na newsletter do FISL': ['Suscribite a la newslette del FISL'],
      'Internet das coisas ou das pessoas?': ['¿Internet de las cosas o de las personas?'],
      'O papel do Software Livre para o futuro de todos (os) nós.': ['El papel del software libre en nuestro futuro y en el de nuestras conexiones'],
      '13 a 16 de Julho de 2016': ['13 al 16 de julio de 2016'],
      'Mais vídeos': ["Más videos"],
      'Hospedagem': ['Alojamiento', 'o-evento/hospedaje'],
      'Expositores': ['Expositores', 'programacao/expositores-en-el-fisl'],
      'Caravanas': ['Caravanas', 'inscricoes/inscripcion-de-caravanas'],
      'Comunidades': ['Comunidades', 'programacao/comunidades-en-el-fisl'],
      'Porto Alegre': 'Porto Alegre',
      'Como Chegar': ['Cómo llegar'],
      'Roteiro de Bares e Festas': ['Bares y fiestas'],
      'Turismo': ['Turismo'],
      'Minieventos': ['Mini eventos', 'inscricoes/mini-eventos'],
      '<b>Minieventos</b>': ['<b>Mini eventos</b>', 'programacao/mini-eventos'],
      'Páginas Amigas': ['Páginas Amigas', 'o-evento/paginas-amigas-del-fisl'],
      'Programação Cultural': ['Programación Cultural'],
      'participantes': ["participantes"]
    },
    eo: {
      'prefix': 'esperanto',
      'Inscrições': ['Aliĝo'],
      'Participantes': ['Partoprenantoj', 'inscricoes/partoprenantoj'],
      'Palestrantes': ['Prelegantoj', 'inscricoes/prelegantoj'],
      'O Evento': ['La evento'],
      'Sobre o FISL': ['Pri FISL', 'o-evento/pri-fisl'],
      'Informações Úteis': ['Utilaj informoj', 'o-evento/utilaj-informoj'],
      'Imprensa e Comunicação': ['Gazetaro kaj diskonigado', 'o-evento/gazetaro-kaj-komunikado'],
      'Política Anti-Assédio': ['Kontraŭ-molesta politiko'],
      'Patrocinadores': ['Sponsoj', 'o-evento/sponsoroj'],
      'Divulgue': ['Diskonigu'],
      'Conteúdos': ['Enhavo'],
      'Programação': ['Programo'],
      'Grade de atividades': ['Tabelo de aktivaĵoj', 'programacao/tabelo-de-aktiva%C4%B5oj'],
      'Destaques': ['Elstaraj', 'programacao/elstaraj-prelegantoj'],
      'Convidados': ['Invititoj'],
      'Workshop SL': 'WSL',
      'Áreas temáticas': ['Temaj zonoj', 'programacao/temaj-zonoj'],
      'Todas as notícias': ["Ĉiuj novaĵoj"],
      'Eu vou!': ["Mi iros!"],
      '17º Fórum Internacional de Software Livre': '17ª Forumo Internacia pri Softvaro Libera',
      'A tecnologia que liberta': 'The technology that frees',
      'Posts mais novos': 'Pli freŝaj afiŝoj',
      'Posts mais antigos': 'Malpli freŝaj afiŝoj',
      'Realização': ["Realigado"],
      'Centro de Eventos PUCRS | Porto Alegre | RS | Brasil': ['Centro de Eventoj de PUC-RS | Porto Alegre | Brazilo'],
      'Desenvolvido pela': ["Disvolvita de Colivre"],
      'Fale Conosco': ["Kontaktu nin"],
      'Olá,': 'Saluton,',
      'As informações preenchidas no formulário serão enviadas para os administradores.': 'La informoj tajpitaj en la formularo estos senditaj al la administrantoj.',
      'Nome': 'Nomo',
      'E-mail': 'Retpoŝta adreso',
      'Categoria': 'Kategorio',
      'Dúvida Reclamação Sugestão': 'Duboj Plendoj Sugestoj',
      'Assunto': 'Temo',
      'Mensagem': 'Mesaĝo',
      'Cancelar': 'Nuligi',
      'Inscreva-se <br>aqui': ['Submetu vian<br/>prelegon'],
      'Cadastre-se': ['Registriĝi'],
      'Inscreva-se na newsletter do FISL': ['Abonu la novaĵleteron de FISL'],
      'Internet das coisas ou das pessoas?': ['Ĉu interreto de aĵoj aŭ de homoj?'],
      'O papel do Software Livre para o futuro de todos (os) nós.': ['La rolo de libera programaro en la estonteco de ĉiuj ni kaj niaj konektoj.'],
      '13 a 16 de Julho de 2016': ['Ekde la 13-a ĝis la 16-a de julio 2016'],
      'Mais vídeos': ["Pli da videoj"],
      'Hospedagem': ['Gastado', 'o-evento/gvido-pri-gastado'],
      'Voluntários': ['Volontuloj', 'inscricoes/volontuloj'],
      'Expositores': ['Ekspoziciistoj', 'programacao/ekspoziciistoj'],
      'Caravanas': ['Karavanoj', 'inscricoes/karavanoj'],
      'Comunidades': ['Communities', 'programacao/workshops'],
      'Porto Alegre': 'Porto Alegre',
      'Como Chegar': ['Kiel alveni'],
      'Roteiro de Bares e Festas': ['Vojplano de drinkejoj kaj festoj'],
      'Turismo': ['Turismo'],
      'Minieventos': ['Mini okazaĵoj', 'inscricoes/mini-okazaĵoj'],
      '<b>Minieventos</b>': ['<b>Mini okazaĵoj</b>', 'programacao/mini-okazaĵoj'],
      'Páginas Amigas': ['Amikaj paĝoj', 'o-evento/amikaj-pa%C4%9Doj'],
      'participantes': ["partoprenantojn"]
    },
    it: {
      'prefix': 'italian',
      'Inscrições': ['Iscrizioni'],
      'Participantes': ['Partecipanti', 'inscricoes/partecipanti'],
      'Palestrantes': ['Relatori', 'inscricoes/relatori'],
      'O Evento': ["L'Evento"],
      'Sobre o FISL': ['Sul Fisl', 'o-evento/sul-fisl'],
      'Informações Úteis': ['Informazioni Utili', 'o-evento/informazioni-utili'],
      'Imprensa e Comunicação': ['Stampa', 'o-evento/ufficio-stampa'],
      'Política Anti-Assédio': ['Politica anti-stalking', 'o-evento/politica-anti-stalking'],
      'Patrocinadores': ['Sponsor', 'o-evento/sponsor'],
      'Divulgue': ['Divulga'],
      'Conteúdos': ['Programma'],
      'Programação': ['Programmazione'],
      'Grade de atividades': ['Griglia delle attività', 'programacao/griglia-dell-attivita'],
      'Destaques': ['In vitrina'],
      'Convidados': ['Invitati'],
      'Workshop SL': 'WSL',
      'Áreas temáticas': ['Aree Tematiche', 'programacao/aree-tematiche'],
      'Todas as notícias': ["News"],
      'Eu vou!': ["Vengo anch'io!"],
      '17º Fórum Internacional de Software Livre': '17º Forum Internazionale Software Livre',
      'A tecnologia que liberta': 'Tecnologia che libera',
      'Posts mais novos': 'Post più nuovi',
      'Posts mais antigos': 'Post più antichi',
      'Realização': ["Realizzazione"],
      'Centro de Eventos PUCRS | Porto Alegre | RS | Brasil': ['Centro degli Eventi PUCRS | Porto Alegre | Brasile'],
      'Desenvolvido pela': ["Sviluppata da Colivre"],
      'Fale Conosco': ["Contattaci"],
      'Olá,': 'Ciao,',
      'As informações preenchidas no formulário serão enviadas para os administradores.': 'Le informazioni compilate sul modulo saranno inviate agli amministratori.',
      'Nome': 'Nome',
      'E-mail': 'E-mail',
      'Categoria': 'Categoria',
      'Dúvida Reclamação Sugestão': 'Dubbi Reclami Suggerimenti',
      'Assunto': 'Oggetto',
      'Mensagem': 'Messaggio',
      'Cancelar': 'Cancel',
      'Inscreva-se <br>aqui': ['Iscrivetevi Qui'],
      'Cadastre-se': ['Iscriviti'],
      'Inscreva-se na newsletter do FISL': ['Iscriviti alla newsletter del FISL'],
      'Internet das coisas ou das pessoas?': ['L’Internet delle cose o delle persone'],
      'O papel do Software Livre para o futuro de todos (os) nós.': ['Ruolo del software libero per il futuro di tutti noi... e di tutti i nodi'],
      '13 a 16 de Julho de 2016': ['13 - 16 luglio 2016'],
      'Mais vídeos': ["Altri video"],
      'Hospedagem': ['Alloggio', 'o-evento/alloggio'],
      'Voluntários': ['Volontari', 'inscricoes/volontari'],
      'Expositores': ['Expositori', 'programacao/espositore'],
      'Caravanas': ['Carovane', 'inscricoes/carovane'],
      'Comunidades': ['Comunità', 'programacao/comunita'],
      'Porto Alegre': 'Porto Alegre',
      'Como Chegar': ["L'itinerario"],
      'Roteiro de Bares e Festas': ['Bar e feste'],
      'Turismo': ['Turismo'],
      'Minieventos': ['Minieventi', 'inscricoes/mini-eventi'],
      '<b>Minieventos</b>': ['<b>Minieventi</b>', 'programacao/mini-eventi'],
      'Páginas Amigas': ['Pagine degli Amici', 'o-evento/pagine-degli-amici'],
      'Programação Cultural': ['Programmazione Culturale'],
      'participantes': ["partecipanti"]
    }
  }

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#top-menu li span, #top-menu li a, #mapsite li span, #mapsite li a, #sub-banner h1, #sub-banner h2, #sub-banner h4, #sub-banner p, #inscreva span, h3.block-title span, .fisl17-theme-button, #fisl17-social-block-title, #footer-org h3, #footer-contato, .box2-contact span, #footer-2 .box1 a span, #inscreva-newsletter, #fisl17-npeople div').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html().replace(/^\s*|\s*$/g,'')];
      if (element.attr('class') == 'fisl17-theme-button' && element.attr('value'))
          translated = $translations[language][element.val().replace(/^\s*|\s*$/g,'')];
      if (translated) {
        if (translated.constructor != Array) translated = [translated];
        if (element.attr('class') == 'fisl17-theme-button' && element.attr('value'))
            element.val(translated[0]);
        else
            element.html(translated[0]);
        if (element.attr('href') && translated[1]) {
          element.attr('href', '/fisl17/' + translated[1]);
        }
      }
    });
  };

  // Select banner randomly
  $('#fisl17-banner').addClass('banner-'+Math.floor(Math.random()*(3-1+1)+1));

  // Move user menu to top bar:
  $('#user').appendTo('#top-menu');
  // Move login buttons we added in the footer to members block
  $('.members-signup-link').appendTo('.members-block .join-leave-button');
  $('.members-login-link').appendTo('.members-block .join-leave-button');
  // Move blocks to right place except if in block edit page
  if ($('#box-organizer').length === 0) {
      $('.members-block').insertAfter('#footer-registration');
      $('.gallery-block').appendTo('#footer-gallery-blocks');
      $('#top-menu-radio-sl-content').appendTo('#top-menu-radio-sl');
      $('#sub-banner').appendTo('#theme-header');
  }

  // Coloca a imagem acima do título da notícia
  $('#article .article-body-img').remove().prependTo($('.main-content'));

  // Copy email confirmation in form so there is only one text field necessary
  $('#registration-box #email').bind('keyup keypress blur', function() {
      $('#registration-box #emailconfirm').val($(this).val());
  });


  // MEDIA FUNCTIONS

  function getMediaExtension(media) {
      if (media.hasAttribute('src'))
          var extension = media.src.split('.').pop();
      else
          var extension = media.children[0].src.split('.').pop();
      if (media.tagName === 'VIDEO' && extension === 'ogv')
          return 'ogg';
      else
          return extension;
  }

  function reloadMediaWithVJS(media, index, dimensions) {
      var media_type = media.tagName.toLowerCase();
      var media_parent = media.parentElement;
      if (media.hasAttribute('src'))
          var media_source = media.src;
      else
          var media_source = media.children[0].src;
      var media_extension = getMediaExtension(media);
      if (media_type === 'audio')
          var skin_type = 'radio';
      else
          var skin_type = 'default';

      $(media_parent).html('<'+media_type+' id="'+media_type+'-custom-'+index+'" class="video-js vjs-'+skin_type+'-skin" controls preload="metadata" data-setup="{}" '+dimensions+'> <source type="'+media_type+'/'+media_extension+'" src="'+media_source+'"></audio>');
      videojs('#'+media_type+'-custom-'+index);
  }

  // Video Block plugin doesn't add video-js so we do it manually for every
  // video
  $('video').each(function(index, value) {
    if (value.className === '') {
        // There is a bug on tinymce forcing videos to a ratio of 2
        // so we reset the dimensions in those cases
        if (value.width / value.height == 2)
            var dimension = '';
        else
            var dimension = 'height=' + value.height + 'px' + ' width=' + value.width + 'px';

        reloadMediaWithVJS(value, index, dimension);
    }
  });
  // Do the same for audio added by tinymce
  $('#article audio').each(function(index, value) {
      reloadMediaWithVJS(value, index, '');
  });
  // HTML5 Video plugin adds an inexistent poster so we remove it
  $('.article-body-uploaded-file video').each(function(index, value) {
      value.removeAttribute('poster');
      var video_extension = getMediaExtension(value);
      value.children[0].type = 'video/'+video_extension;
  });

  $('#top-menu').on('click', '.menu-drop', function() {
    $('#top-menu #top-menu-content').toggle();
  });

  $('#top-menu #top-menu-content').on('click', 'li', function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });


})(jQuery);

(function() {
  var body = jQuery(document.body);
  function registerDocWidth() {
    var docW = body.width();
    for ( var w=600; w<=2000; w+=50 ) {
      if ( docW < w ) {
        body.removeClass('gt'+w);
        body.addClass('lt'+w);
      } else {
        body.removeClass('lt'+w);
        if ( docW > w ) body.addClass('gt'+w);
      }
    }
  }
  registerDocWidth();
  jQuery(window).resize(registerDocWidth);

  /*** Register and update Scrolledheight for CSS *****************************/
  function registerScrolling() {
    var doc = jQuery(document.documentElement);
    var scrollTop = jQuery(document).scrollTop();
    if(scrollTop<1) doc.addClass('not-scrolled').removeClass('scrolled');
    else doc.addClass('scrolled').removeClass('not-scrolled');
    for ( var i=10; i<=500; i+=10 ) {
      doc.removeClass('scrolled-gt'+i).removeClass('scrolled-lt'+i);
      if (scrollTop<i) doc.addClass('scrolled-lt'+i);
      else doc.addClass('scrolled-gt'+i);
    }
  }
  registerScrolling(); // run now and init the right layout size
  jQuery(registerScrolling); // run onload, and adjust to the scroll
  jQuery(document).bind('scroll', registerScrolling); // run when page scroll
})();


//function splitNumbers(numbers) {
  //var numbersArray = numbers.toString().split("");
  //var numbersSpans = ""
  //for (var i = 0; i < numbersArray.length; i++) {
    //numbersSpans = numbersSpans + "<span class='number'>" + numbersArray[i] + "</span>";
  //}
  //return numbersSpans;
//}


//function stylePeopleCounter() {
  //var peopleDiv = jQuery('#fisl16-npeople');
  //var npeople = peopleDiv.html();
  //peopleDiv.html(splitNumbers(npeople));
  //jQuery('#fisl-people-counter div').show().appendTo(peopleDiv);
//}
