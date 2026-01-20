/** Chunk was on 11010 **/
/** chunk id: 442168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function b(e) {
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
  v = {
    precision: 1e-4,
    duration: 300
  },
  E = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  y = {
    duration: 1e3
  };

function _(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: _
  } = i.useContext(o.Sf), O = (0, i.useRef)(null), C = f.n.getState().clipsButtonRef, S = (0, p.V9)(t), x = (0, a.e7)([u.Z], () => u.Z.getActiveAnimation()), I = (0, a.Wu)([u.Z], () => u.Z.getStreamClipAnimations(S)), N = (0, i.useRef)(true);
  i.useEffect(() => () => {
    (0, d.Gh)(S)
  }, [S]);
  let T = e => {
      if (n !== s.P.NO_POPOUT) return h;
      let t = null == C ? true : C.getBoundingClientRect();
      if (N.current = t, e.timestamp !== x || null == t) return h;
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
    P = (0, c.Yzy)(I, {
      keys: e => e.timestamp,
      ref: j,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: v
    }, "animate-always"),
    w = (0, i.useRef)(null),
    Z = (0, c.Yzy)(I, {
      ref: w,
      keys: e => e.timestamp,
      from: e => b({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, _.enabled ? T(e) : (() => {
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
      enter: e => [b({
        opacity: 1,
        visibility: "visible"
      }, T(e))],
      leave: b({
        opacity: 0
      }, !_.enabled && b({
        height: 0,
        width: 0
      }, (() => {
        if (null != N.current) return {
          top: N.current.top + 12,
          left: N.current.left + 12
        }
      })())),
      config: _.enabled ? y : E,
      onRest: (e, t) => {
        null != t.item && null != I.find(e => e.timestamp === t.item.timestamp) && (0, d.Gh)(S, t.item.timestamp)
      }
    }, "animate-always");
  return (0, l.useChain)([j, w], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.hidden,
      ref: O
    }), P((e, t) => null != t && (0, r.jsx)(l.animated.div, {
      className: m.whiteFlash,
      style: e
    })), (0, r.jsx)(g.ZP, {
      children: (0, r.jsx)("div", {
        className: m.hidden,
        children: Z((e, t, n, i) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(l.animated.img, {
          src: t.thumbnail,
          className: m.movingImage,
          style: e
        }))
      })
    })]
  })
}