/** Chunk was on 88569 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk148884 = require("./148884.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk996435 = require("./996435.js"),
  Chunk700425 = require("./700425.js"),
  Chunk910557 = require("./910557.js");

function g(e) {
  let {
    category: t,
    onClick: n,
    active: o
  } = e, {
    useTitle: i,
    key: a
  } = t, s = null == i ? true : i();
  return c()(null != s, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.mh, {
    id: a,
    children: e => {
      var t, i;
      return (0, r.jsx)(b.P3F, (t = function(e) {
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
        tag: "li",
        className: l()({
          [p.active]: o
        })
      }, e), i = i = {
        children: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t), a)
    }
  })
}

function O(e) {
  let {
    categories: t
  } = e, n = d.Z.useField("currentCategoryKey");
  (0, f.ZP)(() => {
    t.some(e => e.key === n) || d.Z.setState({
      currentCategoryKey: t[0].key
    })
  }), o.useEffect(() => () => {
    d.Z.setState({
      currentCategoryKey: true
    })
  }, []);
  let i = o.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    l = (0, b.q_F)({
      y: 36 * i,
      config: {
        mass: .1,
        friction: 20,
        tension: 300
      }
    });
  return (0, y.l)(), (0, r.jsxs)("div", {
    className: p.subnav,
    children: [(0, r.jsx)("div", {
      className: p.track,
      children: (0, r.jsx)(s.animated.div, {
        className: p.thumb,
        style: l
      })
    }), (0, r.jsx)("ul", {
      children: t.map(e => (0, r.jsx)(g, {
        onClick: () => {
          var t;
          return t = e.key, void d.Z.setState({
            requestedTargetKey: t,
            showNavigationMobile: false
          })
        },
        active: e.key === n,
        category: e
      }, e.key))
    })]
  })
}