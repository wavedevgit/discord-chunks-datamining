/** Chunk was on 38939 **/
/** chunk id: 692807, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js");
module.exports = function(t) {
  var e = t.getSelection(),
    r = e.getStartKey();
  return n.set(t, {
    selection: e.merge({
      anchorKey: r,
      anchorOffset: 0,
      focusKey: r,
      focusOffset: 0,
      isBackward: false
    }),
    forceSelection: true
  })
}