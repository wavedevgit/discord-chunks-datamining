/** Chunk was on 76977 **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  r = "[^" + t + "]",
  s = "(?:\ud83c[\udde6-\uddff]){2}",
  o = "[\ud800-\udbff][\udc00-\udfff]",
  a = "(?:" + n + "|" + i + ")?",
  l = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [r, s, o].join("|") + ")" + l + a + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, s, o, "[" + t + "]"].join("|")) + ")" + (l + a + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}