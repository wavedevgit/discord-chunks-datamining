/** Chunk was on 27978 **/
/** chunk id: 3570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => s,
  s: () => c
});
var Chunk536285 = require("./536285.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let s = Chunk358085.isPlatformEmbedded ? Chunk981631.dG4 : (e, t) => {
    if (!(0, i.DB)()) return r.default.request(o.Etm.DEEP_LINK, {
      type: e,
      params: t
    })
  },
  c = Chunk358085.isPlatformEmbedded ? Chunk981631.dG4 : (e, t) => {
    if (!l.default.isAuthenticated()) {
      var n, r;
      return s(e, (n = function(e) {
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
      }({}, t || {}), r = r = {
        fingerprint: l.default.getFingerprint()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  }