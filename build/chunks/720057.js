/** Chunk was on 91584 **/
/** chunk id: 720057, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk946258 = require("./946258.js"),
  Chunk102736 = require("./102736.js"),
  Chunk533531 = require("./533531.js"),
  Chunk398448 = require("./398448.js");
module.exports = function(t) {
  var e = a(t, function(t) {
    var e = t.getSelection(),
      r = e.getStartOffset();
    if (0 === r) return o(t, 1);
    var i = e.getStartKey(),
      a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r);
    return o(t, n.getBackward(a).length || 1)
  }, "backward");
  return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range")
}