/** Chunk was on 56848 **/
/** chunk id: 690760, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk835473 = require("./835473.js"),
  Chunk350327 = require("./350327.js");

function l(e) {
  var t;
  let r = null == (t = (0, a.uV)().data) ? true : t.map(e => e.application_id),
    l = n.useMemo(() => {
      let t = new Set;
      for (let r of e) t.add(r.applicationId);
      if (null != r)
        for (let e of r) t.add(e);
      return [...t]
    }, [r, e]);
  return (0, i.Z)(l)
}