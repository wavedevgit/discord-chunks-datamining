/** Chunk was on web.js **/
/** chunk id: 873291, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => h
});
var Chunk403992 = require("./403992.js"),
  Chunk966209 = require("./966209.js"),
  Chunk227510 = require("./227510.js"),
  Chunk406985 = require("./406985.js"),
  Chunk723906 = require("./723906.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js"),
  Chunk74172 = require("./74172.js"),
  Chunk853590 = require("./853590.js"),
  Chunk510281 = require("./510281.js"),
  Chunk564949 = require("./564949.js");

function h(e, t, n) {
  let {
    isVirtualized: h,
    disallowTypeAhead: m,
    keyboardDelegate: g,
    focusMode: E,
    scrollRef: y,
    getRowText: b,
    onRowAction: O,
    onCellAction: v,
    escapeKeyBehavior: A = "clearSelection",
    shouldSelectOnPressUp: I
  } = e, {
    selectionManager: S
  } = t;
  e["aria-label"] || e["aria-labelledby"] || console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let T = (0, d.Q)({
      usage: "search",
      sensitivity: "base"
    }),
    {
      direction: C
    } = (0, f.Y)(),
    N = t.selectionManager.disabledBehavior,
    R = (0, u.useMemo)(() => g || new(0, r.J)({
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      disabledBehavior: N,
      ref: n,
      direction: C,
      collator: T,
      focusMode: E
    }), [g, t.collection, t.disabledKeys, N, n, C, T, E]),
    {
      collectionProps: w
    } = (0, _.y)({
      ref: n,
      selectionManager: S,
      keyboardDelegate: R,
      isVirtualized: h,
      scrollRef: y,
      disallowTypeAhead: m,
      escapeKeyBehavior: A
    }),
    P = (0, o.Bi)(e.id);
  i.B.set(t, {
    keyboardDelegate: R,
    actions: {
      onRowAction: O,
      onCellAction: v
    },
    shouldSelectOnPressUp: I
  });
  let D = (0, s.m)({
      selectionManager: S,
      hasItemActions: !!(O || v)
    }),
    x = (0, l.$)(e, {
      labelable: true
    }),
    L = (0, u.useCallback)(e => {
      if (S.isFocused) {
        e.currentTarget.contains(e.target) || S.setFocused(false);
        return
      }
      e.currentTarget.contains(e.target) && S.setFocused(true)
    }, [S]),
    j = (0, u.useMemo)(() => ({
      onBlur: w.onBlur,
      onFocus: L
    }), [L, w.onBlur]),
    M = (0, p.$)(n, {
      isDisabled: 0 !== t.collection.size
    }),
    k = (0, c.v)(x, {
      role: "grid",
      id: P,
      "aria-multiselectable": "multiple" === S.selectionMode ? "true" : true
    }, t.isKeyboardNavigationDisabled ? j : w, 0 === t.collection.size && {
      tabIndex: M ? false : 0
    } || true, D);
  return h && (k["aria-rowcount"] = t.collection.size, k["aria-colcount"] = t.collection.columnCount), (0, a.H)({
    getRowText: b
  }, t), {
    gridProps: k
  }
}