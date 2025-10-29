/** Chunk was on 6915 **/
/** chunk id: 167675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740492 = require("./740492.js"),
  Chunk27584 = require("./27584.js"),
  Chunk295510 = require("./295510.jsx"),
  Chunk394059 = require("./394059.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : u.Yn.DEFAULT,
    [n, p, f] = (0, a.Z)(e, t),
    b = (0, l.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, r.jsx)(i.S89, {
    id: "self-video-hide",
    label: d.intl.string(d.t.MH8ESU),
    checked: !p,
    action: () => {
      if (b || p) return f(!p);
      (0, i.h7j)(e => {
        var t, n;
        return (0, r.jsx)(c.Z, (t = function(e) {
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
          type: s.K.VIDEO,
          onConfirm: () => f(!p)
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