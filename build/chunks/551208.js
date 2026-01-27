/** Chunk was on web.js **/
/** chunk id: 551208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => a
});
var Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");

function a(e) {
  let {
    selectionMode: t = "single",
    disallowEmptySelection: n,
    isDisabled: a = false
  } = e, [o, s] = (0, r.P)((0, i.useMemo)(() => e.selectedKeys ? new Set(e.selectedKeys) : true, [e.selectedKeys]), (0, i.useMemo)(() => e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : new Set, [e.defaultSelectedKeys]), e.onSelectionChange);
  return {
    selectionMode: t,
    isDisabled: a,
    selectedKeys: o,
    setSelectedKeys: s,
    toggleKey(e) {
      let r;
      "multiple" === t ? (r = new Set(o)).has(e) && (!n || r.size > 1) ? r.delete(e) : r.add(e) : r = new Set(o.has(e) && !n ? [] : [e]), s(r)
    },
    setSelected(e, t) {
      t !== o.has(e) && this.toggleKey(e)
    }
  }
}