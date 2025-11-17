/** Chunk was on 8965 **/
/** chunk id: 623483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  return (0, r.jsx)(i.sNh, {
    id: "delete-channel",
    label: o.intl.string(o.t.Jg0R7Q),
    subtext: o.intl.string(o.t["+mNKM9"]),
    color: "danger",
    action: () => (0, i.ZDy)(async () => {
      let {
        default: t
      } = await n.e("37720").then(n.bind(n, 357632));
      return n => {
        var i, o;
        return (0, r.jsx)(t, (i = function(e) {
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
        }({}, n), o = o = {
          onConfirm: () => {
            n.onClose(), (0, l.xh)(e.id)
          },
          channel: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    })
  })
}