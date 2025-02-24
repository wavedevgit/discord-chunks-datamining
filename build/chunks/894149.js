/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(528734),
  i = n(951516),
  o = n(217224);

function a(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, o.Z)(t);
  n % 7 == 0 && (n -= 7);
  var a = 1,
    s = (0, r.default)(e),
    l = 7 * ((n % 7 + 7) % 7 < a) + n - s.getUTCDay();
  return s.setUTCDate(s.getUTCDate() + l), s
}