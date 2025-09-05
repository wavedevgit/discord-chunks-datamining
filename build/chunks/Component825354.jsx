/** Chunk was on 1267 **/
/** chunk id: 825354, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk726521 = require("./726521.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk923915 = require("./923915.js");

function f(e) {
  let {
    widget: t,
    userId: r,
    className: l
  } = e, f = i.useRef(null), g = () => {
    (0, s.G1)(r, t)
  };
  return (0, n.jsx)(a.yRy, {
    targetElementRef: f,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.v2r, {
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, c.Zy)(), t()
        },
        onSelect: () => {},
        "aria-label": u.intl.string(u.t.xpSHSk),
        children: (0, n.jsx)(a.kSQ, {
          children: (0, n.jsx)(a.sNh, {
            id: "flag-widget",
            label: u.intl.string(u.t.D4GvHB),
            action: g,
            color: "danger",
            icon: a.U65
          })
        })
      })
    },
    children: e => {
      var t, r;
      return (0, n.jsx)(a.P3F, (t = function(e) {
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
      }({}, e), r = r = {
        innerRef: f,
        "aria-label": u.intl.string(u.t.xpSHSk),
        className: o()(d.button, l),
        children: (0, n.jsx)(a.xhG, {
          size: "sm",
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}