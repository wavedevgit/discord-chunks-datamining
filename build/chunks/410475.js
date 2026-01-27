/** Chunk was on 38939 **/
/** chunk id: 410475, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk541635 = require("./541635.js"),
  Chunk59061 = require("./59061.js");
module.exports = function(t, e) {
  var r = e.getStartKey(),
    o = e.getStartOffset(),
    a = e.getEndKey(),
    s = e.getEndOffset(),
    u = i(t, e).getBlockMap(),
    c = u.keySeq(),
    l = c.indexOf(r),
    f = c.indexOf(a) + 1;
  return n(u.slice(l, f).map(function(t, e) {
    var n = t.getText(),
      i = t.getCharacterList();
    return r === a ? t.merge({
      text: n.slice(o, s),
      characterList: i.slice(o, s)
    }) : e === r ? t.merge({
      text: n.slice(o),
      characterList: i.slice(o)
    }) : e === a ? t.merge({
      text: n.slice(0, s),
      characterList: i.slice(0, s)
    }) : t
  }))
}