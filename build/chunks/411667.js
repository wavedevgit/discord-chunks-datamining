/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(346163),
  s = n(587431),
  a = n(539290),
  l = n(981631),
  o = n(388032),
  A = n(11923);

function c(e) {
  let t, {
      guild: n
    } = e,
    {
      resubmittingEnableRequest: c,
      resubmissionError: d,
      createEnableRequest: u,
      resubmittedRequest: g,
      requestRejectedNoticeText: f,
      reapplyNoticeText: m
    } = (0, i.Z)(n),
    p = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_RESTRICTED),
    h = n.hasFeature(l.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != d) return (0, r.jsx)(s.Z, {
    className: A.noticeContainer,
    children: d.getAnyErrorMessage()
  });
  let C = null;
  return null != f ? C = f : g ? C = o.NW.string(o.t.MyJpJS) : null != m ? (C = m, t = o.NW.string(o.t["YKw/NT"])) : h ? C = o.NW.string(o.t.e2g9sb) : p && (C = o.NW.string(o.t.rxI9sr)), null != C ? (0, r.jsx)(a.Z, {
    className: A.noticeContainer,
    notice: C,
    ctaLabel: t,
    ctaLoading: c,
    onClick: u
  }) : null
}