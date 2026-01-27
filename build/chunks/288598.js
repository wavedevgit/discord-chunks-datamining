/** Chunk was on 38939 **/
/** chunk id: 288598, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk668413 = require("./668413.js"),
  Chunk869639 = require("./869639.js"),
  Chunk126331 = require("./126331.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset(),
      i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, n.getForward(a).length || 1)
  }, "forward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}