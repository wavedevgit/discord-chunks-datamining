/** Chunk was on web.js **/
/** chunk id: 982439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => a
});
var Chunk224507 = require("./224507.js"),
  Chunk788951 = require("./788951.js");

function a(e, t, n) {
  var a;
  let {
    gridCellProps: s,
    isPressed: o
  } = (0, i.Q)(e, t, n), l = null == (a = e.node.column) ? true : a.key;
  return null != l && t.collection.rowHeaderColumnKeys.has(l) && (s.role = "rowheader", s.id = (0, r.un)(t, e.node.parentKey, l)), {
    gridCellProps: s,
    isPressed: o
  }
}