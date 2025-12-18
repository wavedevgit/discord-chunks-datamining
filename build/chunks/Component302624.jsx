/** Chunk was on web.js **/
/** chunk id: 302624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk909917 = require("./909917.jsx"),
  Chunk452762 = require("./452762.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    user: t,
    analyticsLocations: n,
    confettiEnabled: u = true
  } = e, {
    giftButtonRef: d,
    handleMouseEnter: f
  } = (0, s.Z)({
    enabled: u
  }), p = i.useCallback(() => {
    (0, o.Z)({
      giftRecipient: t,
      analyticsLocations: n,
      analyticsObject: {
        page: l.ZY5.USER_PROFILE,
        section: l.jXE.USER_PROFILE,
        object: l.qAy.BUTTON_ICON,
        objectType: l.AnalyticsObjectTypes.GIFT
      }
    })
  }, [t, n]);
  return (0, r.jsx)("div", {
    ref: d,
    onMouseEnter: f,
    children: (0, r.jsx)(a.hU, {
      size: "sm",
      variant: "icon-only",
      icon: a.OgN,
      "aria-label": c.intl.string(c.t.PEjaCx),
      onClick: p
    })
  })
}