/** Chunk was on 1272 **/
/** chunk id: 230487, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk740492 = require("./740492.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk258220 = require("./258220.jsx"),
  Chunk981631 = require("./981631.js");
let d = "activity-hardware-acceleration-modal";

function p(e) {
  l.ZP.disableActivityHardwareAccelerationPrompt || !s.isPlatformEmbedded || o.ZP.getEnableHardwareAcceleration() || (0, i.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 258220));
    return n => (0, r.jsx)(t, function(e) {
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
    }({
      applicationId: e
    }, n))
  }, {
    modalKey: d,
    onCloseRequest: () => {
      a.default.track(u.rMx.MODAL_DISMISSED, {
        type: c.r
      }), (0, i.Mr3)(d)
    }
  })
}