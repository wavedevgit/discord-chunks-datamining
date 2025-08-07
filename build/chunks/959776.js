/** Chunk was on 90350 **/
n.d(e, {
  Z: () => l
});
var r = n(913527),
  i = n.n(r),
  o = n(626135),
  a = n(981631);

function l(t, e) {
  o.default.track(a.rMx.AGE_GATE_SUBMITTED, {
    dob: 18 > i()().diff(t, "years") ? t.format("YYYY-MM-DD") : null,
    dob_day: t.date(),
    dob_month: t.month() + 1,
    dob_year: t.year(),
    source: {
      section: e
    }
  })
}