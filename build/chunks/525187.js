/** Chunk was on web.js **/
/** chunk id: 525187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f,
  L: () => d
});
var Chunk687366 = require("./687366.js"),
  Chunk436773 = require("./436773.js"),
  Chunk933492 = require("./933492.js"),
  Chunk897846 = require("./897846.js"),
  Chunk647438 = require("./647438.js"),
  Chunk893600 = require("./893600.js"),
  Chunk71734 = require("./71734.js"),
  Chunk960095 = require("./960095.js");
let d = new WeakMap;

function f(e, t, n) {
  let {
    direction: f
  } = (0, u.j)(), _ = e.keyboardDelegate || new(0, o.d)({
    collection: t.collection,
    ref: n,
    orientation: "horizontal",
    direction: f,
    disabledKeys: t.disabledKeys,
    disabledBehavior: t.selectionManager.disabledBehavior
  }), {
    labelProps: p,
    fieldProps: h,
    descriptionProps: m,
    errorMessageProps: g
  } = (0, l.U)({
    ...e,
    labelElementType: "span"
  }), {
    gridProps: E
  } = (0, r.c)({
    ...e,
    ...h,
    keyboardDelegate: _,
    shouldFocusWrap: true,
    linkBehavior: "override",
    keyboardNavigationBehavior: "tab"
  }, t, n), [b, y] = (0, s.useState)(false), {
    focusWithinProps: O
  } = (0, c.L)({
    onFocusWithinChange: y
  }), v = (0, i.z)(e), I = (0, s.useRef)(t.collection.size);
  return (0, s.useEffect)(() => {
    n.current && I.current > 0 && 0 === t.collection.size && b && n.current.focus(), I.current = t.collection.size
  }, [t.collection.size, b, n]), d.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: (0, a.d)(E, v, {
      role: t.collection.size ? "grid" : null,
      "aria-atomic": false,
      "aria-relevant": "additions",
      "aria-live": b ? "polite" : "off",
      ...O,
      ...h
    }),
    labelProps: p,
    descriptionProps: m,
    errorMessageProps: g
  }
}