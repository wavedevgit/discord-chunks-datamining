/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(192379),
  i = n(439849);

function o(e, t) {
  let [n, o] = r.useState();
  return r.useEffect(() => {
    if (null == e || null != t) {
      o(void 0);
      return
    }(0, i.Z)().then(t => {
      null != t && t.identifyGame(e, (e, t) => {
        0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && o("data:image/png;base64,".concat(t.icon))
      })
    })
  }, [e, t]), null != t ? t : n
}