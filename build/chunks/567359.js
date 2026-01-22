/** Chunk was on web.js **/
/** chunk id: 567359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d,
  n: () => f
});
var Chunk333903 = require("./333903.js"),
  Chunk290424 = require("./290424.js"),
  Chunk803082 = require("./803082.js"),
  Chunk138026 = require("./138026.js"),
  Chunk64700 = require("./64700.js"),
  Chunk447432 = require("./447432.js"),
  Chunk744493 = require("./744493.js"),
  Chunk853590 = require("./853590.js");
let d = new WeakMap;

function f(e, t, n) {
  let {
    direction: f
  } = (0, u.Y)(), p = e.keyboardDelegate || new(0, s.n)({
    collection: t.collection,
    ref: n,
    orientation: "horizontal",
    direction: f,
    disabledKeys: t.disabledKeys,
    disabledBehavior: t.selectionManager.disabledBehavior
  }), {
    labelProps: _,
    fieldProps: h,
    descriptionProps: m,
    errorMessageProps: g
  } = (0, l.M)({
    ...e,
    labelElementType: "span"
  }), {
    gridProps: E
  } = (0, r.I)({
    ...e,
    ...h,
    keyboardDelegate: p,
    shouldFocusWrap: true,
    linkBehavior: "override",
    keyboardNavigationBehavior: "tab"
  }, t, n), [b, y] = (0, o.useState)(false), {
    focusWithinProps: O
  } = (0, c.R)({
    onFocusWithinChange: y
  }), A = (0, i.$)(e), v = (0, o.useRef)(t.collection.size);
  return (0, o.useEffect)(() => {
    n.current && v.current > 0 && 0 === t.collection.size && b && n.current.focus(), v.current = t.collection.size
  }, [t.collection.size, b, n]), d.set(t, {
    onRemove: e.onRemove
  }), {
    gridProps: (0, a.v)(E, A, {
      role: t.collection.size ? "grid" : "group",
      "aria-atomic": false,
      "aria-relevant": "additions",
      "aria-live": b ? "polite" : "off",
      ...O,
      ...h
    }),
    labelProps: _,
    descriptionProps: m,
    errorMessageProps: g
  }
}