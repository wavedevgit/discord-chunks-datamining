/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741872 = require("./741872.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: h,
    spent: b,
    total: C
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        color: "text-secondary",
        children: x.intl.string(v.default.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: _.learnMore,
        variant: "text-xs/semibold",
        children: x.intl.format(v.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(g.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(f.Z, {
        count: h,
        type: f.b.AVAILABLE
      }), (0, r.jsx)(f.Z, {
        count: b,
        type: f.b.SPENT
      }), (0, r.jsx)(f.Z, {
        count: C,
        type: f.b.TOTAL
      })]
    }), (0, r.jsx)(a.Z, {
      className: _.boostButton,
      guild: n,
      analyticsLocation: {
        page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: g.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Tt.CUSTOM,
      size: s.Ph.LARGE,
      intent: c.P.NONE,
      icon: (0, r.jsx)(l.$Eu, {
        className: _.boostButtonIcon,
        size: "sm",
        color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(m.Z, {
      guildId: t
    })]
  })
}