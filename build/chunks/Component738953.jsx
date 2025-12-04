/** Chunk was on web.js **/
/** chunk id: 738953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk451834 = require("./451834.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk544989 = require("./544989.jsx"),
  Chunk481932 = require("./481932.jsx"),
  Chunk195387 = require("./195387.jsx"),
  Chunk664794 = require("./664794.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk978395 = require("./978395.jsx"),
  Chunk161572 = require("./161572.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk116649 = require("./116649.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  var t;
  let {
    user: n,
    currentUser: k,
    guildId: G,
    channelId: B,
    messageId: F,
    roleId: V,
    openedAt: H,
    closePopout: Y,
    setPopoutRef: W,
    disableUserProfileLink: K = __OVERLAY__,
    newAnalyticsLocations: z = [],
    appContext: q,
    disableAutoFocus: Q = false
  } = e, {
    analyticsLocations: X
  } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]), J = (0, E.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: G,
    channelId: B,
    messageId: F,
    roleId: V
  }), $ = (0, o.e7)([h.Z], () => null != G ? h.Z.getGuild(G) : null), ee = i.useMemo(() => null != G ? {
    [G]: [n.id]
  } : {}, [G, n.id]);
  (0, l.$)(ee, "UserProfilePopout");
  let et = i.useRef(null),
    en = (0, y.ZP)(n.id, G),
    {
      isHoveringOrFocusing: er,
      isHovering: ei
    } = (0, f.Z)(et),
    ea = (0, O.$m)(),
    eo = (0, s.q_F)({
      opacity: +(null != ea.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == W || W(null == et ? true : et.current)
  }, [et, W]);
  let es = i.useRef(null),
    el = n.id === k.id,
    ec = (0, p.p)({
      location: "UserProfilePopout"
    }),
    eu = i.useMemo(() => (0, _.Z)(), []),
    ed = e => {
      null == Y || Y(), (0, v.openUserProfileModal)(Z(U({
        sourceAnalyticsLocations: X,
        hideRestrictedProfile: true,
        customStatusPrompt: eu
      }, J, e), {
        appContext: q
      }))
    },
    ef = () => K ? null : (0, r.jsx)(s.sNh, {
      id: "view-profile",
      label: j.intl.string(j.t["+Xp3hq"]),
      action: () => {
        ed(), (0, b.pQ)(U({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: X
        }, J))
      }
    }),
    ep = Q ? "div" : s.VqE,
    e_ = (0, d.Dt)(),
    em = g.ZP.useName(null == $ ? true : $.id, B, n);
  return (0, r.jsx)(u.Gt, {
    value: X,
    children: (0, r.jsx)(E.Mt, {
      value: J,
      openedAt: H,
      fetchStartedAt: null == en ? true : en.fetchStartedAt,
      fetchEndedAt: null == en ? true : en.fetchEndedAt,
      isLoaded: null == en ? true : en.isLoaded,
      children: (0, r.jsx)(O.NJ, {
        value: ea,
        children: (0, r.jsxs)(ep, {
          ref: et,
          "aria-labelledby": e_,
          children: [(0, r.jsx)(s.nn4, {
            children: (0, r.jsx)(s.H, {
              id: e_,
              children: j.intl.format(j.t.KRe1Fk, {
                name: em
              })
            })
          }), (0, r.jsxs)(A.Z, {
            user: n,
            displayProfile: en,
            themeType: L.l.POPOUT,
            children: [null != ea.interactionType && (0, r.jsx)(a.animated.div, {
              style: eo,
              className: M.backdrop
            }), (0, r.jsxs)(C.Z, {
              children: [(0, r.jsx)(P.Z, {
                shouldShowTooltip: null === ea.interactionType,
                user: n,
                guildId: G,
                channelId: B,
                onClose: Y,
                appContext: q
              }), (0, r.jsx)(N.Z, {
                themeType: L.l.POPOUT,
                user: n
              }), !el && (0, r.jsx)(R.Cn, {
                user: n,
                guildId: G,
                viewProfileItem: ef(),
                appContext: q
              })]
            }), (0, r.jsxs)("div", {
              className: M.header,
              children: [(0, r.jsx)(I.Z, {
                user: n,
                displayProfile: en,
                guildId: G,
                themeType: L.l.POPOUT
              }), (0, r.jsx)(T.Z, {
                userId: n.id,
                className: M.toast,
                onClose: Y
              }), (0, r.jsx)(S.Z, {
                user: n,
                displayProfile: en,
                guildId: G,
                channelId: B,
                themeType: L.l.POPOUT,
                onOpenProfile: K ? true : ed
              }), (0, r.jsx)(w.Z, {
                ref: es,
                user: n,
                guildId: G,
                channelId: B,
                themeType: L.l.POPOUT,
                onCloseProfile: Y,
                prompt: ec ? eu : null
              })]
            }), (0, r.jsx)(D.Z, {
              user: n,
              currentUser: k,
              displayProfile: en,
              guild: $,
              isHoveringOrFocusing: null == ea.interactionType && er,
              onOpenProfile: K ? true : ed,
              channelId: B,
              onClose: Y
            }), (0, r.jsx)(x.Z, {
              user: n,
              guildId: G,
              channelId: B,
              onClose: Y,
              appContext: q,
              disableAutoFocus: Q
            }), (null == en ? true : en.profileEffect) != null && (0, r.jsx)(m.Z, {
              skuId: null == en || null == (t = en.profileEffect) ? true : t.skuId,
              isHovering: ei
            })]
          })]
        })
      })
    })
  })
}