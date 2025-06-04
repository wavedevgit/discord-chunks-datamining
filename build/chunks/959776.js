/** Chunk was on 57015 **/
n.d(t, {
  Z: () => i
});
var s = n(913527),
  o = n.n(s),
  a = n(626135),
  r = n(981631);

function i(e, t) {
  a.default.track(r.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > o()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}