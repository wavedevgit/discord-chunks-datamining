/** Chunk was on web.js **/
/** chunk id: 48175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o,
  Z: () => a
});
var Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js");

function o(e) {
  let {
    userTrialOffer: t,
    isGift: n,
    skuId: r
  } = e;
  return !n && null != t && null != r && i.nG[t.trial_id].skus.includes(r)
}

function a(e) {
  let {
    isGift: t,
    skuId: n,
    referralTrialOfferId: o
  } = e, a = (0, r.N)(o);
  return !t && null != a && null != n && i.nG[a.trial_id].skus.includes(n)
}