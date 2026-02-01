/** Chunk was on 9207 **/
/** chunk id: 195667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk899847 = require("./899847.js"),
  Chunk842144 = require("./842144.js");

function s(e, t, n, s) {
  var a, o;
  let {
    comparator: c = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, d = r => {
    var i, s;
    return n(null == (s = l.A.getSettings(r)) || null == (i = s[e]) ? true : i[t])
  };
  return {
    getControlledSetting: d,
    updateControlledSetting: (a = d, o = (n, r) => null == n ? Promise.resolve() : i.Ay.updateTeenSettings(n, e, e => {
      e[t] = s(r, e[t])
    }), function(e, t) {
      return "function" == typeof t ? o(e, t(a(e))) : o(e, t)
    }),
    useControlledSetting: e => (0, r.bG)([l.A], () => d(e), [e], c)
  }
}