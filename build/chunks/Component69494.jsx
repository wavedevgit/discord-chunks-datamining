/** Chunk was on web.js **/
/** chunk id: 69494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk329268 = require("./329268.js");

function u(e) {
  let {
    className: t,
    isEligibleForTrial: n = false
  } = e, {
    step: i,
    breadcrumbs: u,
    startedPaymentFlowWithPaymentSourcesRef: d,
    enablePremiumBrandRefresh: f
  } = (0, o.P5)();
  if (f || null == u || 0 === u.length) return null;
  let p = u.flatMap(e => {
    let t = e.useBreadcrumbLabel(n);
    return null != t ? {
      id: e.id,
      label: t
    } : []
  });
  return 0 === p.length ? null : (p = p.filter(e => {
    let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
      r = e.id === l.pn.ADD_PAYMENT_STEPS && !d.current;
    return !n || n && (t || r)
  }), (0, r.jsx)("div", {
    className: a()("breadcrumb", c.i, t),
    children: (0, r.jsx)(s.BIu, {
      activeId: i,
      breadcrumbs: p
    })
  }))
}