/** Chunk was on 64982 **/
/** chunk id: 411667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk346163 = require("./346163.js"),
  Chunk587431 = require("./587431.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk515444 = require("./515444.js");

function d(e) {
  let t, {
      guild: n
    } = e,
    {
      resubmittingEnableRequest: d,
      resubmissionError: u,
      createEnableRequest: m,
      resubmittedRequest: g,
      requestRejectedNoticeText: p,
      reapplyNoticeText: f
    } = (0, i.Z)(n),
    h = n.features.has(a.oNc.CREATOR_MONETIZABLE_RESTRICTED),
    b = n.features.has(a.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != u) return (0, r.jsx)(l.Z, {
    className: c.noticeContainer,
    children: u.getAnyErrorMessage()
  });
  let x = null;
  return null != p ? x = p : g ? x = o.intl.string(o.t.MyJpJS) : null != f ? (x = f, t = o.intl.string(o.t["YKw/NT"])) : b ? x = o.intl.string(o.t.e2g9sb) : h && (x = o.intl.string(o.t.rxI9sr)), null != x ? (0, r.jsx)(s.Z, {
    className: c.noticeContainer,
    notice: x,
    ctaLabel: t,
    ctaLoading: d,
    onClick: m
  }) : null
}