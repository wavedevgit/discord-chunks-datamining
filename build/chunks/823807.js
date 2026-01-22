/** Chunk was on web.js **/
/** chunk id: 823807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a
});
var Chunk492313 = require("./492313.js"),
  Chunk64700 = require("./64700.js");

function a(e = {}) {
  var t;
  let {
    isReadOnly: n
  } = e, [s, o] = (0, r.P)(e.isSelected, e.defaultSelected || false, e.onChange), [l] = (0, i.useState)(s);

  function c(e) {
    n || o(e)
  }

  function u() {
    n || o(!s)
  }
  return {
    isSelected: s,
    defaultSelected: null != (t = e.defaultSelected) ? t : l,
    setSelected: c,
    toggle: u
  }
}