/** Chunk was on 26775 **/
/** chunk id: 167675, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740492 = require("./740492.js"),
  Chunk27584 = require("./27584.js"),
  Chunk295510 = require("./295510.jsx"),
  Chunk394059 = require("./394059.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.Yn.DEFAULT,
    [r, b, p] = (0, c.Z)(e, t),
    y = (0, o.e7)([l.ZP], () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return r ? (0, n.jsx)(i.S89, {
    id: "self-video-hide",
    label: f.intl.string(f.t.MH8ESU),
    checked: !b,
    action: () => {
      if (y || b) return p(!b);
      (0, i.h7j)(e => {
        var t, r;
        return (0, n.jsx)(a.Z, (t = function(e) {
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
          type: u.K.VIDEO,
          onConfirm: () => p(!b)
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
      })
    }
  }) : null
}