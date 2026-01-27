/** Chunk was on web.js **/
/** chunk id: 977418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => i
});
var Chunk757260 = require("./757260.js");

function i(e, t, n) {
  let {
    labelProps: i,
    inputProps: a,
    isSelected: o,
    isPressed: s,
    isDisabled: l,
    isReadOnly: c
  } = (0, r.e)(e, t, n);
  return {
    labelProps: i,
    inputProps: {
      ...a,
      role: "switch",
      checked: o
    },
    isSelected: o,
    isPressed: s,
    isDisabled: l,
    isReadOnly: c
  }
}