/** Chunk was on web.js **/
/** chunk id: 247425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk864310 = require("./864310.js"),
  Chunk338548 = require("./338548.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk178368 = require("./178368.js"),
  Chunk927578 = require("./927578.js"),
  Chunk721923 = require("./721923.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk998465 = require("./998465.js");
let I = function(e) {
  let {
    closeLayer: t,
    guild: n,
    onCtaVisibilityChange: a
  } = e, I = i.useRef(null), S = (0, o.bG)([m.default], () => m.default.getCurrentUser()), T = (0, o.bG)([g.A], () => g.A.boostSlots), C = null == S ? true : S.isPremiumGroupMember(), {
    analyticsLocations: N
  } = (0, d.Ay)(), w = i.useMemo(() => Object.keys(T).filter(e => {
    let t = T[e];
    return null != t.premiumGuildSubscription && t.premiumGuildSubscription.guildId === n.id
  }).length, [T, n.id]), R = (0, _.A)(e.guild.id).total;

  function P() {
    (0, p.A)({
      initialPlanId: null,
      subscriptionTier: O.pe.TIER_2,
      analyticsLocations: N,
      analyticsObject: {
        page: b.liQ.PREMIUM_GUILD_USER_MODAL,
        section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
        object: b.ZSU.BUTTON_ICON,
        objectType: b.AnalyticsObjectTypes.BUY
      },
      onClose: e => e && t()
    })
  }

  function D() {
    (0, p.A)({
      initialPlanId: null,
      subscriptionTier: O.pe.TIER_2,
      isGift: true,
      analyticsLocations: N,
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
    className: A.yD,
    children: [(0, r.jsx)(f.A, {
      className: A.$f,
      guild: n,
      size: f.A.Sizes.LARGER
    }), (0, r.jsx)(u.Heading, {
      className: A.J5,
      color: "always-white",
      variant: "text-lg/bold",
      children: n.name
    }), (0, r.jsxs)("div", {
      className: A.nx,
      children: [(0, r.jsxs)("div", {
        className: A.SJ,
        children: [(0, r.jsx)(u._Jp, {
          color: R > 0 ? u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK : "currentColor",
          className: s()(A.Me, {
            [A.S3]: R > 0
          })
        }), (0, r.jsx)(u.Text, {
          className: A.n,
          variant: "text-md/bold",
          children: v.intl.format(v.t["pob/cL"], {
            subscriptions: R
          })
        })]
      }), w > 0 ? (0, r.jsx)(u.Text, {
        className: A.EV,
        variant: "text-sm/normal",
        children: v.intl.format(v.t.Jeto2u, {
          numSubscriptions: w
        })
      }) : null]
    }), C ? (0, r.jsx)(h.A, {
      alwaysWhite: true
    }) : null, (0, r.jsxs)("div", {
      className: A.Sq,
      children: [(0, r.jsx)(l.L, {
        innerRef: I,
        onChange: a,
        threshold: .9,
        children: (0, r.jsx)("div", {
          ref: I,
          className: s()(A.J$, A.$F),
          children: (0, r.jsx)(y.A, {
            className: A.E0,
            innerClassName: A.J1,
            buttonShineClassName: A.Vi,
            guild: n,
            analyticsLocation: {
              page: b.liQ.PREMIUM_GUILD_USER_MODAL,
              section: b.JJy.PREMIUM_GUILD_USER_MODAL_CTA_BAR,
              object: b.ZSU.BUTTON_CTA,
              objectType: b.AnalyticsObjectTypes.BUY
            },
            closeLayer: t,
            color: c.$n.Colors.WHITE,
            size: c.$n.Sizes.LARGE,
            fullWidth: true
          })
        })
      }), E.Ay.hasFreeBoosts(S) || E.Ay.isPremium(S, O.PremiumTypes.TIER_2) ? (0, r.jsxs)(c.$n, {
        "data-migration-pending": true,
        className: s()(A.J$, A.Rr),
        innerClassName: A.yN,
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        onClick: D,
        size: c.$n.Sizes.LARGE,
        children: [(0, r.jsx)(u.okO, {
          size: "md",
          color: "currentColor",
          className: A.MD
        }), v.intl.string(v.t["8MYSQw"])]
      }) : (0, r.jsx)(c.$n, {
        "data-migration-pending": true,
        className: s()(A.J$, A.Rr),
        look: c.$n.Looks.OUTLINED,
        color: c.$n.Colors.WHITE,
        onClick: P,
        size: c.$n.Sizes.LARGE,
        disabled: C,
        children: v.intl.string(v.t.Q43TvC)
      })]
    })]
  })
}