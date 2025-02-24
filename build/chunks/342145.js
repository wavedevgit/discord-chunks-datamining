/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(67867),
  i = n(570596),
  o = n(730427),
  a = n(735471),
  s = n(548828),
  l = n(146321).Map;
r({
  target: "Map",
  stat: !0,
  forced: !0
}, {
  keyBy: function(e, t) {
    var n = new(a(this) ? this : l);
    s(t);
    var r = s(n.set);
    return o(e, function(e) {
      i(r, n, t(e), e)
    }), n
  }
})