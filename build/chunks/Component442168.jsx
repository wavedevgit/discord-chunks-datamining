/** Chunk was on 47387 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk401393 = require("./401393.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk175470 = require("./175470.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk565063 = require("./565063.js");

function E(e) {
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
}
let g = {
    visibility: "hidden"
  },
  b = {
    precision: 1e-4,
    duration: 300
  },
  S = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  v = {
    duration: 1e3
  };

function O(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: O
  } = l.useContext(o.Sf), h = (0, l.useRef)(null), y = d.n.getState().clipsButtonRef, _ = (0, f.V9)(t), j = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()), Z = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(_)), I = (0, l.useRef)(true);
  l.useEffect(() => () => {
    (0, c.Gh)(_)
  }, [_]);
  let w = e => {
      let t = null == y ? true : y.getBoundingClientRect();
      if (I.current = t, e.timestamp !== j || null == t || n) return g;
      let {
        top: r,
        left: l
      } = t;
      return {
        top: r + 36,
        left: l - 216,
        height: 151,
        width: 268
      }
    },
    P = (0, l.useRef)(null),
    A = (0, u.Yzy)(Z, {
      keys: e => e.timestamp,
      ref: P,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: b
    }, "animate-always"),
    C = (0, l.useRef)(null),
    R = (0, u.Yzy)(Z, {
      ref: C,
      keys: e => e.timestamp,
      from: e => E({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, O.enabled ? w(e) : (() => {
        var e;
        let t = null == (e = h.current) ? true : e.getBoundingClientRect();
        return null == t || n ? g : {
          width: t.width,
          height: t.height,
          top: t.top,
          left: t.left
        }
      })()),
      enter: e => [E({
        opacity: 1,
        visibility: "visible"
      }, w(e))],
      leave: E({
        opacity: 0
      }, !O.enabled && E({
        height: 0,
        width: 0
      }, (() => {
        if (null != I.current) return {
          top: I.current.top + 12,
          left: I.current.left + 12
        }
      })())),
      config: O.enabled ? v : S,
      onRest: (e, t) => {
        null != t.item && null != Z.find(e => e.timestamp === t.item.timestamp) && (0, c.Gh)(_, t.item.timestamp)
      }
    }, "animate-always");
  return (0, i.useChain)([P, C], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.hidden,
      ref: h
    }), A((e, t) => null != t && (0, r.jsx)(i.animated.div, {
      className: m.whiteFlash,
      style: e
    })), (0, r.jsx)(p.ZP, {
      children: (0, r.jsx)("div", {
        className: m.hidden,
        children: R((e, t, n, l) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(i.animated.img, {
          src: t.thumbnail,
          className: m.movingImage,
          style: e
        }))
      })
    })]
  })
}