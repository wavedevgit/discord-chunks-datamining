/** Chunk was on 86142 **/
/** chunk id: 569717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function a(e, t) {
  s.default.track(l.HAw.AGE_GATE_SUBMITTED, {
    dob: 18 > i()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}