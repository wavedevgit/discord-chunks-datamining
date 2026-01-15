/** Chunk was on web.js **/
/** chunk id: 103113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk280885 = require("./280885.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk679332 = require("./679332.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function D(e) {
  var t;
  let {
    user: n,
    guildId: w,
    channelId: D,
    messageId: x,
    roleId: L,
    openedAt: j,
    setPopoutRef: M,
    closePopout: k,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: G = [],
    disableAutoFocus: Z = false,
    onClickContainer: F
  } = e, B = (0, m.ZP)(n.id, w), V = (0, d.Aq)(), {
    analyticsLocations: H
  } = (0, s.ZP)([...G, o.Z.USER_PROFILE_POPOUT]), Y = (0, _.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: w,
    channelId: D,
    messageId: x,
    roleId: L
  }), W = i.useRef(null), K = (0, u.X)(W);
  i.useEffect(() => {
    null == M || M(null == W ? true : W.current)
  }, [W, M]);
  let z = () => {
      null == k || k(), V.dispatch(C.CkL.POPOUT_CLOSE), (0, g.openUserProfileModal)(R({
        sourceAnalyticsLocations: H,
        hideRestrictedProfile: true
      }, Y))
    },
    q = !U && (0, l.Z)(n.id),
    Q = () => q ? (0, r.jsx)(a.sNh, {
      id: "view-profile",
      label: N.intl.string(N.t["+Xp3hq"]),
      action: () => {
        z(), (0, h.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: H
        }, Y))
      }
    }) : null,
    X = Z ? "div" : a.VqE,
    J = (0, c.Dt)(),
    $ = p.ZP.useName(w, D, n);
  return (0, r.jsx)(s.Gt, {
    value: H,
    children: (0, r.jsx)(_.Mt, {
      value: Y,
      openedAt: j,
      fetchStartedAt: null == B ? true : B.fetchStartedAt,
      fetchEndedAt: null == B ? true : B.fetchEndedAt,
      isLoaded: null == B ? true : B.isLoaded,
      children: (0, r.jsxs)(X, {
        ref: W,
        "aria-labelledby": J,
        onClick: F,
        children: [(0, r.jsx)(a.nn4, {
          children: (0, r.jsx)(a.H, {
            id: J,
            children: N.intl.format(N.t.KRe1Fk, {
              name: $
            })
          })
        }), (0, r.jsxs)(v.Z, {
          user: n,
          displayProfile: B,
          themeType: A.l.POPOUT,
          children: [(0, r.jsx)(T.Z, {
            children: (0, r.jsx)(I.Z, {
              user: n,
              viewProfileItem: Q()
            })
          }), (0, r.jsxs)("div", {
            className: P.header,
            children: [(0, r.jsx)(y.Z, {
              user: n,
              displayProfile: B,
              guildId: w,
              themeType: A.l.POPOUT
            }), (0, r.jsx)(E.Z, {
              user: n,
              displayProfile: B,
              guildId: w,
              channelId: D,
              themeType: A.l.POPOUT,
              onOpenProfile: q ? z : true
            })]
          }), (0, r.jsxs)(a.Ttm, {
            fade: true,
            className: P.body,
            children: [(0, r.jsx)(S.Z, {
              user: n,
              guildId: w,
              nickname: p.ZP.getName(w, D, n),
              onOpenProfile: q ? z : true,
              tags: (0, r.jsx)(b.Z, {
                displayProfile: B,
                themeType: A.l.POPOUT,
                onClose: k
              })
            }), (0, r.jsx)(O.Z, {
              userId: n.id,
              userBio: null == B ? true : B.bio,
              setLineClamp: false,
              textColor: "text-strong"
            })]
          }), (0, r.jsx)("div", {
            className: P.footer
          })]
        }), (null == B ? true : B.profileEffect) != null && (0, r.jsx)(f.Z, {
          skuId: null == B || null == (t = B.profileEffect) ? true : t.skuId,
          isHovering: K
        })]
      })
    })
  })
}