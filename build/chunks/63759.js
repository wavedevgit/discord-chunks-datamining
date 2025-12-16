/** Chunk was on 51333 **/
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
  } = e, [a, o] = r.useState(() => (0, l.a3)(t, n));
  return r.useEffect(() => {
    o((0, l.a3)(t, n));
    let e = Date.now() - t;
    if (e > i.Z.Millis.DAY) return;
    let r = e >= i.Z.Millis.HOUR ? i.Z.Millis.HOUR : i.Z.Millis.MINUTE,
      a = setInterval(() => {
        o((0, l.a3)(t, n))
      }, r, r - e % r);
    return () => clearInterval(a)
  }, [t, n]), a
}