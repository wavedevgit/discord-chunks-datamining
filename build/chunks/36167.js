/** Chunk was on web.js **/
/** chunk id: 36167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  my: () => c
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk835245 = require("./835245.js"),
  Chunk562465 = require("./562465.js"),
  Chunk998218 = require("./998218.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  let s = new URL(a.A.makeUrl(o.BVt.BILLING_LOGIN_HANDOFF, false)),
    l = (0, r.A)();
  return s.searchParams.append("handoff_key", l), s.searchParams.append("redirect_to", e), i.Bo.post({
    url: o.Rsh.HANDOFF,
    body: {
      key: l
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => t(e, s), t => n(t, e))
}

function l(e, t, n) {
  let {
    planId: r,
    isGift: i,
    loadId: a,
    paymentMethodType: l,
    deepLinkType: c,
    usePresetOffer: u
  } = e;
  return s(o.BVt.BILLING_STANDALONE_CHECKOUT_PAGE(r, i, a, l, c, u), t, n)
}

function c(e, t) {
  return l(e, (e, t) => {
    t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href)
  }, t)
}