/** Chunk was on web.js **/
/** chunk id: 244923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk366939 = require("./366939.js"),
  Chunk853872 = require("./853872.js"),
  Chunk74538 = require("./74538.js"),
  Chunk212895 = require("./212895.js"),
  Chunk296848 = require("./296848.js");
let u = function(e) {
  let {
    activeSubscription: t,
    onNext: n,
    isSubmitting: u,
    paymentSourceId: d,
    buttonLabel: f,
    analyticsLocations: p
  } = e, _ = async () => {
    let e = a.Z.getPaymentSource(d);
    null != e && (await (0, l.i1)(d, (0, c.yb)(t)), await o.tq(t, e, t.currency, (0, s.UX)(t.items, t.currency, t.paymentSourceId), p), n())
  };
  return (0, r.jsx)(i.Button, {
    variant: "active",
    text: f,
    "data-testid": "purchase",
    onClick: _,
    loading: u
  })
}