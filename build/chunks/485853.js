/** Chunk was on web.js **/
/** chunk id: 485853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s,
  T: () => l
});
var Chunk158821 = require("./158821.js"),
  Chunk473749 = require("./473749.js"),
  Chunk921448 = require("./921448.js");
let a = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};

function s(e = {}) {
  let {
    style: t,
    isFocusable: n
  } = e, [r, l] = (0, i.useState)(false), {
    focusWithinProps: c
  } = (0, o.L)({
    isDisabled: !n,
    onFocusWithinChange: e => l(e)
  }), u = (0, i.useMemo)(() => r ? t : t ? {
    ...a,
    ...t
  } : a, [r]);
  return {
    visuallyHiddenProps: {
      ...c,
      style: u
    }
  }
}

function l(e) {
  let {
    children: t,
    elementType: n = "div",
    isFocusable: o,
    style: a,
    ...l
  } = e, {
    visuallyHiddenProps: c
  } = s(e);
  return i.createElement(n, (0, r.d)(l, c), t)
}