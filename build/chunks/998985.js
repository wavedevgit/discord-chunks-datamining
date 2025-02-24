/** Chunk was on 27381 **/
function i(a) {
  return a.replace(/sekuntia?/, "sekunnin")
}

function n(a) {
  return a.replace(/minuuttia?/, "minuutin")
}

function u(a) {
  return a.replace(/tuntia?/, "tunnin")
}

function o(a) {
  return a.replace(/(viikko|viikkoa)/, "viikon")
}

function r(a) {
  return a.replace(/(kuukausi|kuukautta)/, "kuukauden")
}

function l(a) {
  return a.replace(/(vuosi|vuotta)/, "vuoden")
}
t.d(e, {
  Z: () => k
});
var s = {
  lessThanXSeconds: {
    one: "alle sekunti",
    other: "alle {{count}} sekuntia",
    futureTense: i
  },
  xSeconds: {
    one: "sekunti",
    other: "{{count}} sekuntia",
    futureTense: i
  },
  halfAMinute: {
    one: "puoli minuuttia",
    other: "puoli minuuttia",
    futureTense: function(a) {
      return "puolen minuutin"
    }
  },
  lessThanXMinutes: {
    one: "alle minuutti",
    other: "alle {{count}} minuuttia",
    futureTense: n
  },
  xMinutes: {
    one: "minuutti",
    other: "{{count}} minuuttia",
    futureTense: n
  },
  aboutXHours: {
    one: "noin tunti",
    other: "noin {{count}} tuntia",
    futureTense: u
  },
  xHours: {
    one: "tunti",
    other: "{{count}} tuntia",
    futureTense: u
  },
  xDays: {
    one: "p\xe4iv\xe4",
    other: "{{count}} p\xe4iv\xe4\xe4",
    futureTense: function(a) {
      return a.replace(/päivää?/, "p\xe4iv\xe4n")
    }
  },
  aboutXWeeks: {
    one: "noin viikko",
    other: "noin {{count}} viikkoa",
    futureTense: o
  },
  xWeeks: {
    one: "viikko",
    other: "{{count}} viikkoa",
    futureTense: o
  },
  aboutXMonths: {
    one: "noin kuukausi",
    other: "noin {{count}} kuukautta",
    futureTense: r
  },
  xMonths: {
    one: "kuukausi",
    other: "{{count}} kuukautta",
    futureTense: r
  },
  aboutXYears: {
    one: "noin vuosi",
    other: "noin {{count}} vuotta",
    futureTense: l
  },
  xYears: {
    one: "vuosi",
    other: "{{count}} vuotta",
    futureTense: l
  },
  overXYears: {
    one: "yli vuosi",
    other: "yli {{count}} vuotta",
    futureTense: l
  },
  almostXYears: {
    one: "l\xe4hes vuosi",
    other: "l\xe4hes {{count}} vuotta",
    futureTense: l
  }
};
let k = function(a, e, t) {
  var i = s[a],
    n = 1 === e ? i.one : i.other.replace("{{count}}", String(e));
  return null != t && t.addSuffix ? t.comparison && t.comparison > 0 ? i.futureTense(n) + " kuluttua" : n + " sitten" : n
}