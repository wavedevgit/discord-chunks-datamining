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
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741872 = require("./741872.js");

function b(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([c.Z], () => c.Z.getGuild(t)), {
    available: b,
    spent: h,
    total: C
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsxs)("div", {
      className: x.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        color: "text-secondary",
        children: v.intl.string(g.default.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: x.learnMore,
        variant: "text-xs/semibold",
        children: v.intl.format(g.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(_.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.contentContainer,
      children: [(0, r.jsx)(m.Z, {
        count: b,
        type: m.b.AVAILABLE
      }), (0, r.jsx)(m.Z, {
        count: h,
        type: m.b.SPENT
      }), (0, r.jsx)(m.Z, {
        count: C,
        type: m.b.TOTAL
      })]
    }), (0, r.jsx)(s.Z, {
      className: x.boostButton,
      guild: n,
      analyticsLocation: {
        page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: l.Tt.CUSTOM,
      size: l.Ph.LARGE,
      intent: u.P.NONE,
      icon: (0, r.jsx)(a.$Eu, {
        className: x.boostButtonIcon,
        size: "sm",
        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(f.Z, {
      guildId: t
    })]
  })
}