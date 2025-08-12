/** Chunk was on web.js **/
/** chunk id: 601665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
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
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81208 = require("./81208.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function P(e) {
  let {
    user: t,
    currentUser: n,
    guildId: C,
    channelId: P,
    messageId: w,
    roleId: D,
    openedAt: L,
    closePopout: x,
    setPopoutRef: M,
    disableUserProfileLink: k = __OVERLAY__,
    newAnalyticsLocations: j = [],
    disableAutoFocus: U = false
  } = e, {
    analyticsLocations: G
  } = (0, c.ZP)([...j, l.Z.USER_PROFILE_POPOUT]), B = (0, _.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: C,
    channelId: P,
    messageId: w,
    roleId: D
  }), Z = (0, h.ZP)(t.id, C), F = (0, o.e7)([d.Z], () => null != C ? d.Z.getGuild(C) : null), V = i.useRef(null), H = (0, s.Z)(V);
  i.useEffect(() => {
    null == M || M(null == V ? true : V.current)
  }, [V, M]);
  let Y = e => {
      null == x || x(), (0, m.openUserProfileModal)(R({
        sourceAnalyticsLocations: G,
        hideRestrictedProfile: true
      }, B, e))
    },
    W = () => k ? null : (0, r.jsx)(a.sNh, {
      id: "view-profile",
      label: A.intl.string(A.t["+Xp3ho"]),
      action: () => {
        Y(), (0, p.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: G
        }, B))
      }
    }),
    K = U ? "div" : a.VqE,
    z = (0, u.Dt)(),
    q = f.ZP.useName(C, P, t);
  return (0, r.jsx)(c.Gt, {
    value: G,
    children: (0, r.jsx)(_.Mt, {
      value: B,
      openedAt: L,
      fetchStartedAt: null == Z ? true : Z.fetchStartedAt,
      fetchEndedAt: null == Z ? true : Z.fetchEndedAt,
      isLoaded: null == Z ? true : Z.isLoaded,
      children: (0, r.jsxs)(K, {
        ref: V,
        "aria-labelledby": z,
        children: [(0, r.jsx)(a.nn4, {
          children: (0, r.jsx)(a.H, {
            id: z,
            children: A.intl.format(A.t.KRe1Fh, {
              name: q
            })
          })
        }), (0, r.jsxs)(b.Z, {
          user: t,
          displayProfile: Z,
          themeType: S.lY.POPOUT,
          children: [(0, r.jsx)(O.Z, {
            children: (0, r.jsx)(y.Z, {
              user: t,
              guildId: C,
              viewProfileItem: W(),
              onCloseProfile: x
            })
          }), (0, r.jsxs)("div", {
            className: N.header,
            children: [(0, r.jsx)(E.Z, {
              user: t,
              displayProfile: Z,
              guildId: C,
              themeType: S.lY.POPOUT
            }), (0, r.jsx)(g.Z, {
              user: t,
              displayProfile: Z,
              guildId: C,
              channelId: P,
              themeType: S.lY.POPOUT,
              onOpenProfile: k ? true : Y
            }), (0, r.jsx)(v.Z, {
              location: "BotUserProfilePopout",
              user: t,
              themeType: S.lY.POPOUT,
              onCloseProfile: x,
              disableToolbar: true
            })]
          }), (0, r.jsx)(I.Z, {
            user: t,
            currentUser: n,
            displayProfile: Z,
            guild: F,
            isHovering: H,
            onOpenProfile: k ? true : Y,
            channelId: P,
            onClose: x
          }), (0, r.jsx)(T.Z, {
            user: t,
            guildId: C,
            channelId: P,
            onClose: x,
            disableAutoFocus: U
          })]
        })]
      })
    })
  })
}