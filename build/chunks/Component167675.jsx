/** Chunk was on 74379 **/
/** chunk id: 167675, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.Yn.DEFAULT,
    [t, f, m] = (0, s.Z)(e, n),
    b = (0, i.e7)([o.ZP], () => o.ZP.disableHideSelfStreamAndVideoConfirmationAlert);
  return t ? (0, r.jsx)(l.S89, {
    id: "self-video-hide",
    label: u.intl.string(u.t.MH8ESU),
    checked: !f,
    action: () => {
      if (b || f) return m(!f);
      (0, l.h7j)(e => {
        var n, t;
        return (0, r.jsx)(a.Z, (n = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({}, e), t = t = {
          type: c.K.VIDEO,
          onConfirm: () => m(!f)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      })
    }
  }) : null
}