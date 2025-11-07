/** Chunk was on 14953 **/
/** chunk id: 983559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk621853 = require("./621853.js"),
  Chunk787309 = require("./787309.js"),
  Chunk687158 = require("./687158.js"),
  Chunk612600 = require("./612600.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk350207 = require("./350207.jsx"),
  Chunk277117 = require("./277117.jsx"),
  Chunk52639 = require("./52639.jsx"),
  Chunk874139 = require("./874139.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231688 = require("./231688.js");

function G(e) {
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

function H(e) {
  var t;
  let {
    user: n,
    currentUser: m,
    channel: k
  } = e, H = __OVERLAY__, B = (0, y.ZP)(n.id), V = (0, c.ZP)(), z = i.useRef(Date.now()), {
    analyticsLocations: W
  } = (0, u.ZP)(d.Z.USER_PROFILE_SIDEBAR), Y = (0, g.ZB)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: k.id
  }), q = i.useRef(null), {
    isHoveringOrFocusing: K,
    isHovering: Q
  } = (0, p.Z)(q), X = (0, O.$m)(), J = (0, o.q_F)({
    opacity: +(null != X.interactionType),
    config: {
      duration: 150
    }
  }), $ = e => {
    (0, v.openUserProfileModal)(G({
      sourceAnalyticsLocations: W,
      hideRestrictedProfile: true
    }, Y, e))
  }, ee = (0, x.Z)({
    location: "UserProfileSidebar"
  }), et = (null == B ? true : B.widgets) != null && B.widgets.length > 0, en = (0, _.g)({
    location: "UserProfileSidebar"
  }), {
    defaultWishlistId: er
  } = (0, s.cj)([b.Z], () => ({
    defaultWishlistId: b.Z.getFirstWishlistId(n.id)
  })), {
    wishlist: ei
  } = (0, f.kZ)(er, n.id), el = en && null != ei && ei.items.length > 0;
  return (0, r.jsx)(u.Gt, {
    value: W,
    children: (0, r.jsx)(g.Mt, {
      value: Y,
      openedAt: z.current,
      fetchStartedAt: null == B ? true : B.fetchStartedAt,
      fetchEndedAt: null == B ? true : B.fetchEndedAt,
      isLoaded: null == B ? true : B.isLoaded,
      children: (0, r.jsx)(O.NJ, {
        value: X,
        children: (0, r.jsxs)(S.Z, {
          ref: q,
          user: n,
          displayProfile: B,
          themeType: M.l.SIDEBAR,
          themeOverride: V,
          children: [null != X.interactionType && (0, r.jsx)(l.animated.div, {
            style: J,
            className: U.backdrop
          }), (0, r.jsxs)(a.u2D, {
            children: [(0, r.jsxs)(Z.Z, {
              children: [(0, r.jsx)(P.Z, {
                user: n,
                themeType: M.l.SIDEBAR
              }), n.bot ? (0, r.jsx)(E.Z, {
                user: n
              }) : (0, r.jsx)(T.Cn, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: U.header,
              children: [(0, r.jsx)(C.Z, {
                user: n,
                displayProfile: B,
                themeType: M.l.SIDEBAR,
                animateOnHoverOrFocusOnly: !K,
                className: U.banner
              }), (0, r.jsx)(I.Z, {
                userId: n.id,
                className: U.toast
              }), (0, r.jsx)(j.Z, {
                user: n,
                displayProfile: B,
                channelId: k.id,
                themeType: M.l.SIDEBAR,
                onOpenProfile: H ? true : $
              }), (0, r.jsx)(N.Z, {
                user: n,
                channelId: k.id,
                themeType: M.l.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(w.Z, {
              user: n,
              currentUser: m,
              displayProfile: B,
              channel: k,
              isHoveringOrFocusing: null == X.interactionType && K,
              onOpenProfile: H ? true : $
            }), ee && et && (0, r.jsx)("div", {
              className: U.widgetBreadcrumb,
              children: (0, r.jsx)(R.Z, {
                widgets: B.widgets,
                onClick: () => {
                  null == $ || $({
                    section: L.oh.WIDGETS
                  })
                }
              })
            }), el && (0, r.jsx)("div", {
              className: U.wishlistBreadcrumb,
              children: (0, r.jsx)(D.Z, {
                profileOwner: n,
                wishlistItems: ei.items,
                onClick: () => {
                  null == $ || $({
                    section: L.oh.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(A.Z, {
              user: n,
              channelId: k.id
            })]
          }), !H && (0, r.jsx)(F, {
            handleOpenProfile: $,
            analyticsLocations: W,
            context: Y
          }), (null == B ? true : B.profileEffect) != null && (0, r.jsx)(h.Z, {
            skuId: null == B || null == (t = B.profileEffect) ? true : t.skuId,
            isHovering: Q,
            urlQueryString: "dmView"
          })]
        })
      })
    })
  })
}
let F = e => {
  let {
    handleOpenProfile: t,
    analyticsLocations: n,
    context: l
  } = e, [a, s] = i.useState("interactive-normal");
  return (0, r.jsx)("div", {
    className: U.footer,
    children: (0, r.jsx)(o.P3F, {
      onMouseEnter: () => s("interactive-hover"),
      onMouseLeave: () => s("interactive-normal"),
      onClick: () => {
        t(), (0, m.pQ)(G({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, l))
      },
      className: U.footerButton,
      children: (0, r.jsx)(o.Text, {
        color: a,
        variant: "text-sm/normal",
        children: k.intl.string(k.t["+Xp3hq"])
      })
    })
  })
}