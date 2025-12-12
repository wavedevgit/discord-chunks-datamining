/** Chunk was on web.js **/
/** chunk id: 698369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => o
});
var Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function o(e = {}) {
  var t;
  let {
    isReadOnly: n
  } = e, [a, s] = (0, r.z)(e.isSelected, e.defaultSelected || false, e.onChange), [l] = (0, i.useState)(a);

  function c(e) {
    n || s(e)
  }

  function u() {
    n || s(!a)
  }
  return {
    isSelected: a,
    defaultSelected: null != (t = e.defaultSelected) ? t : l,
    setSelected: c,
    toggle: u
  }
}