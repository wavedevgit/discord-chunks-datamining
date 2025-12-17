/** Chunk was on web.js **/
/** chunk id: 601665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function R(e) {
  let {
    user: t,
    currentUser: n,
    guildId: N,
    channelId: R,
    messageId: w,
    roleId: D,
    openedAt: x,
    closePopout: L,
    setPopoutRef: j,
    disableUserProfileLink: M = __OVERLAY__,
    newAnalyticsLocations: k = [],
    disableAutoFocus: U = false,
    onClickContainer: G
  } = e, {
    analyticsLocations: Z
  } = (0, l.ZP)([...k, s.Z.USER_PROFILE_POPOUT]), F = (0, p.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: N,
    channelId: R,
    messageId: w,
    roleId: D
  }), B = (0, m.ZP)(t.id, N), V = (0, a.e7)([d.Z], () => null != N ? d.Z.getGuild(N) : null), H = i.useRef(null), {
    isHoveringOrFocusing: Y
  } = (0, u.Z)(H);
  i.useEffect(() => {
    null == j || j(null == H ? true : H.current)
  }, [H, j]);
  let W = e => {
      null == L || L(), (0, h.openUserProfileModal)(P({
        sourceAnalyticsLocations: Z,
        hideRestrictedProfile: true
      }, F, e))
    },
    K = () => M ? null : (0, r.jsx)(o.sNh, {
      id: "view-profile",
      label: C.intl.string(C.t["+Xp3hq"]),
      action: () => {
        W(), (0, _.pQ)(P({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: Z
        }, F))
      }
    }),
    z = U ? "div" : o.VqE,
    q = (0, c.Dt)(),
    Q = f.ZP.useName(N, R, t);
  return (0, r.jsx)(l.Gt, {
    value: Z,
    children: (0, r.jsx)(p.Mt, {
      value: F,
      openedAt: x,
      fetchStartedAt: null == B ? true : B.fetchStartedAt,
      fetchEndedAt: null == B ? true : B.fetchEndedAt,
      isLoaded: null == B ? true : B.isLoaded,
      children: (0, r.jsxs)(z, {
        ref: H,
        "aria-labelledby": q,
        onClick: G,
        children: [(0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            id: q,
            children: C.intl.format(C.t.KRe1Fk, {
              name: Q
            })
          })
        }), (0, r.jsxs)(b.Z, {
          user: t,
          displayProfile: B,
          themeType: T.l.POPOUT,
          children: [(0, r.jsx)(O.Z, {
            children: (0, r.jsx)(y.Z, {
              user: t,
              guildId: N,
              viewProfileItem: K()
            })
          }), (0, r.jsxs)("div", {
            className: A.header,
            children: [(0, r.jsx)(E.Z, {
              user: t,
              displayProfile: B,
              guildId: N,
              themeType: T.l.POPOUT
            }), (0, r.jsx)(g.Z, {
              user: t,
              displayProfile: B,
              guildId: N,
              channelId: R,
              themeType: T.l.POPOUT,
              onOpenProfile: M ? true : W
            }), (0, r.jsx)(v.Z, {
              user: t,
              themeType: T.l.POPOUT,
              onCloseProfile: L,
              disableToolbar: true
            })]
          }), (0, r.jsx)(S.Z, {
            user: t,
            currentUser: n,
            displayProfile: B,
            guild: V,
            isHoveringOrFocusing: Y,
            onOpenProfile: M ? true : W,
            channelId: R,
            onClose: L
          }), (0, r.jsx)(I.Z, {
            user: t,
            guildId: N,
            channelId: R,
            onClose: L,
            disableAutoFocus: U
          })]
        })]
      })
    })
  })
}