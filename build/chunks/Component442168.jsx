/** Chunk was on 69813 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk598006 = require("./598006.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk175470 = require("./175470.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk933300 = require("./933300.js");

function m(e) {
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
let h = {
    visibility: "hidden"
  },
  E = {
    precision: 1e-4,
    duration: 300
  },
  v = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  _ = {
    duration: 1e3
  };

function y(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: y
  } = l.useContext(o.Sf), O = (0, l.useRef)(null), C = f.n.getState().clipsButtonRef, S = (0, p.V9)(t), I = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()), N = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(S)), T = (0, l.useRef)(true);
  l.useEffect(() => () => {
    (0, d.Gh)(S)
  }, [S]);
  let x = e => {
      if (n !== s.P.NO_POPOUT) return h;
      let t = null == C ? true : C.getBoundingClientRect();
      if (T.current = t, e.timestamp !== I || null == t) return h;
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
    Z = (0, c.Yzy)(N, {
      keys: e => e.timestamp,
      ref: P,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: E
    }, "animate-always"),
    j = (0, l.useRef)(null),
    w = (0, c.Yzy)(N, {
      ref: j,
      keys: e => e.timestamp,
      from: e => m({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, y.enabled ? x(e) : (() => {
        var e;
        if (n !== s.P.NO_POPOUT) return h;
        let t = null == (e = O.current) ? true : e.getBoundingClientRect();
        return null == t ? h : {
          width: t.width,
          height: t.height,
          top: t.top,
          left: t.left
        }
      })()),
      enter: e => [m({
        opacity: 1,
        visibility: "visible"
      }, x(e))],
      leave: m({
        opacity: 0
      }, !y.enabled && m({
        height: 0,
        width: 0
      }, (() => {
        if (null != T.current) return {
          top: T.current.top + 12,
          left: T.current.left + 12
        }
      })())),
      config: y.enabled ? _ : v,
      onRest: (e, t) => {
        null != t.item && null != N.find(e => e.timestamp === t.item.timestamp) && (0, d.Gh)(S, t.item.timestamp)
      }
    }, "animate-always");
  return (0, i.useChain)([P, j], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.hidden,
      ref: O
    }), Z((e, t) => null != t && (0, r.jsx)(i.animated.div, {
      className: b.whiteFlash,
      style: e
    })), (0, r.jsx)(g.ZP, {
      children: (0, r.jsx)("div", {
        className: b.hidden,
        children: w((e, t, n, l) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(i.animated.img, {
          src: t.thumbnail,
          className: b.movingImage,
          style: e
        }))
      })
    })]
  })
}