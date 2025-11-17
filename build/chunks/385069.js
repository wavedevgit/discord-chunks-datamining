/** Chunk was on web.js **/
/** chunk id: 385069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => h
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
    D = (0, s.Me)(e.id);
  i.B.set(t, {
    keyboardDelegate: R,
    actions: {
      onRowAction: O,
      onCellAction: v
    },
    shouldSelectOnPressUp: T
  });
  let w = (0, o.j)({
      selectionManager: S,
      hasItemActions: !!(O || v)
    }),
    x = (0, l.z)(e, {
      labelable: true
    }),
    L = (0, u.useCallback)(e => {
      if (S.isFocused) {
        e.currentTarget.contains(e.target) || S.setFocused(false);
        return
      }
      e.currentTarget.contains(e.target) && S.setFocused(true)
    }, [S]),
    M = (0, u.useMemo)(() => ({
      onBlur: P.onBlur,
      onFocus: L
    }), [L, P.onBlur]),
    k = (0, _.p)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    j = (0, c.d)(x, {
      role: "grid",
      id: D,
      "aria-multiselectable": "multiple" === S.selectionMode ? "true" : true
    }, t.isKeyboardNavigationDisabled ? M : P, 0 === t.collection.size && {
      tabIndex: k ? false : 0
    } || true, w);
  return h && (j["aria-rowcount"] = t.collection.size, j["aria-colcount"] = t.collection.columnCount), (0, a.B)({
    getRowText: y
  }, t), {
    gridProps: j
  }
}