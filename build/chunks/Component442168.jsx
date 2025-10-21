/** Chunk was on 87943 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk258536 = require("./258536.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk175470 = require("./175470.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk565063 = require("./565063.js");

function _(e) {
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
  v = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  E = {
    duration: 1e3
  };

function h(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: h
  } = i.useContext(o.Sf), S = (0, i.useRef)(null), y = d.n.getState().clipsButtonRef, O = (0, f.V9)(t), I = (0, a.e7)([s.Z], () => s.Z.getActiveAnimation()), C = (0, a.Wu)([s.Z], () => s.Z.getStreamClipAnimations(O)), w = (0, i.useRef)(true);
  i.useEffect(() => () => {
    (0, u.Gh)(O)
  }, [O]);
  let j = e => {
      let t = null == y ? true : y.getBoundingClientRect();
      if (w.current = t, e.timestamp !== I || null == t || n) return g;
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
    P = (0, i.useRef)(null),
    Z = (0, c.Yzy)(C, {
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
    x = (0, i.useRef)(null),
    A = (0, c.Yzy)(C, {
      ref: x,
      keys: e => e.timestamp,
      from: e => _({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, h.enabled ? j(e) : (() => {
        var e;
        let t = null == (e = S.current) ? true : e.getBoundingClientRect();
        return null == t || n ? g : {
          width: t.width,
          height: t.height,
          top: t.top,
          left: t.left
        }
      })()),
      enter: e => [_({
        opacity: 1,
        visibility: "visible"
      }, j(e))],
      leave: _({
        opacity: 0
      }, !h.enabled && _({
        height: 0,
        width: 0
      }, (() => {
        if (null != w.current) return {
          top: w.current.top + 12,
          left: w.current.left + 12
        }
      })())),
      config: h.enabled ? E : v,
      onRest: (e, t) => {
        null != t.item && null != C.find(e => e.timestamp === t.item.timestamp) && (0, u.Gh)(O, t.item.timestamp)
      }
    }, "animate-always");
  return (0, l.useChain)([P, x], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.hidden,
      ref: S
    }), Z((e, t) => null != t && (0, r.jsx)(l.animated.div, {
      className: m.whiteFlash,
      style: e
    })), (0, r.jsx)(p.ZP, {
      children: (0, r.jsx)("div", {
        className: m.hidden,
        children: A((e, t, n, i) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(l.animated.img, {
          src: t.thumbnail,
          className: m.movingImage,
          style: e
        }))
      })
    })]
  })
}