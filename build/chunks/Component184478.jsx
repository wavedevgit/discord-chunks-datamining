/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639660 = require("./639660.jsx"),
  Chunk767218 = require("./767218.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303261 = require("./303261.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: h,
    spent: j,
    total: Z
  } = (0, d.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsxs)("div", {
      className: b.headerContainer,
      children: [(0, r.jsx)(i.xvT, {
        variant: "eyebrow",
        color: "text-subtle",
        children: x.intl.string(g.default.hjvcLO)
      }), (0, r.jsx)(i.xvT, {
        className: b.learnMore,
        variant: "text-xs/semibold",
        children: x.intl.format(g.default.fXE30d, {
          helpDeskArticle: c.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(p.Z, {
        count: h,
        type: m.br.AVAILABLE
      }), (0, r.jsx)(p.Z, {
        count: j,
        type: m.br.SPENT
      }), (0, r.jsx)(p.Z, {
        count: Z,
        type: m.br.TOTAL
      })]
    }), (0, r.jsx)(s.Z, {
      className: b.boostButton,
      guild: n,
      analyticsLocation: {
        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: l.Tt.CUSTOM,
      size: l.Ph.LARGE,
      icon: (0, r.jsx)(a.Ucv, {
        className: b.boostButtonIcon,
        size: "sm",
        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(f.Z, {
      guildId: t
    })]
  })
}