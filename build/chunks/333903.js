/** Chunk was on web.js **/
/** chunk id: 333903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => d
});
var Chunk625557 = require("./625557.js"),
  Chunk723906 = require("./723906.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk406985 = require("./406985.js"),
  Chunk227510 = require("./227510.js"),
  Chunk510281 = require("./510281.js"),
  Chunk869125 = require("./869125.js");

function d(e, t, n) {
  let {
    isVirtualized: d,
    keyboardDelegate: f,
    layoutDelegate: p,
    onAction: _,
    disallowTypeAhead: h,
    linkBehavior: m = "action",
    keyboardNavigationBehavior: g = "arrow",
    escapeKeyBehavior: E = "clearSelection",
    shouldSelectOnPressUp: y
  } = e;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let {
    listProps: b
  } = (0, u.y)({
    selectionManager: t.selectionManager,
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    ref: n,
    keyboardDelegate: f,
    layoutDelegate: p,
    isVirtualized: d,
    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: m,
    disallowTypeAhead: h,
    autoFocus: e.autoFocus,
    escapeKeyBehavior: E
  }), O = (0, i.Bi)(e.id);
  r.nV.set(t, {
    id: O,
    onAction: _,
    linkBehavior: m,
    keyboardNavigationBehavior: g,
    shouldSelectOnPressUp: y
  });
  let v = (0, s.m)({
      selectionManager: t.selectionManager,
      hasItemActions: !!_
    }),
    A = (0, c.$)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    I = (0, a.$)(e, {
      labelable: true
    }),
    S = (0, o.v)(I, {
      role: "grid",
      id: O,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : true
    }, 0 === t.collection.size ? {
      tabIndex: A ? false : 0
    } : b, v);
  return d && (S["aria-rowcount"] = t.collection.size, S["aria-colcount"] = 1), (0, l.H)({}, t), {
    gridProps: S
  }
}