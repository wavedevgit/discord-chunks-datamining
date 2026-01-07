/** Chunk was on 43342 **/
/** chunk id: 457165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

function l() {
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("10165").then(n.bind(n, 166335));
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