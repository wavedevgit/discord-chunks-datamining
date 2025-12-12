/** Chunk was on web.js **/
/** chunk id: 979956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BK: () => l,
  Bf: () => c,
  KZ: () => u
}), require("./539854.js");
var Chunk476326 = require("./476326.js"),
  Chunk403182 = require("./403182.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t) {
  let n = i.Ng(i.dg(t));
  return a.ZP.isPremium(e, o.PremiumTypes.TIER_2) ? s.intl.formatToPlainString(s.t.fxEKdS, {
    maxSize: n
  }) : a.ZP.isPremium(e, o.PremiumTypes.TIER_1) ? s.intl.formatToPlainString(s.t["Nr+LsZ"], {
    maxSize: n
  }) : s.intl.formatToPlainString(s.t.fxEKdS, {
    maxSize: n
  })
}

function c(e, t) {
  return i.nA(e, t) || i.vY(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === r.ow.WEB && e.push(t.item.file), e), [])
}