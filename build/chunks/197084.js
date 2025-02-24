/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.r(t), n.d(t, {
  default: () => o
});
var r = n(528734),
  i = n(951516);

function o(e, t) {
  (0, i.Z)(2, arguments);
  var n = (0, r.default)(e).getTime(),
    o = (0, r.default)(t.start).getTime(),
    a = (0, r.default)(t.end).getTime();
  if (!(o <= a)) throw RangeError("Invalid interval");
  return n >= o && n <= a
}