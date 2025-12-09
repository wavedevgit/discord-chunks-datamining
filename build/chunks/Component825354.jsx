/** Chunk was on 44097 **/
/** chunk id: 825354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk726521 = require("./726521.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595342 = require("./595342.js");

function f(e) {
  let {
    widget: t,
    userId: n,
    className: l,
    menuItems: f
  } = e, g = i.useRef(null), p = () => {
    (0, s.G1)(n, t)
  };
  return (0, r.jsx)(o.yRy, {
    targetElementRef: g,
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
          }, "flag-widget"), f]
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
        innerRef: g,
        "aria-label": u.intl.string(u.t.xpSHSk),
        className: a()(d.button, l),
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