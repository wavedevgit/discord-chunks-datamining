/** Chunk was on web.js **/
/** chunk id: 766998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk158032 = require("./158032.js"),
  Chunk295405 = require("./295405.js"),
  Chunk927578 = require("./927578.js"),
  Chunk83617 = require("./83617.js"),
  Chunk615396 = require("./615396.js");
let u = function(e) {
  let {
    activeSubscription: t,
    onNext: n,
    isSubmitting: u,
    paymentSourceId: d,
    buttonLabel: f,
    analyticsLocations: p
  } = e, _ = async () => {
    let e = s.A.getPaymentSource(d);
    null != e && (await (0, l.c_)(d, (0, c.MP)(t)), await a.uK(t, e, t.currency, (0, o.UC)(t.items, t.currency, t.paymentSourceId), p), n())
  };
  return (0, r.jsx)(i.Button, {
    variant: "active",
    text: f,
    "data-testid": "purchase",
    onClick: _,
    loading: u
  })
}