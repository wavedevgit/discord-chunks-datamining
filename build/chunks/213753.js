/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  V: () => a
});
var r = n(846903);
let i = new(n(259443)).Yd("codedLinkQueue"),
  o = new r.default({
    concurrency: 5,
    intervalCap: 10,
    interval: 2e3
  });

function a(e) {
  o.add(e)
}
o.on("add", () => {
  o.size > 0 && i.warn("Message link fetch queue backlog:", o.size)
})