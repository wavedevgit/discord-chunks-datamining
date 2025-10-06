/** Chunk was on 68545 **/
/** chunk id: 900927, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    userId: n,
    guildId: t,
    textClassName: p,
    tooltipDelay: b
  } = e, x = (0, c.e7)([l.default], () => l.default.locale), g = (0, c.e7)([s.Z], () => null != t ? s.Z.getGuild(t) : null), v = (0, c.e7)([d.ZP], () => null != t ? d.ZP.getMember(t, n) : null), I = (0, i.FI)(f.default.extractTimestamp(n), x), C = (0, i.FI)(null == v ? true : v.joinedAt, x);
  return null == g || null == v ? (0, o.jsx)(r.Text, {
    variant: "text-sm/normal",
    className: p,
    children: I
  }) : (0, o.jsxs)("div", {
    className: m.memberSinceWrapper,
    children: [(0, o.jsxs)("div", {
      className: m.memberSince,
      children: [(0, o.jsx)(a.u, {
        text: u.intl.string(u.t.uvGmCw),
        delay: b,
        children: (0, o.jsx)(r.gw7, {
          size: "custom",
          width: 28,
          height: 28,
          color: "currentColor",
          className: m.discordIcon
        })
      }), (0, o.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: p,
        children: I
      })]
    }), (0, o.jsx)("div", {
      className: m.divider
    }), (0, o.jsxs)("div", {
      className: m.memberSince,
      children: [(0, o.jsx)(a.u, {
        text: g.name,
        delay: b,
        children: (0, o.jsx)(_.Z, {
          guild: g,
          size: _.Z.Sizes.SMOL,
          className: m.guildIcon
        })
      }), (0, o.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: p,
        children: C
      })]
    })]
  })
}