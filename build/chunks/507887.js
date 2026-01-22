/** Chunk was on 94759 **/
/** chunk id: 507887, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    problem: t,
    feedback: r,
    reportType: o,
    reportId: l = null,
    rating: f = null,
    dontShowAgain: c
  } = e;
  n.default.track(a.HAw.IAR_FEEDBACK_SUBMITTED, {
    reason: t,
    report_type: o,
    report_id: l,
    rating: f,
    feedback: r,
    dont_show_again: c
  })
}