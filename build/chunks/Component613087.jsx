/** Chunk was on 34297 **/
/** chunk id: 613087, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B$: () => u,
  l7: () => p,
  p: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk603113 = require("./603113.js"),
  Chunk358458 = require("./358458.js"),
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
    } = s.useContext(u), _ = s.useRef(null), b = s.useRef(null), j = s.useRef(true);
    s.useEffect(() => {
      m()
    }, [m]), s.useLayoutEffect(() => {
      let e = _.current;
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
    (0, i.PM)(_, v);
    let C = null == (n = x.get(c)) ? true : n.current,
      y = null;
    return null == C ? y = null : p && null != h ? y = (0, r.jsxs)(r.Fragment, {
      children: ["collapsed" === d && (0, a.createPortal)((0, r.jsx)(o.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: l(b)
      }), C), "expanded" === d && (0, a.createPortal)((0, r.jsx)(o.animated.div, {
        style: {
          position: "absolute",
          opacity: h.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: l(b)
      }), C)]
    }) : "collapsed" === d && (y = (0, a.createPortal)(l(b), C)), (0, r.jsxs)("div", {
      style: {
        opacity: +(null == y && "collapsed" === d || null == C)
      },
      ref: t,
      children: [l(_), y]
    })
  }),
  m = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: a,
      expansionSpring: o
    } = e, [i, p] = s.useState({}), [m, g] = s.useState([]), [f, h] = s.useState(() => new Map), x = s.useCallback((e, t, n) => {
      p(r => {
        var s;
        let a = null != (s = r[t]) ? s : {
          expanded: null,
          collapsed: null
        };
        return d(c({}, r), {
          [t]: d(c({}, a), {
            [n]: e
          })
        })
      }), h(e => {
        let n = new Map(e);
        return n.set(t, s.createRef()), n
      })
    }, []), _ = s.useCallback((e, t) => {
      let n = false;
      p(r => {
        var s;
        let a = null != (s = r[e]) ? s : {
          expanded: null,
          collapsed: null
        };
        return a[t] = null, n = null == a.expanded && null == a.collapsed, d(c({}, r), {
          [e]: a
        })
      }), n && h(t => {
        let n = new Map(t);
        return n.delete(e), n
      })
    }, []), b = s.useCallback(() => {
      let e = [];
      for (let t in i) {
        if (null == i[t] || null == n.current || null == a.current) continue;
        let r = i[t].collapsed,
          s = i[t].expanded;
        if (null == r || null == s) continue;
        let o = s.getBoundingClientRect(),
          c = n.current.getBoundingClientRect(),
          d = r.getBoundingClientRect(),
          u = a.current.getBoundingClientRect(),
          p = o.top - c.top + l.Li,
          m = d.top - u.top,
          g = o.left - c.left + l.Li,
          f = d.left - u.left,
          h = -o.right + c.right + l.Li,
          x = -d.right + u.right;
        e.push({
          id: t,
          collapsedLeft: f,
          expandedLeft: g,
          collapsedRight: x,
          expandedRight: h,
          collapsedTop: m,
          expandedTop: p,
          width: o.width
        })
      }
      g(e)
    }, [i, n, a, g]);
    return (0, r.jsx)(u.Provider, {
      value: {
        registerComponent: x,
        unregisterComponent: _,
        animatedComponents: i,
        expandedContentRef: n,
        collapsedContentRef: a,
        recalculateAnimationPositions: b,
        animatedComponentProps: m,
        expansionSpring: o,
        mountPoints: f
      },
      children: t
    })
  }