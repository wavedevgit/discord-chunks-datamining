/** Chunk was on 48666 **/
/** chunk id: 362205, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk432022 = require("./432022.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk894858 = require("./894858.js"),
  Chunk890690 = require("./890690.js"),
  Chunk637577 = require("./637577.js");

function g(e) {
  let {
    category: t,
    onClick: r,
    active: l
  } = e, {
    useTitle: o,
    useSubnavLabel: c,
    key: s
  } = t, b = null == o ? true : o(), y = null == c ? true : c(), d = null != y ? y : b;
  return i()(null != d, "[SettingsSubnavigationCategory] Category must have a title"), (0, n.jsx)(u.tG, {
    id: s,
    children: e => {
      var t, o;
      return (0, n.jsx)(f.DUT, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        onClick: r,
        className: a()(p.AS, {
          [p.vu]: l
        })
      }, e), o = o = {
        children: d
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
      }), t), s)
    }
  })
}

function O(e) {
  let {
    categories: t
  } = e, r = y.A.useField("currentCategoryKey");
  (0, b.Ay)(() => {
    t.some(e => e.key === r) || y.A.setState({
      currentCategoryKey: t[0].key
    })
  });
  let o = l.useMemo(() => Math.max(t.findIndex(e => e.key === r), 0), [t, r]),
    {
      thumbRef: a,
      trackRef: c,
      thumbAnchorRef: i,
      springs: u
    } = function(e) {
      let t = l.useRef(null),
        r = l.useRef(null),
        n = l.useRef(null),
        o = l.useRef(true),
        [a, c] = (0, f.zhh)(() => ({
          y: 0,
          height: 0,
          config: {
            mass: .1,
            friction: 20,
            tension: 300
          }
        }));
      return l.useLayoutEffect(() => {
        if (null == t.current || null == r.current || null == n.current) return;
        let [e, l] = [t.current.getBoundingClientRect(), n.current.getBoundingClientRect()];
        if (o.current) {
          o.current = false, a.y.set(l.y - e.y), a.height.set(l.height);
          return
        }
        c({
          y: l.y - e.y,
          height: l.height
        })
      }, [e, c, a.y, a.height]), {
        thumbRef: r,
        trackRef: t,
        thumbAnchorRef: n,
        springs: a
      }
    }(o);
  return (0, d.o)(), (0, n.jsxs)("div", {
    className: p.o8,
    role: "list",
    style: {
      "--custom-nav-count": t.length,
      "--custom-nav-index": o
    },
    children: [(0, n.jsx)("div", {
      className: p.u4,
      "aria-hidden": "true",
      ref: c,
      children: (0, n.jsx)(s.animated.div, {
        className: p.FF,
        style: u,
        ref: a
      })
    }), (0, n.jsx)("div", {
      className: p.gu,
      "aria-hidden": "true",
      ref: i
    }), t.map(e => (0, n.jsx)(g, {
      onClick: () => {
        var t;
        return t = e.key, void y.A.setState({
          requestedTargetKey: t,
          showNavigationMobile: false
        })
      },
      active: e.key === r,
      category: e
    }, e.key))]
  })
}