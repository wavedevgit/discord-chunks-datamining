/** Chunk was on 76543 **/
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
  Chunk861203 = require("./861203.js");

function p(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: p,
    banner: g
  } = e, v = (0, i.e7)([u.Z], () => u.Z.getGuildId()), _ = (0, i.e7)([c.Z], () => c.Z.getGuild(v)), {
    analyticsLocations: x
  } = (0, a.ZP)();
  return null == _ || _.features.has(b.GuildFeatures.ANIMATED_BANNER) || !p && _.features.has(b.GuildFeatures.BANNER) ? null : (0, o.jsxs)("div", {
    className: m.container,
    children: [(0, o.jsx)(r.Ucv, {
      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: m.guildBoostingIcon
    }), (0, o.jsx)(r.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: f.intl.string(f.t["56M7xe"])
    }), (0, o.jsx)("div", {
      className: m.subscribeButton,
      children: (0, o.jsx)(r.Avr, {
        text: f.intl.string(f.t.WUHdZV),
        onClick: () => {
          if (null == _) return;
          let e = {
            section: t,
            page: n,
            object: b.qAy.UPSELL_HEADER
          };
          null != g ? (0, l.c)({
            analyticsLocations: x,
            analyticsLocation: e,
            guild: _,
            isGIF: p,
            banner: g
          }) : (0, s.Z)({
            analyticsLocations: x,
            analyticsSourceLocation: e,
            guild: _,
            perks: p ? (0, d.zC)() : (0, d.XO)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}