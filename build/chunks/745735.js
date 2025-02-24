/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(192379),
  i = n(512722),
  o = n.n(i);

function a(e, t) {
  let n = (0, r.useRef)(e),
    i = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    n.current = e
  }, [e]), (0, r.useEffect)(() => {
    function e() {
      o()(null != n.current, "Missing callback"), n.current()
    }
    if (null === t) {
      null !== i.current && (clearInterval(i.current), i.current = null);
      return
    }
    return i.current = setInterval(e, t), () => clearInterval(i.current)
  }, [t])
}