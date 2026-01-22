/** Chunk was on web.js **/
/** chunk id: 288598, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk668413 = require("./668413.js"),
  Chunk869639 = require("./869639.js"),
  Chunk126331 = require("./126331.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(e) {
  var t = s(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset(),
      i = t.getStartKey(),
      s = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
    return a(e, r.getForward(s).length || 1)
  }, "forward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}