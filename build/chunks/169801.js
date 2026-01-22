/** Chunk was on web.js **/
/** chunk id: 169801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  t: () => a
});
var Chunk234419 = require("./234419.js"),
  Chunk788868 = require("./788868.js");

function a(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: r
  } = e;
  return !n && null != t && null != r && i.TP[t.trial_id].skus.includes(r)
}

function s(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: a
  } = e, s = (0, r.V)(a);
  return !t && null != s && null != n && i.TP[s.trial_id].skus.includes(n)
}