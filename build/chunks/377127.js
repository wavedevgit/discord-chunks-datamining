/** Chunk was on 95091 **/
/** chunk id: 377127, original params: i,a,e (module,exports,require) **/
require.d(exports, {
  A: () => t
});
var Chunk981737 = require("./981737.js");
let t = {
  ordinalNumber: function(i, a) {
    return String(i)
  },
  era: (0, Chunk981737.A)({
    values: {
      narrow: ["\xce", "D"],
      abbreviated: ["\xce.d.C.", "D.C."],
      wide: ["\xcenainte de Cristos", "După Cristos"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, Chunk981737.A)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["T1", "T2", "T3", "T4"],
      wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"]
    },
    defaultWidth: "wide",
    argumentCallback: function(i) {
      return i - 1
    }
  }),
  month: (0, Chunk981737.A)({
    values: {
      narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
      abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
      wide: ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"]
    },
    defaultWidth: "wide"
  }),
  day: (0, Chunk981737.A)({
    values: {
      narrow: ["d", "l", "m", "m", "j", "v", "s"],
      short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xe2"],
      abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xe2m"],
      wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "s\xe2mbătă"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: (0, Chunk981737.A)({
    values: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "ami",
        morning: "dim",
        afternoon: "da",
        evening: "s",
        night: "n"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "miezul nopții",
        noon: "amiază",
        morning: "dimineață",
        afternoon: "după-amiază",
        evening: "seară",
        night: "noapte"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "miezul nopții",
        noon: "amiază",
        morning: "dimineață",
        afternoon: "după-amiază",
        evening: "seară",
        night: "noapte"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "amiază",
        morning: "dimineață",
        afternoon: "după-amiază",
        evening: "seară",
        night: "noapte"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "miezul nopții",
        noon: "amiază",
        morning: "dimineață",
        afternoon: "după-amiază",
        evening: "seară",
        night: "noapte"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "miezul nopții",
        noon: "amiază",
        morning: "dimineață",
        afternoon: "după-amiază",
        evening: "seară",
        night: "noapte"
      }
    },
    defaultFormattingWidth: "wide"
  })
}