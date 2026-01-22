/** Chunk was on web.js **/
/** chunk id: 633572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk404036 = require("./404036.jsx"),
  Chunk4103 = require("./4103.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    user: t,
    analyticsLocations: n,
    confettiEnabled: u = true
  } = e, {
    giftButtonRef: d,
    handleMouseEnter: f
  } = (0, o.A)({
    enabled: u
  }), p = i.useCallback(() => {
    (0, s.A)({
      giftRecipient: t,
      analyticsLocations: n,
      analyticsObject: {
        page: l.liQ.USER_PROFILE,
        section: l.JJy.USER_PROFILE,
        object: l.ZSU.BUTTON_ICON,
        objectType: l.AnalyticsObjectTypes.GIFT
      }
    })
  }, [t, n]);
  return (0, r.jsx)("div", {
    ref: d,
    onMouseEnter: f,
    children: (0, r.jsx)(a.K0, {
      size: "sm",
      variant: "icon-only",
      icon: a.okO,
      "aria-label": c.intl.string(c.t.PEjaCx),
      onClick: p
    })
  })
}