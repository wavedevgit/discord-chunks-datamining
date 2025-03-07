/** Chunk was on 79457 **/
a.d(e, {
  Z: () => r
});
var t = a(799761);
let r = {
  ordinalNumber: function(i, e) {
    return Number(i) + "-oji"
  },
  era: (0, t.Z)({
    values: {
      narrow: ["pr. Kr.", "po Kr."],
      abbreviated: ["pr. Kr.", "po Kr."],
      wide: ["prieš Kristų", "po Kristaus"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, t.Z)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
      wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["I k.", "II k.", "III k.", "IV k."],
      wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
    },
    defaultFormattingWidth: "wide",
    argumentCallback: function(i) {
      return i - 1
    }
  }),
  month: (0, t.Z)({
    values: {
      narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
      abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
      wide: ["sausis", "vasaris", "kovas", "balandis", "gegužė", "birželis", "liepa", "rugpjūtis", "rugsėjis", "spalis", "lapkritis", "gruodis"]
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
      abbreviated: ["saus.", "vas.", "kov.", "bal.", "geg.", "birž.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."],
      wide: ["sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio", "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio"]
    },
    defaultFormattingWidth: "wide"
  }),
  day: (0, t.Z)({
    values: {
      narrow: ["S", "P", "A", "T", "K", "P", "Š"],
      short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
      abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
      wide: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"]
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: ["S", "P", "A", "T", "K", "P", "Š"],
      short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Št"],
      abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "št"],
      wide: ["sekmadienį", "pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį", "šeštadienį"]
    },
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: (0, t.Z)({
    values: {
      narrow: {
        am: "pr. p.",
        pm: "pop.",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
      },
      abbreviated: {
        am: "priešpiet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
      },
      wide: {
        am: "priešpiet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "vidurdienis",
        morning: "rytas",
        afternoon: "diena",
        evening: "vakaras",
        night: "naktis"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "pr. p.",
        pm: "pop.",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popietė",
        evening: "vakaras",
        night: "naktis"
      },
      abbreviated: {
        am: "priešpiet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popietė",
        evening: "vakaras",
        night: "naktis"
      },
      wide: {
        am: "priešpiet",
        pm: "popiet",
        midnight: "vidurnaktis",
        noon: "perpiet",
        morning: "rytas",
        afternoon: "popietė",
        evening: "vakaras",
        night: "naktis"
      }
    },
    defaultFormattingWidth: "wide"
  })
}