/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(192379);

function i(e, t) {
  let n = r.useRef(e);
  return r.useEffect(() => {
    function e(e) {
      null == n.current || n.current.contains(e.target) || t()
    }
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e)
    }
  }, [n, t]), n
}