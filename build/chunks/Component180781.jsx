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
    banner: m
  } = e, N = (0, a.e7)([d.Z], () => d.Z.getGuildId()), x = (0, a.e7)([s.Z], () => s.Z.getGuild(N)), {
    analyticsLocations: h
  } = (0, r.ZP)();
  return null == x || x.features.has(u.oNc.ANIMATED_BANNER) || !p && x.features.has(u.oNc.BANNER) ? null : (0, i.jsxs)("div", {
    className: g.container,
    children: [(0, i.jsx)(o.$Eu, {
      color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: g.guildBoostingIcon
    }), (0, i.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: _.intl.string(_.t["56M7xc"])
    }), (0, i.jsx)("div", {
      className: g.subscribeButton,
      children: (0, i.jsx)(o.Avr, {
        text: _.intl.string(_.t.WUHdZW),
        onClick: () => {
          if (null == x) return;
          let e = {
            section: t,
            page: n,
            object: u.qAy.UPSELL_HEADER
          };
          null != m ? (0, l.c)({
            analyticsLocations: h,
            analyticsLocation: e,
            guild: x,
            isGIF: p,
            banner: m
          }) : (0, c.Z)({
            analyticsLocations: h,
            analyticsSourceLocation: e,
            guild: x,
            perks: p ? (0, f.zC)() : (0, f.XO)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}