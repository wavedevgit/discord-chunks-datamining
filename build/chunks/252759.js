/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(192379),
  i = n(667397);
let o = [];

function a(e, t) {
  let n = (0, r.useRef)(),
    a = (0, r.useRef)(o);
  return a.current === o ? (n.current = e(), a.current = t) : (0, i.Z)(t, a.current) || (n.current = e(), a.current = t), n.current
}