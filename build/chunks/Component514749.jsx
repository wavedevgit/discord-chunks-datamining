/** Chunk was on web.js **/
/** chunk id: 514749, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk467368 = require("./467368.js");
let s = e => null != e && "StepController" in e && null != e.StepController;

function l(e) {
  let {
    step: t,
    renderStep: n
  } = e;
  return function(e) {
    let {
      paymentModalStepProps: i,
      unifiedStepDefinition: l
    } = e, {
      renderModalProps: c,
      sharedCheckoutContext: u
    } = (0, o.Li)();
    if (a()(null != l, "Step config for ".concat(t, " is not set")), s(l)) {
      let e = l.StepController;
      return (0, r.jsx)(e, {
        renderStep: n,
        paymentModalStepProps: i,
        sharedCheckoutContext: u,
        renderModalProps: c
      })
    }
    return null
  }
}