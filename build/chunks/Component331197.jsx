/** Chunk was on 34740 **/
/** chunk id: 331197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    channel: t,
    themeable: O,
    whichPopoutIsOpen: E,
    setWhichPopoutIsOpen: S
  } = e, {
    parentAnalyticsLocation: P
  } = (0, u.ZP)(), {
    Component: I,
    play: Z,
    events: {
      onMouseEnter: T,
      onMouseLeave: N
    }
  } = (0, o.j)(), A = t.getGuildId(), {
    mute: w,
    suppress: M
  } = (0, y.Z)(t), R = (0, l.e7)([C.Z], () => C.Z.isDeaf()), L = w || M || R, k = (0, m.sR)({
    isSoundboardButtonDisabled: L
  }), [D, U] = (0, h.cv)(k), {
    analyticsLocations: B
  } = (0, u.ZP)(), {
    isHovered: H,
    setIsHovered: F,
    onMouseEnter: V,
    onMouseLeave: G
  } = (0, f.Z)(200, 300);

  function z(e) {
    null != A && (0, c.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          guildId: A,
          sourceAnalyticsLocations: B
        }, t), r = r = {
          onInteraction: (0, p.u)("SoundboardContextMenu", P)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    })
  }

  function W() {
    (0, d.v)(P, d.d.SOUNDBOARD), E === x.D.SOUNDBOARD ? (null == S || S(true), G()) : (null != E ? (Z(), V()) : Z(), null == S || S(x.D.SOUNDBOARD))
  }
  let q = r.useRef(null);
  return (0, i.jsx)(s.y, {
    targetElementRef: q,
    shouldShow: H && (E === x.D.SOUNDBOARD || null == E) || E === x.D.SOUNDBOARD,
    animation: s.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      F(false), null == S || S(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return L ? null : (0, i.jsx)(v.Z, {
        children: (0, i.jsx)("div", {
          onMouseEnter: V,
          onMouseLeave: G,
          children: (0, i.jsx)(b.Z, {
            guildId: A,
            channel: t,
            onClose: n,
            gridNotice: D === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(g.o, {
              onClose: n,
              markAsDismissed: U
            }),
            analyticsSource: "action bar button"
          })
        })
      })
    },
    children: () => (0, i.jsx)(_.d, {
      ref: q,
      isTrayButton: true,
      themeable: O,
      label: w ? j.intl.string(j.t["Ox4/zU"]) : M ? j.intl.string(j.t["+YBKYI"]) : R ? j.intl.string(j.t.X1lQli) : true,
      iconComponent: I,
      disabled: L,
      onContextMenu: z,
      onClick: W,
      onMouseEnter: () => {
        V(), T()
      },
      onMouseLeave: () => {
        null == E && (G(), N())
      },
      isActive: H || E === x.D.SOUNDBOARD,
      color: H || E === x.D.SOUNDBOARD ? "primaryDark" : true
    })
  })
}