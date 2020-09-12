(function($) {

  var $translations = {
    en: {
      'prefix': 'english',
      'O Evento': ['The Event', 'the-event'],
      'O FISL': ['FISL', 'o-evento/fisl'],
      'Inscrições': ['Registration'],
      'Chamada de trabalhos': ['Call for works', 'o-evento/call-for-works'],
      'Caravanas': ['Convoys', 'o-evento/convoys'],
      'Grupos de Usuários': ['Users Groups', 'o-evento/users-groups'],
      'Info Útil': ['FAQ', 'o-evento/useful-informations'],
      'Patrocine': ['Sponsor', 'o-evento/sponsor'],
      'Voluntários': ['Volunteers', 'o-evento/volunteers'],
      'Sala de Imprensa': ['Pressroom', 'o-evento/press-room'],
      'Quem faz o fisl': ['Who is FISL?', 'o-evento/who-is-fisl'],
      'Patrocinadores': ['Sponsors', 'o-evento/sponsors'],
      'Banners': 'Banners',
      'Páginas Amigas': ["Friends' Pages", 'o-evento/friends-pages'],
      'Política Anti-Assédio': ['Anti-harassment Policy', 'o-evento/anti-harassment-policy'],
      'GT-Mobilização': ['Mobilization Team'],
      'Programação': 'Programme',
      'Palestras': ['Lectures'],
      'Destaques': ['Highlights', 'programacao/highlights'],
      'Palestrantes Convidados': ['Invited Speakers', 'programacao/invited-speakers'],
      'WSL': 'WSL',
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
      '7 a 10 de Maio de 2014': ['May, 7 to 10, 2014'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['PUCRS Center of Events | Porto Alegre | Brasil'],
      'Eu vou!': ["I'm in!"],
      'Realização': ["Realization"],
      'Fale Conosco': ["Contact us"],
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
      'O Evento': ['El Evento', 'el-evento'],
      'O FISL': ['El FISL', 'o-evento/el-fisl'],
      'Inscrições': ['Registro'],
      'Chamada de trabalhos': ['Call for papers', 'o-evento/call-for-papers'],
      'Caravanas': ['Caravanas', 'o-evento/caravana'],
      'Grupos de Usuários': ['Grupos de usuarios', 'o-evento/grupo-de-usuarios'],
      'Info Útil': ['Informaciones', 'o-evento/preguntas-frecuentes'],
      'Patrocine': ['Patrocinar', 'o-evento/auspicie'],
      'Voluntários': ['Voluntarios', 'o-evento/sea-un-voluntario'],
      'Sala de Imprensa': ['Sala de Prensa', 'o-evento/sala-de-prensa'],
      'Quem faz o fisl': ['Comité Organizador', 'o-evento/¿quien-hace-el-fisl'],
      'Patrocinadores': ['Patrocinadores', 'o-evento/patrocinadores'],
      'Banners': 'Banners',
      'Páginas Amigas': ['Páginas Amigas', 'o-evento/sitios-amigos'],
      'Política Anti-Assédio': ['Política Anti Acoso', 'o-evento/politica-anti-acoso'],
      'GT-Mobilização': ['Mobilization Team'],
      'Programação': 'Programación',
      'Palestras': ['Ponencias'],
      'Destaques': ['Destacados', 'programacao/destacados'],
      'Palestrantes Convidados': ['Oradores Confirmados', 'programacao/oradores-confirmados'],
      'WSL': 'WSL',
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
      '7 a 10 de Maio de 2014': ['7 al 10 de mayo de 2014'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro de Eventos de la PUCRS | Porto Alegre | Brasil'],
      'Eu vou!': ["Yo voy!"],
      'Realização': ["Realización"],
      'Fale Conosco': ["Habla con nosotros"],
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
      'O Evento': ['La evento', 'la-evento'],
      'O FISL': ['FISL', 'o-evento/fisl-15'],
      'Inscrições': ['Aliĝo'],
      'Chamada de trabalhos': ['Alvoko por verkoj', 'o-evento/alvoko-por-verkoj'],
      'Caravanas': ['Karavanoj', 'o-evento/monte-sua-caravana'],
      'Grupos de Usuários': ['Uzanto-grupoj'],
      'Info Útil': ['Utilaj informoj', 'o-evento/utilaj-informoj'],
      'Patrocine': ['Patronu', 'o-evento/patronu'],
      'Voluntários': ['Volontuloj', 'o-evento/volontuloj'],
      'Sala de Imprensa': ['Gazetara ĉambro', 'o-evento/gazetara-Ĉambro'],
      'Quem faz o fisl': ['Kiu faras fisl-on', 'o-evento/kiu-faras-fisl-on'],
      'Patrocinadores': ['Sponsoroj', 'o-evento/sponsoroj'],
      'Banners': 'Standardoj',
      'Páginas Amigas': ['Amikaj paĝoj', 'o-evento/amikoj-pa%C4%9Doj'],
      'Política Anti-Assédio': ['Kontraŭ-molesta politiko', 'o-evento/anti-misuzo-privateco'],
      'GT-Mobilização': ['Mobilization Team'],
      'Programação': 'Programo',
      'Palestras': ['Prelegoj'],
      'Destaques': ['Elstaraj prelegantoj', 'programacao/keynote-parolantoj'],
      'Palestrantes Convidados': ['Invititaj Prelegantoj', 'programacao/invititaj-prelegantoj'],
      'WSL': 'WSL',
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
      '7 a 10 de Maio de 2014': ['Ekde la 7-a ĝis la 10-a de majo 2014'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro de Eventoj de PUC-RS | Porto Alegre | Brazilo'],
      'Eu vou!': ["Mi iros!"],
      'Realização': ["Realigado"],
      'Fale Conosco': ["Kontaktu nin"],
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
      'O Evento': ['L´Evento', 'l-evento'],
      'O FISL': ['Il FISL', 'o-evento/il-fisl'],
      'Inscrições': ['Iscrizione'],
      'Chamada de trabalhos': ['Call for papers', 'o-evento/call-for-paper'],
      'Caravanas': ['Carovane', 'o-evento/carovane'],
      'Grupos de Usuários': ['Gruppi di Utenti', 'o-evento/gruppo-di-utenti'],
      'Info Útil': ['Info Utili', 'o-evento/domande-frequenti'],
      'Patrocine': ['Sponsorizza', 'o-evento/sponsorizza'],
      'Voluntários': ['Volontari', 'o-evento/voluntari'],
      'Sala de Imprensa': ['Ufficio Stampa', 'o-evento/ufficio-stampa'],
      'Quem faz o fisl': ['Chi Siamo', 'o-evento/chi-siamo'],
      'Patrocinadores': ['Sponsor', 'o-evento/gli-sponsor'],
      'Banners': 'Banner',
      'Páginas Amigas': ['Pagine degli amici', 'o-evento/pagine-degli-amici'],
      'Política Anti-Assédio': ['Politica anti molestie', 'o-evento/politica-anti-molestie'],
      'GT-Mobilização': ['Mobilization Team'],
      'Programação': 'Relatori Principali',
      'Palestras': ['Conferenze'],
      'Destaques': ['Keynote speaker', 'programacao/keynote-speaker'],
      'Palestrantes Convidados': ['Relatori Invitati', 'programacao/relatori-invitati'],
      'WSL': ['WSL'],
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
      '7 a 10 de Maio de 2014': ['7 a 10 maggio 2014'],
      'Centro de Eventos da PUCRS | Porto Alegre | Brasil': ['Centro degli Eventi PUCRS | Porto Alegre | Brasile'],
      'Eu vou!': ["Ci sto!"],
      'Realização': ["Realizzazione"],
      'Fale Conosco': ["Contattaci"],
      'Desenvolvido pela': ["Sviluppata da"],
      'Faltam': ["Mancano"],
      'dias para o FISL15': ["giorni per il FISL15!"],
      'Falta': ["Manca"],
      'dia para o FISL15': ["giorno per il FISL15!"]
    }
  }

  $('#fisl-counter').appendTo('#countdown-block');
  var countdown = $('#countdown');
  countdown.html(countdown_clock(2014,5,7,00,01,1));

  stylePeopleCounter();

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#top-menu li a, #mapsite li a, #fisl-data, #fisl-local, #block-577333 .block-title a, #block-581237 .block-title, .block-title span, #footer-org h2, #footer-contato, .box2-contact span, #countdown-block span, #fisl15-npeople div').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html().replace(/^\s*|\s*$/g,'')];
      if (translated) {
        if (translated.constructor != Array) translated = [translated];
        element.html(translated[0]);
//        if (element.attr('href') && translated[1]) {
//          element.attr('href', '/fisl15/' + translated[1]);
//        }
      }
    });
  }

})(jQuery);

function countdown_clock(year, month, day, hour, minute, format) {
    // esta div será inclusa no local destinado ao contador
    /*pode-se escolher praticamente qualquer local para a insercao do contador */
    //html_code = '<div id="countdown"></div>';
    //document.write(html_code);
    //countdown(year, month, day, hour, minute, format);
}

function splitNumbers(numbers) {
  try {
    var numbersArray = numbers.toString().split("");
    var numbersSpans = ""
    for (var i = 0; i < numbersArray.length; i++) {
      numbersSpans = numbersSpans + "<span class='number'>" + numbersArray[i] + "</span>";
    }
  } catch(e) {
    console.log(e);
    numbersSpans = '';
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
  var peopleDiv = jQuery('#fisl15-npeople');
  var npeople = peopleDiv.html();
  peopleDiv.html(splitNumbers(npeople));
  jQuery('#fisl-people-counter div').show().appendTo(peopleDiv);
}
