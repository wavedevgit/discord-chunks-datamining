/** Chunk was on web.js **/
/** chunk id: 537006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk313201 = require("./313201.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577832 = require("./577832.js");

function w(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(u.P3F, {
    "aria-label": N.intl.string(N.t.WAI6xu),
    onClick: t,
    className: P.upsellCloseIconWrapper,
    children: (0, r.jsx)(u.Dio, {
      size: "xs",
      className: P.upsellCloseIcon,
      color: "currentColor"
    })
  })
}

function R(e) {
  let {
    tiny: t,
    isPremiumUser: n,
    onInteraction: i
  } = e, {
    analyticsLocations: a,
    newestAnalyticsLocation: o
  } = (0, d.ZP)(), {
    trackUserProfileAction: s
  } = (0, y.KZ)();
  return (0, r.jsxs)("div", {
    className: P.upsellButtons,
    children: [(0, r.jsx)("div", {
      className: P.upsellButtonWrapper,
      children: n ? (0, r.jsx)(v.i6, {
        action: S.yM.VIEW_PREMIUM_PERKS,
        fullWidth: true,
        size: "sm",
        variant: "secondary",
        icon: u.SrA,
        text: N.intl.string(N.t["0Q61kF"]),
        onClick: () => {
          (0, E.uL)(I.Z5c.APPLICATION_STORE), null == i || i()
        }
      }) : (0, r.jsx)(g.Z, {
        onClick: () => {
          s({
            action: S.yM.GET_PREMIUM
          }), null == i || i()
        },
        textOptions: {
          textOverride: N.intl.string(N.t.x6rkDp)
        },
        subscriptionTier: C.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          section: I.jXE.USER_PROFILE
        },
        className: P.matchManaColors,
        size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
        look: c.zx.Looks.FILLED,
        color: c.zx.Colors.PRIMARY,
        onlyShineOnHover: true,
        fullWidth: true
      })
    }), (0, r.jsx)("div", {
      className: P.upsellButtonWrapper,
      children: (0, r.jsx)(v.i6, {
        action: S.yM.VISIT_SHOP,
        fullWidth: true,
        icon: u.EOn,
        text: N.intl.string(N.t.b2d0N0),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, f.mK)({
            analyticsLocations: a,
            analyticsSource: o
          }), null == i || i()
        }
      })
    })]
  })
}

function D(e) {
  let {
    isPremiumUser: t,
    onInteraction: n,
    className: a
  } = e, c = (0, p.Dt)(), {
    themeType: d
  } = (0, O.z)(), f = d === A.l.MODAL, g = (0, h.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
  if (i.useEffect(() => {
      if (!g) return (0, m.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), () => {
        (0, _.gE)({
          content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
        }, false)
      }
    }, [g]), g) return null;
  let y = (0, r.jsx)(u.Heading, {
      variant: "text-sm/normal",
      id: c,
      children: N.intl.string(N.t.EIYbj6)
    }),
    v = (0, r.jsx)(w, {
      onClose: () => {
        (0, h.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
          dismissAction: T.L.USER_DISMISS,
          guildId: E,
          forceTrack: true
        })
      }
    }),
    S = (0, r.jsx)(R, {
      isPremiumUser: t,
      onInteraction: n,
      tiny: f
    });
  return f ? (0, r.jsx)("aside", {
    className: o()(P.upsellContainer, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: o()(P.upsellContent, P.upsellRowContent),
      children: [y, (0, r.jsxs)("div", {
        className: P.upsellRowRight,
        children: [(0, r.jsx)("div", {
          children: S
        }), (0, r.jsx)("div", {
          children: v
        })]
      })]
    })
  }) : (0, r.jsx)("aside", {
    className: o()(P.upsellContainer, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: o()(P.upsellContent, P.upsellDefaultContent),
      children: [(0, r.jsxs)("div", {
        className: P.upsellHeader,
        children: [y, (0, r.jsx)("div", {
          children: v
        })]
      }), S]
    })
  })
}