/** Chunk was on 83759 **/
/** chunk id: 549973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk927813 = require("./927813.js"),
  Chunk995273 = require("./995273.js");

function a(e) {
  let {
    timestamp: t,
    abbreviated: n = true
  } = e, [a, o] = r.useState(() => (0, i.jb)(t, n));
  return r.useEffect(() => {
    o((0, i.jb)(t, n));
    let e = Date.now() - t;
    if (e > l.A.Millis.DAY) return;
    let r = e >= l.A.Millis.HOUR ? l.A.Millis.HOUR : l.A.Millis.MINUTE,
      a = setInterval(() => {
        o((0, i.jb)(t, n))
      }, r, r - e % r);
    return () => clearInterval(a)
  }, [t, n]), a
}