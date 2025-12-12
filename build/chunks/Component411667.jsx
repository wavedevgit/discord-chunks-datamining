/** Chunk was on 384 **/
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
  Chunk515444 = require("./515444.js");

function c(e) {
  let t, {
      guild: n
    } = e,
    {
      resubmittingEnableRequest: c,
      resubmissionError: u,
      createEnableRequest: d,
      resubmittedRequest: g,
      requestRejectedNoticeText: m,
      reapplyNoticeText: p
    } = (0, l.Z)(n),
    f = n.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
    h = n.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != u) return (0, r.jsx)("div", {
    className: o.noticeContainer,
    children: (0, r.jsx)(i.M14, {
      type: "critical",
      children: u.getAnyErrorMessage()
    })
  });
  let x = null;
  return null != m ? x = m : g ? x = a.intl.string(a.t.MyJpJT) : null != p ? (x = p, t = a.intl.string(a.t["YKw/NQ"])) : h ? x = a.intl.string(a.t.e2g9sW) : f && (x = a.intl.string(a.t.rxI9sl)), null != x ? (0, r.jsx)("div", {
    className: o.noticeContainer,
    children: (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      action: (0, r.jsx)(i.zxk, {
        variant: "overlay-secondary",
        text: t,
        onClick: d,
        loading: c
      }),
      children: x
    })
  }) : null
}