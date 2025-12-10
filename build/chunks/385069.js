/** Chunk was on web.js **/
/** chunk id: 385069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => m
});
var Chunk822433 = require("./822433.js"),
  Chunk17042 = require("./17042.js"),
  Chunk199562 = require("./199562.js"),
  Chunk558466 = require("./558466.js"),
  Chunk752689 = require("./752689.js"),
  Chunk880016 = require("./880016.js"),
  Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js"),
  Chunk852058 = require("./852058.js"),
  Chunk227399 = require("./227399.js"),
  Chunk221721 = require("./221721.js"),
  Chunk587157 = require("./587157.js");

function m(e, t, n) {
  let {
    isVirtualized: m,
    disallowTypeAhead: h,
    keyboardDelegate: g,
    focusMode: E,
    scrollRef: b,
    getRowText: y,
    onRowAction: O,
    onCellAction: v,
    escapeKeyBehavior: S = "clearSelection",
    shouldSelectOnPressUp: I
  } = e, {
    selectionManager: T
  } = t;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let C = (0, d.X)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: A
    } = (0, f.j)(),
    N = t.selectionManager.disabledBehavior,
    P = (0, u.useMemo)(() => g || new(0, r.i)({
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      disabledBehavior: N,
      ref: n,
      direction: A,
      collator: C,
      focusMode: E
    }), [g, t.collection, t.disabledKeys, N, n, A, C, E]),
    {
      collectionProps: R
    } = (0, _.g)({
      ref: n,
      selectionManager: T,
      keyboardDelegate: P,
      isVirtualized: m,
      scrollRef: b,
      disallowTypeAhead: h,
      escapeKeyBehavior: S
    }),
    D = (0, s.Me)(e.id);
  i.B.set(t, {
    keyboardDelegate: P,
    actions: {
      onRowAction: O,
      onCellAction: v
    },
    shouldSelectOnPressUp: I
  });
  let w = (0, o.j)({
      selectionManager: T,
      hasItemActions: !!(O || v)
    }),
    x = (0, l.z)(e, {
      labelable: true
    }),
    L = (0, u.useCallback)(e => {
      if (T.isFocused) {
        e.currentTarget.contains(e.target) || T.setFocused(false);
        return
      }
      e.currentTarget.contains(e.target) && T.setFocused(true)
    }, [T]),
    j = (0, u.useMemo)(() => ({
      onBlur: R.onBlur,
      onFocus: L
    }), [L, R.onBlur]),
    M = (0, p.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    k = (0, c.d)(x, {
      role: "grid",
      id: D,
      "aria-multiselectable": "multiple" === T.selectionMode ? "true" : true
    }, t.isKeyboardNavigationDisabled ? j : R, 0 === t.collection.size && {
      tabIndex: M ? false : 0
    } || true, w);
  return m && (k["aria-rowcount"] = t.collection.size, k["aria-colcount"] = t.collection.columnCount), (0, a.B)({
    getRowText: y
  }, t), {
    gridProps: k
  }
}