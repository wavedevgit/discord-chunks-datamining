/** Chunk was on web.js **/
/** chunk id: 738953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk202841 = require("./202841.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk980591 = require("./980591.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk359588 = require("./359588.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk526031 = require("./526031.jsx"),
  Chunk243778 = require("./243778.jsx"),
  Chunk680295 = require("./680295.jsx"),
  Chunk622562 = require("./622562.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk687158 = require("./687158.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk113557 = require("./113557.jsx"),
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

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = 200;

function z(e) {
  var t;
  let {
    user: n,
    currentUser: F,
    guildId: Y,
    channelId: z,
    messageId: q,
    roleId: X,
    openedAt: Q,
    closePopout: J,
    setPopoutRef: $,
    disableUserProfileLink: ee = __OVERLAY__,
    newAnalyticsLocations: et = [],
    appContext: en,
    disableAutoFocus: er = false
  } = e, {
    analyticsLocations: ei
  } = (0, _.ZP)([...et, f.Z.USER_PROFILE_POPOUT]), ea = (0, T.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: Y,
    channelId: z,
    messageId: q,
    roleId: X
  }), eo = (0, o.e7)([v.Z], () => null != Y ? v.Z.getGuild(Y) : null), es = i.useMemo(() => null != Y ? {
    [Y]: [n.id]
  } : {}, [Y, n.id]);
  (0, d.$)(es);
  let el = i.useRef(null),
    ec = (0, A.ZP)(n.id, Y),
    eu = (0, c.Z)(el),
    ed = (0, C.$m)(),
    ef = (0, l.q_F)({
      opacity: +(null != ed.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == $ || $(null == el ? true : el.current)
  }, [el, $]);
  let e_ = i.useRef(null),
    [ep, eh] = i.useState(String(Date.now())),
    [em, eg] = i.useState(false);
  (0, u.Z)(() => {
    eg(true)
  }, K), (0, O.fu)({
    targetElementRef: e_,
    onGetElementDimensionsAndBoundingRect: e => {
      let {
        hasElementPositionChanged: t
      } = e;
      t && eh(String(Date.now()))
    }
  });
  let eE = (0, h.Z)({
      location: "UserProfilePopout"
    }),
    eb = n.id === F.id,
    [ey, eO] = (0, b.US)(eE && eb ? [s.z.CUSTOM_STATUS_PROMPTS_COACHMARK] : []),
    ev = ey === s.z.CUSTOM_STATUS_PROMPTS_COACHMARK,
    eI = (0, m.p)({
      location: "UserProfilePopout"
    }),
    eT = i.useMemo(() => (0, g.Z)(), []),
    eS = e => {
      null == J || J(), (0, N.openUserProfileModal)(W(H({
        sourceAnalyticsLocations: ei,
        hideRestrictedProfile: true,
        customStatusPrompt: eT
      }, ea, e), {
        appContext: en
      }))
    },
    eA = () => ee ? null : (0, r.jsx)(l.sNh, {
      id: "view-profile",
      label: Z.intl.string(Z.t["+Xp3ho"]),
      action: () => {
        eS(), (0, S.pQ)(H({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: ei
        }, ea))
      }
    }),
    eC = er ? "div" : l.VqE,
    eN = (0, p.Dt)(),
    eR = I.ZP.useName(null == eo ? true : eo.id, z, n);
  return (0, r.jsx)(_.Gt, {
    value: ei,
    children: (0, r.jsx)(T.Mt, {
      value: ea,
      openedAt: Q,
      fetchStartedAt: null == ec ? true : ec.fetchStartedAt,
      fetchEndedAt: null == ec ? true : ec.fetchEndedAt,
      isLoaded: null == ec ? true : ec.isLoaded,
      children: (0, r.jsx)(C.NJ, {
        value: ed,
        children: (0, r.jsxs)(eC, {
          ref: el,
          "aria-labelledby": eN,
          children: [(0, r.jsx)(l.nn4, {
            children: (0, r.jsx)(l.H, {
              id: eN,
              children: Z.intl.format(Z.t.KRe1Fh, {
                name: eR
              })
            })
          }), (0, r.jsxs)(D.Z, {
            user: n,
            displayProfile: ec,
            themeType: B.l.POPOUT,
            children: [null != ed.interactionType && (0, r.jsx)(a.animated.div, {
              style: ef,
              className: V.backdrop
            }), (0, r.jsxs)(x.Z, {
              children: [(0, r.jsx)(j.Z, {
                shouldShowTooltip: null === ed.interactionType,
                user: n,
                guildId: Y,
                channelId: z,
                onClose: J,
                appContext: en
              }), (0, r.jsx)(L.Z, {
                shouldShowTooltip: null === ed.interactionType,
                themeType: B.l.POPOUT,
                user: n
              }), !eb && (0, r.jsx)(M.Z, {
                type: "banner",
                user: n,
                guildId: Y,
                viewProfileItem: eA(),
                appContext: en
              })]
            }), (0, r.jsxs)("div", {
              className: V.header,
              children: [(0, r.jsx)(P.Z, {
                user: n,
                displayProfile: ec,
                guildId: Y,
                themeType: B.l.POPOUT
              }), (0, r.jsx)(w.Z, {
                userId: n.id,
                className: V.toast,
                onClose: J
              }), (0, r.jsx)(R.Z, {
                location: "UserProfilePopout",
                user: n,
                displayProfile: ec,
                guildId: Y,
                channelId: z,
                themeType: B.l.POPOUT,
                onOpenProfile: ee ? true : eS
              }), ev && em ? (0, r.jsx)(E.Z, {
                positionKey: ep,
                markAsDismissed: eO,
                targetElementRef: e_,
                onTryFeature: J,
                children: () => (0, r.jsx)(k.Z, {
                  ref: e_,
                  location: "UserProfilePopout",
                  user: n,
                  guildId: Y,
                  channelId: z,
                  themeType: B.l.POPOUT,
                  onCloseProfile: J,
                  prompt: eT
                })
              }) : (0, r.jsx)(k.Z, {
                ref: ev ? e_ : true,
                location: "UserProfilePopout",
                user: n,
                guildId: Y,
                channelId: z,
                themeType: B.l.POPOUT,
                onCloseProfile: J,
                prompt: eI ? eT : null
              })]
            }), (0, r.jsx)(U.Z, {
              user: n,
              currentUser: F,
              displayProfile: ec,
              guild: eo,
              isHovering: null == ed.interactionType && eu,
              onOpenProfile: ee ? true : eS,
              channelId: z,
              onClose: J
            }), (0, r.jsx)(G.Z, {
              user: n,
              guildId: Y,
              channelId: z,
              onClose: J,
              appContext: en,
              disableAutoFocus: er
            }), (null == ec ? true : ec.profileEffect) != null && (0, r.jsx)(y.Z, {
              profileEffectId: null == ec || null == (t = ec.profileEffect) ? true : t.id,
              isHovering: eu
            })]
          })]
        })
      })
    })
  })
}