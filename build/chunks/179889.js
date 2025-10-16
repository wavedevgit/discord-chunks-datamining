/** Chunk was on web.js **/
/** chunk id: 179889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => s
});
var Chunk303120 = require("./303120.js"),
  Chunk677061 = require("./677061.js"),
  Chunk970185 = require("./970185.js");

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