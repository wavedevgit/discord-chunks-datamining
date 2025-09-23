/** Chunk was on 96033 **/
/** chunk id: 180781, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function f(t) {
  let {
    analyticsSection: e,
    analyticsPage: i,
    isGIF: f,
    banner: x
  } = t, p = (0, a.e7)([u.Z], () => u.Z.getGuildId()), N = (0, a.e7)([d.Z], () => d.Z.getGuild(p)), {
    analyticsLocations: v
  } = (0, l.ZP)();
  return null == N || N.features.has(_.oNc.ANIMATED_BANNER) || !f && N.features.has(_.oNc.BANNER) ? null : (0, n.jsxs)("div", {
    className: m.container,
    children: [(0, n.jsx)(r.$Eu, {
      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: m.guildBoostingIcon
    }), (0, n.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: g.intl.string(g.t["56M7xc"])
    }), (0, n.jsx)(o.zx, {
      look: o.zx.Looks.LINK,
      color: o.zx.Colors.LINK,
      className: m.subscribeButton,
      onClick: () => {
        if (null == N) return;
        let t = {
          section: e,
          page: i,
          object: _.qAy.UPSELL_HEADER
        };
        null != x ? (0, s.c)({
          analyticsLocations: v,
          analyticsLocation: t,
          guild: N,
          isGIF: f,
          banner: x
        }) : (0, c.Z)({
          analyticsLocations: v,
          analyticsSourceLocation: t,
          guild: N,
          perks: f ? (0, h.zC)() : (0, h.XO)()
        })
      },
      children: g.intl.string(g.t.WUHdZW)
    })]
  })
}