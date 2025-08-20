/** Chunk was on 46653 **/
/** chunk id: 979956, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  BK: () => a,
  Bf: () => d,
  KZ: () => c
}), require("./539854.js");
var Chunk476326 = require("./476326.js"),
  Chunk403182 = require("./403182.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function a(t, e) {
  let i = r.Ng(r.dg(e));
  return s.ZP.isPremium(t, o.p9.TIER_2) ? l.intl.formatToPlainString(l.t.fxEKdX, {
    maxSize: i
  }) : s.ZP.isPremium(t, o.p9.TIER_1) ? l.intl.formatToPlainString(l.t["Nr+Lsb"], {
    maxSize: i
  }) : l.intl.formatToPlainString(l.t.fxEKdX, {
    maxSize: i
  })
}

function d(t, e) {
  return r.nA(t, e) || r.vY(t)
}

function c(t) {
  return t.reduce((t, e) => (e.item.platform === n.ow.WEB && t.push(e.item.file), t), [])
}