/** Chunk was on 13532 **/
/** chunk id: 3570, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => u,
  s: () => a
});
var Chunk536285 = require("./536285.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let u = Chunk358085.isPlatformEmbedded ? Chunk981631.dG4 : (e, t) => {
    if (!(0, o.DB)()) return n.default.request(i.Etm.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  a = Chunk358085.isPlatformEmbedded ? Chunk981631.dG4 : (e, t) => {
    if (!l.default.isAuthenticated()) {
      var r, n;
      return u(e, (r = function(e) {
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
      }({}, t || {}), n = n = {
        fingerprint: l.default.getFingerprint()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
      }), r))
    }
  }