/** Chunk was on 47147 **/
/** chunk id: 362205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
    useSubnavLabel: l,
    key: s
  } = t, d = null == a ? true : a(), b = null == l ? true : l(), p = null != b ? b : d;
  return c()(null != p, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.tG, {
    id: s,
    children: e => {
      var t, a;
      return (0, r.jsx)(_.DUT, (t = function(e) {
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
        className: i()(f.AS, {
          [f.vu]: o
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

function g(e) {
  let {
    categories: t
  } = e, n = b.A.useField("currentCategoryKey");
  (0, d.Ay)(() => {
    t.some(e => e.key === n) || b.A.setState({
      currentCategoryKey: t[0].key
    })
  });
  let a = o.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    {
      thumbRef: i,
      trackRef: l,
      thumbAnchorRef: c,
      springs: u
    } = function(e) {
      let t = o.useRef(null),
        n = o.useRef(null),
        r = o.useRef(null),
        a = o.useRef(true),
        [i, l] = (0, _.zhh)(() => ({
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
          a.current = false, i.y.set(o.y - e.y), i.height.set(o.height);
          return
        }
        l({
          y: o.y - e.y,
          height: o.height
        })
      }, [e, l, i.y, i.height]), {
        thumbRef: n,
        trackRef: t,
        thumbAnchorRef: r,
        springs: i
      }
    }(a);
  return (0, p.o)(), (0, r.jsxs)("div", {
    className: f.o8,
    role: "list",
    style: {
      "--custom-nav-count": t.length,
      "--custom-nav-index": a
    },
    children: [(0, r.jsx)("div", {
      className: f.u4,
      "aria-hidden": "true",
      ref: l,
      children: (0, r.jsx)(s.animated.div, {
        className: f.FF,
        style: u,
        ref: i
      })
    }), (0, r.jsx)("div", {
      className: f.gu,
      "aria-hidden": "true",
      ref: c
    }), t.map(e => (0, r.jsx)(y, {
      onClick: () => {
        var t;
        return t = e.key, void b.A.setState({
          requestedTargetKey: t,
          showNavigationMobile: false
        })
      },
      active: e.key === n,
      category: e
    }, e.key))]
  })
}