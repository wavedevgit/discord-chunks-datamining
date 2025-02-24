/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(192379);
let i = (e, t) => {
  let n = (0, r.useRef)(e);
  (0, r.useEffect)(() => {
    n.current = e
  }, [e]), (0, r.useEffect)(() => {
    if (null === t) return;
    let e = setTimeout(() => n.current(), t);
    return () => clearTimeout(e)
  }, [t, n])
}