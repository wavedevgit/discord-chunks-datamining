/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
t.default = {
  locale: "en",
  pluralRuleFunction: function(e, t) {
    var n = String(e).split("."),
      r = !n[1],
      i = Number(n[0]) == e,
      o = i && n[0].slice(-1),
      a = i && n[0].slice(-2);
    return t ? 1 == o && 11 != a ? "one" : 2 == o && 12 != a ? "two" : 3 == o && 13 != a ? "few" : "other" : 1 == e && r ? "one" : "other"
  }
}