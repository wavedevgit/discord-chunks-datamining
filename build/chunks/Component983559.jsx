/** Chunk was on 82124 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81239 = require("./81239.js"),
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
  Chunk687158 = require("./687158.js"),
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

function k(e) {
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

function L(e) {
  var t;
  let {
    user: n,
    currentUser: m,
    channel: D
  } = e, L = __OVERLAY__, G = (0, b.ZP)(n.id), B = (0, s.ZP)(), F = i.useRef(Date.now()), {
    analyticsLocations: H
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), V = (0, g.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: D.id
  }), z = i.useRef(null), {
    isHoveringOrFocusing: W,
    isHovering: K
  } = (0, d.Z)(z), Y = (0, y.$m)(), q = (0, o.q_F)({
    opacity: +(null != Y.interactionType),
    config: {
      duration: 150
    }
  }), X = e => {
    (0, v.openUserProfileModal)(k({
      sourceAnalyticsLocations: H,
      hideRestrictedProfile: true
    }, V, e))
  }, Q = (null == G ? true : G.widgets) != null && G.widgets.length > 0, {
    displayedWishlistItems: J,
    defaultWishlistId: $,
    title: ee
  } = (0, h.QX)({
    user: n,
    numItems: h.fA,
    source: f.bd.DM_SIDE_PANEL,
    location: "UserProfileSidebar"
  }), et = null != J && J.length > 0;
  return (0, r.jsx)(u.Gt, {
    value: H,
    children: (0, r.jsx)(g.Mt, {
      value: V,
      openedAt: F.current,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, r.jsx)(y.NJ, {
        value: Y,
        children: (0, r.jsxs)(E.Z, {
          ref: z,
          user: n,
          displayProfile: G,
          themeType: R.l.SIDEBAR,
          themeOverride: B,
          children: [null != Y.interactionType && (0, r.jsx)(l.animated.div, {
            style: q,
            className: M.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(_.Z, {
              children: [(0, r.jsx)(I.Z, {
                user: n,
                themeType: R.l.SIDEBAR
              }), n.bot ? (0, r.jsx)(S.Z, {
                user: n
              }) : (0, r.jsx)(P.Cn, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: M.header,
              children: [(0, r.jsx)(j.Z, {
                user: n,
                displayProfile: G,
                themeType: R.l.SIDEBAR,
                animateOnHoverOrFocusOnly: !W,
                className: M.banner
              }), (0, r.jsx)(x.Z, {
                userId: n.id,
                className: M.toast
              }), (0, r.jsx)(O.Z, {
                user: n,
                displayProfile: G,
                channelId: D.id,
                themeType: R.l.SIDEBAR,
                onOpenProfile: L ? true : X
              }), (0, r.jsx)(Z.Z, {
                user: n,
                channelId: D.id,
                themeType: R.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(N.Z, {
              user: n,
              currentUser: m,
              displayProfile: G,
              channel: D,
              isHoveringOrFocusing: null == Y.interactionType && W,
              onOpenProfile: L ? true : X
            }), Q && (0, r.jsx)("div", {
              className: M.widgetPreviews,
              children: (0, r.jsx)(C.Z, {
                user: n,
                widgets: G.widgets,
                onOpenUserProfileModal: X
              })
            }), et && (0, r.jsx)("div", {
              className: M.wishlistBreadcrumb,
              children: (0, r.jsx)(A.Z, {
                profileOwner: n,
                wishlistItems: J,
                wishlistId: $,
                title: ee,
                onClick: () => {
                  null == X || X({
                    tabSection: w.oh.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(T.Z, {
              user: n,
              channelId: D.id
            })]
          }), !L && (0, r.jsx)(U, {
            handleOpenProfile: X,
            analyticsLocations: H,
            context: V
          }), (null == G ? true : G.profileEffect) != null && (0, r.jsx)(p.Z, {
            skuId: null == G || null == (t = G.profileEffect) ? true : t.skuId,
            isHovering: K
          })]
        })
      })
    })
  })
}
let U = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: M.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-text-hover"),
      onMouseLeave: () => s("interactive-text-default"),
      onClick: () => {
        t(), (0, m.pQ)(k({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: M.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: D.intl.string(D.t["+Xp3hq"])
      })
    })
  })
}