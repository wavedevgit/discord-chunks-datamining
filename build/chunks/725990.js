/** Chunk was on web.js **/
/** chunk id: 725990, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => l,
  j: () => c
});
var Chunk709629 = require("./709629.js"),
  Chunk388196 = require("./388196.js"),
  Chunk174651 = require("./174651.js"),
  Chunk792160 = require("./792160.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function l(e, t) {
  let {
    key: n
  } = e, {
    checkboxProps: i
  } = (0, a.U)(e, t);
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
      "aria-label": (0, o.q)(s(i.Z), "@react-aria/table").format("single" === r ? "select" : "selectAll"),
      isSelected: n,
      isDisabled: "multiple" !== r || 0 === e.collection.size || 1 === e.collection.rows.length && "loader" === e.collection.rows[0].type,
      isIndeterminate: !t && !n,
      onChange: () => e.selectionManager.toggleSelectAll()
    }
  }
}