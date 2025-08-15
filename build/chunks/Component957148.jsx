/** Chunk was on 30202 **/
/** chunk id: 957148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk692114 = require("./692114.js");
let a = 5 * require("./70956.js").Z.Millis.DAY,
  l = new Chunk692114.Z("overlay_survey_timestamps");

function o(e, t) {
  (function() {
    let e = Date.now(),
      t = Array.from(l.values()).reduce((e, t) => Math.max(e, t), 0);
    return null != t && e - t < a
  })() || Array.from(l.values()).filter(e => {
    let t = new Date(e);
    return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
  }).length >= 3 || (0, r.ZDy)(async () => {
    let {
      default: r
    } = await n.e("20114").then(n.bind(n, 536920)), s = Date.now();
    return l.add(s), n => {
      var s, a;
      return (0, i.jsx)(r, (s = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, n), a = a = {
        clientSettingType: e,
        gameId: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e))
      }), s))
    }
  })
}