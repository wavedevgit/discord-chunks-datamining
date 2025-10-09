/** Chunk was on web.js **/
/** chunk id: 637445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => l
});
var Chunk955047 = require("./955047.js"),
  Chunk610825 = require("./610825.js"),
  Chunk647438 = require("./647438.js"),
  Chunk861391 = require("./861391.js");
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
  }), [e.children, u, c, d]), _ = (0, o.K)(e, (0, a.useCallback)(e => new(0, r.J)(e, null, f), [f]), f), {
    disabledKeys: p,
    selectionManager: h
  } = (0, i.S)({
    ...e,
    collection: _,
    disabledBehavior: e.disabledBehavior || "selection"
  });
  return {
    collection: _,
    disabledKeys: p,
    selectionManager: h,
    showSelectionCheckboxes: e.showSelectionCheckboxes || false,
    sortDescriptor: null != (t = e.sortDescriptor) ? t : null,
    isKeyboardNavigationDisabled: 0 === _.size || n,
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