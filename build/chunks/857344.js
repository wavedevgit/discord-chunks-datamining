/** Chunk was on web.js **/
/** chunk id: 857344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => l,
  w: () => c
});
var Chunk172534 = require("./172534.js"),
  Chunk486507 = require("./486507.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780667 = require("./780667.js");
let s = {
  ascending: "descending",
  descending: "ascending"
};

function l(e) {
  var t;
  let [n, l] = (0, a.useState)(false), {
    selectionMode: c = "none",
    showSelectionCheckboxes: u,
    showDragButtons: d
  } = e, f = (0, a.useMemo)(() => ({
    showSelectionCheckboxes: u && "none" !== c,
    showDragButtons: d,
    selectionMode: c,
    columns: []
  }), [e.children, u, c, d]), p = (0, o.K)(e, (0, a.useCallback)(e => new(0, r.J)(e, null, f), [f]), f), {
    disabledKeys: _,
    selectionManager: h
  } = (0, i.S)({
    ...e,
    collection: p,
    disabledBehavior: e.disabledBehavior || "selection"
  });
  return {
    collection: p,
    disabledKeys: _,
    selectionManager: h,
    showSelectionCheckboxes: e.showSelectionCheckboxes || false,
    sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
    isKeyboardNavigationDisabled: 0 === p.size || n,
    setKeyboardNavigationDisabled: l,
    sort(t, n) {
      var r, i;
      null == (i = e.onSortChange) || i.call(e, {
        column: t,
        direction: null != n ? n : (null == (r = e.sortDescriptor) ? true : r.column) === t ? s[e.sortDescriptor.direction] : "ascending"
      })
    }
  }
}

function c(e, t) {
  let n = (0, a.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]),
    r = e.selectionManager.withCollection(n);
  return {
    ...e,
    collection: n,
    selectionManager: r
  }
}