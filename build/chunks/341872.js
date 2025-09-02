/** Chunk was on web.js **/
/** chunk id: 341872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
});
var Chunk217249 = require("./217249.js"),
  Chunk743994 = require("./743994.js"),
  Chunk753125 = require("./753125.js"),
  Chunk506523 = require("./506523.js"),
  Chunk81658 = require("./81658.js"),
  Chunk359356 = require("./359356.js"),
  Chunk72748 = require("./72748.js"),
  Chunk554797 = require("./554797.js");

function d(e, t, n) {
  let {
    isVirtualized: d,
    keyboardDelegate: f,
    layoutDelegate: _,
    onAction: p,
    disallowTypeAhead: h,
    linkBehavior: m = "action",
    keyboardNavigationBehavior: g = "arrow",
    escapeKeyBehavior: E = "clearSelection",
    shouldSelectOnPressUp: b
  } = e;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let {
    listProps: y
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
    autoFocus: e.autoFocus,
    escapeKeyBehavior: E
  }), O = (0, i.Me)(e.id);
  r.Co.set(t, {
    id: O,
    onAction: p,
    linkBehavior: m,
    keyboardNavigationBehavior: g,
    shouldSelectOnPressUp: b
  });
  let v = (0, s.j)({
      selectionManager: t.selectionManager,
      hasItemActions: !!p
    }),
    I = (0, c.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    S = (0, a.z)(e, {
      labelable: true
    }),
    T = (0, o.d)(S, {
      role: "grid",
      id: O,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : true
    }, 0 === t.collection.size ? {
      tabIndex: I ? false : 0
    } : y, v);
  return d && (T["aria-rowcount"] = t.collection.size, T["aria-colcount"] = 1), (0, l.B)({}, t), {
    gridProps: T
  }
}