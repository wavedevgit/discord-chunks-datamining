/** Chunk was on 55183 **/
/** chunk id: 265159, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js");

function o() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("38047").then(require.bind(require, 975863));
    return t => {
      var r, i;
      return (0, n.jsx)(e, (r = function(e) {
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
      }({}, t), i = i = {
        source: {
          page: l.ZY5.USER_SETTINGS,
          section: l.jXE.SETTINGS_CUSTOMIZE_PROFILE,
          object: l.qAy.BUTTON_CTA,
          type: l.Qqv.BUY
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }
  })
}