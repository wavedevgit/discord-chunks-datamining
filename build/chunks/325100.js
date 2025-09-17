/** Chunk was on web.js **/
/** chunk id: 325100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  uH: () => _
}), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js"),
  Chunk833549 = require("./833549.js"),
  Chunk981631 = require("./981631.js");
require("./474936.js");
let l = () => Chunk873546.tq && Chunk873546.bO,
  c = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = MobileApplePaymentLinkExperiment.getConfig({
      location: t
    });
    return n
  },
  u = e => {
    let {
      location: t
    } = e, n = d({
      location: t
    });
    return l() && n
  },
  d = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.E.useConfig({
      location: t
    });
    return n
  },
  f = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
  _ = e => {
    let {
      location: t
    } = e, {
      search: n,
      pathname: a
    } = (0, i.TH)(), o = u({
      location: t
    }), {
      deep_link_type: s
    } = (0, r.parse)(n);
    return f(o, a, s)
  }