/** Chunk was on web.js **/
/** chunk id: 871230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => l
});
var Chunk506364 = require("./506364.js"),
  Chunk647438 = require("./647438.js"),
  Chunk764075 = require("./764075.js");
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
  } = (0, a.L)({
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
  return i.createElement(n, (0, r.d)(l, c), t)
}