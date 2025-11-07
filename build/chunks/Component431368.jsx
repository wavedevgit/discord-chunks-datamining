/** Chunk was on 13140 **/
/** chunk id: 431368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740492 = require("./740492.js"),
  Chunk984014 = require("./984014.js"),
  Chunk295510 = require("./295510.jsx"),
  Chunk394059 = require("./394059.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t) {
  let [n, d, p] = (0, o.Z)(e, t), f = (0, i.e7)([a.ZP], () => a.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, r.jsx)(l.S89, {
    id: "self-stream-hide",
    label: u.intl.string(u.t.aol7iW),
    checked: !d,
    action: () => {
      if (f || d) return p(!d);
      (0, l.h7j)(e => {
        var t, n;
        return (0, r.jsx)(s.Z, (t = function(e) {
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
          type: c.K.STREAM,
          onConfirm: () => p(!d)
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
      })
    }
  }) : null
}