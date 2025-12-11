/** Chunk was on 86932 **/
/** chunk id: 559187, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function r(e) {
  let {
    problem: t,
    feedback: a,
    reportType: r,
    reportId: c = null,
    rating: d = null,
    dontShowAgain: l
  } = e;
  n.default.track(o.rMx.IAR_FEEDBACK_SUBMITTED, {
    reason: t,
    report_type: r,
    report_id: c,
    rating: d,
    feedback: a,
    dont_show_again: l
  })
}