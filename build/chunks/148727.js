/** Chunk was on web.js **/
/** chunk id: 148727, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk250010 = require("./250010.js"),
  Chunk999296 = require("./999296.js");
module.exports = function(e, t) {
  var n = t.getStartKey(),
    o = t.getStartOffset(),
    a = t.getEndKey(),
    s = t.getEndOffset(),
    l = i(e, t).getBlockMap(),
    c = l.keySeq(),
    u = c.indexOf(n),
    d = c.indexOf(a) + 1;
  return r(l.slice(u, d).map(function(e, t) {
    var r = e.getText(),
      i = e.getCharacterList();
    return n === a ? e.merge({
      text: r.slice(o, s),
      characterList: i.slice(o, s)
    }) : t === n ? e.merge({
      text: r.slice(o),
      characterList: i.slice(o)
    }) : t === a ? e.merge({
      text: r.slice(0, s),
      characterList: i.slice(0, s)
    }) : e
  }))
}