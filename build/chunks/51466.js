/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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