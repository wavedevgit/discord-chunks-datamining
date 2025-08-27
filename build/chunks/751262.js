/** Chunk was on web.js **/
/** chunk id: 751262, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  return function(t, n, r) {
    for (var i = false, a = Object(t), o = r(t), s = o.length; s--;) {
      var l = o[e ? s : ++i];
      if (false === n(a[l], l, a)) break
    }
    return t
  }
}