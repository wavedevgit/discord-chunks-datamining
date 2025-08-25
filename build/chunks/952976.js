/** Chunk was on web.js **/
/** chunk id: 952976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => s
});
var Chunk240054 = require("./240054.js"),
  Chunk379955 = require("./379955.js"),
  Chunk647438 = require("./647438.js");

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
  } = e, d = (0, o.useRef)(false), [, f] = (0, o.useState)(false), _ = (0, o.useRef)(null), p = (0, o.useRef)(null), [, h] = (0, o.useState)(null), m = (0, o.useMemo)(() => l(e.selectedKeys), [e.selectedKeys]), g = (0, o.useMemo)(() => l(e.defaultSelectedKeys, new(0, r.Y)), [e.defaultSelectedKeys]), [E, b] = (0, i.z)(m, g, e.onSelectionChange), y = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [O, v] = (0, o.useState)(c);
  "replace" === c && "toggle" === O && "object" == typeof E && 0 === E.size && v("replace");
  let I = (0, o.useRef)(c);
  return (0, o.useEffect)(() => {
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
      (s || !a(e, E)) && b(e)
    },
    disabledKeys: y,
    disabledBehavior: u
  }
}

function l(e, t) {
  return e ? "all" === e ? "all" : new(0, r.Y)(e) : t
}