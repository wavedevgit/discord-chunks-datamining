/** Chunk was on 31748 **/
/** chunk id: 336060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js");

function a() {
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("90617").then(n.bind(n, 663072));
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
      analyticsSource: i.ThZ.VOICE_FILTERS,
      analyticsLocation: {
        section: i.JJy.VOICE_FILTERS_UPSELL_MODAL,
        object: i.ZSU.BUTTON_CTA
      }
    }, t))
  })
}