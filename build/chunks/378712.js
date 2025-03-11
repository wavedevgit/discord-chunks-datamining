/** Chunk was on 56826 **/
t.d(e, {
  J: () => s
});
var i = t(544891),
  r = t(359119),
  l = t(981631);

function s(n) {
  return i.tn.post({
    url: l.ANM.ADD_SAFETY_WARNING(n),
    body: {
      safety_warning_type: r.pj.LIKELY_ATO
    },
    rejectWithError: !1
  })
}