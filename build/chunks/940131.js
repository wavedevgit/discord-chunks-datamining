/** Chunk was on web.js **/
/** chunk id: 940131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
});
var Chunk379955 = require("./379955.js"),
  Chunk647438 = require("./647438.js");

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