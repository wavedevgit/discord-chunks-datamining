/** Chunk was on 72891 **/
/** chunk id: 180781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk413955 = require("./413955.js");

function p(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: p,
    banner: x
  } = e, m = (0, a.e7)([d.Z], () => d.Z.getGuildId()), N = (0, a.e7)([s.Z], () => s.Z.getGuild(m)), {
    analyticsLocations: h
  } = (0, o.ZP)();
  return null == N || N.features.has(u.GuildFeatures.ANIMATED_BANNER) || !p && N.features.has(u.GuildFeatures.BANNER) ? null : (0, i.jsxs)("div", {
    className: g.container,
    children: [(0, i.jsx)(r.Ucv, {
      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: g.guildBoostingIcon
    }), (0, i.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: _.intl.string(_.t["56M7xe"])
    }), (0, i.jsx)("div", {
      className: g.subscribeButton,
      children: (0, i.jsx)(r.Avr, {
        text: _.intl.string(_.t.WUHdZV),
        onClick: () => {
          if (null == N) return;
          let e = {
            section: t,
            page: n,
            object: u.qAy.UPSELL_HEADER
          };
          null != x ? (0, l.c)({
            analyticsLocations: h,
            analyticsLocation: e,
            guild: N,
            isGIF: p,
            banner: x
          }) : (0, c.Z)({
            analyticsLocations: h,
            analyticsSourceLocation: e,
            guild: N,
            perks: p ? (0, f.zC)() : (0, f.XO)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}