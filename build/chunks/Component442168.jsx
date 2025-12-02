/** Chunk was on 46931 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
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
let v = {
    visibility: "hidden"
  },
  b = {
    precision: 1e-4,
    duration: 300
  },
  h = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  E = {
    duration: 1e3
  };

function y(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: y
  } = i.useContext(o.Sf), S = (0, i.useRef)(null), O = f.n.getState().clipsButtonRef, C = (0, p.V9)(t), w = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()), I = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(C)), P = (0, i.useRef)(true);
  i.useEffect(() => () => {
    (0, d.Gh)(C)
  }, [C]);
  let x = e => {
      if (n !== s.P.NO_POPOUT) return v;
      let t = null == O ? true : O.getBoundingClientRect();
      if (P.current = t, e.timestamp !== w || null == t) return v;
      let {
        top: r,
        left: i
      } = t;
      return {
        top: r + 36,
        left: i - 216,
        height: 151,
        width: 268
      }
    },
    j = (0, i.useRef)(null),
    Z = (0, c.Yzy)(I, {
      keys: e => e.timestamp,
      ref: j,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: b
    }, "animate-always"),
    R = (0, i.useRef)(null),
    T = (0, c.Yzy)(I, {
      ref: R,
      keys: e => e.timestamp,
      from: e => g({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, y.enabled ? x(e) : (() => {
        var e;
        if (n !== s.P.NO_POPOUT) return v;
        let t = null == (e = S.current) ? true : e.getBoundingClientRect();
        return null == t ? v : {
          width: t.width,
          height: t.height,
          top: t.top,
          left: t.left
        }
      })()),
      enter: e => [g({
        opacity: 1,
        visibility: "visible"
      }, x(e))],
      leave: g({
        opacity: 0
      }, !y.enabled && g({
        height: 0,
        width: 0
      }, (() => {
        if (null != P.current) return {
          top: P.current.top + 12,
          left: P.current.left + 12
        }
      })())),
      config: y.enabled ? E : h,
      onRest: (e, t) => {
        null != t.item && null != I.find(e => e.timestamp === t.item.timestamp) && (0, d.Gh)(C, t.item.timestamp)
      }
    }, "animate-always");
  return (0, l.useChain)([j, R], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.hidden,
      ref: S
    }), Z((e, t) => null != t && (0, r.jsx)(l.animated.div, {
      className: _.whiteFlash,
      style: e
    })), (0, r.jsx)(m.ZP, {
      children: (0, r.jsx)("div", {
        className: _.hidden,
        children: T((e, t, n, i) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(l.animated.img, {
          src: t.thumbnail,
          className: _.movingImage,
          style: e
        }))
      })
    })]
  })
}