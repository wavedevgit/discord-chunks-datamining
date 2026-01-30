/** Chunk was on web.js **/
/** chunk id: 39407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk864605 = require("./864605.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk713517 = require("./713517.js"),
  Chunk576241 = require("./576241.js"),
  Chunk645507 = require("./645507.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk182592 = require("./182592.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk672385 = require("./672385.js"),
  Chunk950191 = require("./950191.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk439053 = require("./439053.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk587168 = require("./587168.jsx"),
  Chunk193738 = require("./193738.jsx"),
  Chunk613457 = require("./613457.jsx"),
  Chunk853397 = require("./853397.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk320819 = require("./320819.jsx"),
  Chunk848674 = require("./848674.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk183959 = require("./183959.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
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

function V(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  var t;
  let {
    user: n,
    currentUser: G,
    guildId: V,
    channelId: H,
    messageId: Y,
    roleId: W,
    openedAt: K,
    closePopout: z,
    setPopoutRef: q,
    disableUserProfileLink: Z = __OVERLAY__,
    newAnalyticsLocations: Q = [],
    appContext: X,
    disableAutoFocus: J = false,
    onClickContainer: $
  } = e, {
    analyticsLocations: ee
  } = (0, u.Ay)([...Q, c.A.USER_PROFILE_POPOUT]), et = (0, h.aL)(), en = (0, y.pb)({
    layout: "POPOUT",
    userId: n.id,
    guildId: V,
    channelId: H,
    messageId: Y,
    roleId: W
  }), er = (0, o.bG)([g.A], () => null != V ? g.A.getGuild(V) : null), ei = i.useMemo(() => null != V ? {
    [V]: [n.id]
  } : {}, [V, n.id]);
  (0, l.E)(ei, "UserProfilePopout");
  let ea = i.useRef(null),
    eo = (0, O.Ay)(n.id, V),
    {
      isHoveringOrFocusing: es,
      isHovering: el
    } = (0, f.A)(ea),
    ec = (0, v.fC)(),
    eu = (0, s.zhh)({
      opacity: +(null != ec.interactionType),
      config: {
        duration: 150
      }
    });
  i.useEffect(() => {
    null == q || q(null == ea ? true : ea.current)
  }, [ea, q]);
  let ed = i.useRef(null),
    ef = n.id === G.id,
    ep = (0, p.h)({
      location: "UserProfilePopout"
    }),
    e_ = i.useMemo(() => (0, _.A)(), []),
    eh = e => {
      null == z || z(), et.dispatch(M.jej.POPOUT_CLOSE), (0, A.openUserProfileModal)(B(F({
        sourceAnalyticsLocations: ee,
        hideRestrictedProfile: true,
        customStatusPrompt: e_
      }, en, e), {
        appContext: X
      }))
    },
    em = () => Z ? null : (0, r.jsx)(s.Drp, {
      id: "view-profile",
      label: k.intl.string(k.t["+Xp3hq"]),
      action: () => {
        eh(), (0, b.Wn)(F({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: ee
        }, en))
      }
    }),
    eg = J ? "div" : s.lGe,
    eE = (0, d.GV)(),
    ey = E.Ay.useName(null == er ? true : er.id, H, n);
  return (0, r.jsx)(u.f5, {
    value: ee,
    children: (0, r.jsx)(y.of, {
      value: en,
      openedAt: K,
      fetchStartedAt: null == eo ? true : eo.fetchStartedAt,
      fetchEndedAt: null == eo ? true : eo.fetchEndedAt,
      isLoaded: null == eo ? true : eo.isLoaded,
      children: (0, r.jsx)(v.Hl, {
        value: ec,
        children: (0, r.jsxs)(eg, {
          ref: ea,
          "aria-labelledby": eE,
          onClick: $,
          children: [(0, r.jsx)(s.AC4, {
            children: (0, r.jsx)(s.H, {
              id: eE,
              children: k.intl.format(k.t.KRe1Fk, {
                name: ey
              })
            })
          }), (0, r.jsxs)(C.A, {
            user: n,
            displayProfile: eo,
            themeType: j.d.POPOUT,
            children: [null != ec.interactionType && (0, r.jsx)(a.animated.div, {
              style: eu,
              className: U.tB
            }), (0, r.jsxs)(N.A, {
              children: [(0, r.jsx)(R.A, {
                shouldShowTooltip: null === ec.interactionType,
                user: n,
                guildId: V,
                channelId: H,
                onClose: z,
                appContext: X
              }), (0, r.jsx)(w.A, {
                themeType: j.d.POPOUT,
                user: n
              }), !ef && (0, r.jsx)(P.yo, {
                user: n,
                guildId: V,
                viewProfileItem: em(),
                appContext: X
              })]
            }), (0, r.jsxs)("div", {
              className: U.wx,
              children: [(0, r.jsx)(S.A, {
                user: n,
                displayProfile: eo,
                guildId: V,
                themeType: j.d.POPOUT
              }), (0, r.jsx)(T.A, {
                userId: n.id,
                className: U.oR,
                onClose: z
              }), (0, r.jsx)(I.A, {
                user: n,
                displayProfile: eo,
                guildId: V,
                channelId: H,
                themeType: j.d.POPOUT,
                onOpenProfile: Z ? true : eh
              }), (0, r.jsx)(D.A, {
                ref: ed,
                user: n,
                guildId: V,
                channelId: H,
                themeType: j.d.POPOUT,
                onCloseProfile: z,
                prompt: ep ? e_ : null
              })]
            }), (0, r.jsx)(L.A, {
              user: n,
              currentUser: G,
              displayProfile: eo,
              guild: er,
              isHoveringOrFocusing: null == ec.interactionType && es,
              onOpenProfile: Z ? true : eh,
              channelId: H,
              onClose: z
            }), (0, r.jsx)(x.A, {
              user: n,
              guildId: V,
              channelId: H,
              onClose: z,
              appContext: X,
              disableAutoFocus: J
            }), (null == eo ? true : eo.profileEffect) != null && (0, r.jsx)(m.A, {
              skuId: null == eo || null == (t = eo.profileEffect) ? true : t.skuId,
              isHovering: el
            })]
          })]
        })
      })
    })
  })
}