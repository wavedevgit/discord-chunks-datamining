/** Chunk was on 63962 **/
/** chunk id: 900927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk143144 = require("./143144.js");

function g(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: g,
    tooltipDelay: m
  } = e, b = (0, i.e7)([c.default], () => c.default.locale), y = (0, i.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), _ = (0, i.e7)([d.ZP], () => null != n ? d.ZP.getMember(n, t) : null), j = (0, s.FI)(p.default.extractTimestamp(t), b), x = (0, s.FI)(null == _ ? true : _.joinedAt, b);
  return null == y || null == _ ? (0, r.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: g,
    children: j
  }) : (0, r.jsxs)("div", {
    className: f.memberSinceWrapper,
    children: [(0, r.jsxs)("div", {
      className: f.memberSince,
      children: [(0, r.jsx)(l.u, {
        text: h.intl.string(h.t.uvGmCw),
        delay: m,
        children: (0, r.jsx)(a.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: f.discordIcon
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: g,
        children: j
      })]
    }), (0, r.jsx)("div", {
      className: f.divider
    }), (0, r.jsxs)("div", {
      className: f.memberSince,
      children: [(0, r.jsx)(l.u, {
        text: y.name,
        delay: m,
        children: (0, r.jsx)(o.Z, {
          guild: y,
          size: o.Z.Sizes.SMOL,
          className: f.guildIcon
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: g,
        children: x
      })]
    })]
  })
}