/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk403373 = require("./403373.js");

function x(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: x,
    spent: b,
    total: C
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsx)(o.xvT, {
        variant: "eyebrow",
        color: "text-secondary",
        children: _.intl.string(v.default.hjvcLC)
      }), (0, r.jsx)(o.xvT, {
        className: h.learnMore,
        variant: "text-xs/semibold",
        children: _.intl.format(v.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(f.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(g.Z, {
        count: x,
        type: g.b.AVAILABLE
      }), (0, r.jsx)(g.Z, {
        count: b,
        type: g.b.SPENT
      }), (0, r.jsx)(g.Z, {
        count: C,
        type: g.b.TOTAL
      })]
    }), (0, r.jsx)(s.Z, {
      className: h.boostButton,
      guild: n,
      analyticsLocation: {
        page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: f.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: l.Tt.CUSTOM,
      size: l.Ph.LARGE,
      intent: c.P.NONE,
      icon: (0, r.jsx)(a.$Eu, {
        className: h.boostButtonIcon,
        size: "sm",
        color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(m.Z, {
      guildId: t
    })]
  })
}