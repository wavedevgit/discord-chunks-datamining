/** Chunk was on 75816 **/
/** chunk id: 959776, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(t, e) {
  l.default.track(i.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > o()().diff(t, "years") ? t.format("YYYY-MM-DD") : null,
    dob_day: t.date(),
    dob_month: t.month() + 1,
    dob_year: t.year(),
    source: {
      section: e
    }
  })
}