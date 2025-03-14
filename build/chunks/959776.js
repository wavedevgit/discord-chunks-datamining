/** Chunk was on 97885 **/
r.d(t, {
  Z: () => a
});
var n = r(913527),
  l = r.n(n),
  o = r(626135),
  i = r(981631);

function a(e, t) {
  o.default.track(i.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > l()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}