/** Chunk was on web.js **/
/** chunk id: 289395, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
});
var Chunk118801 = require("./118801.js");

function i(e = {}) {
  let {
    isReadOnly: t
  } = e, [n, a] = (0, r.z)(e.isSelected, e.defaultSelected || false, e.onChange);

  function o() {
    t || a(!n)
  }
  return {
    isSelected: n,
    setSelected: function(e) {
      t || a(e)
    },
    toggle: o
  }
}