/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
});
var r = n(192379),
  i = n(995295);
let o = Object.freeze({
  box: "border-box"
});

function a(e) {
  let {
    ref: t,
    onUpdate: n,
    resizeObserver: a,
    listenerMap: s,
    key: l
  } = e;
  (0, r.useLayoutEffect)(() => {
    let e = e => {
        (0, i.flushSync)(() => {
          n(e, l)
        })
      },
      {
        current: r
      } = t;
    return null != r && (s.set(r, e), a.observe(r, o)), () => {
      null != r && (a.unobserve(r), s.delete(r))
    }
  }, [n, a, t, s, l])
}