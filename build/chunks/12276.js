/** Chunk was on 88007 **/
/** chunk id: 12276, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  u = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  r = "\ud83c[\udffb-\udfff]",
  n = "[^" + t + "]",
  f = "(?:\ud83c[\udde6-\uddff]){2}",
  o = "[\ud800-\udbff][\udc00-\udfff]",
  i = "(?:" + u + "|" + r + ")?",
  s = "[\\ufe0e\\ufe0f]?",
  a = "(?:\\u200d(?:" + [n, f, o].join("|") + ")" + s + i + ")*",
  d = RegExp(r + "(?=" + r + ")|" + ("(?:" + [n + u + "?", u, f, o, "[" + t + "]"].join("|")) + ")" + (s + i + a), "g");
module.exports = function(e) {
  return e.match(d) || []
}