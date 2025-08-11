/** Chunk was on 44799 **/
/** chunk id: 184478, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk466649 = require("./466649.js");

function b(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t)), {
    available: b,
    spent: j,
    total: h
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsxs)("div", {
      className: v.headerContainer,
      children: [(0, r.jsx)(o.xv, {
        variant: "eyebrow",
        color: "text-secondary",
        children: _.intl.string(x.default.hjvcLC)
      }), (0, r.jsx)(o.xv, {
        className: v.learnMore,
        variant: "text-xs/semibold",
        children: _.intl.format(x.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(g.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, r.jsx)(m.Z, {
        count: b,
        type: m.b.AVAILABLE
      }), (0, r.jsx)(m.Z, {
        count: j,
        type: m.b.SPENT
      }), (0, r.jsx)(m.Z, {
        count: h,
        type: m.b.TOTAL
      })]
    }), (0, r.jsx)(a.Z, {
      className: v.boostButton,
      guild: n,
      analyticsLocation: {
        page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: g.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: l.Tt.CUSTOM,
      size: l.Ph.LARGE,
      intent: c.P.NONE,
      icon: (0, r.jsx)(s.$Eu, {
        className: v.boostButtonIcon,
        size: "sm",
        color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(f.Z, {
      guildId: t
    })]
  })
}