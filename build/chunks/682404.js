/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(528734),
  i = n(951516),
  o = 864e5;

function a(e) {
  (0, i.Z)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getTime();
  return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / o) + 1
}