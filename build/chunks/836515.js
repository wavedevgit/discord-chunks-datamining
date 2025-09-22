/** Chunk was on web.js **/
/** chunk id: 836515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => f,
  L: () => d
});
var Chunk436242 = require("./436242.js"),
  Chunk506364 = require("./506364.js"),
  Chunk840810 = require("./840810.js"),
  Chunk647438 = require("./647438.js"),
  Chunk128643 = require("./128643.js"),
  Chunk764075 = require("./764075.js"),
  Chunk712847 = require("./712847.js"),
  Chunk578206 = require("./578206.js");
let d = new WeakMap;

function f(e, t, n) {
  let {
    direction: f
  } = (0, u.j)(), _ = e.keyboardDelegate || new(0, a.d)({
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
  } = (0, s.U)({
    ...e,
    labelElementType: "span"
  }), {
    gridProps: E
  } = (0, c.c)({
    ...e,
    ...h,
    keyboardDelegate: _,
    shouldFocusWrap: true,
    linkBehavior: "override"
  }, t, n), [b, y] = (0, o.useState)(false), {
    focusWithinProps: O
  } = (0, l.L)({
    onFocusWithinChange: y
  }), v = (0, r.z)(e), I = (0, o.useRef)(t.collection.size);
  return (0, o.useEffect)(() => {
    n.current && I.current > 0 && 0 === t.collection.size && b && n.current.focus(), I.current = t.collection.size
  }, [t.collection.size, b, n]), d.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: (0, i.d)(E, v, {
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