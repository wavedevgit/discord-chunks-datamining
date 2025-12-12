/** Chunk was on web.js **/
/** chunk id: 567220, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./207549.js").getPunctuation(),
  i = "['‘’]",
  o = "\\s|(?![_])" + r,
  a = RegExp("^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)"),
  s = RegExp("(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$");

function l(e, t) {
  var n = t ? s.exec(e) : a.exec(e);
  return n ? n[0] : e
}
module.exports = {
  getBackward: function(e) {
    return l(e, true)
  },
  getForward: function(e) {
    return l(e, false)
  }
}