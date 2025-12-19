/** Chunk was on 93979 **/
/** chunk id: 900927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk275759 = require("./275759.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk864715 = require("./864715.js");

function x(e) {
  let {
    userId: n,
    guildId: t,
    textClassName: x,
    tooltipDelay: h
  } = e, j = (0, i.e7)([s.default], () => s.default.locale), v = (0, i.e7)([u.Z], () => null != t ? u.Z.getGuild(t) : null), b = (0, i.e7)([d.ZP], () => null != t ? d.ZP.getMember(t, n) : null), g = (0, a.FI)(f.default.extractTimestamp(n), j), I = (0, a.FI)(null == b ? true : b.joinedAt, j);
  return null == v || null == b ? (0, l.jsx)(r.Text, {
    variant: "text-sm/normal",
    className: x,
    children: g
  }) : (0, l.jsxs)("div", {
    className: p.memberSinceWrapper,
    children: [(0, l.jsxs)("div", {
      className: p.memberSince,
      children: [(0, l.jsx)(o.u, {
        text: m.intl.string(m.t.uvGmCx),
        delay: h,
        children: (0, l.jsx)(r.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: p.discordIcon
        })
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: x,
        children: g
      })]
    }), (0, l.jsx)("div", {
      className: p.divider
    }), (0, l.jsxs)("div", {
      className: p.memberSince,
      children: [(0, l.jsx)(o.u, {
        text: v.name,
        delay: h,
        children: (0, l.jsx)(c.Z, {
          guild: v,
          size: c.Z.Sizes.SMOL,
          className: p.guildIcon
        })
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: x,
        children: I
      })]
    })]
  })
}