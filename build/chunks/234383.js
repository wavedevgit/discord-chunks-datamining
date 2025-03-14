/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(442837),
  i = n(937111),
  o = n(430824);

function a() {
  return (0, r.Wu)([i.Z, o.Z], () => {
    let e = i.Z.computeGuildIds(),
      t = o.Z.getGuilds();
    return e.filter(e => null == t[e])
  })
}