/** Chunk was on web.js **/
/** chunk id: 277816, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk384404 = require("./384404.js");
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