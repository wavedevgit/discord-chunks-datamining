/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(67867),
  i = n(653457),
  o = n(139545);
r({
  target: "Promise",
  stat: !0,
  forced: !0
}, {
  try: function(e) {
    var t = i.f(this),
      n = o(e);
    return (n.error ? t.reject : t.resolve)(n.value), t.promise
  }
})