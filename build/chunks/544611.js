/** Chunk was on 8381 **/
/** chunk id: 544611, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk172367 = require("./172367.js");
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