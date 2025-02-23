/** Chunk was on 27381 (c8aead9707599632.js) **/
t.d(e, {
  Z: () => l
});
var i = t(799761),
  n = {
    narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
    abbreviated: ["tammi", "helmi", "maalis", "huhti", "touko", "kes\xe4", "hein\xe4", "elo", "syys", "loka", "marras", "joulu"],
    wide: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kes\xe4kuu", "hein\xe4kuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
  },
  u = {
    narrow: n.narrow,
    abbreviated: n.abbreviated,
    wide: ["tammikuuta", "helmikuuta", "maaliskuuta", "huhtikuuta", "toukokuuta", "kes\xe4kuuta", "hein\xe4kuuta", "elokuuta", "syyskuuta", "lokakuuta", "marraskuuta", "joulukuuta"]
  },
  o = {
    narrow: ["S", "M", "T", "K", "T", "P", "L"],
    short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
    wide: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
  },
  r = {
    narrow: o.narrow,
    short: o.short,
    abbreviated: o.abbreviated,
    wide: ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"]
  };
let l = {
  ordinalNumber: function(a, e) {
    return Number(a) + "."
  },
  era: (0, i.Z)({
    values: {
      narrow: ["eaa.", "jaa."],
      abbreviated: ["eaa.", "jaa."],
      wide: ["ennen ajanlaskun alkua", "j\xe4lkeen ajanlaskun alun"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, i.Z)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
    },
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1
    }
  }),
  month: (0, i.Z)({
    values: n,
    defaultWidth: "wide",
    formattingValues: u,
    defaultFormattingWidth: "wide"
  }),
  day: (0, i.Z)({
    values: o,
    defaultWidth: "wide",
    formattingValues: r,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: (0, i.Z)({
    values: {
      narrow: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xf6",
        noon: "keskip\xe4iv\xe4",
        morning: "ap",
        afternoon: "ip",
        evening: "illalla",
        night: "y\xf6ll\xe4"
      },
      abbreviated: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xf6",
        noon: "keskip\xe4iv\xe4",
        morning: "ap",
        afternoon: "ip",
        evening: "illalla",
        night: "y\xf6ll\xe4"
      },
      wide: {
        am: "ap",
        pm: "ip",
        midnight: "keskiy\xf6ll\xe4",
        noon: "keskip\xe4iv\xe4ll\xe4",
        morning: "aamup\xe4iv\xe4ll\xe4",
        afternoon: "iltap\xe4iv\xe4ll\xe4",
        evening: "illalla",
        night: "y\xf6ll\xe4"
      }
    },
    defaultWidth: "wide"
  })
}