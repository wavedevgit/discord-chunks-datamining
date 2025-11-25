/** Chunk was on 46984 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk790519 = require("./790519.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk996435 = require("./996435.js"),
  Chunk700425 = require("./700425.js"),
  Chunk910557 = require("./910557.js");

function g(e) {
  var t;
  let {
    category: n,
    onClick: l,
    active: i
  } = e, {
    useTitle: a,
    useNavigationTitle: c,
    key: f
  } = n, p = null == a ? true : a(), b = null != (t = null == c ? true : c()) ? t : p;
  return s()(null != b, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.mh, {
    id: f,
    children: e => {
      var t, n;
      return (0, r.jsx)(d.P3F, (t = function(e) {
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
        onClick: l,
        tag: "li",
        className: o()({
          [y.active]: i
        })
      }, e), n = n = {
        children: b
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t), f)
    }
  })
}

function v(e) {
  let {
    categories: t
  } = e, n = p.Z.useField("activeCategoryKey");
  (0, f.ZP)(() => (p.Z.setState({
    activeCategoryKey: t[0].key
  }), () => {
    p.Z.setState({
      activeCategoryKey: true
    })
  }));
  let i = l.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
    o = (0, d.q_F)({
      y: 36 * i,
      config: {
        mass: .1,
        friction: 20,
        tension: 300
      }
    });
  return (0, b.l)(), (0, r.jsxs)("div", {
    className: y.subnav,
    children: [(0, r.jsx)("div", {
      className: y.track,
      children: (0, r.jsx)(c.animated.div, {
        className: y.thumb,
        style: o
      })
    }), (0, r.jsx)("ul", {
      children: t.map(e => (0, r.jsx)(g, {
        onClick: () => {
          var t;
          return t = e.key, void p.Z.setState({
            activeCategoryKey: t,
            targetKey: t,
            showNavigationMobile: false,
            disableSidebarCategoryAutoSelect: true
          })
        },
        active: e.key === n,
        category: e
      }, e.key))
    })]
  })
}