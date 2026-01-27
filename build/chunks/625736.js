/** Chunk was on web.js **/
/** chunk id: 625736, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => l,
  q: () => c
});
var Chunk224507 = require("./224507.js"),
  Chunk825733 = require("./825733.js"),
  Chunk547576 = require("./547576.js"),
  Chunk47276 = require("./47276.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function l(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: i
  } = (0, a.b)(e, t);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": `${i.id} ${(0,r.VJ)(t,n)}`
    }
  }
}

function c(e) {
  let {
    isEmpty: t,
    isSelectAll: n,
    selectionMode: r
  } = e.selectionManager;
  return {
    checkboxProps: {
      "aria-label": (0, o.o)(s(i.A), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: "multiple" !== r || 0 === e.collection.size || 1 === e.collection.rows.length && "loader" === e.collection.rows[0].type,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  }
}