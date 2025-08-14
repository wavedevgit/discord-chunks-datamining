/** Chunk was on web.js **/
/** chunk id: 331197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk582019 = require("./582019.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk239091 = require("./239091.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk706140 = require("./706140.js"),
  Chunk579185 = require("./579185.js"),
  Chunk242291 = require("./242291.js"),
  Chunk792165 = require("./792165.jsx"),
  Chunk603074 = require("./603074.jsx"),
  Chunk294629 = require("./294629.js"),
  Chunk131951 = require("./131951.js"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk127379 = require("./127379.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 300,
  R = 200;

function P(e) {
  let {
    channel: t,
    themeable: T,
    whichPopoutIsOpen: A,
    setWhichPopoutIsOpen: P
  } = e, {
    parentAnalyticsLocation: w
  } = (0, u.ZP)(), {
    Component: D,
    play: L,
    events: {
      onMouseEnter: x,
      onMouseLeave: M
    }
  } = (0, s.j)(), k = t.getGuildId(), {
    mute: j,
    suppress: U
  } = (0, E.Z)(t), G = (0, o.e7)([b.Z], () => b.Z.isDeaf()), B = j || U || G, Z = (0, h.sR)({
    isSoundboardButtonDisabled: B
  }), [F, V] = (0, _.cv)(Z), {
    analyticsLocations: H
  } = (0, u.ZP)(), {
    isHovered: Y,
    setIsHovered: W,
    onMouseEnter: K,
    onMouseLeave: z
  } = (0, p.Z)(R, C);

  function q() {
    return j ? I.intl.string(I.t["Ox4/zc"]) : U ? I.intl.string(I.t["+YBKYG"]) : G ? I.intl.string(I.t.X1lQlp) : true
  }

  function X(e) {
    null != k && (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, r.jsx)(e, N(S({
        guildId: k,
        sourceAnalyticsLocations: H
      }, t), {
        onInteraction: (0, f.u)("SoundboardContextMenu", w)
      }))
    })
  }

  function Q() {
    (0, d.v)(w, d.d.SOUNDBOARD), A === v.D.SOUNDBOARD ? (null == P || P(true), z()) : (null != A ? (L(), K()) : L(), null == P || P(v.D.SOUNDBOARD))
  }
  let J = i.useRef(null);
  return (0, r.jsx)(l.y, {
    targetElementRef: J,
    shouldShow: Y && (A === v.D.SOUNDBOARD || null == A) || A === v.D.SOUNDBOARD,
    animation: l.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      W(false), null == P || P(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return B ? null : (0, r.jsx)(y.Z, {
        children: (0, r.jsx)("div", {
          onMouseEnter: K,
          onMouseLeave: z,
          children: (0, r.jsx)(g.Z, {
            guildId: k,
            channel: t,
            onClose: n,
            gridNotice: F === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(m.o, {
              onClose: n,
              markAsDismissed: V
            }),
            analyticsSource: "action bar button"
          })
        })
      })
    },
    children: () => (0, r.jsx)(O.d, {
      ref: J,
      isTrayButton: true,
      themeable: T,
      label: q(),
      iconComponent: D,
      disabled: B,
      onContextMenu: X,
      onClick: Q,
      onMouseEnter: () => {
        K(), x()
      },
      onMouseLeave: () => {
        null == A && (z(), M())
      },
      isActive: Y || A === v.D.SOUNDBOARD,
      color: Y || A === v.D.SOUNDBOARD ? "primaryDark" : true
    })
  })
}