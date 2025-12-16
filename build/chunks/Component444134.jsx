/** Chunk was on 29725 **/
/** chunk id: 444134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JC: () => m,
  iQ: () => p,
  xo: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  Chunk236726 = require("./236726.js"),
  Chunk393238 = require("./393238.js"),
  Chunk945165 = require("./945165.js");

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = Chunk473749.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: Chunk473749.createRef(),
    collapsedContentRef: Chunk473749.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: new Chunk236726.SpringValue(0),
    mountPoints: new Map
  }),
  m = Chunk473749.forwardRef(function(e, t) {
    var n;
    let {
      children: o,
      id: c,
      inState: d,
      isTextTransition: m = false
    } = e, {
      recalculateAnimationPositions: p,
      registerComponent: h,
      unregisterComponent: f,
      expansionSpring: x,
      mountPoints: b
    } = r.useContext(u), g = r.useRef(null), v = r.useRef(null), j = r.useRef(true);
    r.useEffect(() => {
      p()
    }, [p]), r.useLayoutEffect(() => {
      let e = g.current;
      return null != e && h(e, c, d), () => {
        null != e && f(c, d)
      }
    }, [c, d, h, f]);
    let y = r.useCallback(e => {
      let {
        height: t
      } = e;
      j.current !== t && (p(), j.current = t)
    }, [p]);
    (0, s.PM)(g, y);
    let C = null == (n = b.get(c)) ? true : n.current,
      _ = null;
    return null == C ? _ = null : m && null != x ? _ = (0, a.jsxs)(a.Fragment, {
      children: ["collapsed" === d && (0, l.createPortal)((0, a.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: x.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: o(v)
      }), C), "expanded" === d && (0, l.createPortal)((0, a.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: x.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: o(v)
      }), C)]
    }) : "collapsed" === d && (_ = (0, l.createPortal)(o(v), C)), (0, a.jsxs)("div", {
      style: {
        opacity: +(null == _ && "collapsed" === d || null == C)
      },
      ref: t,
      children: [o(g), _]
    })
  }),
  p = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: l,
      expansionSpring: i
    } = e, [s, m] = r.useState({}), [p, h] = r.useState([]), [f, x] = r.useState(() => new Map), b = r.useCallback((e, t, n) => {
      m(a => {
        var r;
        let l = null != (r = a[t]) ? r : {
          expanded: null,
          collapsed: null
        };
        return d(c({}, a), {
          [t]: d(c({}, l), {
            [n]: e
          })
        })
      }), x(e => {
        let n = new Map(e);
        return n.set(t, r.createRef()), n
      })
    }, []), g = r.useCallback((e, t) => {
      let n = false;
      m(a => {
        var r;
        let l = null != (r = a[e]) ? r : {
          expanded: null,
          collapsed: null
        };
        return l[t] = null, n = null == l.expanded && null == l.collapsed, d(c({}, a), {
          [e]: l
        })
      }), n && x(t => {
        let n = new Map(t);
        return n.delete(e), n
      })
    }, []), v = r.useCallback(() => {
      let e = [];
      for (let t in s) {
        if (null == s[t] || null == n.current || null == l.current) continue;
        let a = s[t].collapsed,
          r = s[t].expanded;
        if (null == a || null == r) continue;
        let i = r.getBoundingClientRect(),
          c = n.current.getBoundingClientRect(),
          d = a.getBoundingClientRect(),
          u = l.current.getBoundingClientRect(),
          m = i.top - c.top + o.jK,
          p = d.top - u.top,
          h = i.left - c.left + o.jK,
          f = d.left - u.left,
          x = -i.right + c.right + o.jK,
          b = -d.right + u.right;
        e.push({
          id: t,
          collapsedLeft: f,
          expandedLeft: h,
          collapsedRight: b,
          expandedRight: x,
          collapsedTop: p,
          expandedTop: m,
          width: i.width
        })
      }
      h(e)
    }, [s, n, l, h]);
    return (0, a.jsx)(u.Provider, {
      value: {
        registerComponent: b,
        unregisterComponent: g,
        animatedComponents: s,
        expandedContentRef: n,
        collapsedContentRef: l,
        recalculateAnimationPositions: v,
        animatedComponentProps: p,
        expansionSpring: i,
        mountPoints: f
      },
      children: t
    })
  }