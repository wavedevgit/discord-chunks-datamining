/** Chunk was on web.js **/
/** chunk id: 547576, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => o
});
var Chunk199407 = require("./199407.js"),
  Chunk723906 = require("./723906.js"),
  Chunk47276 = require("./47276.js");

function s(e) {
  return e && e.__esModule ? e.default : e
}

function o(e, t) {
  let {
    key: n
  } = e, o = t.selectionManager, l = (0, i.Bi)(), c = !t.selectionManager.canSelectItem(n), u = t.selectionManager.isSelected(n), d = () => o.toggleSelection(n);
  return {
    checkboxProps: {
      id: l,
      "aria-label": (0, a.o)(s(r.A), "@react-aria/grid").format("select"),
      isSelected: u,
      isDisabled: c,
      onChange: d
    }
  }
}