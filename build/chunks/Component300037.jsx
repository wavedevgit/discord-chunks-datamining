/** Chunk was on web.js **/
/** chunk id: 300037, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk317169 = require("./317169.js"),
  Chunk430824 = require("./430824.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651480 = require("./651480.js");
let E = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: i
  } = e, E = (0, o.e7)([_.Z], () => _.Z.getGuild(n), [n]), b = (0, f.Z)(null == E ? true : E.id).total;
  return null == E ? (0, r.jsx)("div", {
    className: a()(t, g.guildContainer),
    children: (0, r.jsx)("div", {
      className: g.guildInfoContainer,
      children: (0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: m.intl.string(m.t["6Kwwuo"])
      })
    })
  }) : (0, r.jsxs)("div", {
    className: a()(t, g.guildContainer),
    children: [(0, r.jsx)(c.Z, {
      className: g.__invalid_guildIcon,
      guild: E,
      size: c.Z.Sizes.LARGER
    }), (0, r.jsxs)("div", {
      className: g.guildInfoContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/bold",
        children: E.name
      }), (0, r.jsxs)("div", {
        className: g.guildBoostStatsContainer,
        children: [(0, r.jsx)(l.Ucv, {
          color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: g.guildBoostBadge
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: m.intl.format(m.t["pob/cL"], {
            subscriptions: b
          })
        }), (0, r.jsx)("div", {
          className: g.separator
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, p.nW)(E.premiumTier, {
            useLevels: false
          })
        })]
      })]
    }), i ? (0, r.jsx)(d.Z, {
      guild: E,
      analyticsLocation: {
        page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: h.qAy.BUTTON_CTA,
        objectType: h.AnalyticsObjectTypes.BUY
      },
      pauseAnimation: true,
      size: s.zx.Sizes.MEDIUM,
      color: s.zx.Colors.PRIMARY,
      buttonText: m.intl.string(m.t.aBHecF)
    }) : (0, r.jsx)(l.Button, {
      variant: "secondary",
      text: m.intl.string(m.t.KLOhbO),
      onClick: () => {
        (0, u.f)({
          guildId: E.id,
          location: {
            section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      }
    })]
  })
}