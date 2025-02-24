/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(512722),
  i = n.n(r),
  o = n(709054);

function a(e) {
  i()(e.length <= 2 || o.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
}