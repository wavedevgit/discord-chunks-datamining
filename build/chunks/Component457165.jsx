/** Chunk was on 52344 **/
/** chunk id: 457165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

function l() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("10165").then(require.bind(require, 166335));
    return t => (0, r.jsx)(e, function(e) {
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
      analyticsSource: o.Sbl.VOICE_FILTERS,
      analyticsLocation: {
        section: o.jXE.VOICE_FILTERS_UPSELL_MODAL,
        object: o.qAy.BUTTON_CTA
      }
    }, t))
  })
}