/** Chunk was on web.js **/
/** chunk id: 465323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $g: () => u
}), require("./65821.js");
var Chunk737291 = require("./737291.js"),
  i = require.n(Chunk737291),
  Chunk818348 = require("./818348.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = c(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let u = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
    if (t === a.Yr.DISCORD_ORB) return e.toString();
    let {
      convertToMajorUnits: i = true
    } = r, o = l(r, ["convertToMajorUnits"]);
    return Intl.NumberFormat(n, s({
      style: "currency",
      currency: t
    }, o)).format(i ? f(e, t) : e)
  },
  d = {
    [Chunk818348.Yr.AED]: 2,
    [Chunk818348.Yr.AFN]: 2,
    [Chunk818348.Yr.ALL]: 2,
    [Chunk818348.Yr.AMD]: 2,
    [Chunk818348.Yr.ANG]: 2,
    [Chunk818348.Yr.AOA]: 2,
    [Chunk818348.Yr.ARS]: 2,
    [Chunk818348.Yr.AUD]: 2,
    [Chunk818348.Yr.AWG]: 2,
    [Chunk818348.Yr.AZN]: 2,
    [Chunk818348.Yr.BAM]: 2,
    [Chunk818348.Yr.BBD]: 2,
    [Chunk818348.Yr.BDT]: 2,
    [Chunk818348.Yr.BGN]: 2,
    [Chunk818348.Yr.BHD]: 3,
    [Chunk818348.Yr.BIF]: 0,
    [Chunk818348.Yr.BMD]: 2,
    [Chunk818348.Yr.BND]: 2,
    [Chunk818348.Yr.BOB]: 2,
    [Chunk818348.Yr.BOV]: 2,
    [Chunk818348.Yr.BRL]: 2,
    [Chunk818348.Yr.BSD]: 2,
    [Chunk818348.Yr.BTN]: 2,
    [Chunk818348.Yr.BWP]: 2,
    [Chunk818348.Yr.BYR]: 0,
    [Chunk818348.Yr.BYN]: 2,
    [Chunk818348.Yr.BZD]: 2,
    [Chunk818348.Yr.CAD]: 2,
    [Chunk818348.Yr.CDF]: 2,
    [Chunk818348.Yr.CHE]: 2,
    [Chunk818348.Yr.CHF]: 2,
    [Chunk818348.Yr.CHW]: 2,
    [Chunk818348.Yr.CLF]: 0,
    [Chunk818348.Yr.CLP]: 0,
    [Chunk818348.Yr.CNY]: 2,
    [Chunk818348.Yr.COP]: 2,
    [Chunk818348.Yr.COU]: 2,
    [Chunk818348.Yr.CRC]: 2,
    [Chunk818348.Yr.CUC]: 2,
    [Chunk818348.Yr.CUP]: 2,
    [Chunk818348.Yr.CVE]: 2,
    [Chunk818348.Yr.CZK]: 2,
    [Chunk818348.Yr.DJF]: 0,
    [Chunk818348.Yr.DKK]: 2,
    [Chunk818348.Yr.DOP]: 2,
    [Chunk818348.Yr.DZD]: 2,
    [Chunk818348.Yr.EGP]: 2,
    [Chunk818348.Yr.ERN]: 2,
    [Chunk818348.Yr.ETB]: 2,
    [Chunk818348.Yr.EUR]: 2,
    [Chunk818348.Yr.FJD]: 2,
    [Chunk818348.Yr.FKP]: 2,
    [Chunk818348.Yr.GBP]: 2,
    [Chunk818348.Yr.GEL]: 2,
    [Chunk818348.Yr.GHS]: 2,
    [Chunk818348.Yr.GIP]: 2,
    [Chunk818348.Yr.GMD]: 2,
    [Chunk818348.Yr.GNF]: 0,
    [Chunk818348.Yr.GTQ]: 2,
    [Chunk818348.Yr.GYD]: 2,
    [Chunk818348.Yr.HKD]: 2,
    [Chunk818348.Yr.HNL]: 2,
    [Chunk818348.Yr.HRK]: 2,
    [Chunk818348.Yr.HTG]: 2,
    [Chunk818348.Yr.HUF]: 2,
    [Chunk818348.Yr.IDR]: 2,
    [Chunk818348.Yr.ILS]: 2,
    [Chunk818348.Yr.INR]: 2,
    [Chunk818348.Yr.IQD]: 3,
    [Chunk818348.Yr.IRR]: 2,
    [Chunk818348.Yr.ISK]: 0,
    [Chunk818348.Yr.JMD]: 2,
    [Chunk818348.Yr.JOD]: 3,
    [Chunk818348.Yr.JPY]: 0,
    [Chunk818348.Yr.KES]: 2,
    [Chunk818348.Yr.KGS]: 2,
    [Chunk818348.Yr.KHR]: 2,
    [Chunk818348.Yr.KMF]: 0,
    [Chunk818348.Yr.KPW]: 2,
    [Chunk818348.Yr.KRW]: 0,
    [Chunk818348.Yr.KWD]: 3,
    [Chunk818348.Yr.KYD]: 2,
    [Chunk818348.Yr.KZT]: 2,
    [Chunk818348.Yr.LAK]: 2,
    [Chunk818348.Yr.LBP]: 2,
    [Chunk818348.Yr.LKR]: 2,
    [Chunk818348.Yr.LRD]: 2,
    [Chunk818348.Yr.LSL]: 2,
    [Chunk818348.Yr.LTL]: 2,
    [Chunk818348.Yr.LVL]: 2,
    [Chunk818348.Yr.LYD]: 3,
    [Chunk818348.Yr.MAD]: 2,
    [Chunk818348.Yr.MDL]: 2,
    [Chunk818348.Yr.MGA]: 2,
    [Chunk818348.Yr.MKD]: 2,
    [Chunk818348.Yr.MMK]: 2,
    [Chunk818348.Yr.MNT]: 2,
    [Chunk818348.Yr.MOP]: 2,
    [Chunk818348.Yr.MRO]: 2,
    [Chunk818348.Yr.MUR]: 2,
    [Chunk818348.Yr.MVR]: 2,
    [Chunk818348.Yr.MWK]: 2,
    [Chunk818348.Yr.MXN]: 2,
    [Chunk818348.Yr.MXV]: 2,
    [Chunk818348.Yr.MYR]: 2,
    [Chunk818348.Yr.MZN]: 2,
    [Chunk818348.Yr.NAD]: 2,
    [Chunk818348.Yr.NGN]: 2,
    [Chunk818348.Yr.NIO]: 2,
    [Chunk818348.Yr.NOK]: 2,
    [Chunk818348.Yr.NPR]: 2,
    [Chunk818348.Yr.NZD]: 2,
    [Chunk818348.Yr.OMR]: 3,
    [Chunk818348.Yr.PAB]: 2,
    [Chunk818348.Yr.PEN]: 2,
    [Chunk818348.Yr.PGK]: 2,
    [Chunk818348.Yr.PHP]: 2,
    [Chunk818348.Yr.PKR]: 2,
    [Chunk818348.Yr.PLN]: 2,
    [Chunk818348.Yr.PYG]: 0,
    [Chunk818348.Yr.QAR]: 2,
    [Chunk818348.Yr.RON]: 2,
    [Chunk818348.Yr.RSD]: 2,
    [Chunk818348.Yr.RUB]: 2,
    [Chunk818348.Yr.RWF]: 0,
    [Chunk818348.Yr.SAR]: 2,
    [Chunk818348.Yr.SBD]: 2,
    [Chunk818348.Yr.SCR]: 2,
    [Chunk818348.Yr.SDG]: 2,
    [Chunk818348.Yr.SEK]: 2,
    [Chunk818348.Yr.SGD]: 2,
    [Chunk818348.Yr.SHP]: 2,
    [Chunk818348.Yr.SLL]: 2,
    [Chunk818348.Yr.SOS]: 2,
    [Chunk818348.Yr.SRD]: 2,
    [Chunk818348.Yr.SSP]: 2,
    [Chunk818348.Yr.STD]: 2,
    [Chunk818348.Yr.SVC]: 2,
    [Chunk818348.Yr.SYP]: 2,
    [Chunk818348.Yr.SZL]: 2,
    [Chunk818348.Yr.THB]: 2,
    [Chunk818348.Yr.TJS]: 2,
    [Chunk818348.Yr.TMT]: 2,
    [Chunk818348.Yr.TND]: 3,
    [Chunk818348.Yr.TOP]: 2,
    [Chunk818348.Yr.TRY]: 2,
    [Chunk818348.Yr.TTD]: 2,
    [Chunk818348.Yr.TWD]: 2,
    [Chunk818348.Yr.TZS]: 2,
    [Chunk818348.Yr.UAH]: 2,
    [Chunk818348.Yr.UGX]: 0,
    [Chunk818348.Yr.USD]: 2,
    [Chunk818348.Yr.USN]: 2,
    [Chunk818348.Yr.USS]: 2,
    [Chunk818348.Yr.UYI]: 0,
    [Chunk818348.Yr.UYU]: 2,
    [Chunk818348.Yr.UZS]: 2,
    [Chunk818348.Yr.VEF]: 2,
    [Chunk818348.Yr.VND]: 0,
    [Chunk818348.Yr.VUV]: 0,
    [Chunk818348.Yr.WST]: 2,
    [Chunk818348.Yr.XAF]: 0,
    [Chunk818348.Yr.XAG]: 0,
    [Chunk818348.Yr.XAU]: 0,
    [Chunk818348.Yr.XBA]: 0,
    [Chunk818348.Yr.XBB]: 0,
    [Chunk818348.Yr.XBC]: 0,
    [Chunk818348.Yr.XBD]: 0,
    [Chunk818348.Yr.XCD]: 2,
    [Chunk818348.Yr.XDR]: 0,
    [Chunk818348.Yr.XFU]: 0,
    [Chunk818348.Yr.XOF]: 0,
    [Chunk818348.Yr.XPD]: 0,
    [Chunk818348.Yr.XPF]: 0,
    [Chunk818348.Yr.XPT]: 0,
    [Chunk818348.Yr.XSU]: 0,
    [Chunk818348.Yr.XTS]: 0,
    [Chunk818348.Yr.XUA]: 0,
    [Chunk818348.Yr.YER]: 2,
    [Chunk818348.Yr.ZAR]: 2,
    [Chunk818348.Yr.ZMW]: 2,
    [Chunk818348.Yr.ZWL]: 2,
    [Chunk818348.Yr.DISCORD_ORB]: 0
  },
  f = (e, t) => {
    let n = d[t];
    if (null == n) throw Error("Unexpected currency ".concat(t));
    return new(i())(e).dividedBy(10 ** n).toNumber()
  }