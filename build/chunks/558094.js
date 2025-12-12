/** Chunk was on web.js **/
/** chunk id: 558094, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk567220 = require("./567220.js"),
  Chunk384404 = require("./384404.js"),
  Chunk373539 = require("./373539.js"),
  Chunk550773 = require("./550773.js");
module.exports = function(e) {
  var t = o(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset();
    if (0 === n) return a(e, 1);
    var i = t.getStartKey(),
      o = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
    return a(e, r.getBackward(o).length || 1)
  }, "backward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}