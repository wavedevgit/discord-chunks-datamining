/** Chunk was on 38939 **/
/** chunk id: 832368, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk869639 = require("./869639.js");
module.exports = function(t) {
  var e = t.getSelection(),
    r = e.getEndKey(),
    i = t.getCurrentContent().getBlockForKey(r).getLength();
  return n.set(t, {
    selection: e.merge({
      anchorKey: r,
      anchorOffset: i,
      focusKey: r,
      focusOffset: i,
      isBackward: false
    }),
    forceSelection: true
  })
}