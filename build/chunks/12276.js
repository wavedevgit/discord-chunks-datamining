/** Chunk was on 63141 **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  r = "[^" + t + "]",
  o = "(?:\ud83c[\udde6-\uddff]){2}",
  a = "[\ud800-\udbff][\udc00-\udfff]",
  l = "(?:" + n + "|" + i + ")?",
  s = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [r, o, a].join("|") + ")" + s + l + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, o, a, "[" + t + "]"].join("|")) + ")" + (s + l + c), "g");
e.exports = function(e) {
  return e.match(d) || []
}