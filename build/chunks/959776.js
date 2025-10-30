/** Chunk was on 76323 **/
/** chunk id: 959776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function i(e, t) {
  o.default.track(a.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > l()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}