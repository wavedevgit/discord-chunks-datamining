/** Chunk was on web.js **/
/** chunk id: 46166, original params: e,t,n (module,exports,re quire) **/
var Chunk620014 = require("./620014.js"),
  Chunk733892 = require("./733892.js"),
  a = 1,
  o = 2;
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
      if (!(true === h ? i(_, p, a | o, s, m) : h)) returnfalse
    }
  }
  returntrue
}