/** Chunk was on 50433 **/
/** chunk id: 613087, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B$: () => u,
  l7: () => p,
  p: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk603113 = require("./603113.js"),
  Chunk509442 = require("./509442.js"),
  Chunk393238 = require("./393238.js"),
  Chunk743294 = require("./743294.js");

function c(e) {
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

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = Chunk647438.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: Chunk647438.createRef(),
    collapsedContentRef: Chunk647438.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: null,
    mountPoints: new Map
  }),
  p = Chunk647438.forwardRef(function(e, t) {
    var n;
    let {
      children: l,
      id: c,
      inState: d,
      isTextTransition: p = false
    } = e, {
      recalculateAnimationPositions: m,
      registerComponent: g,
      unregisterComponent: f,
      expansionSpring: h,
      mountPoints: x
    } = s.useContext(u), b = s.useRef(null), _ = s.useRef(null), j = s.useRef(true);
    s.useEffect(() => {
      m()
    }, [m]), s.useLayoutEffect(() => {
      let e = b.current;
      return null != e && g(e, c, d), () => {
        null != e && f(c, d)
      }
    }, [c, d, g, f]);
    let v = s.useCallback(e => {
      let {
        height: t
      } = e;
      j.current !== t && (m(), j.current = t)
    }, [m]);
    (0, i.PM)(b, v);
    let C = null == (n = x.get(c)) ? true : n.current,
      y = null;
    return null == C ? y = null : p && null != h ? y = (0, r.jsxs)(r.Fragment, {
      children: ["collapsed" === d && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: l(_)
      }), C), "expanded" === d && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: l(_)
      }), C)]
    }) : "collapsed" === d && (y = (0, o.createPortal)(l(_), C)), (0, r.jsxs)("div", {
      style: {
        opacity: +(null == y && "collapsed" === d || null == C)
      },
      ref: t,
      children: [l(b), y]
    })
  }),
  m = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: o,
      expansionSpring: a
    } = e, [i, p] = s.useState({}), [m, g] = s.useState([]), [f, h] = s.useState(() => new Map), x = s.useCallback((e, t, n) => {
      p(r => {
        var s;
        let o = null != (s = r[t]) ? s : {
          expanded: null,
          collapsed: null
        };
        return d(c({}, r), {
          [t]: d(c({}, o), {
            [n]: e
          })
        })
      }), h(e => {
        let n = new Map(e);
        return n.set(t, s.createRef()), n
      })
    }, []), b = s.useCallback((e, t) => {
      let n = false;
      p(r => {
        var s;
        let o = null != (s = r[e]) ? s : {
          expanded: null,
          collapsed: null
        };
        return o[t] = null, n = null == o.expanded && null == o.collapsed, d(c({}, r), {
          [e]: o
        })
      }), n && h(t => {
        let n = new Map(t);
        return n.delete(e), n
      })
    }, []), _ = s.useCallback(() => {
      let e = [];
      for (let t in i) {
        if (null == i[t] || null == n.current || null == o.current) continue;
        let r = i[t].collapsed,
          s = i[t].expanded;
        if (null == r || null == s) continue;
        let a = s.getBoundingClientRect(),
          c = n.current.getBoundingClientRect(),
          d = r.getBoundingClientRect(),
          u = o.current.getBoundingClientRect(),
          p = a.top - c.top + l.Li,
          m = d.top - u.top,
          g = a.left - c.left + l.Li,
          f = d.left - u.left,
          h = -a.right + c.right + l.Li,
          x = -d.right + u.right;
        e.push({
          id: t,
          collapsedLeft: f,
          expandedLeft: g,
          collapsedRight: x,
          expandedRight: h,
          collapsedTop: m,
          expandedTop: p,
          width: a.width
        })
      }
      g(e)
    }, [i, n, o, g]);
    return (0, r.jsx)(u.Provider, {
      value: {
        registerComponent: x,
        unregisterComponent: b,
        animatedComponents: i,
        expandedContentRef: n,
        collapsedContentRef: o,
        recalculateAnimationPositions: _,
        animatedComponentProps: m,
        expansionSpring: a,
        mountPoints: f
      },
      children: t
    })
  }