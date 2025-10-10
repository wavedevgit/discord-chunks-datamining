/** Chunk was on web.js **/
/** chunk id: 799189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => i
});
var Chunk611333 = require("./611333.js");

function i(e, t, n) {
  let {
    labelProps: i,
    inputProps: a,
    isSelected: o,
    isPressed: s,
    isDisabled: l,
    isReadOnly: c
  } = (0, r.O)(e, t, n);
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