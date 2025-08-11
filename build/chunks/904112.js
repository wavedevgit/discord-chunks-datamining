/** Chunk was on web.js **/
/** chunk id: 904112, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk321780 = require("./321780.js"),
  Chunk172367 = require("./172367.js"),
  Chunk802801 = require("./802801.js"),
  Chunk473297 = require("./473297.js");
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