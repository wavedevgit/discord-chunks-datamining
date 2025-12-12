/** Chunk was on web.js **/
/** chunk id: 325100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ak: () => p,
  uH: () => f
}), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js");
require("./960048.js");
var Chunk833549 = require("./833549.js"),
  Chunk86922 = require("./86922.js"),
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
let c = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.n.getCurrentConfig({
      location: t
    });
    return n ? {
      enabled: false,
      discountEnabled: false
    } : a.E.getConfig({
      location: t
    })
  },
  u = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.n.useExperiment({
      location: t
    }), r = a.E.useConfig({
      location: t
    });
    return n ? {
      enabled: false,
      discountEnabled: false
    } : r
  },
  d = (e, t, n) => !t.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION) && n === s.MUe.APPLE_PAYMENT_LINK && e,
  f = e => {
    let {
      location: t
    } = e, {
      search: n,
      pathname: a
    } = (0, i.TH)(), {
      enabled: o
    } = u({
      location: t
    }), {
      deep_link_type: s
    } = (0, r.parse)(n);
    return d(o, a, s)
  },
  p = function(e) {
    let {
      location: t
    } = e, n = arguments.length > 1 && true !== arguments[1] && arguments[1], i = window.location.pathname, {
      deep_link_type: a
    } = (0, r.parse)(window.location.search);
    if (i.startsWith(s.Z5c.BILLING_MANAGE_SUBSCRIPTION)) returnfalse;
    let {
      enabled: o
    } = c({
      location: t
    });
    return d(n || o, i, a)
  }