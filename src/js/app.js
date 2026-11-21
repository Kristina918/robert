import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import { rulang } from "./modules/functions.js";
import { enLang } from "./modules/functions.js";

import { delang } from "./modules/functions.js";

window.onload = function () {
  if (document.querySelector(".ru.header__btn_active")) {
    document.querySelector(
      ".header-content-left-block h1 span"
    ).style.fontFamily = "Cancellaresca";
    document.querySelector(".font").style.fontFamily = "Cancellaresca";
  }
};

$(".scroll-to-form").on("touchend, click", function (e) {
  e.preventDefault();
  $("body,html").animate({ scrollTop: $(".form").offset().top }, 400);
});

$(document).ready(function () {
  let tooltipColor = "#8b75a7";
  let tooltipPosition = "right";
  let tooltipName = "Geovanny Peña";
  let tooltipPhone = "+49XXXXXXXXXXX";
  let tooltipEmail = "email@gmail.com";
  let tooltipDate = "22.08.1995";
  let tooltipAddress = "Hauptstraße 18a, 38118 Braunschweig";

  //---------Phone mask---------//
  // Код страны
  let phoneCode = "+";
  // Максимальное количество цифр в номере (без учёта +)
  let MaxLengthPhoneNumber = 13;

  // logic tooltips
  let tooltipStyle =
    '<style>.input-group{position:relative;}.input-group input{width:100%;box-sizing:border-box;}.input-group:before{z-index:99;content:attr(data-content)"";position:absolute;top:-21px;' +
    tooltipPosition +
    ":0;background:" +
    tooltipColor +
    ";color:#fff;border-radius:5px;padding:3px 5px;font-family: Arial;font-size: 14px}.tooltip-hide.input-group:before{display: none;}</style>";
  $(document).ready(function () {
    $(document.body).append(tooltipStyle);
    $(".input-group").click(function () {
      let $input = $(this).find("input[name]");
      let currentInput = $input.attr("name");
      switch (currentInput) {
        case "name":
          $(this).attr("data-content", tooltipName);
          break;
        case "date":
          $(this).attr("data-content", tooltipDate);
          break;
        case "address":
          $(this).attr("data-content", tooltipAddress);
          break;
        case "email":
          $(this).attr("data-content", tooltipEmail);
          break;
        case "phone":
          $(this).attr("data-content", tooltipPhone);
          $input.addClass("only-phone");
          $(this).on("keydown", function (t) {
            46 == t.keyCode ||
              8 == t.keyCode ||
              9 == t.keyCode ||
              27 == t.keyCode ||
              187 == t.keyCode ||
              (65 == t.keyCode && !0 === t.ctrlKey) ||
              (35 <= t.keyCode && t.keyCode <= 39) ||
              ((t.keyCode < 48 || 57 < t.keyCode) &&
                (t.keyCode < 96 || 105 < t.keyCode) &&
                t.preventDefault());
          });
          break;
      }
      $(this).removeClass("tooltip-hide");
    });
  });

  // logic mask
  let mask = {
    phoneInputs: $('input[name="phone"]'),

    init: function () {
      $(this.phoneInputs).attr("maxlength", MaxLengthPhoneNumber + 1);

      if (this.phoneInputs) {
        $(this.phoneInputs).attr("pattern", "(\\+)[0-9]{5,25}");
        $(this.phoneInputs).on("focusin", function () {
          let code = phoneCode;
          this.value = !(this.value.length > code.length) ? code : this.value;
        });
        $(this.phoneInputs).on("input", function () {
          let code = phoneCode;
          this.value.indexOf(code) && (this.value = code);
        });
      }
    },
  };
  mask.init();
});

$(document).ready(function () {
  var input = document.querySelectorAll("#mydata")[0];

  var dateInputMask = function dateInputMask(elm) {
    elm.addEventListener("keyup", function (e) {
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }

      var len = elm.value.length;

      if (len !== 1 || len !== 3) {
        if (e.keyCode == 47) {
          e.preventDefault();
        }
      }
      if (len === 2) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          elm.value = elm.value + ".";
        }
      }

      if (len === 5) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          elm.value = elm.value + ".";
        }
      }
    });
  };

  dateInputMask(input);
});

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("fix");
});

const lightbox = GLightbox({
  closeButton: true,
});

$("button.mobile").click(function () {
  $(".form-block2").css("display", "flex");
  $("button.mobile").css("display", "none");
});

const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en", "de"];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "de";
let currentTexts = {};

const homeTexts = {
  "menu-text": {
    de: "Home",
    en: "Home",
    ru: "Главная",
  },
  "menu-texth": {
    de: "Home",
    en: "Home",
    ru: "Главная",
  },
  "menu-text11": {
    de: "Home",
    en: "Home",
    ru: "Главная",
  },
  "menu-text2": {
    de: "About",
    en: "About",
    ru: "О нас",
  },

  "menu-text2h": {
    de: "About",
    en: "About",
    ru: "О нас",
  },
  "menu-text22": {
    de: "About",
    en: "About",
    ru: "О нас",
  },
  "menu-text3": {
    de: "Services",
    en: "Services",
    ru: "Услуги",
  },

  "menu-text3h": {
    de: "Services",
    en: "Services",
    ru: "Услуги",
  },
  "menu-text33": {
    de: "Services",
    en: "Services",
    ru: "Услуги",
  },
  "menu-text4": {
    de: "Preise",
    en: "Prices",
    ru: "Цены",
  },

  "menu-text4h": {
    de: "Preise",
    en: "Prices",
    ru: "Цены",
  },
  "menu-text44": {
    de: "Preise",
    en: "Prices",
    ru: "Цены",
  },
  "menu-text5": {
    de: "Contact",
    en: "Contacts",
    ru: "Контакты",
  },

  "menu-text5h": {
    de: "Contact",
    en: "Contacts",
    ru: "Контакты",
  },

  "menu-text55": {
    de: "Contact",
    en: "Contacts",
    ru: "Контакты",
  },
  titleh1: {
    ru: "Парикмахерская NaRo",
    en: "Hair salon NaRo",
    de: "Friseursalon NaRo",
  },
  titleP: {
    ru: "Мы ценим ваше время.",
    en: "We appreciate your time ",
    de: "Wir schätzen Ihre Zeit.",
  },
  buttontermin: {
    ru: "ЗАПИСАТЬСЯ",
    en: "SIGN UP",
    de: "TERMIN BUCHEN",
  },
  text1: {
    ru: "Добро пожаловать в ",
    en: "Welcome to  ",
    de: "Willkommen bei ",
  },
  text1span: {
    ru: "Парикмахерская NaRo!",
    en: "NaRo Hair Salon! ",
    de: "Friseursalon NaRo ! ",
  },
  text2: {
    ru: "Наш салон – это не только высокопрофессиональный сервис, но и уютное место, где всегда рады гостям. Превосходство в работе и творчестве. Все наши мастера являются высококвалифицированными специалистами и имеют большой профессиональный опыт работы в известных салонах красоты. Наши специалисты помогут вам выбрать свой стиль. Мы предлагаем  креативные женские и мужские стрижки, укладки. ",
    en: "Our salon is not only a highly professional service, but also a cozy place where guests are always welcome. Excellence in work and creativity. All our masters are highly qualified specialists and have extensive professional experience in famous beauty salons. Our specialists will help you choose your style. We offer creative women's and men's haircuts, styling.",
    de: "Unser Salon bietet nicht nur hochprofessionelle Dienstleistungen, sondern auch einen gemütlichen Ort, an dem Gäste jederzeit willkommen sind. Exzellenz in Arbeit und Kreativität. Alle unsere Meister sind hochqualifizierte Fachkräfte und verfügen über umfangreiche Berufserfahrung aus der Arbeit in namhaften Schönheitssalons. Unsere Experten helfen Ihnen bei der Auswahl Ihres Stils. Wir bieten kreative Haarschnitte und Stylings für Damen und Herren.",
  },

  text3: {
    ru: "ЗДЕСЬ",
    en: "HERE",
    de: "HIER",
  },
  text4: {
    ru: "или написать нам.",
    en: "or write to us.",
    de: ", oder schreiben Sie uns.",
  },
  text5: {
    ru: "НАПИСАТЬ",
    en: "WRITE",
    de: "SCHREIBEN",
  },
  text6: {
    ru: "В нашем салоне очень приятная атмосфера.",
    en: "There is a very pleasant atmosphere in our salon ( Barber's shop) ",
    de: "In unserem Salon herrscht eine sehr angenehme Atmosphäre.",
  },
  text7: {
    ru: "ЗАПИСАТЬСЯ",
    en: "SIGN UP",
    de: "TERMIN BUCHEN",
  },
  text8: {
    ru: "Дайте нам свой номер и мы будем рады ответить вам.",
    en: "Leave your phone number and we'll be happy to call on you ",
    de: "Geben Sie uns Ihre Nummer und wir antworten Ihnen gerne.",
  },
  text9: {
    ru: "На какую процедуру, день и время вы хотите записаться?",
    en: "What procedure, day and time do you want to sign up for? ",
    de: "Für welchen Eingriff, Tag und Uhrzeit möchten Sie buchen?",
  },
  text10: {
    ru: "Процедура",
    en: "Procedure",
    de: "Eingriff",
  },
  text11: {
    ru: "Если желаемый день и время свободны, ваша запись будет подтверждена. Если нет возможности записаться на этот день и время, вам будут предложены другие варианты. Оплата производится наличными при посещении салона. * Прежде чем прийти в салон, дождитесь подтверждения записи.",
    en: "If the desired day and time is free, your entry will be confirmed. If it is not possible to make an appointment for that day and time, you will be offered other options. Payment is made in cash when visiting the salon. (You can pay in cash) * Please wait for the booking confirmation before coming to the salon.",
    de: "Wenn der gewünschte Tag und die gewünschte Uhrzeit frei sind, wird Ihr Termin bestätigt. Wenn es für diesen Tag und diese Uhrzeit nicht möglich ist, einen Termin zu vereinbaren, werden Ihnen andere Optionen angeboten. Die Bezahlung erfolgt in bar beim Besuch des Salons. * Bevor Sie in den Salon kommen, warten Sie auf die Bestätigung des Termins.",
  },
  text12: {
    ru: "Время",
    en: "Time",
    de: "Uhrzeit",
  },
  text13: {
    ru: "День",
    en: "Day",
    de: "Tag",
  },
  text14: {
    ru: "ОТЗЫВЫ",
    en: "REVIEWS",
    de: "BEWERTUNGEN",
  },

  text15: {
    ru: "Хочу поблагодарить всех сотрудников салона за их доброжелательность и теплую атмосферу. Я уже приводила сюда своего сына, которому тоже очень понравилось находиться в умелых руках парикмахера Юлии. Мы теперь ваши клиенты!",
    en: "I want to express my gratitude thank all the staff of the salon for their kindness and warm atmosphere. I have already brought my son here, who also really enjoyed being in the capable hands of the hairdresser Julia. ( who enjoyed the smart job of the hairdresser ( barber) Julia. We are now your customers!",
    de: "Ich möchte mich bei allen Mitarbeitern des Salons für ihre Freundlichkeit und warme Atmosphäre bedanken. Ich habe bereits meinen Sohn hierhergebracht, der sich auch gerne in den geschickten Händen von Julias Friseurin befand. Wir sind jetzt Ihre Kunden!",
  },
  text16: {
    ru: "ОТПРАВИТЬ",
    en: "SEND",
    de: "SENDEN",
  },
  text16p: {
    ru: "ОТПРАВИТЬ",
    en: "SEND",
    de: "SENDEN",
  },
  text17: {
    ru: "Мастера знают свое дело. Все быстро и качественно. И главное с улыбкой. Спасибо за такое отношение к работе. Я советую!",
    en: "The craftsmen (professionals) know their job. Everything is fast and high quality. And mainly (most importantly) with a smile. Thank you for such an attitude towards work. I advice!",
    de: "Die Meister kennen sich aus. Alles schnell und hochwertig. Und vor allem mit einem Lächeln. Vielen Dank für diese Einstellung zur Arbeit. Ich empfehle!",
  },
  text18: {
    ru: "Добрый день! Хочу поблагодарить за проделанную работу и профессионализм мастера! Все супер!",
    en: "Good day! I want to thank the master for the work done and his professionalism! Everything is super!",
    de: "Guten Tag, ich möchte dem Meister für die geleistete Arbeit und seine Professionalität danken! Alles ist großartig!",
  },
  text19: {
    ru: "Адрес",
    en: "Address",
    de: "Adresse",
  },
  text20: {
    ru: "Телефон:",
    en: "Phone:",
    de: "Telefon:",
  },
  text21: {
    ru: "Мобильный:",
    en: "Mobile:",
    de: "Mobil:",
  },
  text22: {
    ru: "Сайт:",
    en: "Website:",
    de: "Website:",
  },
  text23: {
    ru: "ЧАСЫ РАБОТЫ:",
    en: "OPENING HOURS:",
    de: "ÖFFNUNGSZEITEN:",
  },
  text24: {
    ru: "Пн - выходной.",
    en: "Mon - day off.",
    de: "Mo. - Ruhe Tag.",
  },
  text25: {
    ru: "Вт.",
    en: "Tu.",
    de: "Di.",
  },
  text26: {
    ru: "Ср.",
    en: "We.",
    de: "Mi.",
  },
  text27: {
    ru: "Чт.",
    en: "Th.",
    de: "Do.",
  },
  text28: {
    ru: "Пт.",
    en: "Fr.",
    de: "Fr.",
  },
  text29: {
    ru: "Сб.",
    en: "Sa.",
    de: "Sa.",
  },
  text30: {
    ru: "Вс.- выходной день.",
    en: "Sun is a day off.",
    de: "So. – Ruhe Tag.",
  },
  text31: {
    ru: " с 9:00 до 13:00 и с 14:00 до 18:00",
    en: "from 9:00 to 13:00 and from 14:00 to 18:00",
    de: "9:00-13:00 Uhr und 14.00-18:00 Uhr",
  },
  text32: {
    ru: " с 9:00 до 13:00 и с 14:00 до 18:00",
    en: " from 9:00 to 13:00 and from 14:00 to 18:00",
    de: "9:00-13:00 Uhr und 14.00-18:00 Uhr",
  },
  text33: {
    ru: " с 9:00 до 13:00 и с 14:00 до 18:00",
    en: " from 9:00 to 13:00 and from 14:00 to 18:00",
    de: "9:00-13:00 Uhr und 14.00-18:00 Uhr",
  },
  text34: {
    ru: "с 9:00 до 13:00 и с 14:00 до 18:00",
    en: "from 9:00 to 13:00 and from 14:00 to 18:00",
    de: "9:00-13:00 Uhr und 14.00-18:00 Uhr",
  },
  text35: {
    ru: "9:00-13:00 и с 13:00 выходной",
    en: "9:00-13:00 and from 13:00 day off",
    de: "9:00-13:00 Uhr nachmittags geschlossen",
  },
  text36: {
    ru: "Политика конфиденциальности",
    en: "Private Police",
    de: "Impressum",
  },
  text37: {
    ru: "Фото взяты из открытых источников",
    en: "Photo from open sources",
    de: "Foto aus offenen Quellen",
  },
  text38: {
    ru: "Перманентный макияж",
    en: "Permanent makeup",
    de: "Permanent Makeup",
  },
  text39: {
    ru: "Каждая женщина мечтает выглядеть безупречно всегда и везде и поэтому постоянно стремится к совершенству. До совершенства во всем. Ничто так не украшает женщину, как эффект естественности. Поэтому в последние годы все больше и больше женщин делают выбор в пользу   перманентного макияжа!Не просто сотни, а тысячи девушек выбирают перманентный макияж. Это очень помогает им в повседневной жизни. Процедура имеет свои очевидные преимущества.",
    en: "Every woman wants to look perfect always and everywhere and therefore constantly strives for perfection. To perfection in everything. Nothing beautifies a woman like the effect of naturalness. Therefore, in recent years, more and more women are opting for permanent makeup! Not just hundreds, but thousands of girls choose permanent makeup. It helps them a lot in their daily life. The    procedure has its obvious advantages.",
    de: "Jede Frau träumt davon, immer und überall perfekt auszusehen und strebt daher ständig nach Perfektion. Bis zur Perfektion in allem.    Nichts verschönert eine Frau wie die Wirkung von Natürlichkeit.    Deshalb setzen sich in den letzten Jahren immer mehr Frauen für Permanent Make-up ein!Nicht nur Hunderte, Tausende von Mädchen entscheiden sich für Permanent Make-up. Es hilft ihnen sehr im Alltag. Das Verfahren hat seine offensichtlichen Vorteile.",
  },
  text40: {
    ru: "1. Практичность",
    en: "1. Practicality",
    de: "1. Praktikabilität",
  },

  text41: {
    ru: "Благодаря перманентному макияжу можно обойтись без многих видов косметики и больше не тратить пол утра на рисование стрелок и подкрашивание губ. Смывать макияж также не нужно – это экономит еще больше времени.",
    en: "Thanks to permanent makeup, you can do without many types of cosmetics and no longer spend half the morning drawing arrows and tinting lips. You don`t even need to wash off your make-up, which    saves even more time.",
    de: "Dank Permanent Make-up können Sie auf viele Arten von Kosmetika verzichten und nicht mehr einen halben Morgen damit verbringen, Pfeile zu zeichnen und Lippen zu färben. Sie müssen das Make-up auch nicht abwaschen – das spart noch mehr Zeit.",
  },
  text42: {
    ru: "2. Красота",
    en: "2. The beauty",
    de: "2. Die Schönheit",
  },
  text43: {
    ru: "Результат после посещения косметолога держится 2-3 года.    Требуется всего несколько походов в салон для коррекции.",
    en: "The result after visiting a beautician lasts 2-3 years. It only takes a few trips to the salon for correction.",
    de: "Das Ergebnis nach einem Besuch bei einer Kosmetikerin hält 2-3 Jahre an. Es sind nur wenige Fahrten zum Salon zur Korrektur erforderlich.",
  },
  text44: {
    ru: "Наращивание ресниц",
    en: "Eyelash extension",
    de: "Wimpernverlängerung",
  },
  text45: {
    ru: "Длинные и густые ресницы — мечта каждой девушки. Осуществите эту мечту с наращиванием ресниц в нашем салоне красоты. Процедура заключается в наклеивании одной или нескольких искусственных ресниц на натуральные ресницы для увеличения их количества. Сегодня во многих салонах красоты и студиях можно сделать наращивание ресниц, но важно не забывать, что непрофессиональной и небрежной работой мастера можно только навредить себе. Наши мастера имеют высокую квалификацию, богатый опыт и необходимые знания и навыки, что подтверждено соответствующими сертификатами.  Наши сотрудники проконсультируют вас и помогут создать неповторимый, индивидуальный образ, подчеркивающий вашу естественную красоту.",
    en: "Today, in many beauty salons and studios, eyelash extensions can be done, but it is important not to forget that the unprofessional and careless work of the master can only harm yourself. Our masters are highly qualified, have rich experience and the necessary knowledge and skills, which is confirmed by the relevant certificates. Our staff will advise you and help you create a unique, individual image that emphasizes your natural beauty.",
    de: "Lange, dichte Wimpern sind der Traum eines jeden Mädchens.    Verwirklichen Sie diesen Traum mit Wimpernverlängerungen in unserem Schönheitssalon. Das Verfahren besteht darin, eine oder mehrere künstliche Wimpern auf die natürliche Wimper zu kleben, um ihre Anzahl zu erhöhen. Heutzutage ist es in vielen Schönheitssalons und -studios möglich, Wimpernverlängerungen vorzunehmen, aber es ist wichtig, nicht zu vergessen, dass Sie sich mit der unprofessionellen und nachlässigen Arbeit des Meisters nur selbst schaden können. Unsere Meister sind hochqualifiziert, verfügen über reiche Erfahrung und die erforderlichen Kenntnisse und Fähigkeiten, was durch entsprechende Zertifikate bestätigt wird. Unsere Mitarbeiter beraten Sie und helfen Ihnen, ein einzigartiges, individuelles Bild zu schaffen, das Ihre natürliche Schönheit unterstreicht.",
  },

  text4545: {
    ru: "Длинные и густые ресницы — мечта каждой девушки. Осуществите эту мечту с наращиванием ресниц в нашем салоне красоты. Процедура заключается в наклеивании одной или нескольких искусственных ресниц на натуральные ресницы для увеличения их количества. Сегодня во многих салонах красоты и студиях можно сделать наращивание ресниц, но важно не забывать, что непрофессиональной и небрежной работой мастера можно только навредить себе. Наши мастера имеют высокую квалификацию, богатый опыт и необходимые знания и навыки, что подтверждено соответствующими сертификатами.  Наши сотрудники проконсультируют вас и помогут создать неповторимый, индивидуальный образ, подчеркивающий вашу естественную красоту.",
    en: "Today, in many beauty salons and studios, eyelash extensions can be done, but it is important not to forget that the unprofessional and careless work of the master can only harm yourself. Our masters are highly qualified, have rich experience and the necessary knowledge and skills, which is confirmed by the relevant certificates. Our staff will advise you and help you create a unique, individual image that emphasizes your natural beauty.",
    de: "Lange, dichte Wimpern sind der Traum eines jeden Mädchens.    Verwirklichen Sie diesen Traum mit Wimpernverlängerungen in unserem Schönheitssalon. Das Verfahren besteht darin, eine oder mehrere künstliche Wimpern auf die natürliche Wimper zu kleben, um ihre Anzahl zu erhöhen. Heutzutage ist es in vielen Schönheitssalons und -studios möglich, Wimpernverlängerungen vorzunehmen, aber es ist wichtig, nicht zu vergessen, dass Sie sich mit der unprofessionellen und nachlässigen Arbeit des Meisters nur selbst schaden können. Unsere Meister sind hochqualifiziert, verfügen über reiche Erfahrung und die erforderlichen Kenntnisse und Fähigkeiten, was durch entsprechende Zertifikate bestätigt wird. Unsere Mitarbeiter beraten Sie und helfen Ihnen, ein einzigartiges, individuelles Bild zu schaffen, das Ihre natürliche Schönheit unterstreicht.",
  },
  text46: {
    ru: "Уход за руками очень важен. Ежедневно они выполняют множество задач и постоянно контактируют с негативными факторами внешней среды, водой и моющими средствами. При этом руки всегда «на виду». Маникюр – это процедура, включающая в себя подравнивание, полировку и украшение ногтей. Не забывайте и о педикюре! Многие считают эту процедуру   исключительно летней или отпускной. Ведь когда мы ходим в закрытой обуви, красивые пальчики и ухоженные пяточки никому не видны. Однако, помимо эстетики, немаловажную роль играет педикюр.Он помогает предотвратить возникновение различных неприятных состояний, таких как: Например: вросшие ногти, натоптыши, трещины.",
    en: "Hand care is very important. Every day they perform many tasks and are constantly in contact with negative environmental factors, water and detergents. At the same time, the hands are always “in    sight”. Manicure is a procedure that includes trimming, polishing and decorating nails. Don't forget about the pedicure! Many consider this procedure exclusively summer or vacation. After all, when we     walk in closed shoes, beautiful fingers and well-groomed heels are not visible to anyone. However, in addition to aesthetics, pedicure plays an important role. It helps prevent the occurrence of various  unpleasant conditions, such as: For example: ingrown nails, corns, cracks.",
    de: "Ganz wichtig ist die Handpflege. Jeden Tag erfüllen sie viele Aufgaben und sind ständig in Kontakt mit negativen Umweltfaktoren, Wasser und Reinigungsmitteln. Gleichzeitig sind die Hände ständig „im Blick“. Maniküre nennt man das Verfahren, das das Trimmen, Polieren und Verzieren der Nägel umfasst. Vergessen Sie auch nicht die Pediküre! Viele betrachten dieses Verfahren ausschließlich als Sommer oder Urlaub. Denn wenn wir in geschlossenen Schuhen laufen, sind schöne Finger und gepflegte Absätze für niemanden sichtbar. Neben der Ästhetik spielt die Pediküre jedoch eine wichtige Rolle. Es hilft, das Auftreten verschiedener unangenehmer Zustände zu verhindern, wie z. B.: eingewachsene Nägel, Hühneraugen, Risse.",
  },
  text47: {
    ru: "Маникюр/педикюр",
    en: "Mani/Pedi",
    de: "Maniküre/Pediküre",
  },
  text48: {
    ru: "Ламинирование",
    en: "Lamination",
    de: "Laminierung",
  },
  text49: {
    ru: "Профессиональное ламинирование – это полностью безопасная и современная технология ухода за ресницами и бровями, позволяющая придать глазам более выразительный вид. С помощью специальных растворов воздействуют на волосы, благодаря чему они становятся гладкими, естественным образом утолщаются и удлиняются.Ламинирование - подходит всем.Особенно ламинирование украсит глаза тех девушек, которые не обладают очень яркими и густыми собственными ресницами/бровями и не хотят использовать наращенные ресницы для создания максимально естественного, но привлекательного образа.",
    en: "Professional lamination is a completely safe and modern eyelash and eyebrow care technology that allows you to give your eyes a more expressive look. With the help of special solutions, they act on the hair, so that they become smooth, naturally thicken and lengthen. amination - suitable for everyone. Especially lamination will decorate the eyes of those girls who do not have very bright and  thick own eyelashes / eyebrows and do not want to use extended eyelashes to create the most natural, but attractive look.",
    de: "Professionelles Laminieren ist eine absolut sichere und moderne Technologie zur Pflege von Wimpern und Augenbrauen, mit der Sie Ihren Augen ein ausdrucksstärkeres Aussehen verleihen können.    Mit Hilfe spezieller Lösungen werden die Haare beeinflusst, wodurch sie glatt, natürlich verdickt und verlängert werden. Laminierung - für jeden geeignet. Besonders die Laminierung wird die Augen der Mädchen schmücken, die keine sehr hellen und dicken eigenen Wimpern / Augenbrauen haben und keine verlängerten Wimpern verwenden möchten, um ein möglichst natürliches, aber attraktives Bild zu schaffen.",
  },
  text4949: {
    ru: "Профессиональное ламинирование – это полностью безопасная и современная технология ухода за ресницами и бровями, позволяющая придать глазам более выразительный вид. С помощью специальных растворов воздействуют на волосы, благодаря чему они становятся гладкими, естественным образом утолщаются и удлиняются.Ламинирование - подходит всем.Особенно ламинирование украсит глаза тех девушек, которые не обладают очень яркими и густыми собственными ресницами/бровями и не хотят использовать наращенные ресницы для создания максимально естественного, но привлекательного образа.",
    en: "Professional lamination is a completely safe and modern eyelash and eyebrow care technology that allows you to give your eyes a more expressive look. With the help of special solutions, they act on the hair, so that they become smooth, naturally thicken and lengthen. amination - suitable for everyone. Especially lamination will decorate the eyes of those girls who do not have very bright and  thick own eyelashes / eyebrows and do not want to use extended eyelashes to create the most natural, but attractive look.",
    de: "Professionelles Laminieren ist eine absolut sichere und moderne Technologie zur Pflege von Wimpern und Augenbrauen, mit der Sie Ihren Augen ein ausdrucksstärkeres Aussehen verleihen können.    Mit Hilfe spezieller Lösungen werden die Haare beeinflusst, wodurch sie glatt, natürlich verdickt und verlängert werden. Laminierung - für jeden geeignet. Besonders die Laminierung wird die Augen der Mädchen schmücken, die keine sehr hellen und dicken eigenen Wimpern / Augenbrauen haben und keine verlängerten Wimpern verwenden möchten, um ein möglichst natürliches, aber attraktives Bild zu schaffen.",
  },
  text50: {
    ru: "Косметология",
    en: "Cosmetology",
    de: "Kosmetologie",
  },
  text51: {
    ru: "КОСМЕТОЛОГИЯ– это комплекс процедур, направленных на восстановление естественной красоты кожи и замедление естественного процесса ее увядания. Воздействие на глубокие слои эпидермиса способствует омоложению кожи. Процедуры, проводимые с помощью современного оборудования, безболезненны, безопасны и надолго сохраняют результат. Подбираем для Вас  необходимые процедуры для сохранения красоты и молодости кожи!",
    en: "COSMETOLOGY is a complex of procedures aimed at restoring the natural beauty of the skin and slowing down the natural process of its withering. Impact on the deep layers of the epidermis promotes skin rejuvenation. The procedures carried out with the help of modern equipment are painless, safe and retain the result for a long time. We select for you the necessary procedures to preserve the beauty and youth of the skin!",
    de: "Gesichtskosmetik ist ein Komplex von Verfahren, die darauf abzielen, die natürliche Schönheit der Haut wiederherzustellen und den natürlichen Prozess ihres Welkens zu verlangsamen. Die Wirkung auf die tiefen Schichten der Epidermis fördert die Hautverjüngung. Die mit Hilfe moderner Geräte durchgeführten Eingriffe sind schmerzlos, sicher und behalten das Ergebnis für lange Zeit. Wir wählen für Sie die notwendigen Verfahren aus, um die Schönheit und Jugendlichkeit der Haut zu erhalten!",
  },
  text52: {
    ru: "Парикмахерские услуги",
    en: "Hairdressing services",
    de: "Friseurdienstleistungen",
  },
  text53: {
    ru: "Парикмахерские услуги – это уход за волосами путем окрашивания, стрижки, укладки или удлинения, чтобы удовлетворить потребности клиента и сделать их внешний вид свежим, ухоженным и красивым.   Технология парикмахерских услуг – это целое искусство, плодами которого являются удивительные образы. Стильная стрижка, здоровый вид и блеск волос, умело подобранный цвет – все это способно преобразить и украсить ваш образ.  Взаимопонимание между заказчиком и мастером очень важно; Гармоничный образ формируется с учетом не только типа лица и структуры волос, но и образа жизни и даже характера.  Наши стилисты каждый день имеют дело с самыми разными людьми и нам всегда удается увидеть человека в новом образе и выбрать для него лучшее. Остальное дело техники.",
    en: "Hairdressing is the care of hair by coloring, cutting, styling or lengthening to meet the needs of the client and make it look fresh, well-groomed and beautiful. The technology of hairdressing services is a whole art, the fruits of which are amazing images. Stylish haircut, healthy look and shine of hair, skillfully selected color - all this can transform and decorate your image. Mutual understanding between the customer and the master is very important; A harmonious image is formed taking into account not only the type of face and hair structure, but also the lifestyle and even character. Our stylists deal with a variety of people every day and we always manage to see a person in a new way and choose the best for him. The rest is a matter of technique.",
    de: "Friseurdienstleistungen sind die Pflege der Haare durch Färben, Schneiden, Stylen oder Verlängern, um den Bedürfnissen des Kunden gerecht zu werden und sein Aussehen frisch, gepflegt und schön zu machen.  Die Technologie der Friseurdienstleistungen ist eine ganze Kunst, deren Früchte erstaunliche Bilder sind. Ein stilvoller Haarschnitt, ein gesundes Aussehen und Glanz der Haare, eine meisterhaft ausgewählte Farbe - all dies kann Ihren Look verändern und dekorieren. Das gegenseitige Verständnis zwischen dem Kunden und dem Meister ist sehr wichtig; Es entsteht ein harmonisches Bild, das nicht nur den Gesichtstyp und die Haarstruktur, sondern auch den Lebensstil und sogar den Charakter berücksichtigt. Unsere Stylisten haben es täglich mit vielen ganz unterschiedlichen Menschen zu tun und wir schaffen es immer wieder, einen Menschen in einem neuen Look zu sehen und das Beste für ihn auszuwählen. Der Rest ist eine Frage der Technik.",
  },

  text130: {
    ru: "Парикмахерские услуги – это уход за волосами путем окрашивания, стрижки, укладки или удлинения, чтобы удовлетворить потребности клиента и сделать их внешний вид свежим, ухоженным и красивым.   Технология парикмахерских услуг – это целое искусство, плодами которого являются удивительные образы. Стильная стрижка, здоровый вид и блеск волос, умело подобранный цвет – все это способно преобразить и украсить ваш образ.  Взаимопонимание между заказчиком и мастером очень важно; Гармоничный образ формируется с учетом не только типа лица и структуры волос, но и образа жизни и даже характера.  Наши стилисты каждый день имеют дело с самыми разными людьми и нам всегда удается увидеть человека в новом образе и выбрать для него лучшее. Остальное дело техники.",
    en: "Hairdressing is the care of hair by coloring, cutting, styling or lengthening to meet the needs of the client and make it look fresh, well-groomed and beautiful. The technology of hairdressing services is a whole art, the fruits of which are amazing images. Stylish haircut, healthy look and shine of hair, skillfully selected color - all this can transform and decorate your image. Mutual understanding between the customer and the master is very important; A harmonious image is formed taking into account not only the type of face and hair structure, but also the lifestyle and even character. Our stylists deal with a variety of people every day and we always manage to see a person in a new way and choose the best for him. The rest is a matter of technique.",
    de: "Friseurdienstleistungen sind die Pflege der Haare durch Färben, Schneiden, Stylen oder Verlängern, um den Bedürfnissen des Kunden gerecht zu werden und sein Aussehen frisch, gepflegt und schön zu machen.  Die Technologie der Friseurdienstleistungen ist eine ganze Kunst, deren Früchte erstaunliche Bilder sind. Ein stilvoller Haarschnitt, ein gesundes Aussehen und Glanz der Haare, eine meisterhaft ausgewählte Farbe - all dies kann Ihren Look verändern und dekorieren. Das gegenseitige Verständnis zwischen dem Kunden und dem Meister ist sehr wichtig; Es entsteht ein harmonisches Bild, das nicht nur den Gesichtstyp und die Haarstruktur, sondern auch den Lebensstil und sogar den Charakter berücksichtigt. Unsere Stylisten haben es täglich mit vielen ganz unterschiedlichen Menschen zu tun und wir schaffen es immer wieder, einen Menschen in einem neuen Look zu sehen und das Beste für ihn auszuwählen. Der Rest ist eine Frage der Technik.",
  },
  text131: {
    ru: "Политика Конфиденциальности",
    en: "Private Police",
    de: "Impressum",
  },
  text132: {
    ru: "ИНФОРМАЦИЯ ОБ ОТТИСКЕ В СООТВЕТСТВИИ С § 5 TMG",
    en: "IMPRINT INFORMATION ACCORDING TO § 5 TMG",
    de: "IMPRESSUM ANGABEN GEM. § 5 TMG",
  },
  text133: {
    ru: "Парикмахерская NaRo Koch",
    en: "Hairdresser Salon NaRo Koch",
    de: "Friseur Salon NaRo Koch",
  },
  text134: {
    ru: "Салон-парикмахерская - Салон красоты NaRo 88069 Tettnang, Bären Platz 3",
    en: "Hairdresser Salon - Beauty Salon NaRo 88069 Tettnang, Bären Platz 3",
    de: " Friseur Salon - Schönheit Salon NaRo 88069 Tettnang, Bären Platz 3",
  },
  text135: {
    ru: "Парикмахерская компания / Зарегистрирована в городе Теттнанг",
    en: "Hairdressing company / Registered in Tettnang",
    de: "Friseurbetrieb / Eingetragen in Tettnang",
  },
  text136: {
    ru: "КОНТАКТ",
    en: "CONTACT",
    de: "KONTAKT",
  },
  text137: {
    ru: "Телефон: +49 (0) 7542 / 947-613-7",
    en: "Phone: +49 (0) 7542 / 947-613-7",
    de: "Telefon: +49 (0) 7542 / 947-613-7",
  },
  text138: {
    ru: "E-mail: infonaro.com@infonaro.com",
    en: "Email: infonaro.com@infonaro.com",
    de: "E-Mail: infonaro.com@infonaro.com",
  },
  text139: {
    ru: "Веб-сайт: infonaro.com",
    en: "Web: infonaro.com",
    de: "Web: infonaro.com",
  },

  text140: {
    ru: "ИДЕНТИФИКАТОР НДС",
    en: "VAT ID",
    de: "UMSATZSTEUER-ID",
  },
  text141: {
    ru: "Идентификационный номер налога с продаж в соответствии с § 27 a закона о налоге с продаж.",
    en: "Sales tax identification number according to § 27 a sales tax law.",
    de: " Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz.",
  },
  text142: {
    ru: "УРЕГУЛИРОВАНИЕ СПОРОВ В ЕС",
    en: "EU DISPUTE RESOLUTION",
    de: "EU-STREITSCHLICHTUNG",
  },

  text143: {
    ru: "Европейская комиссия предоставляет платформу для разрешения споров в режиме онлайн, также известную как (OS) : https://ec.europa.eu/consumers/odr. Адрес нашей электронной почты можно найти в оттиске выше.",
    en: "The European Commission provides a platform for online dispute resolution also known as (OS) : https://ec.europa.eu/consumers/odr. Our e-mail address can you can find in the imprint above.",
    de: "Die Europäische Kommission stellt eine Plattform bereit zur    Online-Streitbeilegung auch bekannt als (OS)    : https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse können    sie oben im Impressum nachvollziehen.",
  },
  text144: {
    ru: "РАЗРЕШЕНИЕ ПОТРЕБИТЕЛЬСКИХ СПОРОВ/УНИВЕРСАЛЬНЫЙ АРБИТРАЖНЫЙ СОВЕТ",
    en: "CONSUMER DISPUTE RESOLUTION/UNIVERSAL ARBITRATION BOARD",
    de: "VERBRAUCHERSTREITBEILEGUNG/UNIVERSALSCHLICHTUNGSSTELLE",
  },

  text145: {
    ru: "Хотелось бы отметить, что мы не обязаны и не желаем участвовать в разбирательстве споров в потребительском арбитраже.",
    en: "We would like to point out that we are not obligated or willing to participate   to participate in dispute resolution proceedings before a            consumer arbitration board.",
    de: "  Wir möchten darauf hinwiesen das wir nicht verpflichtet oder willig sind, an Streitbeilegungsverfahren vor einer    Verbraucherschlichtungsstelle teilzunehmen.",
  },
  text146: {
    ru: "ОТВЕТСТВЕННОСТЬ ЗА СОДЕРЖАНИЕ",
    en: "LIABILITY FOR CONTENT",
    de: "HAFTUNG FÜR INHALTE",
  },
  text147: {
    ru: "В соответствии с § 7 (1) Закона о телемедиа (TMG) мы, как поставщик услуг, несем ответственность за собственное содержание этих страниц в соответствии с общим законодательством. Однако, согласно §§ 8-10 TMG, мы как поставщик услуг не обязаны контролировать передаваемую или хранимую информацию третьих лиц или даже расследовать данные, указывающие на нарушение или незаконную деятельность. При этом обязательства по удалению или отмене использования информации в соответствии с общими законами, естественно, не затрагиваются. Однако ответственность в этом смысле возможна только с момента обнаружения конкретного нарушения закона. Если нам станет известно о соответствующих нарушениях закона, мы немедленно удалим этот контент и дистанцируемся от него.",
    en: "As a service provider, we are responsible for our own content on these pages in accordance with the general laws pursuant to § 7 para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or even to investigate details that indicate a violation or illegal activity. The obligations to delete or cancel the use of information under the general laws remain unaffected by this, of course. However, liability in this sense is only possible from the time of knowledge of a specific violation of the law. If we become aware of corresponding infringements, we will immediately delete this content and distance ourselves from it.",
    de: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für die eigenen    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter    jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde    Informationen zu überwachen oder sogar nach Details zu ermitteln,    die auf eine Verletzung oder rechtswidrige Tätigkeit hinweisen. Die    Verpflichtungen zur Löschung oder Annullierung der Verwendung von    Informationen nach den allgemeinen Gesetzen bleiben hiervon    selbstverständlich unberührt. Eine Haftung in diesem Sinne ist    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten erletzung    des Rechts möglich. Bei Bekanntwerden von entsprechenden    Rechtsverletzungen werden wir diese Inhalte umgehend löschen und uns    davon distanzieren.",
  },
  text148: {
    ru: "ОТВЕТСТВЕННОСТЬ ЗА ССЫЛКИ",
    en: "LIABILITY FOR LINKS",
    de: "HAFTUNG FÜR LINKS",
  },
  text149: {
    ru: "Наше предложение содержит ссылки на внешние сайты третьих лиц, на содержание которых мы как компания не имеем никакого влияния. Поэтому мы не несем никакой ответственности за содержание этих сайтов, созданных не по нашей вине. Ответственность за содержание страниц, на которые ведут ссылки, всегда несет соответствующий поставщик или оператор страниц. Содержания/страницы, на которые даны ссылки, были проверены в момент интеграции, нами на предмет возможных нарушений законодательства. Незаконное содержание на тот момент выявить не удалось. Постоянный и неусыпный контроль связанных страниц нецелесообразен без прямых указаний на нарушение закона. Если нам станет известно о каких-либо нарушениях закона, мы незамедлительно примем меры по удалению указанного контента.",
    en: "Our offer contains links to external websites of third parties, on said contents we have no influence as a company. Therefore, we cannot assume any liability for these contents not caused by us. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked contents/pages were also examined by us for possible legal violations at the time of integration. Illegal contents were not to be recognized at this time. A permanent and permanent control of the linked pages is not reasonable without direct evidence of a violation of the law. If we become aware of any violations of the law, we will take immediate action to delete the said content.",
    de: "Unser Angebot enthält Links zu externen Websites Dritter, auf            besagte Inhalte haben wir als Unternehmen keinen Einfluss. Deshalb            können wir für diese nicht von uns verursachten Inhalte auch keine         Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets          der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die            verlinkten Inhalte/Seiten wurden zu dem Zeitpunkt der Einbindung,von uns auch mögliche Rechtsverstöße untersucht. Rechtswidrige            Inhalte waren nicht zu erkennen zu diesem Zeitpunkt. Eine dauerhafte            und permanente Kontrolle der verlinkten Seiten ist ohne direkte            Anhaltspunkte einer Verletzung des Rechts nicht zumutbar. Bei            Bekanntwerden von Verletzungen des Rechts werden wir sofortige            Maßnahmen ergreifen um die besagten Inhalte zu Löschen.",
  },
  text150: {
    ru: "КОПИРАЙТ",
    en: "COPYRIGHT",
    de: "URHEBERRECHT",
  },
  text151: {
    ru: "Содержание и произведения, созданные операторами сайта на этих страницах, подпадают под действие немецкого закона об авторском праве. Размножение, обработка, распространение и любое использование вне рамок закона об авторском праве требует письменного согласия соответствующего автора или создателя.    Скачивание и копирование материалов данного сайта разрешено только для частного, некоммерческого использования. В той мере, в какой содержание данного сайта не было создано оператором, соблюдаются авторские права третьих лиц. В частности, материалы третьих лиц помечены соответствующим образом. Если Вам, тем не менее, станет известно о нарушении авторских прав, пожалуйста, сообщите нам об этом. Если нам станет известно о каких-либо нарушениях, мы немедленно удалим такое содержимое.",
    en: "The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.    Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.",
    de: " Die durch die Seitenbetreiber erstellten Inhalte und Werke auf    diesen Seiten unterliegen dem deutschen Urheberrecht. Die    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.    Downloads und Kopien dieser Seite sind nur für den privaten, nicht    kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser    Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte    Dritter beachtet. Insbesondere werden Inhalte Dritter als solche    gekennzeichnet. Sollten Sie trotzdem auf eine    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen    werden wir derartige Inhalte umgehend entfernen.",
  },
  text152: {
    ru: "В салон красоты Наро, нам срочно нужен стилист, парикмахер, с опытом работы, который присоединится к нашему дружному коллективу.",
    en: "At the Naro beauty salon, we urgently need a stylist and hairdresser with experience who will join our friendly team.",
    de: "Im Kosmetikstudio Naro suchen wir dringend eine/n Stylist/in und Friseur/in mit Erfahrung zur Verstärkung unseres sympathischen Teams.",
  },
  text153: {
    ru: "Обязательное требование – знание русского или немецкого языка на разговорном уровне.",
    en: "A mandatory requirement is knowledge of Russian or German at the spoken level.",
    de: "Zwingende Voraussetzung sind Russisch- oder Deutschkenntnisse auf mündlichem Niveau.",
  },
  text154: {
    ru: "Если вы заинтересованы, пожалуйста, свяжитесь с нами для получения дополнительной информации.",
    en: "If you are interested, please feel free to contact us for further information.",
    de: "Bei Interesse können Sie uns gerne für weitere Informationen kontaktieren.",
  },

  text155: {
    ru: "Местонахождение: Германия, Теттнанг",
    en: "Location: Germany, Tettnang",
    de: "Standort: Deutschland, Tettnang",
  },
  text156: {
    ru: "Контакт: Whats App: 491605727126",
    en: "Contact:  Whats App: 491605727126",
    de: "Kontakt: Whats App: 491605727126",
  },

  btn1: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn2: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn3: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn4: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn5: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn6: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn7: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn8: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  btn9: {
    ru: "Цены на услуги",
    en: "Pervice prices",
    de: "Servicepreise",
  },
  text54: {
    ru: "Цены",
    en: "Prices",
    de: "Preise",
  },
  text55: {
    ru: "Перманентный макияж",
    en: "Permanent Make up",
    de: "Permanent Make up",
  },
  text56: {
    ru: "Метод пудры для бровей",
    en: "Eyebrow powder method",
    de: "Augenbrauen Pudermethode",
  },
  text57: {
    ru: "Техника волос на бровях",
    en: "Eyebrow hair technique",
    de: "Augenbrauen Härchen Technik",
  },
  text58: {
    ru: "Подводка верхнего века",
    en: "Eyeliner above",
    de: "Lidstrich oben",
  },
  text59: {
    ru: "Подводка нижнего века",
    en: "Eyeliner below",
    de: "Lidstrich unten",
  },
  text60: {
    ru: "Оба вместе",
    en: "Both together",
    de: "Beide zusammen",
  },
  text61: {
    ru: "Контур и растушевка губ / Акварель",
    en: "Lips Outline and Shading / Watercolor",
    de: "Lippen Kontur und Schattierung / Aquarell",
  },
  text62: {
    ru: "Наращивание ресниц 1:1",
    en: "Eyelash extensions 1:1",
    de: "Wimpern extensions 1:1",
  },
  text63: {
    ru: "Ресницы новые",
    en: "Eyelashes new",
    de: "Wimpern neu",
  },
  text64: {
    ru: "Пополнение через 3 недели",
    en: "Refill after 3 weeks",
    de: "Auffüllen nach 3 Wochen",
  },
  text65: {
    ru: "Пополнение через 4 недели",
    en: "Refill after 4 weeks",
    de: "Auffüllen nach 4 Wochen",
  },
  text66: {
    ru: "Наращивание ресниц 3-5D техника",
    en: "Eyelash extensions 3-5D technique",
    de: "Wimpernextensions 3-5D Technik",
  },
  text67: {
    ru: "Ресницы новые",
    en: "Eyelashes new",
    de: "Wimpern neu",
  },
  text68: {
    ru: "Пополнение через 3 недели",
    en: "Refill after 3 weeks",
    de: "Auffüllen nach 3 Wochen",
  },
  text69: {
    ru: "Пополнение через 4 недели",
    en: "Refill after 4 weeks",
    de: "Auffüllen nach 4 Wochen",
  },
  text70: {
    ru: "Ламинирование",
    en: "Lamination ",
    de: "Laminierung",
  },
  text71: {
    ru: "Ламинирование ресниц ",
    en: "Eyelash lamination",
    de: "Wimpern Laminierung",
  },
  text72: {
    ru: "Ламинирование бровей",
    en: "Eyebrow lamination  ",
    de: "Wimpern Laminierung",
  },
  text73: {
    ru: "Ногтевой сервис",
    en: "Nail services",
    de: "Nagel Dienstleistungen",
  },
  text74: {
    ru: "Маникюр без лака",
    en: "Manicure without varnish",
    de: "Maniküre ohne Lack",
  },
  text75: {
    ru: "Маникюр плюс лак",
    en: "Manicure plus varnish",
    de: "Maniküre zusätzlich Nagellack",
  },
  text76: {
    ru: "Маникюр УФ-лак",
    en: "Manicure UV varnish",
    de: "Maniküre UV-Lack",
  },
  text77: {
    ru: "Педикюр без лака",
    en: "Pedicure without varnish",
    de: "Pediküre ohne Lack",
  },
  text78: {
    ru: "Педикюр плюс лак",
    en: "Padicure with varnish",
    de: "Pediküre zusätzlich Nagellack",
  },
  text79: {
    ru: "Педикюре UV-Lack",
    en: "Pedicure UV varnish",
    de: "Pediküre UV-Lack",
  },
  text80: {
    ru: "Косметические процедуры",
    en: "Cosmetic procedures",
    de: "Kosmetische Behandlungen",
  },
  text81: {
    ru: "Чистка лица",
    en: "Face cleaning",
    de: "Gesichtsreinigung",
  },
  text82: {
    ru: "Чистка лица для новых клиентов",
    en: "Facial cleansing for new clients",
    de: "Gesichtsreinigung für Neukunden",
  },
  text83: {
    ru: "Основное лечение",
    en: "Basic treatment",
    de: "Basisbehandlung",
  },
  text84: {
    ru: "комфортная процедура",
    en: "Comfort treatment",
    de: "Komfortbehandlung",
  },
  text85: {
    ru: "Лечение премиум-класса, включая ультразвук*",
    en: "Premium treatment including ultrasound",
    de: "Premiumbehandlung inkl. Ultraschall*",
  },
  text86: {
    ru: "Оздоровительное лечение",
    en: "Wellness treatment",
    de: "Wellnessbehandlung",
  },
  text87: {
    ru: "Лечение гиперчувствительности (при розацеа, куперозе, химиотерапии и аллергии)",
    en: "Treatment of hypersensitivity (for rosacea, rosacea, chemotherapy and allergies)",
    de: "Hypersensitive Behandlung (bei Rosacea, Couperose, Chemopatienten und Allergien)",
  },
  text88: {
    ru: "Обращение с мужчиной",
    en: "Youth mans",
    de: "Männerbehandlung",
  },
  text89: {
    ru: "Лечение молодежи",
    en: "Youth treatment",
    de: "Jugendbehandlung",
  },
  text90: {
    ru: "(можно забронировать для молодежи до 18 лет)",
    en: "can be booked for youth under 18",
    de: "(buchbar für Jugendliche bis 18 Jahren)",
  },
  text91: {
    ru: "Парикмахерские услуги",
    en: "Hairdressing services",
    de: "Friseurdienstleistungen",
  },
  text92: {
    ru: "Дамы:",
    en: "Ladies",
    de: "Damen:",
  },
  text93: {
    ru: "Мытье/стрижка/сушка феном (L)",
    en: "Wash/Cut/Blow dry (L)",
    de: "Waschen/Schneiden/Föhnen (L)",
  },
  text94: {
    ru: "Мытье/стрижка/сушка феном (M)",
    en: "Wash/Cut/Blow dry (M)",
    de: "Waschen/Schneiden/Föhnen (M)",
  },
  text95: {
    ru: "Мытье/стрижка/сушка феном (S)",
    en: "Wash/Cut/Blow dry (S)",
    de: "Waschen/Schneiden/Föhnen (S)",
  },
  text96: {
    ru: "Мужчины:",
    en: "Mens",
    de: "Herren:",
  },
  text97: {
    ru: "Мужская стрижка `0` W/S/F",
    en: "Men's haircut `0` W/S/F",
    de: "Herrenhaarschnitt `0` W/S/F",
  },
  text98: {
    ru: "Мужская стрижка классика",
    en: "Men's haircut classic",
    de: "Herrenhaarschnit Classic",
  },
  text99: {
    ru: "Бока от '1мм' около 30мин",
    en: "Sides from '1mm' about 30min",
    de: "Die Seiten ab `1mm` ca. 30min",
  },
  text100: {
    ru: "Машинная стрижка/каркас",
    en: "Machine cut/frame",
    de: "Maschinenhaarschnitt/Buzz Cut",
  },
  text101: {
    ru: "Пример круглой стрижки: бока 6мм, верх 12мм",
    en: "Example of a round haircut: sides 6mm, top 12mm",
    de: "Rund-Haarschnitt Beispiel: Seiten 6mm oben 12mm",
  },
  text102: {
    ru: "Подстричь/придать форму бороде",
    en: "Trim/shape beard",
    de: "Bart schneiden/formen",
  },
  text103: {
    ru: "(без мокрой стрижки) топиарий",
    en: "(without wet haircut) topiary",
    de: "(keine Nassrasur) Formschnitt",
  },
  text104: {
    ru: "Мальчики до 12 лет",
    en: "Boys under 12",
    de: "Jungs bis 12 Jahre",
  },
  text105: {
    ru: "Девочки до 12 лет",
    en: "Girls under 12",
    de: "Mädchen bis 12 Jahre",
  },
  text106: {
    ru: "С 13 лет (взрослая цена)",
    en: "From 13 years old (adult price)",
    de: "Ab dem 13. Lebensjahr (Erwachsenen Preis)",
  },
  text107: {
    ru: "Мытье / сушка феном (L)",
    en: "Wash / blow dry (L)",
    de: "Waschen/Föhnen (L)",
  },
  text108: {
    ru: "Мытье / сушка феном (M)",
    en: "Wash / blow dry (M)",
    de: "Waschen/Föhnen (M)",
  },
  text109: {
    ru: "Мытье / сушка феном (S)",
    en: "Wash / blow dry (S)",
    de: "Waschen/Föhnen (S)",
  },
  text110: {
    ru: "Химические услуги только с 18 лет",
    en: "Chemical services only from 18 years old",
    de: "Chemische Dienstleistungen erst ab 18 Jahren",
  },
  text111: {
    ru: "дополнительно",
    en: "additional",
    de: "Zusatzfarben",
  },
  text112: {
    ru: "Окрашивание волос",
    en: "Hair coloring",
    de: "Haare färben komplett",
  },
  text113: {
    ru: "от 50 Euro",
    en: "at 50 Euro",
    de: "ab 50 Euro",
  },
  text114: {
    ru: "от 85 Euro",
    en: "at 85 Euro",
    de: "ab 85 Euro",
  },
  text115: {
    ru: "тонирование волос",
    en: "hair toning",
    de: "Haare Tonisieren",
  },
  text116: {
    ru: "от 32 Euro",
    en: "at 32 Euro",
    de: "ab 32 Euro",
  },
  text117: {
    ru: "Нити",
    en: "Threads",
    de: "Strähnen",
  },
  text118: {
    ru: "от 80 Euro",
    en: "at 80 Euro",
    de: "ab 80 Euro",
  },
  text119: {
    ru: "Стрижка челки",
    en: "Bangs haircut",
    de: "Pony Schneiden",
  },
  text120: {
    ru: "от 10 Euro",
    en: "at 10 Euro",
    de: "ab 10 Euro",
  },
  text121: {
    ru: "Осветление",
    en: "Clarification",
    de: "Blondie Ren",
  },
  text122: {
    ru: "от 60 Euro",
    en: "at 60 Euro",
    de: "ab 60 Euro",
  },
  text123: {
    ru: "Xимзавивка",
    en: "Perm",
    de: "Dauerwelle",
  },
  text124: {
    ru: "от 75 Euro",
    en: "at 75 Euro",
    de: "ab 75 Euro",
  },
  text125: {
    ru: "Окрашивание бровей и ресниц",
    en: "Eyebrow and eyelash tinting",
    de: "Auge Brauen und Wimper Färben",
  },
  text125i: {
    ru: "от 30 Euro",
    en: "at 30 Euro",
    de: "ab 30 Euro",
  },
  text126: {
    ru: "ЗАПИСАТЬСЯ",
    en: "SIGN UP",
    de: "TERMIN BUCHEN",
  },
  text127: {
    ru: "Наши работы...",
    en: "Our works...",
    de: "Unsere Arbeiten...",
  },
  text157: {
    ru: "Новости",
    en: "News",
    de: "Nachricht",
  },

  text7p: {
    ru: "ЗАПИСАТЬСЯ",
    en: "SIGN UP",
    de: "TERMIN BUCHEN",
  },
  text8p: {
    ru: "Дайте нам свой номер и мы будем рады ответить вам.",
    en: "Leave your phone number and we'll be happy to call on you ",
    de: "Geben Sie uns Ihre Nummer und wir antworten Ihnen gerne.",
  },
  text9p: {
    ru: "На какую процедуру, день и время вы хотите записаться?",
    en: "What procedure, day and time do you want to sign up for? ",
    de: "Für welchen Eingriff, Tag und Uhrzeit möchten Sie buchen?",
  },
  text10p: {
    ru: "Процедура",
    en: "Procedure",
    de: "Eingriff",
  },
  text11p: {
    ru: "Если желаемый день и время свободны, ваша запись будет подтверждена. Если нет возможности записаться на этот день и время, вам будут предложены другие варианты. Оплата производится наличными при посещении салона. * Прежде чем прийти в салон, дождитесь подтверждения записи.",
    en: "If the desired day and time is free, your entry will be confirmed. If it is not possible to make an appointment for that day and time, you will be offered other options. Payment is made in cash when visiting the salon. (You can pay in cash) * Please wait for the booking confirmation before coming to the salon.",
    de: "Wenn der gewünschte Tag und die gewünschte Uhrzeit frei sind, wird Ihr Termin bestätigt. Wenn es für diesen Tag und diese Uhrzeit nicht möglich ist, einen Termin zu vereinbaren, werden Ihnen andere Optionen angeboten. Die Bezahlung erfolgt in bar beim Besuch des Salons. * Bevor Sie in den Salon kommen, warten Sie auf die Bestätigung des Termins.",
  },
  text12p: {
    ru: "Время",
    en: "Time",
    de: "Uhrzeit",
  },
  text13p: {
    ru: "День",
    en: "Day",
    de: "Tag",
  },
};

// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    case "/services.html":
      currentTexts = homeTexts;
      break;
    case "/price.html":
      currentTexts = homeTexts;
      break;
    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
function checkActiveLangButton() {
  switch (currentLang) {
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header__btn_active");
      rulang();
      document.querySelector(".maps-ru").style.display = "block";

      document.querySelector(".maps-en").style.display = "none";

      document.querySelector(".maps-de").style.display = "none";

      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      enLang();
      break;
    case "de":
      document
        .querySelector('[data-btn="de"]')
        .classList.add("header__btn_active");
      delang();

      break;

    default:
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header__btn_active");

      break;
  }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}
/////////////////////////

if (document.querySelector(".en.header__btn_active")) {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Name";
  });

  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Date of Birth";
  });
  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Phone number";
  });
  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Address";
  });
  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Procedure";
  });
  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Select date";
  });

  enLang();

  document.querySelector(".maps-ru").style.display = "none";

  document.querySelector(".maps-en").style.display = "block";

  document.querySelector(".maps-de").style.display = "none";
}
/////////////////////

if (document.querySelector(".ru.header__btn_active")) {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Ф.И.О";
  });
  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Дата рождения";
  });
  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Номер телефона";
  });

  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Адрес";
  });

  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Название процедуры";
  });

  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Выберите дату";
  });

  rulang();
  document.querySelector(".maps-ru").style.display = "block";

  document.querySelector(".maps-en").style.display = "none";

  document.querySelector(".maps-de").style.display = "none";
}
/////////

if (document.querySelector(".de.header__btn_active")) {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Name";
  });
  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Geburtsdatum";
  });

  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Telefon";
  });
  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Adresse";
  });
  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Eingriff";
  });
  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Datum auswählen";
  });

  delang();
  document.querySelector(".maps-ru").style.display = "none";
  document.querySelector(".maps-en").style.display = "none";
  document.querySelector(".maps-de").style.display = "block";
}
////////

console.log("navigator.language", checkBrowserLang());
document.querySelector(".ru").addEventListener("click", function () {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Ф.И.О";
  });
  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Дата рождения";
  });
  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Номер телефона";
  });

  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Адрес";
  });

  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Название процедуры";
  });

  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Выберите дату";
  });

  rulang();

  document.querySelector(".maps-ru").style.display = "block";

  document.querySelector(".maps-en").style.display = "none";

  document.querySelector(".maps-de").style.display = "none";
});
document.querySelector(".de").addEventListener("click", function () {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Name";
  });
  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Geburtsdatum";
  });

  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Telefon";
  });
  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Adresse";
  });
  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Eingriff";
  });
  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Datum auswählen";
  });

  delang();
  document.querySelector(".maps-ru").style.display = "none";

  document.querySelector(".maps-en").style.display = "none";

  document.querySelector(".maps-de").style.display = "block";
});

document.querySelector(".en").addEventListener("click", function () {
  document.querySelectorAll(".input-group-name input").forEach((elem) => {
    elem.placeholder = "Name";
  });

  document.querySelectorAll(".input-group-date input").forEach((elem) => {
    elem.placeholder = "Date of Birth";
  });
  document.querySelectorAll(".input-group-phone input").forEach((elem) => {
    elem.placeholder = "Phone number";
  });
  document.querySelectorAll(".input-group-address input").forEach((elem) => {
    elem.placeholder = "Address";
  });
  document.querySelectorAll(".input-group-procedure input").forEach((elem) => {
    elem.placeholder = "Procedure";
  });
  document.querySelectorAll(".input-group-day").forEach((elem) => {
    elem.placeholder = "Select date";
  });

  enLang();

  document.querySelector(".maps-ru").style.display = "none";

  document.querySelector(".maps-en").style.display = "block";

  document.querySelector(".maps-de").style.display = "none";
});

if (document.querySelector(".ru.header__btn_active")) {
  document.querySelector(
    ".header-content-left-block h1 span"
  ).style.fontFamily = "Cancellaresca";
  document.querySelector(".font").style.fontFamily = "Cancellaresca";
}

document.querySelector(".ru").addEventListener("click", function () {
  document.querySelector(
    ".header-content-left-block h1 span"
  ).style.fontFamily = "Cancellaresca";
  document.querySelector(".font").style.fontFamily = "Cancellaresca";
});

document.querySelector(".de").addEventListener("click", function () {
  document.querySelector(".font").style.fontFamily =
    "Cancellaresca Script Regular";
  document.querySelector(
    ".header-content-left-block h1 span"
  ).style.fontFamily = "Cancellaresca Script Regular";
});
