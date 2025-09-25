/** Chunk was on 63141 **/
/** chunk id: 12276, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  r = "[^" + t + "]",
  s = "(?:\ud83c[\udde6-\uddff]){2}",
  o = "[\ud800-\udbff][\udc00-\udfff]",
  l = "(?:" + n + "|" + i + ")?",
  a = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [r, s, o].join("|") + ")" + a + l + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, s, o, "[" + t + "]"].join("|")) + ")" + (a + l + c), "g");
module.exports = function(e) {
  return e.match(d) || []
}