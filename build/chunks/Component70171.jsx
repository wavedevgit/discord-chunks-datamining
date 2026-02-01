/** Chunk was on 61344 **/
/** chunk id: 70171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
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

function g(e) {
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
let A = {
    visibility: "hidden"
  },
  b = {
    precision: 1e-4,
    duration: 300
  },
  _ = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  y = {
    duration: 1e3
  };

function v(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: v
  } = r.useContext(s.CZ), E = (0, r.useRef)(null), O = h.K.getState().clipsButtonRef, C = (0, p._z)(t), x = (0, a.bG)([u.A], () => u.A.getActiveAnimation()), S = (0, a.yK)([u.A], () => u.A.getStreamClipAnimations(C)), j = (0, r.useRef)(true);
  r.useEffect(() => () => {
    (0, d.MI)(C)
  }, [C]);
  let I = e => {
      if (n !== c.N.NO_POPOUT) return A;
      let t = null == O ? true : O.getBoundingClientRect();
      if (j.current = t, e.timestamp !== x || null == t) return A;
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
    N = (0, o.pnh)(S, {
      keys: e => e.timestamp,
      ref: T,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: b
    }, "animate-always"),
    P = (0, r.useRef)(null),
    w = (0, o.pnh)(S, {
      ref: P,
      keys: e => e.timestamp,
      from: e => g({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, v.enabled ? I(e) : (() => {
        var e;
        if (n !== c.N.NO_POPOUT) return A;
        let t = null == (e = E.current) ? true : e.getBoundingClientRect();
        return null == t ? A : {
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
        if (null != j.current) return {
          top: j.current.top + 12,
          left: j.current.left + 12
        }
      })())),
      config: v.enabled ? y : _,
      onRest: (e, t) => {
        null != t.item && null != S.find(e => e.timestamp === t.item.timestamp) && (0, d.MI)(C, t.item.timestamp)
      }
    }, "animate-always");
  return (0, i.useChain)([T, P], [0, .1], 3e3), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: m.R,
      ref: E
    }), N((e, t) => null != t && (0, l.jsx)(i.animated.div, {
      className: m.w5,
      style: e
    })), (0, l.jsx)(f.Ay, {
      children: (0, l.jsx)("div", {
        className: m.R,
        children: w((e, t, n, r) => (null == t ? true : t.thumbnail) != null && (0, l.jsx)(i.animated.img, {
          src: t.thumbnail,
          className: m.yI,
          style: e
        }))
      })
    })]
  })
}