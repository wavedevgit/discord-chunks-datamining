/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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