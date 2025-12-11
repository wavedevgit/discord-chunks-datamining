/** Chunk was on 9536 **/
/** chunk id: 411667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk346163 = require("./346163.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk652138 = require("./652138.js");

function c(e) {
  let t, {
      guild: n
    } = e,
    {
      resubmittingEnableRequest: c,
      resubmissionError: d,
      createEnableRequest: u,
      resubmittedRequest: g,
      requestRejectedNoticeText: m,
      reapplyNoticeText: f
    } = (0, l.Z)(n),
    p = n.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
    b = n.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != d) return (0, r.jsx)("div", {
    className: o.noticeContainer,
    children: (0, r.jsx)(i.M14, {
      type: "critical",
      children: d.getAnyErrorMessage()
    })
  });
  let h = null;
  return null != m ? h = m : g ? h = s.intl.string(s.t.MyJpJT) : null != f ? (h = f, t = s.intl.string(s.t["YKw/NQ"])) : b ? h = s.intl.string(s.t.e2g9sW) : p && (h = s.intl.string(s.t.rxI9sl)), null != h ? (0, r.jsx)("div", {
    className: o.noticeContainer,
    children: (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      action: (0, r.jsx)(i.zxk, {
        variant: "overlay-secondary",
        text: t,
        onClick: u,
        loading: c
      }),
      children: h
    })
  }) : null
}