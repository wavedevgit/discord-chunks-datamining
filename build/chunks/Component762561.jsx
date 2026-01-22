/** Chunk was on 97492 **/
/** chunk id: 762561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk996353 = require("./996353.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk439053 = require("./439053.jsx"),
  Chunk379654 = require("./379654.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk490752 = require("./490752.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk193738 = require("./193738.jsx"),
  Chunk853397 = require("./853397.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk534189 = require("./534189.jsx"),
  Chunk179242 = require("./179242.jsx"),
  Chunk968975 = require("./968975.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk743789 = require("./743789.js");

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

function k(e) {
  var t;
  let {
    user: n,
    currentUser: g,
    channel: M
  } = e, k = __OVERLAY__, V = (0, m.Ay)(n.id), F = (0, o.Ay)(), H = l.useRef(Date.now()), {
    analyticsLocations: B
  } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR), K = (0, b.pb)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: M.id
  }), W = l.useRef(null), {
    isHoveringOrFocusing: z,
    isHovering: Y
  } = (0, d.A)(W), q = (0, A.fC)(), X = (0, s.zhh)({
    opacity: +(null != q.interactionType),
    config: {
      duration: 150
    }
  }), J = e => {
    (0, y.openUserProfileModal)(G({
      sourceAnalyticsLocations: B,
      hideRestrictedProfile: true
    }, K, e))
  }, Q = (null == V ? true : V.widgets) != null && V.widgets.length > 0, {
    displayedWishlistItems: Z,
    defaultWishlistId: $,
    title: ee
  } = (0, h.aO)({
    user: n,
    numItems: h.h,
    source: p.mQ.DM_SIDE_PANEL,
    location: "UserProfileSidebar"
  }), et = null != Z && Z.length > 0;
  return (0, r.jsx)(u.f5, {
    value: B,
    children: (0, r.jsx)(b.of, {
      value: K,
      openedAt: H.current,
      fetchStartedAt: null == V ? true : V.fetchStartedAt,
      fetchEndedAt: null == V ? true : V.fetchEndedAt,
      isLoaded: null == V ? true : V.isLoaded,
      children: (0, r.jsx)(A.Hl, {
        value: q,
        children: (0, r.jsxs)(E.A, {
          ref: W,
          user: n,
          displayProfile: V,
          themeType: D.d.SIDEBAR,
          themeOverride: F,
          children: [null != q.interactionType && (0, r.jsx)(i.animated.div, {
            style: X,
            className: L.tB
          }), (0, r.jsxs)(a.d_W, {
            children: [(0, r.jsxs)(C.A, {
              children: [(0, r.jsx)(S.A, {
                user: n,
                themeType: D.d.SIDEBAR
              }), n.bot ? (0, r.jsx)(_.A, {
                user: n
              }) : (0, r.jsx)(I.yo, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: L.wx,
              children: [(0, r.jsx)(j.A, {
                user: n,
                displayProfile: V,
                themeType: D.d.SIDEBAR,
                animateOnHoverOrFocusOnly: !z,
                className: L.vK
              }), (0, r.jsx)(v.A, {
                userId: n.id,
                className: L.oR
              }), (0, r.jsx)(O.A, {
                user: n,
                displayProfile: V,
                channelId: M.id,
                themeType: D.d.SIDEBAR,
                onOpenProfile: k ? true : J
              }), (0, r.jsx)(N.A, {
                user: n,
                channelId: M.id,
                themeType: D.d.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(T.A, {
              user: n,
              currentUser: g,
              displayProfile: V,
              channel: M,
              isHoveringOrFocusing: null == q.interactionType && z,
              onOpenProfile: k ? true : J
            }), Q && (0, r.jsx)("div", {
              className: L.sJ,
              children: (0, r.jsx)(x.A, {
                user: n,
                widgets: V.widgets,
                onOpenUserProfileModal: J
              })
            }), et && (0, r.jsx)("div", {
              className: L.vS,
              children: (0, r.jsx)(w.A, {
                profileOwner: n,
                wishlistItems: Z,
                wishlistId: $,
                title: ee,
                onClick: () => {
                  null == J || J({
                    tabSection: R.RP.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(P.A, {
              user: n,
              channelId: M.id
            })]
          }), !k && (0, r.jsx)(U, {
            handleOpenProfile: J,
            analyticsLocations: B,
            context: K
          }), (null == V ? true : V.profileEffect) != null && (0, r.jsx)(f.A, {
            skuId: null == V || null == (t = V.profileEffect) ? true : t.skuId,
            isHovering: Y
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
    context: i
  } = e, [a, o] = l.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: L.qr,
    children: (0, r.jsx)(s.DUT, {
      onMouseEnter: () => o("interactive-text-hover"),
      onMouseLeave: () => o("interactive-text-default"),
      onClick: () => {
        t(), (0, g.Wn)(G({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, i))
      },
      className: L.wC,
      children: (0, r.jsx)(s.Text, {
        color: a,
        variant: "text-sm/normal",
        children: M.intl.string(M.t["+Xp3hq"])
      })
    })
  })
}