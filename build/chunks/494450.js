/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  l: () => a
});
var r = n(442837),
  i = n(291175),
  o = n(621853);

function a(e) {
  return (0, r.e7)([o.Z], () => {
    var t;
    let n;
    let r = null != e ? o.Z.getUserProfile(e) : null,
      a = null == r ? void 0 : r.premiumSince;
    return null == r || null == a ? null : (null == r || null === (t = r.badges) || void 0 === t || t.forEach(e => {
      let t = (0, i.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}