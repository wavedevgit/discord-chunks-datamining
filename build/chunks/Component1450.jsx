/** Chunk was on web.js **/
/** chunk id: 1450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk357156 = require("./357156.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685518 = require("./685518.js");
let v = e => {
  let {
    className: t,
    guildId: n,
    channel: a,
    shouldTrackUpsellViewed: v,
    setTrackedUpsellViewed: I
  } = e, {
    location: S
  } = (0, c.O)(), {
    analyticsLocations: T
  } = (0, d.ZP)(), A = (0, s.e7)([m.Z], () => m.Z.getGuild(n)), {
    canManageAllExpressions: C
  } = (0, h.XJ)(A), N = null != A && 0 === (0, g.A3)(A.premiumTier) && !A.features.has(E.GuildFeatures.MORE_STICKERS);
  if (i.useEffect(() => {
      C && N && v && ((0, u.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
        location: S,
        guild_id: null == A ? true : A.id,
        channel_id: null == a ? true : a.id,
        type: "Expression Picker Inline Sticker Upsell",
        location_stack: T
      }), I(true))
    }, [N, A, a, S, v, I, T, C]), null == A || !C) return null;
  if (N) {
    let e = () => {
      (0, _.Z)({
        analyticsLocations: T,
        analyticsSourceLocation: S,
        guild: A,
        perks: (0, b.hC)()
      })
    };
    return (0, r.jsxs)("div", {
      className: o()(O.upsell, t),
      children: [(0, r.jsx)(l.$zw, {
        size: "md",
        color: "currentColor",
        className: O.icon
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        className: O.body,
        variant: "text-sm/normal",
        children: y.intl.format(y.t.AXWla1, {
          count: (0, g.A3)(E.Eu4.TIER_1)
        })
      }), (0, r.jsx)(l.Avr, {
        variant: "primary",
        text: y.intl.string(y.t["Gb+BJD"]),
        onClick: e
      })]
    })
  } {
    let e = () => {
      (0, f._Q)(), p.Z.open(n, E.pNK.STICKERS, S)
    };
    return (0, r.jsxs)("div", {
      className: o()(O.upsell, t),
      children: [(0, r.jsx)(l.SlE, {
        size: "custom",
        color: "currentColor",
        className: O.icon,
        width: 20,
        height: 20
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        className: O.body,
        variant: "text-sm/normal",
        children: y.intl.string(y.t.S83wgh)
      }), (0, r.jsx)(l.Avr, {
        variant: "primary",
        text: y.intl.string(y.t.bwNjug),
        onClick: e
      })]
    })
  }
}