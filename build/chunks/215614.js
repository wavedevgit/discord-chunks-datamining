/** Chunk was on web.js **/
/** chunk id: 215614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
});
var Chunk588225 = require("./588225.js"),
  Chunk752689 = require("./752689.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk558466 = require("./558466.js"),
  Chunk199562 = require("./199562.js"),
  Chunk221721 = require("./221721.js"),
  Chunk306290 = require("./306290.js");

function d(e, t, n) {
  let {
    isVirtualized: d,
    keyboardDelegate: f,
    layoutDelegate: p,
    onAction: _,
    disallowTypeAhead: m,
    linkBehavior: h = "action",
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
    layoutDelegate: p,
    isVirtualized: d,
    selectOnFocus: "replace" === t.selectionManager.selectionBehavior,
    shouldFocusWrap: e.shouldFocusWrap,
    linkBehavior: h,
    disallowTypeAhead: m,
    autoFocus: e.autoFocus,
    escapeKeyBehavior: E
  }), O = (0, i.Me)(e.id);
  r.Co.set(t, {
    id: O,
    onAction: _,
    linkBehavior: h,
    keyboardNavigationBehavior: g,
    shouldSelectOnPressUp: b
  });
  let v = (0, s.j)({
      selectionManager: t.selectionManager,
      hasItemActions: !!_
    }),
    S = (0, c.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    I = (0, a.z)(e, {
      labelable: true
    }),
    T = (0, o.d)(I, {
      role: "grid",
      id: O,
      "aria-multiselectable": "multiple" === t.selectionManager.selectionMode ? "true" : true
    }, 0 === t.collection.size ? {
      tabIndex: S ? false : 0
    } : y, v);
  return d && (T["aria-rowcount"] = t.collection.size, T["aria-colcount"] = 1), (0, l.B)({}, t), {
    gridProps: T
  }
}