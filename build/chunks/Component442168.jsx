/** Chunk was on 86642 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk598006 = require("./598006.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk175470 = require("./175470.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk565063 = require("./565063.js");

function g(e) {
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
}
let b = {
    visibility: "hidden"
  },
  y = {
    precision: 1e-4,
    duration: 300
  },
  C = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  _ = {
    duration: 1e3
  };

function v(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: v
  } = r.useContext(o.Sf), x = (0, r.useRef)(null), O = p.n.getState().clipsButtonRef, E = (0, f.V9)(t), j = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()), S = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(E)), P = (0, r.useRef)(true);
  r.useEffect(() => () => {
    (0, d.Gh)(E)
  }, [E]);
  let I = e => {
      if (n !== c.P.NO_POPOUT) return b;
      let t = null == O ? true : O.getBoundingClientRect();
      if (P.current = t, e.timestamp !== j || null == t) return b;
      let {
        top: i,
        left: r
      } = t;
      return {
        top: i + 36,
        left: r - 216,
        height: 151,
        width: 268
      }
    },
    Z = (0, r.useRef)(null),
    T = (0, s.Yzy)(S, {
      keys: e => e.timestamp,
      ref: Z,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: y
    }, "animate-always"),
    N = (0, r.useRef)(null),
    A = (0, s.Yzy)(S, {
      ref: N,
      keys: e => e.timestamp,
      from: e => g({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, v.enabled ? I(e) : (() => {
        var e;
        if (n !== c.P.NO_POPOUT) return b;
        let t = null == (e = x.current) ? true : e.getBoundingClientRect();
        return null == t ? b : {
          width: t.width,
          height: t.height,
          top: t.top,
          left: t.left
        }
      })()),
      enter: e => [g({
        opacity: 1,
        visibility: "visible"
      }, I(e))],
      leave: g({
        opacity: 0
      }, !v.enabled && g({
        height: 0,
        width: 0
      }, (() => {
        if (null != P.current) return {
          top: P.current.top + 12,
          left: P.current.left + 12
        }
      })())),
      config: v.enabled ? _ : C,
      onRest: (e, t) => {
        null != t.item && null != S.find(e => e.timestamp === t.item.timestamp) && (0, d.Gh)(E, t.item.timestamp)
      }
    }, "animate-always");
  return (0, l.useChain)([Z, N], [0, .1], 3e3), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: m.hidden,
      ref: x
    }), T((e, t) => null != t && (0, i.jsx)(l.animated.div, {
      className: m.whiteFlash,
      style: e
    })), (0, i.jsx)(h.ZP, {
      children: (0, i.jsx)("div", {
        className: m.hidden,
        children: A((e, t, n, r) => (null == t ? true : t.thumbnail) != null && (0, i.jsx)(l.animated.img, {
          src: t.thumbnail,
          className: m.movingImage,
          style: e
        }))
      })
    })]
  })
}