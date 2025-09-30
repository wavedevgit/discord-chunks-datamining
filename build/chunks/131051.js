/** Chunk was on 9452 **/
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
  let n = i.useMemo(() => (0, u.Ql)(e), [e]),
    a = (0, r.Pt)(),
    {
      searchResults: o
    } = (0, l.F)(),
    c = new Set;
  for (let e of o) {
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