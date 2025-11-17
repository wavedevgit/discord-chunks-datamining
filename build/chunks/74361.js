/** Chunk was on web.js **/
/** chunk id: 74361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => i
});
var Chunk975898 = require("./975898.js");

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