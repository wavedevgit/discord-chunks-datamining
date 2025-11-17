/** Chunk was on web.js **/
/** chunk id: 791357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk806262 = require("./806262.js"),
  Chunk752689 = require("./752689.js"),
  Chunk218769 = require("./218769.js");

function o(e) {
  return e && e.__esModule ? e.default : e
}

function s(e, t) {
  let {
    key: n
  } = e, s = t.selectionManager, l = (0, i.Me)(), c = !t.selectionManager.canSelectItem(n), u = t.selectionManager.isSelected(n), d = () => s.toggleSelection(n);
  return {
    checkboxProps: {
      id: l,
      "aria-label": (0, a.q)(o(r.Z), "@react-aria/grid").format("select"),
      isSelected: u,
      isDisabled: c,
      onChange: d
    }
  }
}