/** Chunk was on web.js **/
/** chunk id: 126031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => s,
  s: () => l
});
var Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js"),
  Chunk744493 = require("./744493.js");
let o = {
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
  } = (0, a.R)({
    isDisabled: !n,
    onFocusWithinChange: e => l(e)
  }), u = (0, i.useMemo)(() => r ? t : t ? {
    ...o,
    ...t
  } : o, [r]);
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
    isFocusable: a,
    style: o,
    ...l
  } = e, {
    visuallyHiddenProps: c
  } = s(e);
  return i.createElement(n, (0, r.v)(l, c), t)
}