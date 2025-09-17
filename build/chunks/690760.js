/** Chunk was on 30355 **/
/** chunk id: 690760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk835473 = require("./835473.js"),
  Chunk350327 = require("./350327.js");

function a(e) {
  let t = (0, i.oz)().data,
    n = r.useMemo(() => {
      let n = new Set;
      for (let t of e) n.add(t.applicationId);
      if (null != t)
        for (let e of t) n.add(e);
      return [...n]
    }, [t, e]);
  (0, l.Z)(n)
}