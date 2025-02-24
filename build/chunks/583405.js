/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(192379),
  i = n(979590),
  o = n.n(i),
  a = n(866442),
  s = n(442837),
  l = n(607070);
let c = e => {
  let t = (0, s.e7)([l.Z], () => l.Z.desaturateUserColors ? l.Z.saturation : 1);
  return (0, r.useMemo)(() => {
    let {
      h: n,
      s: r,
      l: i
    } = o()((0, a.Rf)(e)).toHsl(), s = o()({
      h: n,
      s: r * t,
      l: i
    });
    return {
      hex: s.toHexString(),
      hsl: s.toHslString()
    }
  }, [e, t])
}