/** Chunk was on 21738 **/
/** chunk id: 334595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk964404 = require("./964404.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk845187 = require("./845187.jsx"),
  Chunk652215 = require("./652215.js");
let d = "activity-hardware-acceleration-modal";

function p(e) {
  l.Ay.disableActivityHardwareAccelerationPrompt || !s.isPlatformEmbedded || o.Ay.getEnableHardwareAcceleration() || (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 845187));
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
      a.default.track(u.HAw.MODAL_DISMISSED, {
        type: c.a
      }), (0, i.OoC)(d)
    }
  })
}