/** Chunk was on 81985 **/
/** chunk id: 66556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk622822 = require("./622822.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk91159 = require("./91159.js"),
  Chunk593130 = require("./593130.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633621 = require("./633621.js");

function p(e) {
  let {
    channel: t
  } = e, [n, p] = i.useState(false), f = i.useRef(null), h = (0, a.$5)(t), g = i.useCallback(() => {
    p(false)
  }, []), m = i.useCallback(() => {
    n || (0, s.U4)("Popout"), p(!n)
  }, [n]);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: f,
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    shouldShow: n,
    onRequestClose: g,
    renderPopout: function() {
      return (0, r.jsx)(l.VqE, {
        children: (0, r.jsx)(c.Z, {
          className: d.browser,
          channel: t,
          onClose: g,
          context: "popout"
        })
      })
    },
    clickTrap: true,
    children: (e, t) => {
      var n, i;
      let {
        isShown: a
      } = t;
      return (0, r.jsx)(o.JO, (n = function(e) {
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
      }({}, e), i = i = {
        ref: f,
        className: d.icon,
        onClick: m,
        icon: l.or_,
        "aria-label": u.intl.string(u.t.B2panI),
        tooltip: a ? null : u.intl.string(u.t.B2panI),
        disabled: h,
        selected: a
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}