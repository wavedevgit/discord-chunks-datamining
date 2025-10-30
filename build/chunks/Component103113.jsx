/** Chunk was on web.js **/
/** chunk id: 103113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk580552 = require("./580552.js"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
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
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk593540 = require("./593540.js");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function P(e) {
  var t;
  let {
    user: n,
    guildId: N,
    channelId: P,
    messageId: w,
    roleId: D,
    openedAt: x,
    setPopoutRef: L,
    closePopout: M,
    disableUserProfileLink: k = __OVERLAY__,
    newAnalyticsLocations: j = [],
    disableAutoFocus: U = false
  } = e, G = (0, h.ZP)(n.id, N), {
    analyticsLocations: B
  } = (0, s.ZP)([...j, o.Z.USER_PROFILE_POPOUT]), Z = (0, _.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: N,
    channelId: P,
    messageId: w,
    roleId: D
  }), F = i.useRef(null), V = (0, u.X)(F);
  i.useEffect(() => {
    null == L || L(null == F ? true : F.current)
  }, [F, L]);
  let H = () => {
      null == M || M(), (0, m.openUserProfileModal)(R({
        sourceAnalyticsLocations: B,
        hideRestrictedProfile: true
      }, Z))
    },
    Y = !k && (0, l.Z)(n.id),
    W = () => Y ? (0, r.jsx)(a.sNh, {
      id: "view-profile",
      label: A.intl.string(A.t["+Xp3hq"]),
      action: () => {
        H(), (0, p.pQ)(R({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: B
        }, Z))
      }
    }) : null,
    K = U ? "div" : a.VqE,
    z = (0, c.Dt)(),
    q = f.ZP.useName(N, P, n);
  return (0, r.jsx)(s.Gt, {
    value: B,
    children: (0, r.jsx)(_.Mt, {
      value: Z,
      openedAt: x,
      fetchStartedAt: null == G ? true : G.fetchStartedAt,
      fetchEndedAt: null == G ? true : G.fetchEndedAt,
      isLoaded: null == G ? true : G.isLoaded,
      children: (0, r.jsxs)(K, {
        ref: F,
        "aria-labelledby": z,
        children: [(0, r.jsx)(a.nn4, {
          children: (0, r.jsx)(a.H, {
            id: z,
            children: A.intl.format(A.t.KRe1Fk, {
              name: q
            })
          })
        }), (0, r.jsxs)(O.Z, {
          user: n,
          displayProfile: G,
          themeType: S.l.POPOUT,
          children: [(0, r.jsx)(T.Z, {
            children: (0, r.jsx)(I.Z, {
              user: n,
              viewProfileItem: W()
            })
          }), (0, r.jsxs)("div", {
            className: C.header,
            children: [(0, r.jsx)(b.Z, {
              user: n,
              displayProfile: G,
              guildId: N,
              themeType: S.l.POPOUT
            }), (0, r.jsx)(g.Z, {
              user: n,
              displayProfile: G,
              guildId: N,
              channelId: P,
              themeType: S.l.POPOUT,
              onOpenProfile: Y ? H : true
            })]
          }), (0, r.jsxs)(a.Ttm, {
            fade: true,
            className: C.body,
            children: [(0, r.jsx)(v.Z, {
              user: n,
              guildId: N,
              nickname: f.ZP.getName(N, P, n),
              onOpenProfile: Y ? H : true,
              tags: (0, r.jsx)(E.Z, {
                displayProfile: G,
                themeType: S.l.POPOUT,
                onClose: M
              })
            }), (0, r.jsx)(y.Z, {
              userId: n.id,
              userBio: null == G ? true : G.bio,
              setLineClamp: false,
              textColor: "header-primary"
            })]
          }), (0, r.jsx)("div", {
            className: C.footer
          })]
        }), (null == G ? true : G.profileEffect) != null && (0, r.jsx)(d.Z, {
          skuId: null == G || null == (t = G.profileEffect) ? true : t.skuId,
          isHovering: V
        })]
      })
    })
  })
}