/** Chunk was on 62629 (b71691e334010d68.js) **/
t.d(n, {
  Z: () => a
});
var e = t(799761);
let a = {
  ordinalNumber: function(i, n) {
    var t = Number(i),
      e = null == n ? void 0 : n.unit;
    return t + ("date" === e ? "-е" : "week" === e || "minute" === e || "second" === e ? "-я" : "-й")
  },
  era: (0, e.Z)({
    values: {
      narrow: ["до н.э.", "н.э."],
      abbreviated: ["до н. э.", "н. э."],
      wide: ["до нашей эры", "нашей эры"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, e.Z)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
      wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
    },
    defaultWidth: "wide",
    argumentCallback: function(i) {
      return i - 1
    }
  }),
  month: (0, e.Z)({
    values: {
      narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
      abbreviated: ["янв.", "фев.", "март", "апр.", "май", "июнь", "июль", "авг.", "сент.", "окт.", "нояб.", "дек."],
      wide: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
      abbreviated: ["янв.", "фев.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
      wide: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    },
    defaultFormattingWidth: "wide"
  }),
  day: (0, e.Z)({
    values: {
      narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
      short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
      abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
      wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: (0, e.Z)({
    values: {
      narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утро",
        afternoon: "день",
        evening: "веч.",
        night: "ночь"
      },
      abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утро",
        afternoon: "день",
        evening: "веч.",
        night: "ночь"
      },
      wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "полночь",
        noon: "полдень",
        morning: "утро",
        afternoon: "день",
        evening: "вечер",
        night: "ночь"
      }
    },
    defaultWidth: "any",
    formattingValues: {
      narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утра",
        afternoon: "дня",
        evening: "веч.",
        night: "ночи"
      },
      abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "полн.",
        noon: "полд.",
        morning: "утра",
        afternoon: "дня",
        evening: "веч.",
        night: "ночи"
      },
      wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "полночь",
        noon: "полдень",
        morning: "утра",
        afternoon: "дня",
        evening: "вечера",
        night: "ночи"
      }
    },
    defaultFormattingWidth: "wide"
  })
}