/** Chunk was on 81985 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk853590 = require("./853590.js"),
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

function L(e) {
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

function U(e) {
  var t;
  let {
    user: n,
    currentUser: m,
    channel: M
  } = e, U = __OVERLAY__, B = (0, b.ZP)(n.id), F = (0, s.ZP)(), H = i.useRef(Date.now()), {
    analyticsLocations: V
  } = (0, u.ZP)(c.Z.USER_PROFILE_SIDEBAR), z = (0, g.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: M.id
  }), W = i.useRef(null), {
    isHoveringOrFocusing: K,
    isHovering: Y
  } = (0, d.Z)(W), q = (0, v.$m)(), X = (0, o.q_F)({
    opacity: +(null != q.interactionType),
    config: {
      duration: 150
    }
  }), Q = e => {
    (0, O.openUserProfileModal)(L({
      sourceAnalyticsLocations: V,
      hideRestrictedProfile: true
    }, z, e))
  }, J = (0, y.Z)({
    location: "UserProfileSidebar"
  }), $ = (null == B ? true : B.widgets) != null && B.widgets.length > 0, {
    displayedWishlistItems: ee,
    defaultWishlistId: et,
    title: en
  } = (0, h.QX)({
    user: n,
    numItems: h.fA,
    source: f.bd.DM_SIDE_PANEL,
    location: "UserProfileSidebar"
  }), er = null != ee && ee.length > 0;
  return (0, r.jsx)(u.Gt, {
    value: V,
    children: (0, r.jsx)(g.Mt, {
      value: z,
      openedAt: H.current,
      fetchStartedAt: null == B ? true : B.fetchStartedAt,
      fetchEndedAt: null == B ? true : B.fetchEndedAt,
      isLoaded: null == B ? true : B.isLoaded,
      children: (0, r.jsx)(v.NJ, {
        value: q,
        children: (0, r.jsxs)(S.Z, {
          ref: W,
          user: n,
          displayProfile: B,
          themeType: D.l.SIDEBAR,
          themeOverride: F,
          children: [null != q.interactionType && (0, r.jsx)(l.animated.div, {
            style: X,
            className: k.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(I.Z, {
              children: [(0, r.jsx)(P.Z, {
                user: n,
                themeType: D.l.SIDEBAR
              }), n.bot ? (0, r.jsx)(_.Z, {
                user: n
              }) : (0, r.jsx)(Z.Cn, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: k.header,
              children: [(0, r.jsx)(x.Z, {
                user: n,
                displayProfile: B,
                themeType: D.l.SIDEBAR,
                animateOnHoverOrFocusOnly: !K,
                className: k.banner
              }), (0, r.jsx)(C.Z, {
                userId: n.id,
                className: k.toast
              }), (0, r.jsx)(j.Z, {
                user: n,
                displayProfile: B,
                channelId: M.id,
                themeType: D.l.SIDEBAR,
                onOpenProfile: U ? true : Q
              }), (0, r.jsx)(N.Z, {
                user: n,
                channelId: M.id,
                themeType: D.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(T.Z, {
              user: n,
              currentUser: m,
              displayProfile: B,
              channel: M,
              isHoveringOrFocusing: null == q.interactionType && K,
              onOpenProfile: U ? true : Q
            }), J && $ && (0, r.jsx)("div", {
              className: k.widgetPreviews,
              children: (0, r.jsx)(E.Z, {
                user: n,
                widgets: B.widgets,
                onOpenUserProfileModal: Q
              })
            }), er && (0, r.jsx)("div", {
              className: k.wishlistBreadcrumb,
              children: (0, r.jsx)(w.Z, {
                profileOwner: n,
                wishlistItems: ee,
                wishlistId: et,
                title: en,
                onClick: () => {
                  null == Q || Q({
                    tabSection: R.oh.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(A.Z, {
              user: n,
              channelId: M.id
            })]
          }), !U && (0, r.jsx)(G, {
            handleOpenProfile: Q,
            analyticsLocations: V,
            context: z
          }), (null == B ? true : B.profileEffect) != null && (0, r.jsx)(p.Z, {
            skuId: null == B || null == (t = B.profileEffect) ? true : t.skuId,
            isHovering: Y
          })]
        })
      })
    })
  })
}
let G = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: k.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-text-hover"),
      onMouseLeave: () => s("interactive-text-default"),
      onClick: () => {
        t(), (0, m.pQ)(L({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: k.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: M.intl.string(M.t["+Xp3hq"])
      })
    })
  })
}