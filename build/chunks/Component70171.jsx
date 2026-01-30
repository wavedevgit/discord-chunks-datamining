/** Chunk was on 31748 **/
/** chunk id: 70171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk970984 = require("./970984.js"),
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
let h = {
    visibility: "hidden"
  },
  y = {
    precision: 1e-4,
    duration: 300
  },
  A = {
    tension: 150,
    friction: 20,
    precision: 1e-4,
    bounce: 0
  },
  b = {
    duration: 1e3
  };

function E(e) {
  let {
    stream: t,
    popoutType: n
  } = e, {
    reducedMotion: E
  } = l.useContext(o.CZ), v = (0, l.useRef)(null), O = f.K.getState().clipsButtonRef, x = (0, p._z)(t), S = (0, a.bG)([u.A], () => u.A.getActiveAnimation()), C = (0, a.yK)([u.A], () => u.A.getStreamClipAnimations(x)), N = (0, l.useRef)(true);
  l.useEffect(() => () => {
    (0, d.MI)(x)
  }, [x]);
  let I = e => {
      if (n !== c.N.NO_POPOUT) return h;
      let t = null == O ? true : O.getBoundingClientRect();
      if (N.current = t, e.timestamp !== S || null == t) return h;
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
    j = (0, l.useRef)(null),
    T = (0, s.pnh)(C, {
      keys: e => e.timestamp,
      ref: j,
      from: {
        opacity: .2
      },
      enter: {
        opacity: 0
      },
      config: y
    }, "animate-always"),
    w = (0, l.useRef)(null),
    P = (0, s.pnh)(C, {
      ref: w,
      keys: e => e.timestamp,
      from: e => _({
        position: "fixed",
        visibility: "hidden",
        opacity: 1
      }, E.enabled ? I(e) : (() => {
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
      enter: e => [_({
        opacity: 1,
        visibility: "visible"
      }, I(e))],
      leave: _({
        opacity: 0
      }, !E.enabled && _({
        height: 0,
        width: 0
      }, (() => {
        if (null != N.current) return {
          top: N.current.top + 12,
          left: N.current.left + 12
        }
      })())),
      config: E.enabled ? b : A,
      onRest: (e, t) => {
        null != t.item && null != C.find(e => e.timestamp === t.item.timestamp) && (0, d.MI)(x, t.item.timestamp)
      }
    }, "animate-always");
  return (0, i.useChain)([j, w], [0, .1], 3e3), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.R,
      ref: v
    }), T((e, t) => null != t && (0, r.jsx)(i.animated.div, {
      className: m.w5,
      style: e
    })), (0, r.jsx)(g.Ay, {
      children: (0, r.jsx)("div", {
        className: m.R,
        children: P((e, t, n, l) => (null == t ? true : t.thumbnail) != null && (0, r.jsx)(i.animated.img, {
          src: t.thumbnail,
          className: m.yI,
          style: e
        }))
      })
    })]
  })
}