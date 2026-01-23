/** Chunk was on 84018 **/
/** chunk id: 4998, original params: e (module,exports,require) **/
var t = "\\ud800-\\udfff",
  n = "\\u2700-\\u27bf",
  i = "a-z\\xdf-\\xf6\\xf8-\\xff",
  r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  s = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  l = "['’]",
  o = "[" + s + "]",
  a = "[" + i + "]",
  c = "[^" + t + s + "\\d+" + n + i + r + "]",
  d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  h = "[" + r + "]",
  p = "(?:" + a + "|" + c + ")",
  f = "(?:" + h + "|" + c + ")",
  g = "(?:" + l + "(?:d|ll|m|re|s|t|ve))?",
  y = "(?:" + l + "(?:D|LL|M|RE|S|T|VE))?",
  A = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
  m = "[\\ufe0e\\ufe0f]?",
  b = "(?:\\u200d(?:" + ["[^" + t + "]", d, u].join("|") + ")" + m + A + ")*",
  O = "(?:" + ["[" + n + "]", d, u].join("|") + ")" + (m + A + b),
  _ = RegExp([h + "?" + a + "+" + g + "(?=" + [o, h, "$"].join("|") + ")", f + "+" + y + "(?=" + [o, h + p, "$"].join("|") + ")", h + "?" + p + "+" + g, h + "+" + y, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", O].join("|"), "g");
module.exports = function(e) {
  return e.match(_) || []
}