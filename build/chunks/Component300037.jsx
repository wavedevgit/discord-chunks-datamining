/** Chunk was on 20501 **/
/** chunk id: 300037, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk13473 = require("./13473.js");
let x = function(e) {
  let {
    className: t,
    guildId: n,
    boostingVariant: r
  } = e, x = (0, a.e7)([p.Z], () => p.Z.getGuild(n), [n]), _ = (0, m.Z)(null == x ? true : x.id).total;
  return null == x ? (0, i.jsx)("div", {
    className: s()(t, b.guildContainer),
    children: (0, i.jsx)("div", {
      className: b.guildInfoContainer,
      children: (0, i.jsx)(o.Text, {
        variant: "text-lg/bold",
        children: f.intl.string(f.t["6Kwwur"])
      })
    })
  }) : (0, i.jsxs)("div", {
    className: s()(t, b.guildContainer),
    children: [(0, i.jsx)(c.Z, {
      className: b.__invalid_guildIcon,
      guild: x,
      size: c.Z.Sizes.LARGER
    }), (0, i.jsxs)("div", {
      className: b.guildInfoContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "text-lg/bold",
        children: x.name
      }), (0, i.jsxs)("div", {
        className: b.guildBoostStatsContainer,
        children: [(0, i.jsx)(o.$Eu, {
          color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
          className: b.guildBoostBadge
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: f.intl.format(f.t["pob/cH"], {
            subscriptions: _
          })
        }), (0, i.jsx)("div", {
          className: b.separator
        }), (0, i.jsx)(o.Text, {
          variant: "text-sm/bold",
          color: "text-muted",
          children: (0, g.nW)(x.premiumTier, {
            useLevels: false
          })
        })]
      })]
    }), r ? (0, i.jsx)(u.Z, {
      guild: x,
      analyticsLocation: {
        page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
        object: h.qAy.BUTTON_CTA,
        objectType: h.Qqv.BUY
      },
      pauseAnimation: true,
      size: l.zx.Sizes.MEDIUM,
      color: l.zx.Colors.PRIMARY,
      buttonText: f.intl.string(f.t.aBHecH)
    }) : (0, i.jsx)(o.zxk, {
      variant: "secondary",
      text: f.intl.string(f.t.KLOhbG),
      onClick: () => {
        (0, d.f)({
          guildId: x.id,
          location: {
            section: h.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
          }
        })
      }
    })]
  })
}