/** Chunk was on web.js **/
/** chunk id: 906757, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk102736 = require("./102736.js");
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