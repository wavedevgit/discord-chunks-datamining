/** Chunk was on web.js **/
/** chunk id: 963782, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk321780 = require("./321780.js"),
  Chunk172367 = require("./172367.js"),
  Chunk159759 = require("./159759.js"),
  Chunk473297 = require("./473297.js");
module.exports = function(e) {
  var t = a(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset();
    if (0 === n) return o(e, 1);
    var i = t.getStartKey(),
      a = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
    return o(e, r.getBackward(a).length || 1)
  }, "backward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}