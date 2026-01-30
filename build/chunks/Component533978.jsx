/** Chunk was on 1113 **/
/** chunk id: 533978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk621956 = require("./621956.jsx"),
  Chunk265872 = require("./265872.jsx"),
  Chunk442433 = require("./442433.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk160761 = require("./160761.js"),
  Chunk421773 = require("./421773.js"),
  Chunk536432 = require("./536432.js"),
  Chunk674168 = require("./674168.jsx"),
  Chunk989799 = require("./989799.jsx"),
  Chunk173660 = require("./173660.js"),
  Chunk430452 = require("./430452.js"),
  Chunk246356 = require("./246356.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk376086 = require("./376086.js"),
  Chunk985018 = require("./985018.jsx");

function v(e) {
  let {
    channel: t,
    themeable: v,
    whichPopoutIsOpen: E,
    setWhichPopoutIsOpen: C
  } = e, {
    parentAnalyticsLocation: S
  } = (0, u.Ay)(), {
    Component: I,
    play: N,
    events: {
      onMouseEnter: T,
      onMouseLeave: P
    }
  } = (0, a.E)(), w = t.getGuildId(), {
    mute: R,
    suppress: D
  } = (0, A.A)(t), L = (0, i.bG)([y.A], () => y.A.isDeaf()), M = R || D || L, G = (0, f.VE)({
    isSoundboardButtonDisabled: M
  }), [k, U] = (0, p.DP)(G), {
    analyticsLocations: V
  } = (0, u.Ay)(), {
    isHovered: B,
    setIsHovered: H,
    onMouseEnter: F,
    onMouseLeave: K
  } = (0, g.A)(200, 300);

  function Y(e) {
    null != w && (0, c.L3)(e, async () => {
      let {
        default: e
      } = await n.e("51111").then(n.bind(n, 323002));
      return t => {
        var n, l;
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
          guildId: w,
          sourceAnalyticsLocations: V
        }, t), l = l = {
          onInteraction: (0, h.s)("SoundboardContextMenu", S)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  }

  function W() {
    (0, d.X)(S, d.O.SOUNDBOARD), E === j.P.SOUNDBOARD ? (null == C || C(true), K()) : (null != E ? (N(), F()) : N(), null == C || C(j.P.SOUNDBOARD))
  }
  let z = l.useRef(null);
  return (0, r.jsx)(o.Y, {
    targetElementRef: z,
    shouldShow: B && (E === j.P.SOUNDBOARD || null == E) || E === j.P.SOUNDBOARD,
    animation: o.Y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      H(false), null == C || C(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return M ? null : (0, r.jsx)(O.A, {
        children: (0, r.jsx)("div", {
          onMouseEnter: F,
          onMouseLeave: K,
          children: (0, r.jsx)(b.A, {
            guildId: w,
            channel: t,
            onClose: n,
            gridNotice: k === s.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, r.jsx)(m.m, {
              onClose: n,
              markAsDismissed: U
            }),
            analyticsSource: "action bar button"
          })
        })
      })
    },
    children: () => (0, r.jsx)(_.l, {
      ref: z,
      isTrayButton: true,
      themeable: v,
      label: R ? x.intl.string(x.t["Ox4/zU"]) : D ? x.intl.string(x.t["+YBKYI"]) : L ? x.intl.string(x.t.X1lQli) : true,
      iconComponent: I,
      disabled: M,
      onContextMenu: Y,
      onClick: W,
      onMouseEnter: e => {
        T(), "focus" !== e.type && F()
      },
      onMouseLeave: () => {
        null == E && (K(), P())
      },
      isActive: B || E === j.P.SOUNDBOARD,
      color: B || E === j.P.SOUNDBOARD ? "primaryDark" : true
    })
  })
}