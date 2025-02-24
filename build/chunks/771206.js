/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(122289),
  o = n(622999);

function a() {
  let [e, t] = r.useState(null);
  return r.useEffect(() => {
    (0, o.d2)().then(e => t(e)).catch(e => {
      (0, i.q2)(e)
    })
  }, []), e
}