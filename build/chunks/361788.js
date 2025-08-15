/** Chunk was on 91584 **/
/** chunk id: 361788, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk539622 = require("./539622.js"),
  Chunk986464 = require("./986464.js");
module.exports = function(t, e) {
  var r = e.getStartKey(),
    o = e.getStartOffset(),
    a = e.getEndKey(),
    u = e.getEndOffset(),
    s = i(t, e).getBlockMap(),
    c = s.keySeq(),
    l = c.indexOf(r),
    f = c.indexOf(a) + 1;
  return n(s.slice(l, f).map(function(t, e) {
    var n = t.getText(),
      i = t.getCharacterList();
    return r === a ? t.merge({
      text: n.slice(o, u),
      characterList: i.slice(o, u)
    }) : e === r ? t.merge({
      text: n.slice(o),
      characterList: i.slice(o)
    }) : e === a ? t.merge({
      text: n.slice(0, u),
      characterList: i.slice(0, u)
    }) : t
  }))
}