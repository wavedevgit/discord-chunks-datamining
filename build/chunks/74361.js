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
    inputProps: o,
    isSelected: a,
    isPressed: s,
    isDisabled: l,
    isReadOnly: c
  } = (0, r.O)(e, t, n);
  return {
    labelProps: i,
    inputProps: {
      ...o,
      role: "switch",
      checked: a
    },
    isSelected: a,
    isPressed: s,
    isDisabled: l,
    isReadOnly: c
  }
}