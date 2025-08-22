/** Chunk was on web.js **/
/** chunk id: 829176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  rS: () => l
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk772848 = require("./772848.js"),
  Chunk544891 = require("./544891.js"),
  Chunk591759 = require("./591759.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  let {
    planId: s,
    isGift: l,
    loadId: c,
    paymentMethodType: u,
    deepLinkType: d
  } = e, f = o.Z5c.BILLING_STANDALONE_CHECKOUT_PAGE(s, l, c, u, d), _ = new URL(a.Z.makeUrl(o.Z5c.BILLING_LOGIN_HANDOFF, false)), p = (0, r.Z)();
  return _.searchParams.append("handoff_key", p), _.searchParams.append("redirect_to", f), i.tn.post({
    url: o.ANM.HANDOFF,
    body: {
      key: p
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => t(e, _), e => n(e))
}

function l(e, t) {
  return s(e, (e, t) => {
    t.searchParams.append("handoff_token", e.body.handoff_token), window.open(t.href)
  }, t)
}