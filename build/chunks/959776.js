/** Chunk was on 79689 **/
/** chunk id: 959776, original params: c,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk913527 = require("./913527.js"),
  d = require.n(Chunk913527),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function a(c, e) {
  n.default.track(o.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > d()().diff(c, "years") ? c.format("YYYY-MM-DD") : null,
    dob_day: c.date(),
    dob_month: c.month() + 1,
    dob_year: c.year(),
    source: {
      section: e
    }
  })
}