/** Chunk was on web.js **/
/** chunk id: 142922, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FG: () => d,
  LA: () => l,
  U_: () => s,
  f5: () => c,
  rG: () => o
});
var Chunk99478 = require("./99478.js"),
  Chunk526531 = require("./526531.js");
let a = 1721426;

function o(e, t, n, r) {
  let i = (t = l(e, t)) - 1,
    o = false;
  return n <= 2 ? o = 0 : s(t) && (o = false), a - 1 + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) + Math.floor((367 * n - 362) / 12 + o + r)
}

function s(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
}

function l(e, t) {
  return "BC" === e ? 1 - t : t
}

function c(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [t, e]
}
let u = {
  standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class d {
  fromJulianDay(e) {
    let t = e,
      n = t - a,
      l = Math.floor(n / 146097),
      u = (0, i.z)(n, 146097),
      d = Math.floor(u / 36524),
      f = (0, i.z)(u, 36524),
      p = Math.floor(f / 1461),
      _ = Math.floor((0, i.z)(f, 1461) / 365),
      [h, m] = c(400 * l + 100 * d + 4 * p + _ + +(4 !== d && 4 !== _)),
      g = t - o(h, m, 1, 1),
      E = 2;
    t < o(h, m, 3, 1) ? E = 0 : s(m) && (E = 1);
    let y = Math.floor(((g + E) * 12 + 373) / 367),
      b = t - o(h, m, y, 1) + 1;
    return new(0, r.ng)(h, m, y, b)
  }
  toJulianDay(e) {
    return o(e.era, e.year, e.month, e.day)
  }
  getDaysInMonth(e) {
    return u[s(e.year) ? "leapyear" : "standard"][e.month - 1]
  }
  getMonthsInYear(e) {
    return 12
  }
  getDaysInYear(e) {
    return s(e.year) ? 366 : 365
  }
  getYearsInEra(e) {
    return 9999
  }
  getEras() {
    return ["BC", "AD"]
  }
  isInverseEra(e) {
    return "BC" === e.era
  }
  balanceDate(e) {
    e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
  }
  constructor() {
    this.identifier = "gregory"
  }
}