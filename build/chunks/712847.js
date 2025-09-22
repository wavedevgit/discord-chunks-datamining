/** Chunk was on web.js **/
/** chunk id: 712847, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
});
var Chunk203038 = require("./203038.js"),
  Chunk795074 = require("./795074.js"),
  Chunk436242 = require("./436242.js"),
  Chunk506364 = require("./506364.js"),
  Chunk676641 = require("./676641.js"),
  Chunk488595 = require("./488595.js"),
  Chunk135002 = require("./135002.js"),
  Chunk662147 = require("./662147.js");

function d(e, t, n) {
  let {
    isVirtualized: d,
    keyboardDelegate: f,
    layoutDelegate: _,
    onAction: p,
    disallowTypeAhead: h,
    linkBehavior: m = "action",
    keyboardNavigationBehavior: g = "arrow"
  } = e;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let {
    listProps: E
  } = (0, u._)({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: f,
    layoutDelegate: _,
    isVirtualized: d,
    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: m,
    disallowTypeAhead: h,
    autoFocus: e.autoFocus
  }), b = (0, i.Me)(e.id);
  r.Co.set(t, {
    id: b,
    onAction: p,
    linkBehavior: m,
    keyboardNavigationBehavior: g
  });
  let y = (0, s.j)({
      selectionManager: t.selectionManager,
      hasItemActions: !!p
    }),
    O = (0, c.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    v = (0, a.z)(e, {
      labelable: true
    }),
    I = (0, o.d)(v, {
      role: "grid",
      id: b,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : true
    }, 0 === t.collection.size ? {
      tabIndex: O ? false : 0
    } : E, y);
  return d && (I["aria-rowcount"] = t.collection.size, I["aria-colcount"] = 1), (0, l.B)({}, t), {
    gridProps: I
  }
}