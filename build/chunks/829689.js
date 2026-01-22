/** Chunk was on 84018 **/
/** chunk id: 829689, original params: e (module,exports,require) **/
var t = "\\ud800-\\udfff",
  n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
  i = "\\ud83c[\\udffb-\\udfff]",
  r = "[^" + t + "]",
  s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  o = "(?:" + n + "|" + i + ")?",
  a = "[\\ufe0e\\ufe0f]?",
  c = "(?:\\u200d(?:" + [r, s, l].join("|") + ")" + a + o + ")*",
  d = RegExp(i + "(?=" + i + ")|" + ("(?:" + [r + n + "?", n, s, l, "[" + t + "]"].join("|")) + ")" + (a + o + c), "g");
module.exports = function(e) {
  return e.match(d) || []
}