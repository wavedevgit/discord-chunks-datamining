/** Chunk was on web.js **/
/** chunk id: 738953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk636606 = require("./636606.js"),
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

function j(e, t, n) {
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
      j(e, t, n[t])
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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  var t;
  let {
    user: n,
    currentUser: j,
    guildId: G,
    channelId: Z,
    messageId: F,
    roleId: V,
    openedAt: H,
    closePopout: Y,
    setPopoutRef: W,
    disableUserProfileLink: K = __OVERLAY__,
    newAnalyticsLocations: z = [],
    appContext: q,
    disableAutoFocus: X = false,
    onRoleClick: Q
  } = e, {
    analyticsLocations: J
  } = (0, u.ZP)([...z, c.Z.USER_PROFILE_POPOUT]), $ = (0, E.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: G,
    channelId: Z,
    messageId: F,
    roleId: V
  }), ee = (0, o.e7)([m.Z], () => null != G ? m.Z.getGuild(G) : null), et = i.useMemo(() => null != G ? {
    [G]: [n.id]
  } : {}, [G, n.id]);
  (0, l.$)(et, "UserProfilePopout");
  let en = i.useRef(null),
    er = (0, y.ZP)(n.id, G),
    {
      isHoveringOrFocusing: ei,
      isHovering: ea
    } = (0, f.Z)(en),
    eo = (0, O.$m)(),
    es = (0, s.q_F)({
      opacity: +(null != eo.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == W || W(null == en ? true : en.current)
  }, [en, W]);
  let el = i.useRef(null),
    ec = n.id === j.id,
    eu = (0, _.p)({
      location: "UserProfilePopout"
    }),
    ed = i.useMemo(() => (0, p.Z)(), []),
    ef = e => {
      null == Y || Y(), (0, v.openUserProfileModal)(B(U({
        sourceAnalyticsLocations: J,
        hideRestrictedProfile: true,
        customStatusPrompt: ed
      }, $, e), {
        appContext: q
      }))
    },
    e_ = () => K ? null : (0, r.jsx)(s.sNh, {
      id: "view-profile",
      label: M.intl.string(M.t["+Xp3hq"]),
      action: () => {
        ef(), (0, b.pQ)(U({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: J
        }, $))
      }
    }),
    ep = X ? "div" : s.VqE,
    eh = (0, d.Dt)(),
    em = g.ZP.useName(null == ee ? true : ee.id, Z, n);
  return (0, r.jsx)(u.Gt, {
    value: J,
    children: (0, r.jsx)(E.Mt, {
      value: $,
      openedAt: H,
      fetchStartedAt: null == er ? true : er.fetchStartedAt,
      fetchEndedAt: null == er ? true : er.fetchEndedAt,
      isLoaded: null == er ? true : er.isLoaded,
      children: (0, r.jsx)(O.NJ, {
        value: eo,
        children: (0, r.jsxs)(ep, {
          ref: en,
          "aria-labelledby": eh,
          children: [(0, r.jsx)(s.nn4, {
            children: (0, r.jsx)(s.H, {
              id: eh,
              children: M.intl.format(M.t.KRe1Fk, {
                name: em
              })
            })
          }), (0, r.jsxs)(A.Z, {
            user: n,
            displayProfile: er,
            themeType: x.l.POPOUT,
            children: [null != eo.interactionType && (0, r.jsx)(a.animated.div, {
              style: es,
              className: k.backdrop
            }), (0, r.jsxs)(C.Z, {
              children: [(0, r.jsx)(R.Z, {
                shouldShowTooltip: null === eo.interactionType,
                user: n,
                guildId: G,
                channelId: Z,
                onClose: Y,
                appContext: q
              }), (0, r.jsx)(N.Z, {
                themeType: x.l.POPOUT,
                user: n
              }), !ec && (0, r.jsx)(P.Cn, {
                user: n,
                guildId: G,
                viewProfileItem: e_(),
                appContext: q
              })]
            }), (0, r.jsxs)("div", {
              className: k.header,
              children: [(0, r.jsx)(T.Z, {
                user: n,
                displayProfile: er,
                guildId: G,
                themeType: x.l.POPOUT
              }), (0, r.jsx)(S.Z, {
                userId: n.id,
                className: k.toast,
                onClose: Y
              }), (0, r.jsx)(I.Z, {
                user: n,
                displayProfile: er,
                guildId: G,
                channelId: Z,
                themeType: x.l.POPOUT,
                onOpenProfile: K ? true : ef
              }), (0, r.jsx)(D.Z, {
                ref: el,
                user: n,
                guildId: G,
                channelId: Z,
                themeType: x.l.POPOUT,
                onCloseProfile: Y,
                prompt: eu ? ed : null
              })]
            }), (0, r.jsx)(w.Z, {
              user: n,
              currentUser: j,
              displayProfile: er,
              guild: ee,
              isHoveringOrFocusing: null == eo.interactionType && ei,
              onOpenProfile: K ? true : ef,
              channelId: Z,
              onClose: Y,
              onRoleClick: Q
            }), (0, r.jsx)(L.Z, {
              user: n,
              guildId: G,
              channelId: Z,
              onClose: Y,
              appContext: q,
              disableAutoFocus: X
            }), (null == er ? true : er.profileEffect) != null && (0, r.jsx)(h.Z, {
              skuId: null == er || null == (t = er.profileEffect) ? true : t.skuId,
              isHovering: ea
            })]
          })]
        })
      })
    })
  })
}