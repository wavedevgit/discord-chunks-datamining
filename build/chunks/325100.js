/** Chunk was on web.js **/
/** chunk id: 325100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  uH: () => p
}), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js");
require("./960048.js");
var Chunk833549 = require("./833549.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./474936.js");
let c = () => Chunk873546.tq && Chunk873546.bO,
  u = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = MobileApplePaymentLinkExperiment.getConfig({
      location: t
    });
    return n
  },
  d = e => {
    let {
      location: t
    } = e, n = f({
      location: t
    });
    return c() && n
  },
  f = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.E.useConfig({
      location: t
    });
    return n
  },
  _ = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
  p = e => {
    let {
      location: t
    } = e, {
      search: n,
      pathname: a
    } = (0, i.TH)(), o = d({
      location: t
    }), {
      deep_link_type: s
    } = (0, r.parse)(n);
    return _(o, a, s)
  }