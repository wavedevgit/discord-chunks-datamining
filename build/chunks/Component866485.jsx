/** Chunk was on web.js **/
/** chunk id: 866485, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk736843 = require("./736843.js"),
  Chunk945477 = require("./945477.js");

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
    } = (0, s.jP)();
    if (a()(null != l, "Step config for ".concat(t, " is not set")), (0, o.O)(l)) {
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