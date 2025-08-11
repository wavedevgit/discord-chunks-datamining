/** Chunk was on web.js **/
/** chunk id: 599552, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk172367 = require("./172367.js");
module.exports = function(e) {
  var t = e.getSelection(),
    n = t.getEndKey(),
    i = e.getCurrentContent().getBlockForKey(n).getLength();
  return r.set(e, {
    selection: t.merge({
      anchorKey: n,
      anchorOffset: i,
      focusKey: n,
      focusOffset: i,
      isBackward: false
    }),
    forceSelection: true
  })
}