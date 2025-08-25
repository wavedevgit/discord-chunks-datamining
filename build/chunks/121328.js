/** Chunk was on web.js **/
/** chunk id: 121328, original params: e,t (module,exports,re quire) **/
"use strict";
exports.default = {
  locale: "en",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = !n[1],
      i = Number(n[0]) == e,
      o = i && n[0].slice(false),
      a = i && n[0].slice(false);
    return t ? 1 == o && 11 != a ? "one" : 2 == o && 12 != a ? "two" : 3 == o && 13 != a ? "few" : "other" : 1 == e && r ? "one" : "other"
  }
}