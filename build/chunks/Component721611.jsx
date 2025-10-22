/** Chunk was on 13608 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk996435 = require("./996435.js"),
  Chunk567163 = require("./567163.js");

function f(e) {
  var t;
  let {
    category: n,
    onClick: l,
    active: o
  } = e, {
    useTitle: a,
    useNavigationTitle: u,
    key: f
  } = n, b = null == a ? true : a(), p = null != (t = null == u ? true : u()) ? t : b;
  return null == p ? null : (0, r.jsx)(c.mh, {
    id: f,
    children: e => {
      var t, n;
      return (0, r.jsx)(s.P3F, (t = function(e) {
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
        className: i()({
          [d.active]: o
        })
      }, e), n = n = {
        children: p
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

function b(e) {
  let {
    categories: t
  } = e, [n, o] = l.useState(t[0].key), [i, c] = (0, s.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  }));
  return l.useEffect(() => {
    c({
      y: 36 * Math.max(t.findIndex(e => e.key === n), 0)
    })
  }, [t, n, c]), (0, r.jsxs)("div", {
    className: d.subnav,
    children: [(0, r.jsx)("div", {
      className: d.track,
      children: (0, r.jsx)(a.animated.div, {
        className: d.thumb,
        style: i
      })
    }), (0, r.jsx)("ul", {
      children: t.map(e => (0, r.jsx)(f, {
        onClick: () => {
          var t;
          o(t = e.key), u.Z.setState({
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