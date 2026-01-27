/** Chunk was on web.js **/
/** chunk id: 483827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  du: () => p,
  uR: () => f
}), require("./747238.js");
var Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js");
require("./728458.js");
var Chunk192576 = require("./192576.js"),
  Chunk935434 = require("./935434.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./788868.js");
let c = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.c.getCurrentConfig({
      location: t
    });
    return n ? {
      enabled: false,
      discountEnabled: false
    } : a.O.getConfig({
      location: t
    })
  },
  u = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = o.c.useExperiment({
      location: t
    }), r = a.O.useConfig({
      location: t
    });
    return n ? {
      enabled: false,
      discountEnabled: false
    } : r
  },
  d = (e, t, n) => !t.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION) && n === s.W6J.APPLE_PAYMENT_LINK && e,
  f = e => {
    let {
      location: t
    } = e, {
      search: n,
      pathname: a
    } = (0, i.zy)(), {
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
    if (i.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION)) returnfalse;
    let {
      enabled: o
    } = c({
      location: t
    });
    return d(n || o, i, a)
  }