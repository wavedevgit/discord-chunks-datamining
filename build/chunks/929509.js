/** Chunk was on web.js **/
/** chunk id: 929509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk99066 = require("./99066.js"),
  Chunk435738 = require("./435738.js"),
  Chunk99753 = require("./99753.js"),
  Chunk583846 = require("./583846.js");
let c = new Set;

function u(e) {
  let t = (0, i.bG)([s.A, o.A], () => {
    let e = o.A.getDebugImpressionCappingDisabled();
    return !(0, a.sE)("useFilterImpressionCappedContent") || e ? c : s.A.getImpressionCappedItemIds()
  }, [e]);
  return r.useMemo(() => {
    if (null == e) return {
      entries: e,
      filteredIds: c
    };
    let n = new Set;
    return {
      entries: e.filter(e => !!(0, l.JM)(e) || !t.has(e.id) || (n.add(e.id), false)),
      filteredIds: n
    }
  }, [e, t])
}