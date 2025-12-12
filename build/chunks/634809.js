/** Chunk was on web.js **/
/** chunk id: 634809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => s
});
var Chunk674279 = require("./674279.js"),
  Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function a(e, t) {
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
  } = e, d = (0, o.useRef)(false), [, f] = (0, o.useState)(false), p = (0, o.useRef)(null), _ = (0, o.useRef)(null), [, m] = (0, o.useState)(null), h = (0, o.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]), g = (0, o.useMemo)(() => l(e.defaultSelectedKeys, new(0, r.Y)), [e.defaultSelectedKeys]), [E, b] = (0, i.z)(h, g, e.onSelectionChange), y = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [O, v] = (0, o.useState)(c);
  "replace" === c && "toggle" === O && "object" == typeof E && 0 === E.size && v("replace");
  let S = (0, o.useRef)(c);
  return (0, o.useEffect)(() => {
    c !== S.current && (v(c), S.current = c)
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
      return p.current
    },
    get childFocusStrategy() {
      return _.current
    },
    setFocusedKey(e, t = "first") {
      p.current = e, _.current = t, m(e)
    },
    selectedKeys: E,
    setSelectedKeys(e) {
      (s || !a(e, E)) && b(e)
    },
    disabledKeys: y,
    disabledBehavior: u
  }
}

function l(e, t) {
  return e ? "all" === e ? "all" : new(0, r.Y)(e) : t
}