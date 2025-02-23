/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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