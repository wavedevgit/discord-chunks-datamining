/** Chunk was on 31748 **/
/** chunk id: 70171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk164617 = require("./164617.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk361157 = require("./361157.js"),
  Chunk652896 = require("./652896.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk353839 = require("./353839.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let h = {
    visibility: "hidden"
  },
  A = {
    precision: 1e-4,
    duration: 300
  },
  y = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  _ = {
    duration: 1e3
  };

function E(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: E
  } = r.useContext(s.CZ), v = (0, r.useRef)(null), O = f.K.getState().clipsButtonRef, x = (0, p._z)(t), S = (0, a.bG)([u.A], () => u.A.getActiveAnimation()), N = (0, a.yK)([u.A], () => u.A.getStreamClipAnimations(x)), C = (0, r.useRef)(true);
  r.useEffect(() => () => {
    (0, d.MI)(x)
  }, [x]);
  let j = e => {
      if (n !== c.N.NO_POPOUT) return h;
      let t = null == O ? true : O.getBoundingClientRect();
      if (C.current = t, e.timestamp !== S || null == t) return h;
      let {
        top: l,
        left: r
      } = t;
      return {
        top: l + 36,
        left: r - 216,
        height: 151,
        width: 268
      }
    },
    T = (0, r.useRef)(null),
    I = (0, o.pnh)(N, {
      keys: e => e.timestamp,
      ref: T,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: A
    }, "animate-always"),
    w = (0, r.useRef)(null),
    R = (0, o.pnh)(N, {
      ref: w,
      keys: e => e.timestamp,
      from: e => m({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, E.enabled ? j(e) : (() => {
        var e;
        if (n !== c.N.NO_POPOUT) return h;
        let t = null == (e = v.current) ? true : e.getBoundingClientRect();
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
      }, j(e))],
      leave: m({
        opacity: 0
      }, !E.enabled && m({
        height: 0,
        width: 0
      }, (() => {
        if (null != C.current) return {
          top: C.current.top + 12,
          left: C.current.left + 12
        }
      })())),
      config: E.enabled ? _ : y,
      onRest: (e, t) => {
        null != t.item && null != N.find(e => e.timestamp === t.item.timestamp) && (0, d.MI)(x, t.item.timestamp)
      }
    }, "animate-always");
  return (0, i.useChain)([T, w], [0, .1], 3e3), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: g.R,
      ref: v
    }), I((e, t) => null != t && (0, l.jsx)(i.animated.div, {
      className: g.w5,
      style: e
    })), (0, l.jsx)(b.Ay, {
      children: (0, l.jsx)("div", {
        className: g.R,
        children: R((e, t, n, r) => (null == t ? true : t.thumbnail) != null && (0, l.jsx)(i.animated.img, {
          src: t.thumbnail,
          className: g.yI,
          style: e
        }))
      })
    })]
  })
}