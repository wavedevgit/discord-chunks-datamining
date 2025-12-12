/** Chunk was on web.js **/
/** chunk id: 287293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
var Chunk455419 = require("./455419.js"),
  Chunk90809 = require("./90809.js");

function o(e, t, n) {
  var o;
  let {
    gridCellProps: a,
    isPressed: s
  } = (0, i.n)(e, t, n), l = null == (o = e.node.column) ? true : o.key;
  return null != l && t.collection.rowHeaderColumnKeys.has(l) && (a.role = "rowheader", a.id = (0, r.iS)(t, e.node.parentKey, l)), {
    gridCellProps: a,
    isPressed: s
  }
}