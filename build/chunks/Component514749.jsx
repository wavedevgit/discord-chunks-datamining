/** Chunk was on web.js **/
/** chunk id: 514749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk467368 = require("./467368.js");
let s = e => null != e && "StepController" in e && null != e.StepController,
  l = e => null != e && "directProps" in e && null != e.directProps;

function c(e) {
  let {
    step: t,
    renderStep: n,
    DirectStepComponent: i
  } = e;
  return function(e) {
    let {
      paymentModalStepProps: c
    } = e, u = (0, o.Li)(), {
      unifiedCheckoutStepMappings: d,
      renderModalProps: f
    } = u, p = d[t];
    if (a()(null != p, "Step config for ".concat(t, " is not set")), s(p)) {
      if (!u.enableStepControllers) throw Error("Step controllers are not enabled");
      let e = p.StepController,
        {
          checkoutContext: t
        } = u;
      return (0, r.jsx)(e, {
        renderStep: n,
        paymentModalStepProps: c,
        checkoutContext: t,
        renderModalProps: f
      })
    }
    if (l(p)) {
      let e = p.directProps;
      return (0, r.jsx)(i, {
        paymentModalStepProps: c,
        unifiedStepProps: e
      })
    }
    return null
  }
}