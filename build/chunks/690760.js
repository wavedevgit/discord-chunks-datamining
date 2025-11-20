/** Chunk was on 44097 **/
/** chunk id: 690760, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk835473 = require("./835473.js"),
  Chunk350327 = require("./350327.js");

function l(e) {
  var t;
  let n = null == (t = (0, a.uV)().data) ? true : t.map(e => e.application_id),
    l = r.useMemo(() => {
      let t = new Set;
      for (let n of e) t.add(n.applicationId);
      if (null != n)
        for (let e of n) t.add(e);
      return [...t]
    }, [n, e]);
  return (0, i.Z)(l)
}