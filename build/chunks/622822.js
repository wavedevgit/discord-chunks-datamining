/** Chunk was on 8655 **/
n.d(t, {
  Kt: () => p,
  Yt: () => u,
  bN: () => d
});
var r = n(81643),
  i = n(974814),
  a = n(594174),
  o = n(709054),
  l = n(981631);
let s = new Date("06/16/2020"),
  c = [l.V_K.AGE_RESTRICTED, l.V_K.EXPLICIT];

function d() {
  let e = a.default.getCurrentUser();
  return null != e && o.default.extractTimestamp(e.id) > s.getTime() && null == e.nsfwAllowed
}

function u(e) {
  return c.includes(e.nsfwLevel)
}

function p() {
  let e = (0, i.s8)({
      location: "age-gate-utils"
    }),
    t = (0, r.L5)();
  return e && t
}