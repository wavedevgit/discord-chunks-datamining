/** Chunk was on web.js **/
/** chunk id: 537006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk732380 = require("./732380.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk131151 = require("./131151.js");

function R(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(u.P3F, {
    "aria-label": N.intl.string(N.t.WAI6xs),
    onClick: t,
    className: C.upsellCloseIconWrapper,
    children: (0, r.jsx)(u.Dio, {
      size: "xs",
      className: C.upsellCloseIcon,
      color: "currentColor"
    })
  })
}

function P(e) {
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
    className: C.upsellButtons,
    children: [(0, r.jsx)("div", {
      className: C.upsellButtonWrapper,
      children: n ? (0, r.jsx)(v.O1, {
        action: I.yM.VIEW_PREMIUM_PERKS,
        fullWidth: true,
        size: "sm",
        variant: "secondary",
        icon: u.SrA,
        text: N.intl.string(N.t["0Q61kJ"]),
        onClick: () => {
          (0, E.uL)(T.Z5c.APPLICATION_STORE), null == i || i()
        }
      }) : (0, r.jsx)(g.Z, {
        onClick: () => {
          s({
            action: I.yM.GET_PREMIUM
          }), null == i || i()
        },
        textOptions: {
          textOverride: N.intl.string(N.t.x6rkDg)
        },
        subscriptionTier: A.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          section: T.jXE.USER_PROFILE
        },
        className: C.matchManaColors,
        size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
        look: c.zx.Looks.FILLED,
        color: c.zx.Colors.PRIMARY,
        onlyShineOnHover: true,
        fullWidth: true
      })
    }), (0, r.jsx)("div", {
      className: C.upsellButtonWrapper,
      children: (0, r.jsx)(v.O1, {
        action: I.yM.VISIT_SHOP,
        fullWidth: true,
        icon: u.EOn,
        text: N.intl.string(N.t.b2d0Nz),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, f.mK)({
            analyticsLocations: a,
            openInLayer: false,
            analyticsSource: o
          }), null == i || i()
        }
      })
    })]
  })
}

function w(e) {
  let {
    isPremiumUser: t,
    onInteraction: n,
    className: a
  } = e, c = (0, _.Dt)(), {
    themeType: d
  } = (0, O.z)(), f = d === I.lY.MODAL, g = (0, h.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
  if (i.useEffect(() => {
      if (!g) return (0, m.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), () => {
        (0, p.gE)({
          content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
        }, false)
      }
    }, [g]), g) return null;
  let y = (0, r.jsx)(u.X6q, {
      variant: "text-sm/normal",
      id: c,
      children: N.intl.string(N.t.EIYbj4)
    }),
    v = (0, r.jsx)(R, {
      onClose: () => {
        (0, h.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
          dismissAction: S.L.USER_DISMISS,
          guildId: E,
          forceTrack: true
        })
      }
    }),
    T = (0, r.jsx)(P, {
      isPremiumUser: t,
      onInteraction: n,
      tiny: f
    });
  return f ? (0, r.jsx)("aside", {
    className: o()(C.upsellContainer, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: o()(C.upsellContent, C.upsellRowContent),
      children: [y, (0, r.jsxs)("div", {
        className: C.upsellRowRight,
        children: [(0, r.jsx)("div", {
          children: T
        }), (0, r.jsx)("div", {
          children: v
        })]
      })]
    })
  }) : (0, r.jsx)("aside", {
    className: o()(C.upsellContainer, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: o()(C.upsellContent, C.upsellDefaultContent),
      children: [(0, r.jsxs)("div", {
        className: C.upsellHeader,
        children: [y, (0, r.jsx)("div", {
          children: v
        })]
      }), T]
    })
  })
}