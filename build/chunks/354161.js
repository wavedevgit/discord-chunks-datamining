/** Chunk was on web.js **/
/** chunk id: 354161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
});
var Chunk288783 = require("./288783.js"),
  Chunk929767 = require("./929767.js"),
  Chunk158821 = require("./158821.js");

function o(e, t, n) {
  let {
    isSelected: o
  } = t, {
    isPressed: s,
    buttonProps: l
  } = (0, r.U)({
    ...e,
    onPress: (0, i.t)(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: s,
    isSelected: o,
    isDisabled: e.isDisabled || false,
    buttonProps: (0, a.d)(l, {
      "aria-pressed": o
    })
  }
}