/** Chunk was on 76323 **/
/** chunk id: 959776, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function i(t, e) {
  o.default.track(a.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > l()().diff(t, "years") ? t.format("YYYY-MM-DD") : null,
    dob_day: t.date(),
    dob_month: t.month() + 1,
    dob_year: t.year(),
    source: {
      section: e
    }
  })
}