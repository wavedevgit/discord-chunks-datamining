/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);

function i() {
  let [e, t] = r.useState(null), n = r.useRef(null);
  return r.useEffect(() => {
    null != e && null != n.current && n.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [e]), {
    purchaseError: e,
    setPurchaseError: t,
    purchaseErrorBlockRef: n
  }
}