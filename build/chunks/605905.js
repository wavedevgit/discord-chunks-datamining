/** Chunk was on web.js **/
/** chunk id: 605905, original params: e (module,exports,re quire) **/
module.exports = function(e, t, n, r) {
  var i = false,
    o = null == e ? 0 : e.length;
  for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
  return n
}