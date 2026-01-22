/** Chunk was on web.js **/
/** chunk id: 250493, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk108531 = require("./108531.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk12373 = require("./12373.js");
let d = function(e) {
  let {
    closeLayer: t,
    guild: n,
    isVisible: d
  } = e, f = (0, s.zhh)({
    transform: d ? "translateY(-100%)" : "translateY(0%)",
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsx)(i.animated.div, {
    className: u.iE,
    style: f,
    children: (0, r.jsxs)("div", {
      className: u.iJ,
      children: [(0, r.jsxs)("div", {
        className: u.OA,
        children: [(0, r.jsx)(o.A, {
          className: u.$f,
          guild: n,
          size: o.A.Sizes.SMALL
        }), (0, r.jsx)(s.Text, {
          className: u.J5,
          variant: "text-md/semibold",
          children: n.name
        })]
      }), (0, r.jsx)(l.A, {
        className: u.lI,
        guild: n,
        analyticsLocation: {
          page: c.liQ.PREMIUM_GUILD_USER_MODAL,
          section: c.JJy.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
          object: c.ZSU.BUTTON_CTA,
          objectType: c.AnalyticsObjectTypes.BUY
        },
        closeLayer: t,
        pauseAnimation: !d,
        size: a.$n.Sizes.SMALL,
        useExpressiveButton: true
      })]
    })
  })
}