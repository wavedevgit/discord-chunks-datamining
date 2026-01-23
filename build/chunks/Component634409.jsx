/** Chunk was on web.js **/
/** chunk id: 634409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk311016 = require("./311016.js"),
  Chunk915089 = require("./915089.js"),
  Chunk713517 = require("./713517.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk182592 = require("./182592.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk657331 = require("./657331.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk389996 = require("./389996.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk35241 = require("./35241.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e) {
  var t;
  let {
    user: n,
    guildId: R,
    channelId: D,
    messageId: x,
    roleId: L,
    openedAt: j,
    setPopoutRef: M,
    closePopout: k,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: G = [],
    disableAutoFocus: V = false,
    onClickContainer: F
  } = e, B = (0, m.Ay)(n.id, R), H = (0, d.aL)(), {
    analyticsLocations: Y
  } = (0, o.Ay)([...G, s.A.USER_PROFILE_POPOUT]), W = (0, _.pb)({
    layout: "POPOUT",
    userId: n.id,
    guildId: R,
    channelId: D,
    messageId: x,
    roleId: L
  }), K = i.useRef(null), z = (0, u.M)(K);
  i.useEffect(() => {
    null == M || M(null == K ? true : K.current)
  }, [K, M]);
  let q = () => {
      null == k || k(), H.dispatch(T.jej.POPOUT_CLOSE), (0, g.openUserProfileModal)(P({
        sourceAnalyticsLocations: Y,
        hideRestrictedProfile: true
      }, W))
    },
    Z = !U && (0, l.A)(n.id),
    X = () => Z ? (0, r.jsx)(a.Drp, {
      id: "view-profile",
      label: N.intl.string(N.t["+Xp3hq"]),
      action: () => {
        q(), (0, h.Wn)(P({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: Y
        }, W))
      }
    }) : null,
    Q = V ? "div" : a.lGe,
    J = (0, c.GV)(),
    $ = p.Ay.useName(R, D, n);
  return (0, r.jsx)(o.f5, {
    value: Y,
    children: (0, r.jsx)(_.of, {
      value: W,
      openedAt: j,
      fetchStartedAt: null == B ? true : B.fetchStartedAt,
      fetchEndedAt: null == B ? true : B.fetchEndedAt,
      isLoaded: null == B ? true : B.isLoaded,
      children: (0, r.jsxs)(Q, {
        ref: K,
        "aria-labelledby": J,
        onClick: F,
        children: [(0, r.jsx)(a.AC4, {
          children: (0, r.jsx)(a.H, {
            id: J,
            children: N.intl.format(N.t.KRe1Fk, {
              name: $
            })
          })
        }), (0, r.jsxs)(v.A, {
          user: n,
          displayProfile: B,
          themeType: C.d.POPOUT,
          children: [(0, r.jsx)(S.A, {
            children: (0, r.jsx)(I.A, {
              user: n,
              viewProfileItem: X()
            })
          }), (0, r.jsxs)("div", {
            className: w.wx,
            children: [(0, r.jsx)(b.A, {
              user: n,
              displayProfile: B,
              guildId: R,
              themeType: C.d.POPOUT
            }), (0, r.jsx)(E.A, {
              user: n,
              displayProfile: B,
              guildId: R,
              channelId: D,
              themeType: C.d.POPOUT,
              onOpenProfile: Z ? q : true
            })]
          }), (0, r.jsxs)(a.HOs, {
            fade: true,
            className: w.rf,
            children: [(0, r.jsx)(A.A, {
              user: n,
              guildId: R,
              nickname: p.Ay.getName(R, D, n),
              onOpenProfile: Z ? q : true,
              tags: (0, r.jsx)(y.A, {
                displayProfile: B,
                themeType: C.d.POPOUT,
                onClose: k
              })
            }), (0, r.jsx)(O.A, {
              userId: n.id,
              userBio: null == B ? true : B.bio,
              setLineClamp: false,
              textColor: "text-strong"
            })]
          }), (0, r.jsx)("div", {
            className: w.qr
          })]
        }), (null == B ? true : B.profileEffect) != null && (0, r.jsx)(f.A, {
          skuId: null == B || null == (t = B.profileEffect) ? true : t.skuId,
          isHovering: z
        })]
      })
    })
  })
}