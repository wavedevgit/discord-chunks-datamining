/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(528734),
  i = n(951516);

function o(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getFullYear(),
    o = t.getMonth(),
    a = new Date(0);
  return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
}