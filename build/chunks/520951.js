/** Chunk was on 41700 **/
/** chunk id: 520951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk162461 = require("./162461.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk561308 = require("./561308.js");
let c = new Set;

function d(e) {
  let t = (0, i.e7)([a.Z, s.Z], () => {
    let e = s.Z.getDebugImpressionCappingDisabled();
    return !(0, l.wm)("useFilterImpressionCappedContent") || e ? c : a.Z.getImpressionCappedItemIds()
  }, [e]);
  return r.useMemo(() => {
    if (null == e) return {
      entries: e,
      filteredIds: c
    };
    let n = new Set;
    return {
      entries: e.filter(e => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), false)),
      filteredIds: n
    }
  }, [e, t])
}