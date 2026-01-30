/** Chunk was on 59024 **/
/** chunk id: 362205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk864605 = require("./864605.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk894858 = require("./894858.js"),
  Chunk890690 = require("./890690.js"),
  Chunk637577 = require("./637577.js");

function g(e) {
  let {
    category: t,
    onClick: n,
    active: l
  } = e, {
    useTitle: o,
    useSubnavLabel: i,
    key: s
  } = t, b = null == o ? true : o(), y = null == i ? true : i(), p = null != y ? y : b;
  return c()(null != p, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.tG, {
    id: s,
    children: e => {
      var t, o;
      return (0, r.jsx)(d.DUT, (t = function(e) {
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
      }({
        onClick: n,
        className: a()(f.AS, {
          [f.vu]: l
        })
      }, e), o = o = {
        children: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
      }), t), s)
    }
  })
}

function m(e) {
  let {
    categories: t
  } = e, n = y.A.useField("currentCategoryKey");
  (0, b.Ay)(() => {
    t.some(e => e.key === n) || y.A.setState({
      currentCategoryKey: t[0].key
    })
  });
  let o = l.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    {
      thumbRef: a,
      trackRef: i,
      thumbAnchorRef: c,
      springs: u
    } = function(e) {
      let t = l.useRef(null),
        n = l.useRef(null),
        r = l.useRef(null),
        o = l.useRef(true),
        [a, i] = (0, d.zhh)(() => ({
          y: 0,
          height: 0,
          config: {
            mass: .1,
            friction: 20,
            tension: 300
          }
        }));
      return l.useLayoutEffect(() => {
        if (null == t.current || null == n.current || null == r.current) return;
        let [e, l] = [t.current.getBoundingClientRect(), r.current.getBoundingClientRect()];
        if (o.current) {
          o.current = false, a.y.set(l.y - e.y), a.height.set(l.height);
          return
        }
        i({
          y: l.y - e.y,
          height: l.height
        })
      }, [e, i, a.y, a.height]), {
        thumbRef: n,
        trackRef: t,
        thumbAnchorRef: r,
        springs: a
      }
    }(o);
  return (0, p.o)(), (0, r.jsxs)("div", {
    className: f.o8,
    role: "list",
    style: {
      "--custom-nav-count": t.length,
      "--custom-nav-index": o
    },
    children: [(0, r.jsx)("div", {
      className: f.u4,
      "aria-hidden": "true",
      ref: i,
      children: (0, r.jsx)(s.animated.div, {
        className: f.FF,
        style: u,
        ref: a
      })
    }), (0, r.jsx)("div", {
      className: f.gu,
      "aria-hidden": "true",
      ref: c
    }), t.map(e => (0, r.jsx)(g, {
      onClick: () => {
        var t;
        return t = e.key, void y.A.setState({
          requestedTargetKey: t,
          showNavigationMobile: false
        })
      },
      active: e.key === n,
      category: e
    }, e.key))]
  })
}