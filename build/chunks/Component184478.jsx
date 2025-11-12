/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678558 = require("./678558.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639660 = require("./639660.jsx"),
  Chunk767218 = require("./767218.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741872 = require("./741872.js");

function b(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: b,
    spent: h,
    total: j
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, r.jsx)(i.xvT, {
        variant: "eyebrow",
        color: "text-secondary",
        children: x.intl.string(v.default.hjvcLO)
      }), (0, r.jsx)(i.xvT, {
        className: _.learnMore,
        variant: "text-xs/semibold",
        children: x.intl.format(v.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(g.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(m.Z, {
        count: b,
        type: m.b.AVAILABLE
      }), (0, r.jsx)(m.Z, {
        count: h,
        type: m.b.SPENT
      }), (0, r.jsx)(m.Z, {
        count: j,
        type: m.b.TOTAL
      })]
    }), (0, r.jsx)(s.Z, {
      className: _.boostButton,
      guild: n,
      analyticsLocation: {
        page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: g.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: o.Tt.CUSTOM,
      size: o.Ph.LARGE,
      intent: c.P.NONE,
      icon: (0, r.jsx)(a.Ucv, {
        className: _.boostButtonIcon,
        size: "sm",
        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(f.Z, {
      guildId: t
    })]
  })
}