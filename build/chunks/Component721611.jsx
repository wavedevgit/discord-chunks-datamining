/** Chunk was on 16985 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk790519 = require("./790519.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
  Chunk910557 = require("./910557.js");

function p(e) {
  var t;
  let {
    category: n,
    onClick: l,
    active: i
  } = e, {
    useTitle: a,
    useNavigationTitle: s,
    key: f
  } = n, p = null == a ? true : a(), y = null != (t = null == s ? true : s()) ? t : p;
  return c()(null != y, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.mh, {
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
          [b.active]: i
        })
      }, e), n = n = {
        children: y
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

function y(e) {
  let {
    categories: t
  } = e, [n, i] = l.useState(t[0].key), o = l.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]), a = (0, d.q_F)({
    y: 36 * o,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  });
  return (0, r.jsxs)("div", {
    className: b.subnav,
    children: [(0, r.jsx)("div", {
      className: b.track,
      children: (0, r.jsx)(s.animated.div, {
        className: b.thumb,
        style: a
      })
    }), (0, r.jsx)("ul", {
      children: t.map(e => (0, r.jsx)(p, {
        onClick: () => {
          var t;
          i(t = e.key), f.Z.setState({
            targetKey: t,
            showNavigationMobile: false
          })
        },
        active: e.key === n,
        category: e
      }, e.key))
    })]
  })
}