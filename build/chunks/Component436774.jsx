/** Chunk was on web.js **/
/** chunk id: 436774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JX: () => l,
  Rj: () => s,
  ZP: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk692547 = require("./692547.js");
let s = Object.freeze({
    PREMIUM_TIER_0: (0, Chunk772848.Z)(),
    PREMIUM_TIER_1: (0, Chunk772848.Z)(),
    PREMIUM_TIER_2: (0, Chunk772848.Z)(),
    PREMIUM_GUILD: (0, Chunk772848.Z)(),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, Chunk772848.Z)()
  }),
  l = {
    PREMIUM_TIER_0: "url(#".concat(s.PREMIUM_TIER_0, ")"),
    PREMIUM_TIER_1: "url(#".concat(s.PREMIUM_TIER_1, ")"),
    PREMIUM_TIER_2: "url(#".concat(s.PREMIUM_TIER_2, ")"),
    PREMIUM_GUILD: "url(#".concat(s.PREMIUM_GUILD, ")"),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(s.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
  },
  c = () => (0, r.jsxs)("linearGradient", {
    id: s.PREMIUM_TIER_0,
    children: [(0, r.jsx)("stop", {
      offset: ".1762",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.5351",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
    })]
  }),
  u = () => (0, r.jsxs)("linearGradient", {
    id: s.PREMIUM_TIER_1,
    children: [(0, r.jsx)("stop", {
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
    })]
  }),
  d = () => (0, r.jsxs)("linearGradient", {
    id: s.PREMIUM_TIER_2,
    children: [(0, r.jsx)("stop", {
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
    }), (0, r.jsx)("stop", {
      offset: "0.502368",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
    })]
  }),
  f = () => (0, r.jsxs)("linearGradient", {
    id: s.PREMIUM_GUILD,
    children: [(0, r.jsx)("stop", {
      stopColor: o.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: o.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
    })]
  }),
  p = () => (0, r.jsxs)("linearGradient", {
    id: s.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
    gradientTransform: "rotate(45)",
    children: [(0, r.jsx)("stop", {
      offset: "0",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
    }), (0, r.jsx)("stop", {
      offset: "1",
      stopColor: o.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
    })]
  }),
  _ = Chunk473749.memo(function() {
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 1 1",
      style: {
        position: "absolute",
        pointerEvents: "none",
        top: false,
        left: false,
        width: 1,
        height: 1
      },
      "aria-hidden": true,
      children: [c(), u(), d(), f(), p()]
    })
  }, () => true)