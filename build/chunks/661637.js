/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
}), n(653041);
var r = n(633302);

function i(e) {
  let t = [];
  return e.forEach(e => {
    let n = r.ZP.getByName(e);
    if (null != n && (t.push({
        src: n.url,
        colorize: !1
      }), n.hasDiversity))
      for (let e in n.diversityChildren) {
        let r = n.diversityChildren[e];
        t.push({
          src: r.url,
          colorize: !1
        })
      }
  }), t
}