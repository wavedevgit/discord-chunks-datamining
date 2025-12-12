/** Chunk was on 72891 **/
/** chunk id: 180781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = e, N = (0, a.e7)([d.Z], () => d.Z.getGuildId()), m = (0, a.e7)([s.Z], () => s.Z.getGuild(N)), {
    analyticsLocations: h
  } = (0, r.ZP)();
  return null == m || m.features.has(u.GuildFeatures.ANIMATED_BANNER) || !p && m.features.has(u.GuildFeatures.BANNER) ? null : (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(o.Ucv, {
      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: _.guildBoostingIcon
    }), (0, i.jsx)(o.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: g.intl.string(g.t["56M7xe"])
    }), (0, i.jsx)("div", {
      className: _.subscribeButton,
      children: (0, i.jsx)(o.Avr, {
        text: g.intl.string(g.t.WUHdZV),
        onClick: () => {
          if (null == m) return;
          let e = {
            section: t,
            page: n,
            object: u.qAy.UPSELL_HEADER
          };
          null != x ? (0, l.c)({
            analyticsLocations: h,
            analyticsLocation: e,
            guild: m,
            isGIF: p,
            banner: x
          }) : (0, c.Z)({
            analyticsLocations: h,
            analyticsSourceLocation: e,
            guild: m,
            perks: p ? (0, f.zC)() : (0, f.XO)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}