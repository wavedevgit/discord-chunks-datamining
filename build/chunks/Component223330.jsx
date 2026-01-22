/** Chunk was on web.js **/
/** chunk id: 223330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk915089 = require("./915089.js"),
  Chunk771781 = require("./771781.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk967198 = require("./967198.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk981656 = require("./981656.js");

function w(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(u.DUT, {
    "aria-label": N.intl.string(N.t.WAI6xu),
    onClick: t,
    className: R.Sc,
    children: (0, r.jsx)(u.PGe, {
      size: "xs",
      className: R.Nk,
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
    newestAnalyticsLocation: s
  } = (0, d.Ay)(), {
    trackUserProfileAction: o
  } = (0, y.NJ)();
  return (0, r.jsxs)("div", {
    className: R.JO,
    children: [(0, r.jsx)("div", {
      className: R.xB,
      children: n ? (0, r.jsx)(A.FD, {
        action: v.pt.VIEW_PREMIUM_PERKS,
        fullWidth: true,
        size: "sm",
        variant: "secondary",
        icon: u.tvc,
        text: N.intl.string(N.t["0Q61kF"]),
        onClick: () => {
          (0, E.pX)(S.BVt.APPLICATION_STORE), null == i || i()
        }
      }) : (0, r.jsx)(g.A, {
        onClick: () => {
          o({
            action: v.pt.GET_PREMIUM
          }), null == i || i()
        },
        textOptions: {
          textOverride: N.intl.string(N.t.x6rkDp)
        },
        subscriptionTier: T.pe.TIER_2,
        premiumModalAnalyticsLocation: {
          section: S.JJy.USER_PROFILE
        },
        className: R.Js,
        size: t ? c.$n.Sizes.TINY : c.$n.Sizes.SMALL,
        look: c.$n.Looks.FILLED,
        color: c.$n.Colors.PRIMARY,
        onlyShineOnHover: true,
        fullWidth: true
      })
    }), (0, r.jsx)("div", {
      className: R.xB,
      children: (0, r.jsx)(A.FD, {
        action: v.pt.VISIT_SHOP,
        fullWidth: true,
        icon: u.U1X,
        text: N.intl.string(N.t.b2d0N0),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, f.Cz)({
            analyticsLocations: a,
            analyticsSource: s
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
  } = e, c = (0, p.GV)(), {
    themeType: d
  } = (0, O.E)(), f = d === C.d.MODAL, g = (0, h.JZ)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), E = (0, o.bG)([b.A], () => b.A.getGuildId());
  if (i.useEffect(() => {
      if (!g) return (0, m.Vh)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), () => {
        (0, _.pd)({
          content: l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
        }, false)
      }
    }, [g]), g) return null;
  let y = (0, r.jsx)(u.Heading, {
      variant: "text-sm/normal",
      id: c,
      children: N.intl.string(N.t.EIYbj6)
    }),
    A = (0, r.jsx)(w, {
      onClose: () => {
        (0, h.Dr)(l.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
          dismissAction: I.i.USER_DISMISS,
          guildId: E,
          forceTrack: true
        })
      }
    }),
    v = (0, r.jsx)(P, {
      isPremiumUser: t,
      onInteraction: n,
      tiny: f
    });
  return f ? (0, r.jsx)("aside", {
    className: s()(R.Zj, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: s()(R.xw, R.xq),
      children: [y, (0, r.jsxs)("div", {
        className: R.A_,
        children: [(0, r.jsx)("div", {
          children: v
        }), (0, r.jsx)("div", {
          children: A
        })]
      })]
    })
  }) : (0, r.jsx)("aside", {
    className: s()(R.Zj, a),
    "aria-labelledby": c,
    children: (0, r.jsxs)("div", {
      className: s()(R.xw, R.K1),
      children: [(0, r.jsxs)("div", {
        className: R.$P,
        children: [y, (0, r.jsx)("div", {
          children: A
        })]
      }), v]
    })
  })
}