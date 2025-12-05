/** Chunk was on 63141 **/
/** chunk id: 519342, original params: e (module,exports,require) **/
var t = "\ud800-\udfff",
  n = "\\u2700-\\u27bf",
  i = "a-z\\xdf-\\xf6\\xf8-\\xff",
  r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  s = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  o = "['’]",
  l = "[" + s + "]",
  a = "[" + i + "]",
  c = "[^" + t + s + "\\d+" + n + i + r + "]",
  d = "(?:\ud83c[\udde6-\uddff]){2}",
  u = "[\ud800-\udbff][\udc00-\udfff]",
  p = "[" + r + "]",
  h = "(?:" + a + "|" + c + ")",
  f = "(?:" + p + "|" + c + ")",
  g = "(?:" + o + "(?:d|ll|m|re|s|t|ve))?",
  _ = "(?:" + o + "(?:D|LL|M|RE|S|T|VE))?",
  m = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
  y = "[\\ufe0e\\ufe0f]?",
  b = "(?:\\u200d(?:" + ["[^" + t + "]", d, u].join("|") + ")" + y + m + ")*",
  v = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (y + m + b),
  O = RegExp([p + "?" + a + "+" + g + "(?=" + [l, p, "$"].join("|") + ")", f + "+" + _ + "(?=" + [l, p + h, "$"].join("|") + ")", p + "?" + h + "+" + g, p + "+" + _, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", v].join("|"), "g");
module.exports = function(e) {
  return e.match(O) || []
}