/** Chunk was on 96033 **/
/** chunk id: 180781, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk48217 = require("./48217.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393276 = require("./393276.js");

function m(t) {
  let {
    analyticsSection: e,
    analyticsPage: i,
    isGIF: m,
    banner: f
  } = t, x = (0, a.e7)([c.Z], () => c.Z.getGuildId()), p = (0, a.e7)([d.Z], () => d.Z.getGuild(x)), {
    analyticsLocations: N
  } = (0, r.ZP)();
  return null == p || p.features.has(u.oNc.ANIMATED_BANNER) || !m && p.features.has(u.oNc.BANNER) ? null : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(o.$Eu, {
      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: g.guildBoostingIcon
    }), (0, n.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: h.intl.string(h.t["56M7xc"])
    }), (0, n.jsx)("div", {
      className: g.subscribeButton,
      children: (0, n.jsx)(o.Avr, {
        text: h.intl.string(h.t.WUHdZW),
        onClick: () => {
          if (null == p) return;
          let t = {
            section: e,
            page: i,
            object: u.qAy.UPSELL_HEADER
          };
          null != f ? (0, l.c)({
            analyticsLocations: N,
            analyticsLocation: t,
            guild: p,
            isGIF: m,
            banner: f
          }) : (0, s.Z)({
            analyticsLocations: N,
            analyticsSourceLocation: t,
            guild: p,
            perks: m ? (0, _.zC)() : (0, _.XO)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}