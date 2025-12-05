/** Chunk was on 83615 **/
/** chunk id: 444134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  JC: () => p,
  iQ: () => m,
  xo: () => d
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js"),
  Chunk205120 = require("./205120.js"),
  Chunk393238 = require("./393238.js"),
  Chunk945165 = require("./945165.js");

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

function u(e, t) {
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
let d = Chunk473749.createContext({
    registerComponent: () => {},
    unregisterComponent: () => {},
    animatedComponents: {},
    expandedContentRef: Chunk473749.createRef(),
    collapsedContentRef: Chunk473749.createRef(),
    recalculateAnimationPositions: () => {},
    animatedComponentProps: [],
    expansionSpring: null,
    mountPoints: new Map
  }),
  p = Chunk473749.forwardRef(function(e, t) {
    var n;
    let {
      children: l,
      id: c,
      inState: u,
      isTextTransition: p = false
    } = e, {
      recalculateAnimationPositions: m,
      registerComponent: f,
      unregisterComponent: g,
      expansionSpring: x,
      mountPoints: h
    } = s.useContext(d), _ = s.useRef(null), b = s.useRef(null), j = s.useRef(true);
    s.useEffect(() => {
      m()
    }, [m]), s.useLayoutEffect(() => {
      let e = _.current;
      return null != e && f(e, c, u), () => {
        null != e && g(c, u)
      }
    }, [c, u, f, g]);
    let v = s.useCallback(e => {
      let {
        height: t
      } = e;
      j.current !== t && (m(), j.current = t)
    }, [m]);
    (0, i.PM)(_, v);
    let C = null == (n = h.get(c)) ? true : n.current,
      y = null;
    return null == C ? y = null : p && null != x ? y = (0, r.jsxs)(r.Fragment, {
      children: ["collapsed" === u && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: x.to({
            range: [0, 1],
            output: [1, 0]
          })
        },
        children: l(b)
      }), C), "expanded" === u && (0, o.createPortal)((0, r.jsx)(a.animated.div, {
        style: {
          position: "absolute",
          opacity: x.to({
            range: [0, 1],
            output: [0, 1]
          })
        },
        children: l(b)
      }), C)]
    }) : "collapsed" === u && (y = (0, o.createPortal)(l(b), C)), (0, r.jsxs)("div", {
      style: {
        opacity: +(null == y && "collapsed" === u || null == C)
      },
      ref: t,
      children: [l(_), y]
    })
  }),
  m = e => {
    let {
      children: t,
      expandedContentRef: n,
      collapsedContentRef: o,
      expansionSpring: a
    } = e, [i, p] = s.useState({}), [m, f] = s.useState([]), [g, x] = s.useState(() => new Map), h = s.useCallback((e, t, n) => {
      p(r => {
        var s;
        let o = null != (s = r[t]) ? s : {
          expanded: null,
          collapsed: null
        };
        return u(c({}, r), {
          [t]: u(c({}, o), {
            [n]: e
          })
        })
      }), x(e => {
        let n = new Map(e);
        return n.set(t, s.createRef()), n
      })
    }, []), _ = s.useCallback((e, t) => {
      let n = false;
      p(r => {
        var s;
        let o = null != (s = r[e]) ? s : {
          expanded: null,
          collapsed: null
        };
        return o[t] = null, n = null == o.expanded && null == o.collapsed, u(c({}, r), {
          [e]: o
        })
      }), n && x(t => {
        let n = new Map(t);
        return n.delete(e), n
      })
    }, []), b = s.useCallback(() => {
      let e = [];
      for (let t in i) {
        if (null == i[t] || null == n.current || null == o.current) continue;
        let r = i[t].collapsed,
          s = i[t].expanded;
        if (null == r || null == s) continue;
        let a = s.getBoundingClientRect(),
          c = n.current.getBoundingClientRect(),
          u = r.getBoundingClientRect(),
          d = o.current.getBoundingClientRect(),
          p = a.top - c.top + l.jK,
          m = u.top - d.top,
          f = a.left - c.left + l.jK,
          g = u.left - d.left,
          x = -a.right + c.right + l.jK,
          h = -u.right + d.right;
        e.push({
          id: t,
          collapsedLeft: g,
          expandedLeft: f,
          collapsedRight: h,
          expandedRight: x,
          collapsedTop: m,
          expandedTop: p,
          width: a.width
        })
      }
      f(e)
    }, [i, n, o, f]);
    return (0, r.jsx)(d.Provider, {
      value: {
        registerComponent: h,
        unregisterComponent: _,
        animatedComponents: i,
        expandedContentRef: n,
        collapsedContentRef: o,
        recalculateAnimationPositions: b,
        animatedComponentProps: m,
        expansionSpring: a,
        mountPoints: g
      },
      children: t
    })
  }