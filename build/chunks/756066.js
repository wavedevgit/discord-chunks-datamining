/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(200651);
n(192379);
var i = n(587431),
  s = n(539290),
  a = n(388032);

function l(e) {
  let t, {
    resubmittingEnableRequest: n,
    resubmissionError: l,
    createEnableRequest: o,
    requestRejectedNoticeText: A,
    reapplyNoticeText: c,
    isApplicationPending: d
  } = e;
  if (null != l) return (0, r.jsx)(i.Z, {
    children: l.getAnyErrorMessage()
  });
  let u = null;
  return d ? u = a.NW.string(a.t.OrkTBg) : null != A ? u = A : null != c && (u = c, t = a.NW.string(a.t["YKw/NT"])), null != u ? (0, r.jsx)(s.Z, {
    notice: u,
    ctaLabel: t,
    ctaLoading: n,
    onClick: o
  }) : null
}