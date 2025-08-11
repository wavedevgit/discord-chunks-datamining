/** Chunk was on web.js **/
/** chunk id: 544611, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk172367 = require("./172367.js");
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