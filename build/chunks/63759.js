/** Chunk was on 83772 **/
/** chunk id: 63759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk70956 = require("./70956.js"),
  Chunk178480 = require("./178480.js");

function a(e) {
  let {
    timestamp: t,
    abbreviated: n = true
  } = e, [a, s] = r.useState(() => (0, i.a3)(t, n));
  return r.useEffect(() => {
    s((0, i.a3)(t, n));
    let e = Date.now() - t;
    if (e > l.Z.Millis.DAY) return;
    let r = e >= l.Z.Millis.HOUR ? l.Z.Millis.HOUR : l.Z.Millis.MINUTE,
      a = setInterval(() => {
        s((0, i.a3)(t, n))
      }, r, r - e % r);
    return () => clearInterval(a)
  }, [t, n]), a
}