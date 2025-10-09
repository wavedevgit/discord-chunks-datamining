/** Chunk was on web.js **/
/** chunk id: 100924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => h
});
var Chunk900342 = require("./900342.js"),
  Chunk82462 = require("./82462.js"),
  Chunk488436 = require("./488436.js"),
  Chunk371268 = require("./371268.js"),
  Chunk39807 = require("./39807.js"),
  Chunk436773 = require("./436773.js"),
  Chunk586235 = require("./586235.js"),
  Chunk647438 = require("./647438.js"),
  Chunk162004 = require("./162004.js"),
  Chunk960095 = require("./960095.js"),
  Chunk603419 = require("./603419.js"),
  Chunk27993 = require("./27993.js");

function h(e, t, n) {
  let {
    isVirtualized: h,
    disallowTypeAhead: m,
    keyboardDelegate: g,
    focusMode: E,
    scrollRef: b,
    getRowText: y,
    onRowAction: O,
    onCellAction: v,
    escapeKeyBehavior: I = "clearSelection",
    shouldSelectOnPressUp: T
  } = e, {
    selectionManager: S
  } = t;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let A = (0, d.X)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: C
    } = (0, f.j)(),
    N = t.selectionManager.disabledBehavior,
    R = (0, u.useMemo)(() => g || new(0, r.i)({
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      disabledBehavior: N,
      ref: n,
      direction: C,
      collator: A,
      focusMode: E
    }), [g, t.collection, t.disabledKeys, N, n, C, A, E]),
    {
      collectionProps: P
    } = (0, p.g)({
      ref: n,
      selectionManager: S,
      keyboardDelegate: R,
      isVirtualized: h,
      scrollRef: b,
      disallowTypeAhead: m,
      escapeKeyBehavior: I
    }),
    w = (0, s.Me)(e.id);
  i.B.set(t, {
    keyboardDelegate: R,
    actions: {
      onRowAction: O,
      onCellAction: v
    },
    shouldSelectOnPressUp: T
  });
  let D = (0, o.j)({
      selectionManager: S,
      hasItemActions: !!(O || v)
    }),
    L = (0, l.z)(e, {
      labelable: true
    }),
    x = (0, u.useCallback)(e => {
      if (S.isFocused) {
        e.currentTarget.contains(e.target) || S.setFocused(false);
        return
      }
      e.currentTarget.contains(e.target) && S.setFocused(true)
    }, [S]),
    M = (0, u.useMemo)(() => ({
      onBlur: P.onBlur,
      onFocus: x
    }), [x, P.onBlur]),
    j = (0, _.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    k = (0, c.d)(L, {
      role: "grid",
      id: w,
      "aria-multiselectable": "multiple" === S.selectionMode ? "true" : true
    }, t.isKeyboardNavigationDisabled ? M : P, 0 === t.collection.size && {
      tabIndex: j ? false : 0
    } || true, D);
  return h && (k["aria-rowcount"] = t.collection.size, k["aria-colcount"] = t.collection.columnCount), (0, a.B)({
    getRowText: y
  }, t), {
    gridProps: k
  }
}