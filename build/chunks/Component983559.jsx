/** Chunk was on 81985 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk620389 = require("./620389.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk176879 = require("./176879.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk787309 = require("./787309.js"),
  Chunk687158 = require("./687158.js"),
  Chunk612600 = require("./612600.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk675893 = require("./675893.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk874139 = require("./874139.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960077 = require("./960077.js");

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function G(e) {
  var t;
  let {
    user: n,
    currentUser: m,
    channel: k
  } = e, G = __OVERLAY__, F = (0, y.ZP)(n.id), H = (0, s.ZP)(), V = i.useRef(Date.now()), {
    analyticsLocations: z
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), W = (0, g.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: k.id
  }), K = i.useRef(null), {
    isHoveringOrFocusing: Y,
    isHovering: q
  } = (0, d.Z)(K), X = (0, O.$m)(), Q = (0, o.q_F)({
    opacity: +(null != X.interactionType),
    config: {
      duration: 150
    }
  }), J = e => {
    (0, j.openUserProfileModal)(U({
      sourceAnalyticsLocations: z,
      hideRestrictedProfile: true
    }, W, e))
  }, $ = (0, v.Z)({
    location: "UserProfileSidebar"
  }), ee = (null == F ? true : F.widgets) != null && F.widgets.length > 0, et = (0, b.g)({
    location: "UserProfileSidebar"
  }), {
    displayedWishlistItems: en,
    defaultWishlistId: er,
    title: ei
  } = (0, h.QX)({
    user: n,
    numItems: h.fA,
    source: f.bd.DM_SIDE_PANEL,
    location: "UserProfileSidebar"
  }), el = et && null != en && en.length > 0;
  return (0, r.jsx)(u.Gt, {
    value: z,
    children: (0, r.jsx)(g.Mt, {
      value: W,
      openedAt: V.current,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, r.jsx)(O.NJ, {
        value: X,
        children: (0, r.jsxs)(_.Z, {
          ref: K,
          user: n,
          displayProfile: F,
          themeType: M.l.SIDEBAR,
          themeOverride: H,
          children: [null != X.interactionType && (0, r.jsx)(l.animated.div, {
            style: Q,
            className: L.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(P.Z, {
              children: [(0, r.jsx)(Z.Z, {
                user: n,
                themeType: M.l.SIDEBAR
              }), n.bot ? (0, r.jsx)(I.Z, {
                user: n
              }) : (0, r.jsx)(N.Cn, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: L.header,
              children: [(0, r.jsx)(C.Z, {
                user: n,
                displayProfile: F,
                themeType: M.l.SIDEBAR,
                animateOnHoverOrFocusOnly: !Y,
                className: L.banner
              }), (0, r.jsx)(E.Z, {
                userId: n.id,
                className: L.toast
              }), (0, r.jsx)(x.Z, {
                user: n,
                displayProfile: F,
                channelId: k.id,
                themeType: M.l.SIDEBAR,
                onOpenProfile: G ? true : J
              }), (0, r.jsx)(T.Z, {
                user: n,
                channelId: k.id,
                themeType: M.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(A.Z, {
              user: n,
              currentUser: m,
              displayProfile: F,
              channel: k,
              isHoveringOrFocusing: null == X.interactionType && Y,
              onOpenProfile: G ? true : J
            }), $ && ee && (0, r.jsx)("div", {
              className: L.widgetPreviews,
              children: (0, r.jsx)(S.Z, {
                user: n,
                widgets: F.widgets,
                onOpenUserProfileModal: J
              })
            }), el && (0, r.jsx)("div", {
              className: L.wishlistBreadcrumb,
              children: (0, r.jsx)(R.Z, {
                profileOwner: n,
                wishlistItems: en,
                wishlistId: er,
                title: ei,
                onClick: () => {
                  null == J || J({
                    tabSection: D.oh.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(w.Z, {
              user: n,
              channelId: k.id
            })]
          }), !G && (0, r.jsx)(B, {
            handleOpenProfile: J,
            analyticsLocations: z,
            context: W
          }), (null == F ? true : F.profileEffect) != null && (0, r.jsx)(p.Z, {
            skuId: null == F || null == (t = F.profileEffect) ? true : t.skuId,
            isHovering: q
          })]
        })
      })
    })
  })
}
let B = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: L.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-text-hover"),
      onMouseLeave: () => s("interactive-text-default"),
      onClick: () => {
        t(), (0, m.pQ)(U({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: L.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: k.intl.string(k.t["+Xp3hq"])
      })
    })
  })
}