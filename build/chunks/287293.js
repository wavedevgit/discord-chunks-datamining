/** Chunk was on web.js **/
/** chunk id: 287293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => a
});
var Chunk455419 = require("./455419.js"),
  Chunk90809 = require("./90809.js");

function a(e, t, n) {
  var a;
  let {
    gridCellProps: o,
    isPressed: s
  } = (0, i.n)(e, t, n), l = null == (a = e.node.column) ? true : a.key;
  return null != l && t.collection.rowHeaderColumnKeys.has(l) && (o.role = "rowheader", o.id = (0, r.iS)(t, e.node.parentKey, l)), {
    gridCellProps: o,
    isPressed: s
  }
}