/** Chunk was on 8381 **/
/** chunk id: 321780, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./207549.js").getPunctuation(),
  i = "['‘’]",
  o = "\\s|(?![_])" + n,
  a = RegExp("^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)"),
  u = RegExp("(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$");

function s(t, e) {
  var r = e ? u.exec(t) : a.exec(t);
  return r ? r[0] : t
}
module.exports = {
  getBackward: function(t) {
    return s(t, true)
  },
  getForward: function(t) {
    return s(t, false)
  }
}