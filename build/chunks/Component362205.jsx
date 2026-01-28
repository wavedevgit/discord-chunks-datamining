/** Chunk was on 75473 **/
/** chunk id: 362205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk353709 = require("./353709.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk894858 = require("./894858.js"),
  Chunk890690 = require("./890690.js"),
  Chunk637577 = require("./637577.js");

function y(e) {
  let {
    category: t,
    onClick: n,
    active: o
  } = e, {
    useTitle: a,
    useSubnavLabel: i,
    key: s
  } = t, b = null == a ? true : a(), f = null == i ? true : i(), p = null != f ? f : b;
  return c()(null != p, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.tG, {
    id: s,
    children: e => {
      var t, a;
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
        className: l()(_.AS, {
          [_.vu]: o
        })
      }, e), a = a = {
        children: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
      }), t), s)
    }
  })
}

function m(e) {
  let {
    categories: t
  } = e, n = f.A.useField("currentCategoryKey");
  (0, b.Ay)(() => {
    t.some(e => e.key === n) || f.A.setState({
      currentCategoryKey: t[0].key
    })
  });
  let a = o.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    {
      thumbRef: l,
      trackRef: i,
      thumbAnchorRef: c,
      springs: u
    } = function(e) {
      let t = o.useRef(null),
        n = o.useRef(null),
        r = o.useRef(null),
        a = o.useRef(true),
        [l, i] = (0, d.zhh)(() => ({
          y: 0,
          height: 0,
          config: {
            mass: .1,
            friction: 20,
            tension: 300
          }
        }));
      return o.useLayoutEffect(() => {
        if (null == t.current || null == n.current || null == r.current) return;
        let [e, o] = [t.current.getBoundingClientRect(), r.current.getBoundingClientRect()];
        if (a.current) {
          a.current = false, l.y.set(o.y - e.y), l.height.set(o.height);
          return
        }
        i({
          y: o.y - e.y,
          height: o.height
        })
      }, [e, i, l.y, l.height]), {
        thumbRef: n,
        trackRef: t,
        thumbAnchorRef: r,
        springs: l
      }
    }(a);
  return (0, p.o)(), (0, r.jsxs)("div", {
    className: _.o8,
    role: "list",
    style: {
      "--custom-nav-count": t.length,
      "--custom-nav-index": a
    },
    children: [(0, r.jsx)("div", {
      className: _.u4,
      "aria-hidden": "true",
      ref: i,
      children: (0, r.jsx)(s.animated.div, {
        className: _.FF,
        style: u,
        ref: l
      })
    }), (0, r.jsx)("div", {
      className: _.gu,
      "aria-hidden": "true",
      ref: c
    }), t.map(e => (0, r.jsx)(y, {
      onClick: () => {
        var t;
        return t = e.key, void f.A.setState({
          requestedTargetKey: t,
          showNavigationMobile: false
        })
      },
      active: e.key === n,
      category: e
    }, e.key))]
  })
}