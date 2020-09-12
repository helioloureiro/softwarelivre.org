(function($) {

  var $translations = {
    en: {
      'prefix': 'english',
      "O evento": ["The Event", "the-event"],
      "Programação": ["Program"],
      "Palestrantes": ["Speakers", "speakers"],
      "Inscrições": ["Registrations"],
      "Patrocine": ["Sponsor", 'i-want-to-sponsor'],
      "Divulgue": ["Promote", 'promote'],
      "Horários": ["Times", "times"],
      "Agende-se": ["Schedule the date"],
      "Promoção, organização e realização:": ["Promotion, organization and production:"],
      "Transmissão:": ["Transmission:"],
      "Fale Conosco": ["Contact us"],
      "Termos de Uso": ["Terms of use"],
      "Inscrições abertas": ["Registrations open"],
      "Patrocinadores": ["Sponsors", "sponsors"],
      "Mostra de Negócios Livres": ["Open Business Show", "open-solutions-and-business-show"],
      "Faltam": [""],
      "Falta": [""],
      "dias": ["days"],
      "dia": ["day"],
      "para o fisl12": ["remaining for fisl12"],
      "Bem-vindo ao fisl12!": ["Welcome to fisl12!"],
      "Participe do encerramento": ["Participate in the closure", "fisl12/noticias/participate-in-the-closure-of-fisl12"],
      "Certificados": ["Certificate"],
      "Agende-se para o fisl13!": ["Save the date for fisl13!"],
      "De 25 a 28/07/2012": ["July 25th to 28th 2012"]
    },
    es: {
      'prefix': 'espanol',
      "O evento": ["El Evento", "el-evento"],
      "Programação": ["Programación"],
      "Palestrantes": ["Conferencistas", "conferencistas"],
      "Inscrições": ["Registro"],
      "Patrocine": ["Patrocine", "es/patrocine"],
      "Divulgue": ["Divulgue", "es/divulgue"],
      "Horários": ["Horarios", "es/horarios"],
      "Agende-se": ["Agendálo"],
      "Promoção, organização e realização:": ["Promoción, organización y realización:"],
      "Transmissão:": ["Transmisión:"],
      "Fale Conosco": ["Contáctenos"],
      "Termos de Uso": ["Condiciones de uso"],
      "Inscrições abertas": ["Inscripciones abiertas"],
      "Patrocinadores": ["Patrocinadores", "es/patrocinadores"],
      "Mostra de Negócios Livres": ["Muestra de Negocios Libres", "muestra-de-soluciones-y-negocios-libres"],
      "Faltam": ["Faltan"],
      "Falta": ["Falta"],
      "dias": ["días"],
      "dia": ["día"],
      "para o fisl12": ["para el fisl12"],
      "Bem-vindo ao fisl12!": ["Bienvenido al fisl12!"],
      "Participe do encerramento": ["¡Participa del cierre!", "fisl12/noticias/¡participa-del-cierre-del-fisl12"],
      "Certificados": ["Certificado"],
      "Agende-se para o fisl13!": ["¡Agrega a tu agenda el fisl13!"],
      "De 25 a 28/07/2012": ["Del 25 al 28 de julio de 2012"]
    },
    eo: {
      'prefix': 'esperanto',
      "O evento": ["Pri la evento", "pri-la-evento"],
      "Programação": ["Programo"],
      "Palestrantes": ["Prelegantoj", "prelegantoj"],
      "Inscrições": ["Aliĝo"],
      "Patrocine": ["Patronu", 'patronu'],
      "Divulgue": ["Disvastigu", 'disvastigu'],
      "Horários": ["Horartabeloj", "horartabeloj"],
      "Agende-se": ["Notu en via agendo"],
      "Promoção, organização e realização:": ["Promociado, organizado kaj realigado:"],
      "Search": ["Serĉo"],
      "Transmissão:": ["Dissendo:"],
      "Fale Conosco": ["Parolu kun ni"],
      "Termos de Uso": ["Uzokondiĉoj"],
      "Inscrições abertas": ["Aliĝoj malfermitaj"],
      "Patrocinadores": ["Patronoj", "patronoj"],
      "Mostra de Negócios Livres": ["Montrado de Liberaj Negocoj", "montrado-de-solvoj-kaj-liberaj-negocoj"],
      "Faltam": ["Restas"],
      "Falta": ["Restas"],
      "dias": ["tagoj"],
      "dia": ["tago"],
      "para o fisl12": ["ĝis fisl12"],
      "Bem-vindo ao fisl12!": ["Bonvenon al fisl12!"],
      "Participe do encerramento": ["Partoprenu la fermon", "fisl12/noticias/partoprenu-la-fermon-de-fisl12"],
      "Certificados": ["Atestoj"],
      "Agende-se para o fisl13!": ["Notu fisl13 en vian agendon!"],
      "De 25 a 28/07/2012": ["Ekde la 25-a ĝis la 28-a de julio 2012"]
    }
  }

//  var countdown = $('#countdown');
//  countdown.html(countdown_clock(2011,6,29,00,01,1));

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#fisl-menu span, #fisl-agende, #fisl-agende span, #fisl-certificado span, #logos h2, #fisl-search .btn, #footer-links a, .slideshow-block .block-title span, .article-block .block-title span').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html()];
      if (translated) {
        element.html(translated[0]);
        if (element.parent('a').attr('href') && translated[1]) {
          element.parent('a').attr('href', '/fisl12/' + translated[1]);
        }
      }
    });
  }
  var addThisImg = $('#addThis a img');
  addThisImg.attr('src', '/designs/themes/fisl12/imgs/addthis.gif').attr('width', '70').attr('height', '16');
})(jQuery);

function countdown_clock(year, month, day, hour, minute, format) {
    // esta div sera inclusa no local destinado ao contador
    /*pode-se escolher praticamente qualquer local para a insercao do contador */
    html_code = '<div id="countdown" </div>';

     document.write(html_code);

     countdown(year, month, day, hour, minute, format);
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

             // SAIDA - uma forma simples de definir o que sera impresso
             document.getElementById('countdown').innerHTML = ' ' + days + ' ';
             break;
        default:
             document.getElementById('countdown').innerHTML = Time_Left + ' seconds';
     }

     //Chamada recursiva - Matem o relogio funcionando
        setTimeout('countdown(' + year + ',' + month + ',' + day + ',' + hour + ',' + minute + ',' + format + ');', 1000);
}
