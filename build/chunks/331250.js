/** Chunk was on web.js **/
/** chunk id: 331250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => s
});
var Chunk284054 = require("./284054.js"),
  Chunk260431 = require("./260431.js"),
  Chunk803082 = require("./803082.js");

function s(e, t, n) {
  let {
    isSelected: s
  } = t, {
    isPressed: o,
    buttonProps: l
  } = (0, r.s)({
    ...e,
    onPress: (0, i.c)(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: o,
    isSelected: s,
    isDisabled: e.isDisabled || false,
    buttonProps: (0, a.v)(l, {
      "aria-pressed": s
    })
  }
}