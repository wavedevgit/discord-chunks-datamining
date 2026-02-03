/** Chunk was on 90228 **/
/** chunk id: 568329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PW: () => u,
  dN: () => m,
  oK: () => p
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk340287 = require("./340287.js"),
  Chunk92674 = require("./92674.js"),
  Chunk765671 = require("./765671.js"),
  Chunk398025 = require("./398025.js");

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
require("./272111.js");
let u = Chunk64700.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: Chunk64700.createRef(),
    collapsedContentRef: Chunk64700.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: new Chunk92674.SpringValue(0),
    mountPoints: new Map
  }),
  m = Chunk64700.forwardRef(function(e, t) {
    var n;
    let {
      children: c,
      id: d,
      inState: m,
      isTextTransition: p = false
    } = e, {
      recalculateAnimationPositions: h,
      registerComponent: x,
      unregisterComponent: g,
      expansionSpring: f,
      mountPoints: b
    } = l.useContext(u), v = l.useRef(null), j = l.useRef(null), _ = l.useRef(true);
    l.useEffect(() => {
      h()
    }, [h]), l.useLayoutEffect(() => {
      let e = v.current;
      return null != e && x(e, d, m), () => {
        null != e && g(d, m)
      }
    }, [d, m, x, g]);
    let y = l.useCallback(e => {
      let {
        height: t
      } = e;
      _.current !== t && (h(), _.current = t)
    }, [h]);
    (0, s.i4)(v, y);
    let A = null == (n = b.get(d)) ? true : n.current,
      C = null;
    return null == A ? C = null : p && null != f ? C = (0, a.jsxs)(a.Fragment, {
      children: ["collapsed" === m && (0, r.createPortal)((0, a.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: (0, o.a)(f.to({
            range: [0, 1],
            output: [1, 0]
          }))
        },
        children: c(j)
      }), A), "expanded" === m && (0, r.createPortal)((0, a.jsx)(i.animated.div, {
        style: {
          position: "absolute",
          opacity: (0, o.a)(f.to({
            range: [0, 1],
            output: [0, 1]
          }))
        },
        children: c(j)
      }), A)]
    }) : "collapsed" === m && (C = (0, r.createPortal)(c(j), A)), (0, a.jsxs)("div", {
      style: {
        opacity: +(null == C && "collapsed" === m || null == A)
      },
      ref: t,
      children: [c(v), C]
    })
  }),
  p = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: r,
      expansionSpring: i
    } = e, [s, o] = l.useState({}), [m, p] = l.useState([]), [h, x] = l.useState(() => new Map), g = l.useCallback((e, t, n) => {
      o(a => {
        var l;
        let r = null != (l = a[t]) ? l : {
          expanded: null,
          collapsed: null
        };
        return d(c({}, a), {
          [t]: d(c({}, r), {
            [n]: e
          })
        })
      }), x(e => {
        let n = new Map(e);
        return n.set(t, l.createRef()), n
      })
    }, []), f = l.useCallback((e, t) => {
      let n = false;
      o(a => {
        var l;
        let r = null != (l = a[e]) ? l : {
          expanded: null,
          collapsed: null
        };
        return r[t] = null, n = null == r.expanded && null == r.collapsed, d(c({}, a), {
          [e]: r
        })
      }), n && x(t => {
        let n = new Map(t);
        return n.delete(e), n
      })
    }, []), b = l.useCallback(() => {
      let e = [];
      for (let t in s) {
        if (null == s[t] || null == n.current || null == r.current) continue;
        let a = s[t].collapsed,
          l = s[t].expanded;
        if (null == a || null == l) continue;
        let i = l.getBoundingClientRect(),
          o = n.current.getBoundingClientRect(),
          c = a.getBoundingClientRect(),
          d = r.current.getBoundingClientRect(),
          u = i.top - o.top + 12,
          m = c.top - d.top,
          p = i.left - o.left + 12,
          h = c.left - d.left,
          x = -i.right + o.right + 12,
          g = -c.right + d.right;
        e.push({
          id: t,
          collapsedLeft: h,
          expandedLeft: p,
          collapsedRight: g,
          expandedRight: x,
          collapsedTop: m,
          expandedTop: u,
          width: i.width
        })
      }
      p(e)
    }, [s, n, r, p]);
    return (0, a.jsx)(u.Provider, {
      value: {
        registerComponent: g,
        unregisterComponent: f,
        animatedComponents: s,
        expandedContentRef: n,
        collapsedContentRef: r,
        recalculateAnimationPositions: b,
        animatedComponentProps: m,
        expansionSpring: i,
        mountPoints: h
      },
      children: t
    })
  }