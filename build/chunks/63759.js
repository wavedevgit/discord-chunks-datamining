/** Chunk was on 83772 **/
/** chunk id: 63759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk70956 = require("./70956.js"),
  Chunk178480 = require("./178480.js");

function s(e) {
  let {
    timestamp: t,
    abbreviated: n = true
  } = e, [s, a] = r.useState(() => (0, i.a3)(t, n));
  return r.useEffect(() => {
    a((0, i.a3)(t, n));
    let e = Date.now() - t;
    if (e > l.Z.Millis.DAY) return;
    let r = e >= l.Z.Millis.HOUR ? l.Z.Millis.HOUR : l.Z.Millis.MINUTE,
      s = setInterval(() => {
        a((0, i.a3)(t, n))
      }, r, r - e % r);
    return () => clearInterval(s)
  }, [t, n]), s
}