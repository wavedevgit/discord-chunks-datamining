/** Chunk was on web.js **/
/** chunk id: 738953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk853590 = require("./853590.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk616780 = require("./616780.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk104505 = require("./104505.js"),
  Chunk368326 = require("./368326.js"),
  Chunk429467 = require("./429467.js"),
  Chunk728285 = require("./728285.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155493 = require("./155493.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  var t;
  let {
    user: n,
    currentUser: G,
    guildId: F,
    channelId: V,
    messageId: H,
    roleId: Y,
    openedAt: W,
    closePopout: K,
    setPopoutRef: z,
    disableUserProfileLink: q = __OVERLAY__,
    newAnalyticsLocations: Q = [],
    appContext: X,
    disableAutoFocus: J = false,
    onClickContainer: $
  } = e, {
    analyticsLocations: ee
  } = (0, u.ZP)([...Q, c.Z.USER_PROFILE_POPOUT]), et = (0, m.Aq)(), en = (0, b.ZB)({
    layout: "POPOUT",
    userId: n.id,
    guildId: F,
    channelId: V,
    messageId: H,
    roleId: Y
  }), er = (0, o.e7)([g.Z], () => null != F ? g.Z.getGuild(F) : null), ei = i.useMemo(() => null != F ? {
    [F]: [n.id]
  } : {}, [F, n.id]);
  (0, l.$)(ei, "UserProfilePopout");
  let ea = i.useRef(null),
    eo = (0, O.ZP)(n.id, F),
    {
      isHoveringOrFocusing: es,
      isHovering: el
    } = (0, f.Z)(ea),
    ec = (0, v.$m)(),
    eu = (0, s.q_F)({
      opacity: +(null != ec.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == z || z(null == ea ? true : ea.current)
  }, [ea, z]);
  let ed = i.useRef(null),
    ef = n.id === G.id,
    ep = (0, p.p)({
      location: "UserProfilePopout"
    }),
    e_ = i.useMemo(() => (0, _.Z)(), []),
    em = e => {
      null == K || K(), et.dispatch(j.CkL.POPOUT_CLOSE), (0, S.openUserProfileModal)(B(Z({
        sourceAnalyticsLocations: ee,
        hideRestrictedProfile: true,
        customStatusPrompt: e_
      }, en, e), {
        appContext: X
      }))
    },
    eh = () => q ? null : (0, r.jsx)(s.sNh, {
      id: "view-profile",
      label: k.intl.string(k.t["+Xp3hq"]),
      action: () => {
        em(), (0, y.pQ)(Z({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: ee
        }, en))
      }
    }),
    eg = J ? "div" : s.VqE,
    eE = (0, d.Dt)(),
    eb = E.ZP.useName(null == er ? true : er.id, V, n);
  return (0, r.jsx)(u.Gt, {
    value: ee,
    children: (0, r.jsx)(b.Mt, {
      value: en,
      openedAt: W,
      fetchStartedAt: null == eo ? true : eo.fetchStartedAt,
      fetchEndedAt: null == eo ? true : eo.fetchEndedAt,
      isLoaded: null == eo ? true : eo.isLoaded,
      children: (0, r.jsx)(v.NJ, {
        value: ec,
        children: (0, r.jsxs)(eg, {
          ref: ea,
          "aria-labelledby": eE,
          onClick: $,
          children: [(0, r.jsx)(s.nn4, {
            children: (0, r.jsx)(s.H, {
              id: eE,
              children: k.intl.format(k.t.KRe1Fk, {
                name: eb
              })
            })
          }), (0, r.jsxs)(A.Z, {
            user: n,
            displayProfile: eo,
            themeType: M.l.POPOUT,
            children: [null != ec.interactionType && (0, r.jsx)(a.animated.div, {
              style: eu,
              className: U.backdrop
            }), (0, r.jsxs)(N.Z, {
              children: [(0, r.jsx)(R.Z, {
                shouldShowTooltip: null === ec.interactionType,
                user: n,
                guildId: F,
                channelId: V,
                onClose: K,
                appContext: X
              }), (0, r.jsx)(P.Z, {
                themeType: M.l.POPOUT,
                user: n
              }), !ef && (0, r.jsx)(w.Cn, {
                user: n,
                guildId: F,
                viewProfileItem: eh(),
                appContext: X
              })]
            }), (0, r.jsxs)("div", {
              className: U.header,
              children: [(0, r.jsx)(T.Z, {
                user: n,
                displayProfile: eo,
                guildId: F,
                themeType: M.l.POPOUT
              }), (0, r.jsx)(C.Z, {
                userId: n.id,
                className: U.toast,
                onClose: K
              }), (0, r.jsx)(I.Z, {
                user: n,
                displayProfile: eo,
                guildId: F,
                channelId: V,
                themeType: M.l.POPOUT,
                onOpenProfile: q ? true : em
              }), (0, r.jsx)(D.Z, {
                ref: ed,
                user: n,
                guildId: F,
                channelId: V,
                themeType: M.l.POPOUT,
                onCloseProfile: K,
                prompt: ep ? e_ : null
              })]
            }), (0, r.jsx)(x.Z, {
              user: n,
              currentUser: G,
              displayProfile: eo,
              guild: er,
              isHoveringOrFocusing: null == ec.interactionType && es,
              onOpenProfile: q ? true : em,
              channelId: V,
              onClose: K
            }), (0, r.jsx)(L.Z, {
              user: n,
              guildId: F,
              channelId: V,
              onClose: K,
              appContext: X,
              disableAutoFocus: J
            }), (null == eo ? true : eo.profileEffect) != null && (0, r.jsx)(h.Z, {
              skuId: null == eo || null == (t = eo.profileEffect) ? true : t.skuId,
              isHovering: el
            })]
          })]
        })
      })
    })
  })
}