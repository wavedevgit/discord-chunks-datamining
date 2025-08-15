/** Chunk was on 91584 **/
/** chunk id: 698453, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js");
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