/** Chunk was on 47841 **/
/** chunk id: 299824, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk739929 = require("./739929.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk294310 = require("./294310.js");

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
      reapplyNoticeText: p
    } = (0, l.A)(n),
    f = n.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED),
    b = n.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  if (null != d) return (0, r.jsx)("div", {
    className: o.U,
    children: (0, r.jsx)(i.wx6, {
      type: "critical",
      children: d.getAnyErrorMessage()
    })
  });
  let h = null;
  return null != m ? h = m : g ? h = a.intl.string(a.t.MyJpJT) : null != p ? (h = p, t = a.intl.string(a.t["YKw/NQ"])) : b ? h = a.intl.string(a.t.e2g9sW) : f && (h = a.intl.string(a.t.rxI9sl)), null != h ? (0, r.jsx)("div", {
    className: o.U,
    children: (0, r.jsx)(i.po8, {
      messageType: i.YCn.WARNING,
      action: (0, r.jsx)(i.$nd, {
        variant: "overlay-secondary",
        text: t,
        onClick: u,
        loading: c
      }),
      children: h
    })
  }) : null
}