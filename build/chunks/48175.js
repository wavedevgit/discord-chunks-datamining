/** Chunk was on web.js **/
/** chunk id: 48175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a,
  Z: () => o
});
var Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js");

function a(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: r
  } = e;
  return !n && null != t && null != r && i.nG[t.trial_id].skus.includes(r)
}

function o(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: a
  } = e, o = (0, r.N)(a);
  return !t && null != o && null != n && i.nG[o.trial_id].skus.includes(n)
}