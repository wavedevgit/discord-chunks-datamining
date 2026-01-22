/** Chunk was on web.js **/
/** chunk id: 787001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk864310 = require("./864310.js"),
  Chunk338548 = require("./338548.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk178368 = require("./178368.js"),
  Chunk927578 = require("./927578.js"),
  Chunk987144 = require("./987144.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk127397 = require("./127397.js");
let v = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: a
  } = e, v = i.useRef(null), S = (0, o.bG)([h.default], () => h.default.getCurrentUser()), I = (0, o.bG)([m.A], () => m.A.boostSlots), T = null == S ? true : S.isPremiumGroupMember(), {
    analyticsLocations: C
  } = (0, u.Ay)(), [N, R] = i.useState(false), w = i.useMemo(() => Object.keys(I).filter(e => {
    let t = I[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [I, n.id]), P = (0, p.A)(e.guild.id).total;
  async function D() {
    R(true), await (0, E.g)({
      analyticsLocations: C,
      analyticsLocation: {
        page: b.liQ.PREMIUM_GUILD_USER_MODAL,
        section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.ZSU.BUTTON_CTA,
        objectType: b.AnalyticsObjectTypes.BUY
      },
      guild: n,
      closeLayer: t
    }), R(false)
  }

  function x() {
    (0, f.A)({
      initialPlanId: null,
      subscriptionTier: y.pe.TIER_2,
      analyticsLocations: C,
      analyticsObject: {
        page: b.liQ.PREMIUM_GUILD_USER_MODAL,
        section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.ZSU.BUTTON_ICON,
        objectType: b.AnalyticsObjectTypes.BUY
      },
      onClose: e => e && t()
    })
  }

  function L() {
    (0, f.A)({
      initialPlanId: null,
      subscriptionTier: y.pe.TIER_2,
      isGift: true,
      analyticsLocations: C,
      analyticsObject: {
        page: b.liQ.PREMIUM_GUILD_USER_MODAL,
        section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.ZSU.BUTTON_ICON,
        objectType: b.AnalyticsObjectTypes.GIFT
      },
      onClose: e => e && t()
    })
  }
  return (0, r.jsxs)("div", {
    className: A.kL,
    children: [(0, r.jsxs)("div", {
      className: A.$R,
      children: [(0, r.jsx)(d.A, {
        className: A.$f,
        guild: n,
        size: d.A.Sizes.LARGER,
        iconSize: 70,
        active: true
      }), (0, r.jsxs)("div", {
        className: A.CR,
        children: [(0, r.jsx)(c.Heading, {
          className: A.J5,
          variant: "heading-lg/semibold",
          children: n.name
        }), (0, r.jsxs)("div", {
          className: A.SJ,
          children: [(0, r.jsx)(c._Jp, {
            color: P > 0 ? c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK_REFRESH : "currentColor",
            className: s()(A.Me, {
              [A.S3]: P > 0
            })
          }), (0, r.jsx)(c.Text, {
            className: A.n,
            variant: "text-md/semibold",
            children: O.intl.format(O.t["pob/cL"], {
              subscriptions: P
            })
          })]
        }), w > 0 ? (0, r.jsx)(c.Text, {
          className: A.EV,
          variant: "text-sm/normal",
          children: O.intl.format(O.t.Jeto2u, {
            numSubscriptions: w
          })
        }) : null]
      })]
    }), (0, r.jsxs)("div", {
      className: A.mY,
      children: [(0, r.jsx)("h1", {
        className: A.R_,
        children: O.intl.string(O.t.N4sqzL)
      }), T ? (0, r.jsx)(_.A, {
        alwaysWhite: true
      }) : null, (0, r.jsxs)("div", {
        className: A.Sq,
        children: [(0, r.jsx)(l.L, {
          innerRef: v,
          onChange: a,
          threshold: .9,
          children: (0, r.jsx)("div", {
            ref: v,
            className: A.dp,
            children: (0, r.jsx)(c.Button, {
              variant: "expressive",
              size: "md",
              icon: c._Jp,
              text: O.intl.string(O.t.gKmQ1G),
              onClick: D,
              loading: N,
              disabled: T
            })
          })
        }), g.Ay.hasFreeBoosts(S) || g.Ay.isPremium(S, y.PremiumTypes.TIER_2) ? (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "md",
          icon: c.okO,
          text: O.intl.string(O.t["8MYSQw"]),
          onClick: L
        }) : (0, r.jsx)(c.Button, {
          variant: "secondary",
          size: "md",
          text: O.intl.string(O.t.Q43TvC),
          onClick: x,
          disabled: T
        })]
      })]
    })]
  })
}