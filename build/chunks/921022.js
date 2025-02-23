/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(192379),
  i = n(931609);

function o(e) {
  let {
    delay: t,
    disable: n = !1
  } = e, o = (0, i.Z)();
  r.useEffect(() => {
    if (t <= 0 || n) return;
    let e = setTimeout(() => {
      o()
    }, t);
    return () => clearTimeout(e)
  }, [t, n, o])
}