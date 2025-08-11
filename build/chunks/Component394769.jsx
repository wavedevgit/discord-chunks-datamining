/** Chunk was on web.js **/
/** chunk id: 394769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk126663 = require("./126663.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk831740 = require("./831740.js");
let d = function(e) {
  let {
    closeLayer: t,
    guild: n,
    isVisible: d
  } = e, f = (0, a.q_F)({
    transform: d ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!d,
    config: {
      tension: 120,
      friction: 12
    }
  });
  return (0, r.jsx)(i.animated.div, {
    className: u.wrapper,
    style: f,
    children: (0, r.jsxs)("div", {
      className: u.innerWrapper,
      children: [(0, r.jsxs)("div", {
        className: u.guildInfo,
        children: [(0, r.jsx)(s.Z, {
          className: u.guildIcon,
          guild: n,
          size: s.Z.Sizes.LARGER
        }), (0, r.jsx)(a.X6q, {
          className: u.guildName,
          variant: "text-lg/bold",
          children: n.name
        })]
      }), (0, r.jsx)(l.Z, {
        className: u.ctaButton,
        guild: n,
        analyticsLocation: {
          page: c.ZY5.PREMIUM_GUILD_USER_MODAL,
          section: c.jXE.PREMIUM_GUILD_USER_MODAL_FLOATING_CTA_BAR,
          object: c.qAy.BUTTON_CTA,
          objectType: c.Qqv.BUY
        },
        closeLayer: t,
        pauseAnimation: !d,
        size: o.zx.Sizes.LARGE
      })]
    })
  })
}