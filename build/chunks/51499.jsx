/** Chunk was on web.js **/
/** chunk id: 51499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk175531 = require("./175531.js");

function u(e) {
  let {
    className: t,
    isEligibleForTrial: n = false
  } = e, {
    step: i,
    breadcrumbs: u,
    startedPaymentFlowWithPaymentSourcesRef: d,
    enablePremiumBrandRefresh: f
  } = (0, s.JL)();
  if (f || null == u || 0 === u.length) return null;
  let _ = u.flatMap(e => {
    let t = e.useBreadcrumbLabel(n);
    return null != t ? {
      id: e.id,
      label: t
    } : []
  });
  return 0 === _.length ? null : (_ = _.filter(e => {
    let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
      r = e.id === l.h8.ADD_PAYMENT_STEPS && !d.current;
    return !n || n && (t || r)
  }), <div className={o()("breadcrumb", c.wrapper, t)}><a.OoM activeId={i} breadcrumbs={_} /></div>)
}