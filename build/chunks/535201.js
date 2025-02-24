/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  p: () => s
}), n(47120);
var r = n(192379),
  i = n(913527),
  o = n.n(i),
  a = n(846519);

function s(e) {
  let t = o()(e),
    [n, i] = r.useState(() => t.isAfter(Date.now()));
  return r.useEffect(() => {
    if (!n) return;
    let e = new a.V7,
      r = () => {
        let n = Math.min(t.diff(Date.now(), "millisecond"), 864e5);
        null == e || e.start(n, () => {
          t.isBefore(Date.now()) ? i(!1) : r()
        })
      };
    return r(), () => e.stop()
  }, [n, t]), n
}