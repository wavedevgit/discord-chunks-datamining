/** Chunk was on 94723 **/
/** chunk id: 559187, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    problem: t,
    feedback: n,
    reportType: c,
    reportId: a = null,
    rating: l = null,
    dontShowAgain: i
  } = e;
  o.default.track(r.rMx.IAR_FEEDBACK_SUBMITTED, {
    reason: t,
    report_type: c,
    report_id: a,
    rating: l,
    feedback: n,
    dont_show_again: i
  })
}