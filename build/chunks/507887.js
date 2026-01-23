/** Chunk was on 94759 **/
/** chunk id: 507887, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let {
    problem: t,
    feedback: r,
    reportType: l,
    reportId: c = null,
    rating: a = null,
    dontShowAgain: _
  } = e;
  n.default.track(o.HAw.IAR_FEEDBACK_SUBMITTED, {
    reason: t,
    report_type: l,
    report_id: c,
    rating: a,
    feedback: r,
    dont_show_again: _
  })
}