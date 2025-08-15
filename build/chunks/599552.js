/** Chunk was on 8381 **/
/** chunk id: 599552, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js");
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