/** Chunk was on web.js **/
/** chunk id: 325100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  uH: () => c
}), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js");
require("./960048.js");
var Chunk833549 = require("./833549.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./474936.js");
let l = (e, t, n) => !t.startsWith(o.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === o.MUe.APPLE_PAYMENT_LINK && e,
  c = e => {
    let {
      location: t
    } = e, {
      search: n,
      pathname: o
    } = (0, i.TH)(), {
      enabled: s
    } = a.E.useConfig({
      location: t
    }), {
      deep_link_type: c
    } = (0, r.parse)(n);
    return l(s, o, c)
  }