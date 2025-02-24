/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(192379),
  i = n(913527),
  o = n.n(i),
  a = n(931609),
  s = n(70956),
  l = n(660199);
let c = [
    [2 * s.Z.Seconds.MINUTE, s.Z.Seconds.SECOND],
    [5 * s.Z.Seconds.MINUTE, s.Z.Seconds.MINUTE],
    [45 * s.Z.Seconds.MINUTE, 2 * s.Z.Seconds.MINUTE],
    [21 * s.Z.Seconds.HOUR, 5 * s.Z.Seconds.MINUTE]
  ],
  u = 2 * s.Z.Seconds.HOUR;

function d(e) {
  let t = (0, a.Z)();
  return (r.useEffect(() => {
    if ("R" !== e.format) return;
    let n = 1e3 * u,
      r = Math.abs(e.parsed.diff(o()()));
    for (let [e, t] of c)
      if (r < 1e3 * e) {
        n = 1e3 * t;
        break
      } let i = setInterval(() => {
      t()
    }, n);
    return () => clearInterval(i)
  }, [t, e.format, e.parsed]), "R" === e.format) ? l.Qh.R(e.parsed) : e.formatted
}