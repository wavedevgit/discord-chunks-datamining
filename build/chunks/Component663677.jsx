/** Chunk was on 78376 **/
/** chunk id: 663677, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk562519 = require("./562519.js");
let s = 5 * require("./927813.js").A.Millis.DAY,
  a = new Chunk562519.A("overlay_survey_timestamps");

function o(e, t) {
  let l, o;
  l = Date.now(), null != (o = Array.from(a.values()).reduce((e, t) => Math.max(e, t), 0)) && l - o < s || Array.from(a.values()).filter(e => {
    let t = new Date(e);
    return t.getMonth() === new Date().getMonth() && t.getFullYear() === new Date().getFullYear()
  }).length >= 3 || (0, i.mMO)(async () => {
    let i, {
      default: l
    } = await n.e("82318").then(n.bind(n, 387101));
    return i = Date.now(), a.add(i), n => {
      var i, s;
      return (0, r.jsx)(l, (i = function(e) {
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
      }({}, n), s = s = {
        clientSettingType: e,
        gameId: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
}