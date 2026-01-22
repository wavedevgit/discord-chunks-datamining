/** Chunk was on web.js **/
/** chunk id: 589834, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk668413 = require("./668413.js"),
  Chunk869639 = require("./869639.js"),
  Chunk181621 = require("./181621.js"),
  Chunk418227 = require("./418227.js");
module.exports = function(e) {
  var t = s(e, function(e) {
    var t = e.getSelection(),
      n = t.getStartOffset();
    if (0 === n) return a(e, 1);
    var i = t.getStartKey(),
      s = e.getCurrentContent().getBlockForKey(i).getText().slice(0, n);
    return a(e, r.getBackward(s).length || 1)
  }, "backward");
  return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range")
}