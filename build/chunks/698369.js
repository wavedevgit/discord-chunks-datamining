/** Chunk was on web.js **/
/** chunk id: 698369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
});
var Chunk386239 = require("./386239.js"),
  Chunk473749 = require("./473749.js");

function a(e = {}) {
  var t;
  let {
    isReadOnly: n
  } = e, [o, s] = (0, r.z)(e.isSelected, e.defaultSelected || false, e.onChange), [l] = (0, i.useState)(o);

  function c(e) {
    n || s(e)
  }

  function u() {
    n || s(!o)
  }
  return {
    isSelected: o,
    defaultSelected: null != (t = e.defaultSelected) ? t : l,
    setSelected: c,
    toggle: u
  }
}