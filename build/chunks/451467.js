/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(280098),
  i = n(37113);

function o(e, t, n, o, a, s) {
  for (let l of i.ND)
    if ((null == l.preset || e === l.preset) && t === l.resolution && n === l.fps && (0, r.Z)(l, o, a, s)) return !0;
  return !1
}