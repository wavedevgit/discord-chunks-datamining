/** Chunk was on 11776 **/
/** chunk id: 825354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk86419 = require("./86419.js"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    widgetType: t
  } = e, n = l.useRef(null), s = () => {
    (0, a.y8)(t)
  };
  return (0, r.jsx)(i.yRy, {
    targetElementRef: n,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(i.v2r, {
        navId: "user-profile-widget-context-menu",
        onClose: () => {
          (0, o.Zy)(), t()
        },
        onSelect: () => {},
        "aria-label": c.intl.string(c.t.xpSHSk),
        children: (0, r.jsx)(i.kSQ, {
          children: (0, r.jsx)(i.sNh, {
            id: "remove-widget",
            label: c.intl.string(c.t.Mm07YW),
            action: s,
            color: "danger",
            icon: i.XHJ
          })
        })
      })
    },
    children: e => {
      var t, l;
      return (0, r.jsx)(i.hU, (t = function(e) {
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
      }({}, e), l = l = {
        buttonRef: n,
        icon: i.xhG,
        variant: "secondary",
        "aria-label": c.intl.string(c.t.xpSHSk),
        size: "sm"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    }
  })
}