/** Chunk was on web.js **/
/** chunk id: 468194, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => o,
  Fv: () => f,
  Mg: () => Chunk374470.Mg,
  TZ: () => d,
  Zg: () => l,
  _I: () => c,
  aF: () => s
}), require("./35282.js"), require("./388685.js"), require("./704826.js");
var Chunk374470 = require("./374470.js");
let i = /[\u0300-\u036f]/g,
  a = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function o(e) {
  return null == e ? "" : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
}
let s = function(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "…";
  if (null == e || null == t) return "";
  if (e.length > t) {
    let r = a.test(e) ? [...e].slice(0, t - n.length).join("") : e.substring(0, t - n.length);
    return "".concat(r.replace(/[\s.]+$/, "")).concat(n)
  }
  return e
};

function l(e) {
  return null != e ? e.replace(/'s /g, " ").replace(/\w+/g, e => e[0]).replace(/\s/g, "") : ""
}
let c = null == String.prototype.normalize ? e => e : e => e.normalize("NFD").replace(i, "").normalize("NFC");

function u(e) {
  let t = n(510085),
    r = "";
  return [...e.normalize("NFD")].forEach(e => {
    var n;
    r += null != (n = t[e]) ? n : e
  }), r.normalize("NFD").toLocaleLowerCase()
}

function d(e) {
  var t;
  if (true === (null == (t = Intl) ? true : t.Segmenter)) return e.length;
  let n = new Intl.Segmenter().segment(e),
    r = 0;
  for (let e of n) r += 1;
  return r
}
let f = null == String.prototype.normalize ? e => e : u