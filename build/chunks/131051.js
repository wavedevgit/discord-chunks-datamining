/** Chunk was on 47129 **/
/** chunk id: 131051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk509613 = require("./509613.js"),
  Chunk801318 = require("./801318.js");

function a(e, t) {
  let n = r.useMemo(() => (0, o.Ql)(e), [e]),
    a = (0, l.Pt)(),
    {
      searchResults: u
    } = (0, i.E)(),
    c = new Set;
  for (let e of u) {
    let t = e;
    for (; null != t;) {
      var d;
      let e = null == (d = a[t]) ? true : d.parent;
      if (null == e) {
        c.add(t);
        break
      }
      t = e
    }
  }
  return (0, s.Z)(n, t, c)
}