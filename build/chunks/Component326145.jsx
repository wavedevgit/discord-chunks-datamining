/** Chunk was on 1272 **/
/** chunk id: 326145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk877604 = require("./877604.jsx"),
  Chunk998730 = require("./998730.js"),
  Chunk546247 = require("./546247.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk745752 = require("./745752.js"),
  Chunk17181 = require("./17181.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk812070 = require("./812070.js"),
  Chunk904885 = require("./904885.js");

function I(e) {
  let {
    guildId: t,
    channelId: n
  } = e, {
    ref: l,
    width: I,
    height: y
  } = (0, c.ZP)(), v = i.useCallback(() => {
    null != t && null != n && ((0, g.I1)(t), (0, _.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]), C = (0, s.e7)([f.Z], () => f.Z.getGuild(t)), S = i.useMemo(() => null == C ? null : m.ZP.getGuildSplashURL({
    id: C.id,
    splash: C.splash
  }), [C]), T = (0, d.N)(S);
  return (0, r.jsxs)("div", {
    className: a()(E.outerWrapping, O.main, {
      [O.fullBorderWithGradient]: null == S
    }),
    ref: l,
    children: [null != S ? (0, r.jsx)(u.Z, {
      className: O.artwork,
      src: S,
      width: I,
      height: y,
      imageClassName: O.cover
    }) : (0, r.jsx)(p.Z, {}), null != T && null != S && (0, r.jsx)("div", {
      className: O.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, h.aD)(T, .16), " 0%, ").concat((0, h.aD)(T, 1), " 100%)")
      }
    }), null != S && (0, r.jsx)("div", {
      className: O.gradient
    }), (0, r.jsxs)("div", {
      className: a()(E.explainerContainer, E.transparentBackground),
      children: [(0, r.jsxs)("div", {
        className: E.header,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-xxl/normal",
          color: "always-white",
          children: b.intl.string(b.t.CCmhpF)
        }), (0, r.jsx)(o.Text, {
          variant: "text-lg/normal",
          color: "always-white",
          children: b.intl.string(b.t.gRAHcZ)
        })]
      }), (0, r.jsx)(o.Button, {
        variant: "overlay-primary",
        size: "md",
        text: b.intl.string(b.t.VVFjAC),
        onClick: v
      })]
    })]
  })
}