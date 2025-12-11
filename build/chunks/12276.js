/** Chunk was on 63141 **/
/** chunk id: 12276, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\ud83c[\udffb-\udfff]",
  r = "[^" + t + "]",
  a = "(?:\ud83c[\udde6-\uddff]){2}",
  s = "[\ud800-\udbff][\udc00-\udfff]",
  o = "(?:" + n + "|" + i + ")?",
  l = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [r, a, s].join("|") + ")" + l + o + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, a, s, "[" + t + "]"].join("|")) + ")" + (l + o + c), "g");
module.exports = function(e) {
  return e.match(d) || []
}