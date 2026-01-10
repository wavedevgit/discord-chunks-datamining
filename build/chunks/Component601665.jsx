/** Chunk was on web.js **/
/** chunk id: 601665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk952124 = require("./952124.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk895697 = require("./895697.jsx"),
  Chunk161572 = require("./161572.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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
  let {
    user: t,
    currentUser: n,
    guildId: R,
    channelId: D,
    messageId: x,
    roleId: L,
    openedAt: j,
    closePopout: M,
    setPopoutRef: k,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: G = [],
    disableAutoFocus: Z = false,
    onClickContainer: F
  } = e, {
    analyticsLocations: B
  } = (0, l.ZP)([...G, s.Z.USER_PROFILE_POPOUT]), V = (0, d.Aq)(), H = (0, _.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: R,
    channelId: D,
    messageId: x,
    roleId: L
  }), Y = (0, h.ZP)(t.id, R), W = (0, a.e7)([f.Z], () => null != R ? f.Z.getGuild(R) : null), K = i.useRef(null), {
    isHoveringOrFocusing: z
  } = (0, u.Z)(K);
  i.useEffect(() => {
    null == k || k(null == K ? true : K.current)
  }, [K, k]);
  let q = e => {
      null == M || M(), V.dispatch(C.CkL.POPOUT_CLOSE), (0, g.openUserProfileModal)(w({
        sourceAnalyticsLocations: B,
        hideRestrictedProfile: true
      }, H, e))
    },
    Q = () => U ? null : (0, r.jsx)(o.sNh, {
      id: "view-profile",
      label: N.intl.string(N.t["+Xp3hq"]),
      action: () => {
        q(), (0, m.pQ)(w({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: B
        }, H))
      }
    }),
    X = Z ? "div" : o.VqE,
    J = (0, c.Dt)(),
    $ = p.ZP.useName(R, D, t);
  return (0, r.jsx)(l.Gt, {
    value: B,
    children: (0, r.jsx)(_.Mt, {
      value: H,
      openedAt: j,
      fetchStartedAt: null == Y ? true : Y.fetchStartedAt,
      fetchEndedAt: null == Y ? true : Y.fetchEndedAt,
      isLoaded: null == Y ? true : Y.isLoaded,
      children: (0, r.jsxs)(X, {
        ref: K,
        "aria-labelledby": J,
        onClick: F,
        children: [(0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            id: J,
            children: N.intl.format(N.t.KRe1Fk, {
              name: $
            })
          })
        }), (0, r.jsxs)(y.Z, {
          user: t,
          displayProfile: Y,
          themeType: A.l.POPOUT,
          children: [(0, r.jsx)(v.Z, {
            children: (0, r.jsx)(O.Z, {
              user: t,
              guildId: R,
              viewProfileItem: Q()
            })
          }), (0, r.jsxs)("div", {
            className: P.header,
            children: [(0, r.jsx)(b.Z, {
              user: t,
              displayProfile: Y,
              guildId: R,
              themeType: A.l.POPOUT
            }), (0, r.jsx)(E.Z, {
              user: t,
              displayProfile: Y,
              guildId: R,
              channelId: D,
              themeType: A.l.POPOUT,
              onOpenProfile: U ? true : q
            }), (0, r.jsx)(S.Z, {
              user: t,
              themeType: A.l.POPOUT,
              onCloseProfile: M,
              disableToolbar: true
            })]
          }), (0, r.jsx)(I.Z, {
            user: t,
            currentUser: n,
            displayProfile: Y,
            guild: W,
            isHoveringOrFocusing: z,
            onOpenProfile: U ? true : q,
            channelId: D,
            onClose: M
          }), (0, r.jsx)(T.Z, {
            user: t,
            guildId: R,
            channelId: D,
            onClose: M,
            disableAutoFocus: Z
          })]
        })]
      })
    })
  })
}