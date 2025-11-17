/** Chunk was on web.js **/
/** chunk id: 634809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => s
});
var Chunk674279 = require("./674279.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function o(e, t) {
  if (e.size !== t.size) returnfalse;
  for (let n of e)
    if (!t.has(n)) returnfalse;
  returntrue
}

function s(e) {
  let {
    selectionMode: t = "none",
    disallowEmptySelection: n = false,
    allowDuplicateSelectionEvents: s,
    selectionBehavior: c = "toggle",
    disabledBehavior: u = "all"
  } = e, d = (0, a.useRef)(false), [, f] = (0, a.useState)(false), _ = (0, a.useRef)(null), p = (0, a.useRef)(null), [, h] = (0, a.useState)(null), m = (0, a.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]), g = (0, a.useMemo)(() => l(e.defaultSelectedKeys, new(0, r.Y)), [e.defaultSelectedKeys]), [E, b] = (0, i.z)(m, g, e.onSelectionChange), y = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [O, v] = (0, a.useState)(c);
  "replace" === c && "toggle" === O && "object" == typeof E && 0 === E.size && v("replace");
  let I = (0, a.useRef)(c);
  return (0, a.useEffect)(() => {
    c !== I.current && (v(c), I.current = c)
  }, [c]), {
    selectionMode: t,
    disallowEmptySelection: n,
    selectionBehavior: O,
    setSelectionBehavior: v,
    get isFocused() {
      return d.current
    },
    setFocused(e) {
      d.current = e, f(e)
    },
    get focusedKey() {
      return _.current
    },
    get childFocusStrategy() {
      return p.current
    },
    setFocusedKey(e, t = "first") {
      _.current = e, p.current = t, h(e)
    },
    selectedKeys: E,
    setSelectedKeys(e) {
      (s || !o(e, E)) && b(e)
    },
    disabledKeys: y,
    disabledBehavior: u
  }
}

function l(e, t) {
  return e ? "all" === e ? "all" : new(0, r.Y)(e) : t
}