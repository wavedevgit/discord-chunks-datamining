/** Chunk was on web.js **/
/** chunk id: 221513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => u
}), require("./415506.js");
var Chunk567198 = require("./567198.js"),
  i = require.n(Chunk567198),
  Chunk231338 = require("./231338.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let u = function(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
    if (t === o.pK.DISCORD_ORB) return e.toString();
    let {
      convertToMajorUnits: i = true
    } = r, a = l(r, ["convertToMajorUnits"]);
    return Intl.NumberFormat(n, s({
      style: "currency",
      currency: t
    }, a)).format(i ? f(e, t) : e)
  },
  d = {
    [Chunk231338.pK.AED]: 2,
    [Chunk231338.pK.AFN]: 2,
    [Chunk231338.pK.ALL]: 2,
    [Chunk231338.pK.AMD]: 2,
    [Chunk231338.pK.ANG]: 2,
    [Chunk231338.pK.AOA]: 2,
    [Chunk231338.pK.ARS]: 2,
    [Chunk231338.pK.AUD]: 2,
    [Chunk231338.pK.AWG]: 2,
    [Chunk231338.pK.AZN]: 2,
    [Chunk231338.pK.BAM]: 2,
    [Chunk231338.pK.BBD]: 2,
    [Chunk231338.pK.BDT]: 2,
    [Chunk231338.pK.BGN]: 2,
    [Chunk231338.pK.BHD]: 3,
    [Chunk231338.pK.BIF]: 0,
    [Chunk231338.pK.BMD]: 2,
    [Chunk231338.pK.BND]: 2,
    [Chunk231338.pK.BOB]: 2,
    [Chunk231338.pK.BOV]: 2,
    [Chunk231338.pK.BRL]: 2,
    [Chunk231338.pK.BSD]: 2,
    [Chunk231338.pK.BTN]: 2,
    [Chunk231338.pK.BWP]: 2,
    [Chunk231338.pK.BYR]: 0,
    [Chunk231338.pK.BYN]: 2,
    [Chunk231338.pK.BZD]: 2,
    [Chunk231338.pK.CAD]: 2,
    [Chunk231338.pK.CDF]: 2,
    [Chunk231338.pK.CHE]: 2,
    [Chunk231338.pK.CHF]: 2,
    [Chunk231338.pK.CHW]: 2,
    [Chunk231338.pK.CLF]: 0,
    [Chunk231338.pK.CLP]: 0,
    [Chunk231338.pK.CNY]: 2,
    [Chunk231338.pK.COP]: 2,
    [Chunk231338.pK.COU]: 2,
    [Chunk231338.pK.CRC]: 2,
    [Chunk231338.pK.CUC]: 2,
    [Chunk231338.pK.CUP]: 2,
    [Chunk231338.pK.CVE]: 2,
    [Chunk231338.pK.CZK]: 2,
    [Chunk231338.pK.DJF]: 0,
    [Chunk231338.pK.DKK]: 2,
    [Chunk231338.pK.DOP]: 2,
    [Chunk231338.pK.DZD]: 2,
    [Chunk231338.pK.EGP]: 2,
    [Chunk231338.pK.ERN]: 2,
    [Chunk231338.pK.ETB]: 2,
    [Chunk231338.pK.EUR]: 2,
    [Chunk231338.pK.FJD]: 2,
    [Chunk231338.pK.FKP]: 2,
    [Chunk231338.pK.GBP]: 2,
    [Chunk231338.pK.GEL]: 2,
    [Chunk231338.pK.GHS]: 2,
    [Chunk231338.pK.GIP]: 2,
    [Chunk231338.pK.GMD]: 2,
    [Chunk231338.pK.GNF]: 0,
    [Chunk231338.pK.GTQ]: 2,
    [Chunk231338.pK.GYD]: 2,
    [Chunk231338.pK.HKD]: 2,
    [Chunk231338.pK.HNL]: 2,
    [Chunk231338.pK.HRK]: 2,
    [Chunk231338.pK.HTG]: 2,
    [Chunk231338.pK.HUF]: 2,
    [Chunk231338.pK.IDR]: 2,
    [Chunk231338.pK.ILS]: 2,
    [Chunk231338.pK.INR]: 2,
    [Chunk231338.pK.IQD]: 3,
    [Chunk231338.pK.IRR]: 2,
    [Chunk231338.pK.ISK]: 0,
    [Chunk231338.pK.JMD]: 2,
    [Chunk231338.pK.JOD]: 3,
    [Chunk231338.pK.JPY]: 0,
    [Chunk231338.pK.KES]: 2,
    [Chunk231338.pK.KGS]: 2,
    [Chunk231338.pK.KHR]: 2,
    [Chunk231338.pK.KMF]: 0,
    [Chunk231338.pK.KPW]: 2,
    [Chunk231338.pK.KRW]: 0,
    [Chunk231338.pK.KWD]: 3,
    [Chunk231338.pK.KYD]: 2,
    [Chunk231338.pK.KZT]: 2,
    [Chunk231338.pK.LAK]: 2,
    [Chunk231338.pK.LBP]: 2,
    [Chunk231338.pK.LKR]: 2,
    [Chunk231338.pK.LRD]: 2,
    [Chunk231338.pK.LSL]: 2,
    [Chunk231338.pK.LTL]: 2,
    [Chunk231338.pK.LVL]: 2,
    [Chunk231338.pK.LYD]: 3,
    [Chunk231338.pK.MAD]: 2,
    [Chunk231338.pK.MDL]: 2,
    [Chunk231338.pK.MGA]: 2,
    [Chunk231338.pK.MKD]: 2,
    [Chunk231338.pK.MMK]: 2,
    [Chunk231338.pK.MNT]: 2,
    [Chunk231338.pK.MOP]: 2,
    [Chunk231338.pK.MRO]: 2,
    [Chunk231338.pK.MUR]: 2,
    [Chunk231338.pK.MVR]: 2,
    [Chunk231338.pK.MWK]: 2,
    [Chunk231338.pK.MXN]: 2,
    [Chunk231338.pK.MXV]: 2,
    [Chunk231338.pK.MYR]: 2,
    [Chunk231338.pK.MZN]: 2,
    [Chunk231338.pK.NAD]: 2,
    [Chunk231338.pK.NGN]: 2,
    [Chunk231338.pK.NIO]: 2,
    [Chunk231338.pK.NOK]: 2,
    [Chunk231338.pK.NPR]: 2,
    [Chunk231338.pK.NZD]: 2,
    [Chunk231338.pK.OMR]: 3,
    [Chunk231338.pK.PAB]: 2,
    [Chunk231338.pK.PEN]: 2,
    [Chunk231338.pK.PGK]: 2,
    [Chunk231338.pK.PHP]: 2,
    [Chunk231338.pK.PKR]: 2,
    [Chunk231338.pK.PLN]: 2,
    [Chunk231338.pK.PYG]: 0,
    [Chunk231338.pK.QAR]: 2,
    [Chunk231338.pK.RON]: 2,
    [Chunk231338.pK.RSD]: 2,
    [Chunk231338.pK.RUB]: 2,
    [Chunk231338.pK.RWF]: 0,
    [Chunk231338.pK.SAR]: 2,
    [Chunk231338.pK.SBD]: 2,
    [Chunk231338.pK.SCR]: 2,
    [Chunk231338.pK.SDG]: 2,
    [Chunk231338.pK.SEK]: 2,
    [Chunk231338.pK.SGD]: 2,
    [Chunk231338.pK.SHP]: 2,
    [Chunk231338.pK.SLL]: 2,
    [Chunk231338.pK.SOS]: 2,
    [Chunk231338.pK.SRD]: 2,
    [Chunk231338.pK.SSP]: 2,
    [Chunk231338.pK.STD]: 2,
    [Chunk231338.pK.SVC]: 2,
    [Chunk231338.pK.SYP]: 2,
    [Chunk231338.pK.SZL]: 2,
    [Chunk231338.pK.THB]: 2,
    [Chunk231338.pK.TJS]: 2,
    [Chunk231338.pK.TMT]: 2,
    [Chunk231338.pK.TND]: 3,
    [Chunk231338.pK.TOP]: 2,
    [Chunk231338.pK.TRY]: 2,
    [Chunk231338.pK.TTD]: 2,
    [Chunk231338.pK.TWD]: 2,
    [Chunk231338.pK.TZS]: 2,
    [Chunk231338.pK.UAH]: 2,
    [Chunk231338.pK.UGX]: 0,
    [Chunk231338.pK.USD]: 2,
    [Chunk231338.pK.USN]: 2,
    [Chunk231338.pK.USS]: 2,
    [Chunk231338.pK.UYI]: 0,
    [Chunk231338.pK.UYU]: 2,
    [Chunk231338.pK.UZS]: 2,
    [Chunk231338.pK.VEF]: 2,
    [Chunk231338.pK.VND]: 0,
    [Chunk231338.pK.VUV]: 0,
    [Chunk231338.pK.WST]: 2,
    [Chunk231338.pK.XAF]: 0,
    [Chunk231338.pK.XAG]: 0,
    [Chunk231338.pK.XAU]: 0,
    [Chunk231338.pK.XBA]: 0,
    [Chunk231338.pK.XBB]: 0,
    [Chunk231338.pK.XBC]: 0,
    [Chunk231338.pK.XBD]: 0,
    [Chunk231338.pK.XCD]: 2,
    [Chunk231338.pK.XDR]: 0,
    [Chunk231338.pK.XFU]: 0,
    [Chunk231338.pK.XOF]: 0,
    [Chunk231338.pK.XPD]: 0,
    [Chunk231338.pK.XPF]: 0,
    [Chunk231338.pK.XPT]: 0,
    [Chunk231338.pK.XSU]: 0,
    [Chunk231338.pK.XTS]: 0,
    [Chunk231338.pK.XUA]: 0,
    [Chunk231338.pK.YER]: 2,
    [Chunk231338.pK.ZAR]: 2,
    [Chunk231338.pK.ZMW]: 2,
    [Chunk231338.pK.ZWL]: 2,
    [Chunk231338.pK.DISCORD_ORB]: 0
  },
  f = (e, t) => {
    let n = d[t];
    if (null == n) throw Error("Unexpected currency ".concat(t));
    return new(i())(e).dividedBy(10 ** n).toNumber()
  }