/** Chunk was on web.js **/
/** chunk id: 696382, original params: e,t,n (module,exports,re quire) **/
var Chunk292528 = require("./292528.js"),
  Chunk461083 = require("./461083.js"),
  a = 1,
  s = 2;
module.exports = function(e, t, n, o) {
  var l = n.length,
    c = l,
    u = !o;
  if (null == e) return !c;
  for (e = Object(e); l--;) {
    var d = n[l];
    if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) returnfalse
  }
  for (; ++l < c;) {
    var f = (d = n[l])[0],
      p = e[f],
      _ = d[1];
    if (u && d[2]) {
      if (true === p && !(f in e)) returnfalse
    } else {
      var h = new r;
      if (o) var m = o(p, _, f, e, t, h);
      if (!(true === m ? i(_, p, a | s, o, h) : m)) returnfalse
    }
  }
  returntrue
}