/** Chunk was on 91584 **/
/** chunk id: 906757, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102736 = require("./102736.js");
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