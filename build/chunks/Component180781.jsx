/** Chunk was on 72891 **/
/** chunk id: 180781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk413955 = require("./413955.js");

function m(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: m,
    banner: N
  } = e, x = (0, a.e7)([u.Z], () => u.Z.getGuildId()), h = (0, a.e7)([d.Z], () => d.Z.getGuild(x)), {
    analyticsLocations: A
  } = (0, l.ZP)();
  return null == h || h.features.has(f.oNc.ANIMATED_BANNER) || !m && h.features.has(f.oNc.BANNER) ? null : (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsx)(r.$Eu, {
      color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: p.guildBoostingIcon
    }), (0, i.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: g.intl.string(g.t["56M7xc"])
    }), (0, i.jsx)(o.zx, {
      look: o.zx.Looks.LINK,
      color: o.zx.Colors.LINK,
      className: p.subscribeButton,
      onClick: () => {
        if (null == h) return;
        let e = {
          section: t,
          page: n,
          object: f.qAy.UPSELL_HEADER
        };
        null != N ? (0, c.c)({
          analyticsLocations: A,
          analyticsLocation: e,
          guild: h,
          isGIF: m,
          banner: N
        }) : (0, s.Z)({
          analyticsLocations: A,
          analyticsSourceLocation: e,
          guild: h,
          perks: m ? (0, _.zC)() : (0, _.XO)()
        })
      },
      children: g.intl.string(g.t.WUHdZW)
    })]
  })
}