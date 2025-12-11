/** Chunk was on 41700 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467721 = require("./467721.js"),
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
    channel: M
  } = e, G = __OVERLAY__, F = (0, y.ZP)(n.id), B = (0, o.ZP)(), V = i.useRef(Date.now()), {
    analyticsLocations: z
  } = (0, d.ZP)(c.Z.USER_PROFILE_SIDEBAR), W = (0, g.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: M.id
  }), Y = i.useRef(null), {
    isHoveringOrFocusing: q,
    isHovering: K
  } = (0, u.Z)(Y), Q = (0, x.$m)(), X = (0, s.q_F)({
    opacity: +(null != Q.interactionType),
    config: {
      duration: 150
    }
  }), J = e => {
    (0, j.openUserProfileModal)(U({
      sourceAnalyticsLocations: z,
      hideRestrictedProfile: true
    }, W, e))
  }, $ = (0, O.Z)({
    location: "UserProfileSidebar"
  }), ee = (null == F ? true : F.widgets) != null && F.widgets.length > 0, et = (0, b.g)({
    location: "UserProfileSidebar"
  }), {
    displayedWishlistItems: en,
    defaultWishlistId: er,
    title: ei
  } = (0, f.QX)({
    user: n,
    numItems: f.fA,
    source: h.bd.DM_SIDE_PANEL,
    location: "UserProfileSidebar"
  }), el = et && null != en && en.length > 0;
  return (0, r.jsx)(d.Gt, {
    value: z,
    children: (0, r.jsx)(g.Mt, {
      value: W,
      openedAt: V.current,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, r.jsx)(x.NJ, {
        value: Q,
        children: (0, r.jsxs)(S.Z, {
          ref: Y,
          user: n,
          displayProfile: F,
          themeType: L.l.SIDEBAR,
          themeOverride: B,
          children: [null != Q.interactionType && (0, r.jsx)(l.animated.div, {
            style: X,
            className: k.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(Z.Z, {
              children: [(0, r.jsx)(P.Z, {
                user: n,
                themeType: L.l.SIDEBAR
              }), n.bot ? (0, r.jsx)(E.Z, {
                user: n
              }) : (0, r.jsx)(T.Cn, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: k.header,
              children: [(0, r.jsx)(C.Z, {
                user: n,
                displayProfile: F,
                themeType: L.l.SIDEBAR,
                animateOnHoverOrFocusOnly: !q,
                className: k.banner
              }), (0, r.jsx)(I.Z, {
                userId: n.id,
                className: k.toast
              }), (0, r.jsx)(v.Z, {
                user: n,
                displayProfile: F,
                channelId: M.id,
                themeType: L.l.SIDEBAR,
                onOpenProfile: G ? true : J
              }), (0, r.jsx)(N.Z, {
                user: n,
                channelId: M.id,
                themeType: L.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(R.Z, {
              user: n,
              currentUser: m,
              displayProfile: F,
              channel: M,
              isHoveringOrFocusing: null == Q.interactionType && q,
              onOpenProfile: G ? true : J
            }), $ && ee && (0, r.jsx)("div", {
              className: k.widgetPreviews,
              children: (0, r.jsx)(_.Z, {
                user: n,
                widgets: F.widgets,
                onOpenUserProfileModal: J
              })
            }), el && (0, r.jsx)("div", {
              className: k.wishlistBreadcrumb,
              children: (0, r.jsx)(A.Z, {
                profileOwner: n,
                wishlistItems: en,
                wishlistId: er,
                title: ei,
                onClick: () => {
                  null == J || J({
                    section: D.oh.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(w.Z, {
              user: n,
              channelId: M.id
            })]
          }), !G && (0, r.jsx)(H, {
            handleOpenProfile: J,
            analyticsLocations: z,
            context: W
          }), (null == F ? true : F.profileEffect) != null && (0, r.jsx)(p.Z, {
            skuId: null == F || null == (t = F.profileEffect) ? true : t.skuId,
            isHovering: K
          })]
        })
      })
    })
  })
}
let H = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, o] = i.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: k.footer,
    children: (0, r.jsx)(s.P3F, {
      onMouseEnter: () => o("interactive-text-hover"),
      onMouseLeave: () => o("interactive-text-default"),
      onClick: () => {
        t(), (0, m.pQ)(U({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: k.footerButton,
      children: (0, r.jsx)(s.Text, {
        color: a,
        variant: "text-sm/normal",
        children: M.intl.string(M.t["+Xp3hq"])
      })
    })
  })
}