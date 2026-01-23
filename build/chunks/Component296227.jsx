/** Chunk was on 38663 **/
/** chunk id: 296227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk928658 = require("./928658.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk418843 = require("./418843.js");

function f(e) {
  let {
    widget: t,
    userId: n,
    className: i,
    menuItems: f
  } = e, p = l.useRef(null), g = () => {
    (0, c.GJ)(n, t)
  };
  return (0, r.jsx)(o.YNO, {
    targetElementRef: p,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.W1t, {
        "data-menu-mixed": true,
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, s.Z_)(), t()
        },
        onSelect: () => {},
        "aria-label": u.intl.string(u.t.xpSHSk),
        children: (0, r.jsxs)(o.rXV, {
          children: [(0, r.jsx)(o.Drp, {
            id: "flag-widget",
            label: u.intl.string(u.t.D4GvHE),
            action: g,
            color: "danger",
            icon: o.iFK
          }, "flag-widget"), f]
        })
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)(o.DUT, (t = function(e) {
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
        innerRef: p,
        "aria-label": u.intl.string(u.t.xpSHSk),
        className: a()(d.x, i),
        children: (0, r.jsx)(o.jNK, {
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