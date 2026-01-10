/** Chunk was on 81985 **/
/** chunk id: 331197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function E(e) {
  let {
    channel: t,
    themeable: E,
    whichPopoutIsOpen: S,
    setWhichPopoutIsOpen: _
  } = e, {
    parentAnalyticsLocation: I
  } = (0, u.ZP)(), {
    Component: P,
    play: Z,
    events: {
      onMouseEnter: N,
      onMouseLeave: T
    }
  } = (0, o.j)(), A = t.getGuildId(), {
    mute: w,
    suppress: R
  } = (0, y.Z)(t), D = (0, l.e7)([v.Z], () => v.Z.isDeaf()), M = w || R || D, k = (0, g.sR)({
    isSoundboardButtonDisabled: M
  }), [L, U] = (0, f.cv)(k), {
    analyticsLocations: G
  } = (0, u.ZP)(), {
    isHovered: B,
    setIsHovered: F,
    onMouseEnter: H,
    onMouseLeave: V
  } = (0, h.Z)(200, 300);

  function z(e) {
    null != A && (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          guildId: A,
          sourceAnalyticsLocations: G
        }, t), i = i = {
          onInteraction: (0, p.u)("SoundboardContextMenu", I)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }

  function W() {
    (0, d.v)(I, d.d.SOUNDBOARD), S === x.D.SOUNDBOARD ? (null == _ || _(true), V()) : (null != S ? (Z(), H()) : Z(), null == _ || _(x.D.SOUNDBOARD))
  }
  let K = i.useRef(null);
  return (0, r.jsx)(s.y, {
    targetElementRef: K,
    shouldShow: B && (S === x.D.SOUNDBOARD || null == S) || S === x.D.SOUNDBOARD,
    animation: s.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      F(false), null == _ || _(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return M ? null : (0, r.jsx)(O.Z, {
        children: (0, r.jsx)("div", {
          onMouseEnter: H,
          onMouseLeave: V,
          children: (0, r.jsx)(b.Z, {
            guildId: A,
            channel: t,
            onClose: n,
            gridNotice: L === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(m.o, {
              onClose: n,
              markAsDismissed: U
            }),
            analyticsSource: "action bar button"
          })
        })
      })
    },
    children: () => (0, r.jsx)(j.d, {
      ref: K,
      isTrayButton: true,
      themeable: E,
      label: w ? C.intl.string(C.t["Ox4/zU"]) : R ? C.intl.string(C.t["+YBKYI"]) : D ? C.intl.string(C.t.X1lQli) : true,
      iconComponent: P,
      disabled: M,
      onContextMenu: z,
      onClick: W,
      onMouseEnter: () => {
        H(), N()
      },
      onMouseLeave: () => {
        null == S && (V(), T())
      },
      isActive: B || S === x.D.SOUNDBOARD,
      color: B || S === x.D.SOUNDBOARD ? "primaryDark" : true
    })
  })
}