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
  Chunk343649 = require("./343649.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk317169 = require("./317169.js"),
  Chunk639660 = require("./639660.jsx"),
  Chunk767218 = require("./767218.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk741872 = require("./741872.js");

function h(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([c.Z], () => c.Z.getGuild(t)), {
    available: h,
    spent: j,
    total: C
  } = (0, p.Z)(t);
  if (null != n) return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsxs)("div", {
      className: b.headerContainer,
      children: [(0, r.jsx)(i.xvT, {
        variant: "eyebrow",
        color: "text-subtle",
        children: _.intl.string(x.default.hjvcLO)
      }), (0, r.jsx)(i.xvT, {
        className: b.learnMore,
        variant: "text-xs/semibold",
        children: _.intl.format(x.default.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(m.Z, {
        count: h,
        type: g.br.AVAILABLE
      }), (0, r.jsx)(m.Z, {
        count: j,
        type: g.br.SPENT
      }), (0, r.jsx)(m.Z, {
        count: C,
        type: g.br.TOTAL
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
      intent: u.P.NONE,
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