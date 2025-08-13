/** Chunk was on web.js **/
/** chunk id: 103113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk313201 = require("./313201.js"),
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
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: w,
    openedAt: D,
    setPopoutRef: L,
    closePopout: x,
    disableUserProfileLink: M = __OVERLAY__,
    newAnalyticsLocations: j = [],
    disableAutoFocus: k = false
  } = e, U = (0, h.ZP)(t.id, n), {
    analyticsLocations: G
  } = (0, l.ZP)([...j, s.Z.USER_PROFILE_POPOUT]), B = (0, _.ZB)({
    layout: "POPOUT",
    userId: t.id,
    guildId: n,
    channelId: C,
    messageId: P,
    roleId: w
  }), Z = i.useRef(null), F = (0, a.Z)(Z);
  i.useEffect(() => {
    null == L || L(null == Z ? true : Z.current)
  }, [Z, L]);
  let V = () => {
      null == x || x(), (0, m.openUserProfileModal)(R({
        sourceAnalyticsLocations: G,
        hideRestrictedProfile: true
      }, B))
    },
    H = !M && (0, c.Z)(t.id),
    Y = () => H ? (0, r.jsx)(o.sNh, {
      id: "view-profile",
      label: A.intl.string(A.t["+Xp3ho"]),
      action: () => {
        V(), (0, p.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: G
        }, B))
      }
    }) : null,
    W = k ? "div" : o.VqE,
    K = (0, u.Dt)(),
    z = f.ZP.useName(n, C, t);
  return (0, r.jsx)(l.Gt, {
    value: G,
    children: (0, r.jsx)(_.Mt, {
      value: B,
      openedAt: D,
      fetchStartedAt: null == U ? true : U.fetchStartedAt,
      fetchEndedAt: null == U ? true : U.fetchEndedAt,
      isLoaded: null == U ? true : U.isLoaded,
      children: (0, r.jsxs)(W, {
        ref: Z,
        "aria-labelledby": K,
        children: [(0, r.jsx)(o.nn4, {
          children: (0, r.jsx)(o.H, {
            id: K,
            children: A.intl.format(A.t.KRe1Fh, {
              name: z
            })
          })
        }), (0, r.jsxs)(O.Z, {
          user: t,
          displayProfile: U,
          themeType: S.lY.POPOUT,
          children: [(0, r.jsx)(T.Z, {
            children: (0, r.jsx)(I.Z, {
              user: t,
              viewProfileItem: Y()
            })
          }), (0, r.jsxs)("div", {
            className: N.header,
            children: [(0, r.jsx)(b.Z, {
              user: t,
              displayProfile: U,
              guildId: n,
              themeType: S.lY.POPOUT
            }), (0, r.jsx)(g.Z, {
              user: t,
              displayProfile: U,
              guildId: n,
              channelId: C,
              themeType: S.lY.POPOUT,
              onOpenProfile: H ? V : true
            })]
          }), (0, r.jsxs)(o.Ttm, {
            fade: true,
            className: N.body,
            children: [(0, r.jsx)(v.Z, {
              user: t,
              nickname: f.ZP.getName(n, C, t),
              onOpenProfile: H ? V : true,
              tags: (0, r.jsx)(E.Z, {
                displayProfile: U,
                themeType: S.lY.POPOUT,
                onClose: x
              })
            }), (0, r.jsx)(y.Z, {
              userId: t.id,
              userBio: null == U ? true : U.bio,
              setLineClamp: false,
              textColor: "header-primary"
            })]
          }), (0, r.jsx)("div", {
            className: N.footer
          })]
        }), (null == U ? true : U.profileEffectId) != null && (0, r.jsx)(d.Z, {
          profileEffectId: null == U ? true : U.profileEffectId,
          isHovering: F
        })]
      })
    })
  })
}