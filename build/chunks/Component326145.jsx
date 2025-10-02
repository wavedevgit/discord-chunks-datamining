/** Chunk was on 1272 **/
/** chunk id: 326145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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

function y(e) {
  let {
    guildId: t,
    channelId: n
  } = e, {
    ref: l,
    width: y,
    height: v
  } = (0, c.ZP)(), I = i.useCallback(() => {
    null != t && null != n && ((0, m.I1)(t), (0, b.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]), C = (0, o.e7)([f.Z], () => f.Z.getGuild(t)), S = i.useMemo(() => null == C ? null : h.ZP.getGuildSplashURL({
    id: C.id,
    splash: C.splash
  }), [C]), T = (0, d.N)(S);
  return (0, r.jsxs)("div", {
    className: a()(O.outerWrapping, E.main, {
      [E.fullBorderWithGradient]: null == S
    }),
    ref: l,
    children: [null != S ? (0, r.jsx)(u.Z, {
      className: E.artwork,
      src: S,
      width: y,
      height: v,
      imageClassName: E.cover
    }) : (0, r.jsx)(p.Z, {}), null != T && null != S && (0, r.jsx)("div", {
      className: E.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, g.aD)(T, .16), " 0%, ").concat((0, g.aD)(T, 1), " 100%)")
      }
    }), null != S && (0, r.jsx)("div", {
      className: E.gradient
    }), (0, r.jsxs)("div", {
      className: a()(O.explainerContainer, O.transparentBackground),
      children: [(0, r.jsxs)("div", {
        className: O.header,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-xxl/normal",
          color: "always-white",
          children: _.intl.string(_.t.CCmhpK)
        }), (0, r.jsx)(s.Text, {
          variant: "text-lg/normal",
          color: "always-white",
          children: _.intl.string(_.t.gRAHcX)
        })]
      }), (0, r.jsx)(s.zxk, {
        variant: "overlay-primary",
        size: "md",
        text: _.intl.string(_.t.VVFjAA),
        onClick: I
      })]
    })]
  })
}