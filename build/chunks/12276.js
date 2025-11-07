/** Chunk was on 70018 **/
/** chunk id: 12276, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  u = "\ud83c[\udffb-\udfff]",
  r = "[^" + t + "]",
  i = "(?:\ud83c[\udde6-\uddff]){2}",
  o = "[\ud800-\udbff][\udc00-\udfff]",
  a = "(?:" + n + "|" + u + ")?",
  s = "[\\ufe0e\\ufe0f]?",
  d = "(?:\\u200d(?:" + [r, i, o].join("|") + ")" + s + a + ")*",
  f = RegExp(u + "(?=" + u + ")|" + ("(?:" + [r + n + "?", n, i, o, "[" + t + "]"].join("|")) + ")" + (s + a + d), "g");
module.exports = function(e) {
  return e.match(f) || []
}