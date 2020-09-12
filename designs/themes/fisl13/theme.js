(function($) {

  var $translations = {
    en: {
      'prefix': 'english',
      "O evento": ["The Event", "the-event"],
      "Inscrições": ["Registration", "registration"],
      "Programação": ["Schedule"],
      "Convidados": ["Speakers", "speakers"],
      "Patrocine": ["Sponsors", "sponsors"],
      "Info Útil": ["FAQ", "faq"],
      "25 a 28 de julho <br> de 2012": ["July 25th to 28th <br> 2012"],
      "Centro de Eventos da PUCRS <br> Porto Alegre — Brasil": ["PUCRS Events Center <br> Porto Alegre &mdash; Brazil"],
      "Promoção, organização e realização:": ["Promotion, organization and production:"],
      "Fale Conosco": ["Contact us"],
      "Desenvolvido pela": ["Developed by"],
      "Busca": ["Search"]
    },
    es: {
      'prefix': 'espanol',
      "O evento": ["El Evento", "el-evento"],
      "Inscrições": ["Registro", "registro"],
      "Programação": ["Programación"],
      "Convidados": ["Ponentes", "ponentes"],
      "Patrocine": ["Patrocina", "patrocina"],
      "Info Útil": ["Info Útil", "es/info-util"],
      "25 a 28 de julho <br> de 2012": ["25 al 28 de julio <br> de 2012"],
      "Centro de Eventos da PUCRS <br> Porto Alegre — Brasil": ["Centro de Eventos de la PUCRS <br> Porto Alegre &mdash; Brasil"],
      "Promoção, organização e realização:": ["Promoción, organización y realización:"],
      "Fale Conosco": ["Contáctenos"],
      "Desenvolvido pela": ["Elaborado por"],
      "Busca": ["Buscar"]
    },
    eo: {
      'prefix': 'esperanto',
      "O evento": ["La evento", "la-evento"],
      "Inscrições": ["Aliĝo", "aligo"],
      "Programação": ["Programo"],
      "Convidados": ["Invititoj", "invititoj"],
      "Patrocine": ["Patronu", "patronu"],
      "Info Útil": ["Utilaj informoj", "utilaj-informoj"],
      "25 a 28 de julho <br> de 2012": ["Ekde la 25-a ĝis la 28-a <br> de julio 2012"],
      "Centro de Eventos da PUCRS <br> Porto Alegre — Brasil": ["Centro de Eventoj de PUCRS <br> Porto Alegre &mdash; Brazilo"],
      "Promoção, organização e realização:": ["Promociado, organizado kaj realigado:"],
      "Fale Conosco": ["Parolu kun ni"],
      "Desenvolvido pela": ["Kreita de"],
      "Busca": ["Serĉo"]
    },
    it: {
      'prefix': 'italian',
      "O evento": ["L'Evento", "l-evento"],
      "Inscrições": ["Iscrizione", "iscrizione"],
      "Programação": ["Programmo"],
      "Convidados": ["Ospiti", "ospiti"],
      "Patrocine": ["Sponsor", "sponsor"],
      "Info Útil": ["Info Utili", "info-utili"],
      "25 a 28 de julho <br> de 2012": ["dal 25 al 28 luglio <br> 2012"],
      "Centro de Eventos da PUCRS <br> Porto Alegre — Brasil": ["Centro degli Eventi <br> Porto Alegre &mdash; Brasile"],
      "Promoção, organização e realização:": ["Promozione, organizzazione e realizzazione:"],
      "Fale Conosco": ["Contattaci"],
      "Desenvolvido pela": ["Developed by"],
      "Busca": ["Search"]
    }
  }

  var language = $('html').attr('lang');
  if ($translations[language]) {
    var prefix = $translations[language]['prefix'];
    $('#navigation span, #fisl-data, #fisl-local, #footer-org h2, #footer-contato, #footer-copyright span, .profile-search-block .block-title span').each(function() {
      var element = $(this);
      var translated = $translations[language][element.html()];
      if (translated) {
        element.html(translated[0]);
//        if (element.parent('a').attr('href') && translated[1]) {
//          element.parent('a').attr('href', '/fisl13/' + translated[1]);
//        }
      }
    });
  }
})(jQuery);
