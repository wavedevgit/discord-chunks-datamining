/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  Z: () => c
});
var n = r(200651);
r(192379);
var s = r(774078),
  i = r(706454),
  o = r(55935),
  l = r(388032);

function a(e) {
  return e.toLocaleString(i.default.locale, {
    minimumIntegerDigits: 2,
    useGrouping: !1
  })
}
let c = function(e) {
  let {
    endDate: t
  } = e, r = Date.now(), i = (0, o.TD)(r, t), c = r > t.getTime(), u = i.days > 0 ? 36e5 : 1e3, d = (0, s.Z)(t, u, void 0, c);
  return c || Object.values(d).every(e => 0 === e) ? null : (0, n.jsx)(n.Fragment, {
    children: d.days > 0 ? l.NW.formatToPlainString(l.t.f0QaSU, {
      days: d.days
    }) : l.NW.formatToPlainString(l.t["3MT4MT"], {
      hours: a(d.hours),
      minutes: a(d.minutes),
      seconds: a(d.seconds)
    })
  })
}