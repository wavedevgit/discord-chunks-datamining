/** Chunk was on web.js **/
/** chunk id: 357189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ko: () => c
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  let s = new URL(a.Z.makeUrl(o.Z5c.BILLING_LOGIN_HANDOFF, false)),
    l = (0, r.Z)();
  return s.searchParams.append("handoff_key", l), s.searchParams.append("redirect_to", e), i.tn.post({
    url: o.ANM.HANDOFF,
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
  return s(o.Z5c.BILLING_STANDALONE_CHECKOUT_PAGE(r, i, a, l, c, u), t, n)
}

function c(e, t) {
  return l(e, (e, t) => {
    t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href)
  }, t)
}