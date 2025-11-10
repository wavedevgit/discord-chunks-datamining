/** Chunk was on 77678 **/
/** chunk id: 825354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk726521 = require("./726521.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923915 = require("./923915.js");

function g(e) {
  let {
    widget: t,
    userId: n,
    className: a,
    menuItems: g
  } = e, f = i.useRef(null), p = () => {
    (0, s.G1)(n, t)
  };
  return (0, r.jsx)(o.yRy, {
    targetElementRef: f,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, c.Zy)(), t()
        },
        onSelect: () => {},
        "aria-label": u.intl.string(u.t.xpSHSk),
        children: (0, r.jsxs)(o.kSQ, {
          children: [(0, r.jsx)(o.sNh, {
            id: "flag-widget",
            label: u.intl.string(u.t.D4GvHE),
            action: p,
            color: "danger",
            icon: o.U65
          }, "flag-widget"), g]
        })
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)(o.P3F, (t = function(e) {
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
      }({}, e), n = n = {
        innerRef: f,
        "aria-label": u.intl.string(u.t.xpSHSk),
        className: l()(d.button, a),
        children: (0, r.jsx)(o.xhG, {
          size: "sm",
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}