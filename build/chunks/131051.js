/** Chunk was on 76210 **/
/** chunk id: 131051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk509613 = require("./509613.js"),
  Chunk801318 = require("./801318.js");

function u(e, t) {
  let n = l.useMemo(() => (0, s.Ql)(e), [e]),
    u = (0, i.Pt)(),
    {
      searchResults: a
    } = (0, r.E)(),
    c = new Set;
  for (let e of a) {
    let t = e;
    for (; null != t;) {
      var d;
      let e = null == (d = u[t]) ? true : d.parent;
      if (null == e) {
        c.add(t);
        break
      }
      t = e
    }
  }
  return (0, o.Z)(n, t, c)
}