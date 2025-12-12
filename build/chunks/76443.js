/** Chunk was on web.js **/
/** chunk id: 76443, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk567220 = require("./567220.js"),
  Chunk384404 = require("./384404.js"),
  Chunk571785 = require("./571785.js"),
  Chunk550773 = require("./550773.js");
module.exports = function(e) {
  var t = a(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset(),
      i = t.getStartKey(),
      a = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
    return o(e, r.getForward(a).length || 1)
  }, "forward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}