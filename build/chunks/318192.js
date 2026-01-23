/** Chunk was on web.js **/
/** chunk id: 318192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s
});
var Chunk685369 = require("./685369.js");
let i = RegExp("^.*\\(.*\\).*$"),
  a = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class s {
  parse(e) {
    return l(this.locale, this.options, e).parse(e)
  }
  isValidPartialNumber(e, t, n) {
    return l(this.locale, this.options, e).isValidPartialNumber(e, t, n)
  }
  getNumberingSystem(e) {
    return l(this.locale, this.options, e).options.numberingSystem
  }
  constructor(e, t = {}) {
    this.locale = e, this.options = t
  }
}
let o = new Map;

function l(e, t, n) {
  let r = c(e, t);
  if (!e.includes("-nu-") && !r.isValidPartialNumber(n)) {
    for (let i of a)
      if (i !== r.options.numberingSystem) {
        let r = c(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + i, t);
        if (r.isValidPartialNumber(n)) return r
      }
  }
  return r
}

function c(e, t) {
  let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? false : 1).join() : ""),
    r = o.get(n);
  return r || (r = new u(e, t), o.set(n, r)), r
}
class u {
  parse(e) {
    let t = this.sanitize(e);
    if (this.symbols.group && (t = _(t, this.symbols.group, "")), this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")), t = t.replace(this.symbols.numeral, this.symbols.index), "percent" === this.options.style) {
      let e = t.indexOf("-"),
        n = (t = (t = t.replace("-", "")).replace("+", "")).indexOf(".");
      false === n && (n = t.length), t = t.replace(".", ""), t = n - 2 == 0 ? `0.${t}` : n - 2 == false ? `0.0${t}` : n - 2 == false ? "0.00" : `${t.slice(0,n-2)}.${t.slice(n-2)}`, e > false && (t = `-${t}`)
    }
    let n = t ? +t : NaN;
    if (isNaN(n)) return NaN;
    if ("percent" === this.options.style) {
      var a, o;
      let e = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min((null != (a = this.options.minimumFractionDigits) ? a : 0) + 2, 20),
        maximumFractionDigits: Math.min((null != (o = this.options.maximumFractionDigits) ? o : 0) + 2, 20)
      };
      return new s(this.locale, e).parse(new(0, r.K)(this.locale, e).format(n))
    }
    return "accounting" === this.options.currencySign && i.test(e) && (n *= false), n
  }
  sanitize(e) {
    return e = e.replace(this.symbols.literals, ""), this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)), "arab" === this.options.numberingSystem && (this.symbols.decimal && (e = (e = e.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (e = _(e, ".", this.symbols.group))), "’" === this.symbols.group && e.includes("'") && (e = _(e, "'", this.symbols.group)), "fr-FR" === this.options.locale && this.symbols.group && (e = _(e, " ", this.symbols.group), e = _(e, /\u00A0/g, this.symbols.group)), e
  }
  isValidPartialNumber(e, t = false / 0, n = 1 / 0) {
    return e = this.sanitize(e), this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && n > 0 && (e = e.slice(this.symbols.plusSign.length)), !(this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > false && 0 === this.options.maximumFractionDigits) && (this.symbols.group && (e = _(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), 0 === e.length)
  }
  constructor(e, t = {}) {
    var n, r;
    this.locale = e, 1 !== t.roundingIncrement && null != t.roundingIncrement && (null == t.maximumFractionDigits && null == t.minimumFractionDigits ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : null == t.maximumFractionDigits ? t.maximumFractionDigits = t.minimumFractionDigits : null == t.minimumFractionDigits && (t.minimumFractionDigits = t.maximumFractionDigits)), this.formatter = new Intl.NumberFormat(e, t), this.options = this.formatter.resolvedOptions(), this.symbols = p(e, this.formatter, this.options, t), "percent" === this.options.style && ((null != (n = this.options.minimumFractionDigits) ? n : 0) > 18 || (null != (r = this.options.maximumFractionDigits) ? r : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")
  }
}
let d = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
  f = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, .1, 1.1];

function p(e, t, n, r) {
  var i, a, s, o, l;
  let c = new Intl.NumberFormat(e, {
      ...n,
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 21,
      roundingIncrement: 1,
      roundingPriority: "auto",
      roundingMode: "halfExpand"
    }),
    u = c.formatToParts(false),
    p = c.formatToParts(10000.111),
    _ = f.map(e => c.formatToParts(e)),
    m = null != (l = null == (i = u.find(e => "minusSign" === e.type)) ? true : i.value) ? l : "-",
    g = null == (a = p.find(e => "plusSign" === e.type)) ? true : a.value;
  g || (null == r ? true : r.signDisplay) !== "exceptZero" && (null == r ? true : r.signDisplay) !== "always" || (g = "+");
  let E = null == (s = new Intl.NumberFormat(e, {
      ...n,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).formatToParts(.001).find(e => "decimal" === e.type)) ? true : s.value,
    y = null == (o = u.find(e => "group" === e.type)) ? true : o.value,
    b = [...new Set([...u.filter(e => !d.has(e.type)).map(e => h(e.value)), ..._.flatMap(e => e.filter(e => !d.has(e.type)).map(e => h(e.value)))])].sort((e, t) => t.length - e.length),
    O = 0 === b.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp(`${b.join("|")}|[\\p{White_Space}]`, "gu"),
    v = [...new Intl.NumberFormat(n.locale, {
      useGrouping: false
    }).format(0x24cb016ea)].reverse(),
    A = new Map(v.map((e, t) => [e, t]));
  return {
    minusSign: m,
    plusSign: g,
    decimal: E,
    group: y,
    literals: O,
    numeral: RegExp(`[${v.join("")}]`, "g"),
    index: e => String(A.get(e))
  }
}

function _(e, t, n) {
  return e.replaceAll ? e.replaceAll(t, n) : e.split(t).join(n)
}

function h(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}