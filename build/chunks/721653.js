/** Chunk was on web.js **/
/** chunk id: 721653, original params: e,t,n (module,exports,re quire) **/
var Chunk687249 = require("./687249.js"),
  Chunk779518 = require("./779518.js"),
  o = 1,
  a = 2;
module.exports = function(e, t, n, s) {
  var l = n.length,
    c = l,
    u = !s;
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
      var m = new r;
      if (s) var h = s(p, _, f, e, t, m);
      if (!(true === h ? i(_, p, o | a, s, m) : h)) returnfalse
    }
  }
  returntrue
}