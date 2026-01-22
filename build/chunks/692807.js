/** Chunk was on web.js **/
/** chunk id: 692807, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk869639 = require("./869639.js");
module.exports = function(e) {
  var t = e.getSelection(),
    n = t.getStartKey();
  return r.set(e, {
    selection: t.merge({
      anchorKey: n,
      anchorOffset: 0,
      focusKey: n,
      focusOffset: 0,
      isBackward: false
    }),
    forceSelection: true
  })
}