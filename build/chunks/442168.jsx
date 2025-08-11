/** Chunk was on web.js **/
/** chunk id: 442168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk175470 = require("./175470.js"),
  Chunk569545 = require("./569545.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk83773 = require("./83773.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = 3e3,
  E = .1,
  b = {
    visibility: "hidden"
  },
  y = {
    precision: 1e-4,
    duration: 300
  },
  O = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  v = {
    duration: 1e3
  };

function I(e) {
  let {
    stream: t,
    inPopout: n
  } = e, {
    reducedMotion: h
  } = i.useContext(s.Sf), I = (0, i.useRef)(null), T = d.n.getState().clipsButtonRef, S = (0, f.V9)(t), A = (0, a.e7)([c.Z], () => c.Z.getActiveAnimation()), N = (0, a.Wu)([c.Z], () => c.Z.getStreamClipAnimations(S)), C = (0, i.useRef)(true);
  i.useEffect(() => () => {
    (0, u.Gh)(S)
  }, [S]);
  let R = () => {
      var e;
      let t = null == (e = I.current) ? true : e.getBoundingClientRect();
      return null == t || n ? b : {
        width: t.width,
        height: t.height,
        top: t.top,
        left: t.left
      }
    },
    P = e => {
      let t = null == T ? true : T.getBoundingClientRect();
      if (C.current = t, e.timestamp !== A || null == t || n) return b;
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
    w = () => {
      if (null != C.current) return {
        top: C.current.top + 12,
        left: C.current.left + 12
      }
    },
    D = (0, i.useRef)(null),
    L = (0, l.Yzy)(N, {
      keys: e => e.timestamp,
      ref: D,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: y
    }, "animate-always"),
    x = (0, i.useRef)(null),
    M = (0, l.Yzy)(N, {
      ref: x,
      keys: e => e.timestamp,
      from: e => m({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, h.enabled ? P(e) : R()),
      enter: e => [m({
        opacity: 1,
        visibility: "visible"
      }, P(e))],
      leave: m({
        opacity: 0
      }, !h.enabled && m({
        height: 0,
        width: 0
      }, w())),
      config: h.enabled ? v : O,
      onRest: (e, t) => {
        null != t.item && null != N.find(e => e.timestamp === t.item.timestamp) && (0, u.Gh)(S, t.item.timestamp)
      }
    }, "animate-always");
  return (0, o.useChain)([D, x], [0, E], g), <r.Fragment>{<div className={p.hidden} ref={I} />}{L((e, t) => null != t && <o.animated.div className={p.whiteFlash} style={e} />)}{<_.ZP><div className={p.hidden}>{M((e, t, n, i) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(o.animated.img, {
          src: t.thumbnail,
          className: p.movingImage,
          style: e
        }))}</div></_.ZP>}</r.Fragment>
}