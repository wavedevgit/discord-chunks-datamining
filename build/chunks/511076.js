/** Chunk was on web.js **/
/** chunk id: 511076, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk282459 = require("./282459.js"),
  Chunk652092 = require("./652092.js");
module.exports = function(e, t) {
  var n = t.getStartKey(),
    a = t.getStartOffset(),
    o = t.getEndKey(),
    s = t.getEndOffset(),
    l = i(e, t).getBlockMap(),
    c = l.keySeq(),
    u = c.indexOf(n),
    d = c.indexOf(o) + 1;
  return r(l.slice(u, d).map(function(e, t) {
    var r = e.getText(),
      i = e.getCharacterList();
    return n === o ? e.merge({
      text: r.slice(a, s),
      characterList: i.slice(a, s)
    }) : t === n ? e.merge({
      text: r.slice(a),
      characterList: i.slice(a)
    }) : t === o ? e.merge({
      text: r.slice(0, s),
      characterList: i.slice(0, s)
    }) : e
  }))
}