/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";

function r(e, t) {
  let {
    style: n
  } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  let r = t.style;
  return null != r && Object.keys(r).forEach(e => {
    n[e] = r[e]
  }), e
}
n.d(t, {
  b: () => r
})