/** Chunk was on 78528 **/
/** chunk id: 762561, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk622543 = require("./622543.js"),
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

function U(e) {
  var t;
  let {
    user: n,
    currentUser: m,
    channel: U
  } = e, V = __OVERLAY__, F = (0, A.Ay)(n.id), H = (0, c.Ay)(), K = l.useRef(Date.now()), {
    analyticsLocations: W
  } = (0, d.Ay)(u.A.USER_PROFILE_SIDEBAR), z = (0, g.pb)({
    layout: "SIDEBAR",
    userId: n.id,
    channelId: U.id
  }), Y = l.useRef(null), {
    isHoveringOrFocusing: q,
    isHovering: X
  } = (0, p.A)(Y), J = (0, y.fC)(), Q = (0, o.zhh)({
    opacity: +(null != J.interactionType),
    config: {
      duration: 150
    }
  }), Z = e => {
    (0, _.openUserProfileModal)(G({
      sourceAnalyticsLocations: W,
      hideRestrictedProfile: true
    }, z, e))
  }, $ = (null == F ? true : F.widgets) != null && F.widgets.length > 0, {
    defaultWishlistId: ee
  } = (0, a.cf)([b.A], () => ({
    defaultWishlistId: b.A.getFirstWishlistId(n.id)
  })), {
    wishlist: et
  } = (0, f.fw)({
    wishlistId: ee,
    userId: n.id
  }), en = l.useMemo(() => null == et ? null : et.items.filter(e => !e.isOwned), [et]);
  return (0, r.jsx)(d.f5, {
    value: W,
    children: (0, r.jsx)(g.of, {
      value: z,
      openedAt: K.current,
      fetchStartedAt: null == F ? true : F.fetchStartedAt,
      fetchEndedAt: null == F ? true : F.fetchEndedAt,
      isLoaded: null == F ? true : F.isLoaded,
      children: (0, r.jsx)(y.Hl, {
        value: J,
        children: (0, r.jsxs)(E.A, {
          ref: Y,
          user: n,
          displayProfile: F,
          themeType: M.d.SIDEBAR,
          themeOverride: H,
          children: [null != J.interactionType && (0, r.jsx)(i.animated.div, {
            style: Q,
            className: k.tB
          }), (0, r.jsxs)(s.d_W, {
            children: [(0, r.jsxs)(S.A, {
              children: [(0, r.jsx)(I.A, {
                user: n,
                themeType: M.d.SIDEBAR
              }), n.bot ? (0, r.jsx)(C.A, {
                user: n
              }) : (0, r.jsx)(N.yo, {
                user: n
              })]
            }), (0, r.jsxs)("div", {
              className: k.wx,
              children: [(0, r.jsx)(j.A, {
                user: n,
                displayProfile: F,
                themeType: M.d.SIDEBAR,
                animateOnHoverOrFocusOnly: !q,
                className: k.vK
              }), (0, r.jsx)(v.A, {
                userId: n.id,
                className: k.oR
              }), (0, r.jsx)(O.A, {
                user: n,
                displayProfile: F,
                channelId: U.id,
                themeType: M.d.SIDEBAR,
                onOpenProfile: V ? true : Z
              }), (0, r.jsx)(T.A, {
                user: n,
                channelId: U.id,
                themeType: M.d.SIDEBAR,
                disableToolbar: n.bot
              })]
            }), (0, r.jsx)(P.A, {
              user: n,
              currentUser: m,
              displayProfile: F,
              channel: U,
              isHoveringOrFocusing: null == J.interactionType && q,
              onOpenProfile: V ? true : Z
            }), $ && (0, r.jsx)("div", {
              className: k.sJ,
              children: (0, r.jsx)(x.A, {
                user: n,
                widgets: F.widgets,
                onOpenUserProfileModal: Z
              })
            }), null != en && en.length > 0 && (0, r.jsx)("div", {
              className: k.vS,
              children: (0, r.jsx)(R.A, {
                profileOwner: n,
                unownedWishlistItems: en,
                wishlistId: ee,
                title: L.intl.string(L.t["7lZ31J"]),
                onClick: () => {
                  null == Z || Z({
                    tabSection: D.RP.WISHLIST
                  })
                }
              })
            }), (0, r.jsx)(w.A, {
              user: n,
              channelId: U.id
            })]
          }), !V && (0, r.jsx)(B, {
            handleOpenProfile: Z,
            analyticsLocations: W,
            context: z
          }), (null == F ? true : F.profileEffect) != null && (0, r.jsx)(h.A, {
            skuId: null == F || null == (t = F.profileEffect) ? true : t.skuId,
            isHovering: X
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
    context: i
  } = e, [s, a] = l.useState("interactive-text-default");
  return (0, r.jsx)("div", {
    className: k.qr,
    children: (0, r.jsx)(o.DUT, {
      onMouseEnter: () => a("interactive-text-hover"),
      onMouseLeave: () => a("interactive-text-default"),
      onClick: () => {
        t(), (0, m.Wn)(G({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: n
        }, i))
      },
      className: k.wC,
      children: (0, r.jsx)(o.Text, {
        color: s,
        variant: "text-sm/normal",
        children: L.intl.string(L.t["+Xp3hq"])
      })
    })
  })
}