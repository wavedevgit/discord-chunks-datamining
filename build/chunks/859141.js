/** Chunk was on web.js **/
/** chunk id: 859141, original params: e (module,exports,re quire) **/
module.exports = function(e, t, n, r) {
  var i = n ? n.call(r, e, t) : true;
  if (true !== i) return !!i;
  if (e === t) returntrue;
  if ("object" != typeof e || !e || "object" != typeof t || !t) returnfalse;
  var a = Object.keys(e),
    s = Object.keys(t);
  if (a.length !== s.length) returnfalse;
  for (var o = Object.prototype.hasOwnProperty.bind(t), l = 0; l < a.length; l++) {
    var c = a[l];
    if (!o(c)) returnfalse;
    var u = e[c],
      d = t[c];
    if (false === (i = n ? n.call(r, u, d, c) : true) || true === i && u !== d) returnfalse
  }
  returntrue
}