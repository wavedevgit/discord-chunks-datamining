/** Chunk was on 98536 (7c7bc0189a55edc7.js) **/
n.d(t, {
  Z: () => s
});
var r = n(913527),
  i = n.n(r),
  a = n(626135),
  l = n(981631);

function s(e, t) {
  a.default.track(l.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > i()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
    dob_day: e.date(),
    dob_month: e.month() + 1,
    dob_year: e.year(),
    source: {
      section: t
    }
  })
}