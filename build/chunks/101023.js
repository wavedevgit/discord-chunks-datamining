/** Chunk was on web.js **/
/** chunk id: 101023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l,
  j: () => c
});
var Chunk455419 = require("./455419.js"),
  Chunk478906 = require("./478906.js"),
  Chunk791357 = require("./791357.js"),
  Chunk218769 = require("./218769.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function l(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: i
  } = (0, o.U)(e, t);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": `${i.id} ${(0,r.u)(t,n)}`
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
      "aria-label": (0, a.q)(s(i.Z), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: "multiple" !== r || 0 === e.collection.size || 1 === e.collection.rows.length && "loader" === e.collection.rows[0].type,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  }
}