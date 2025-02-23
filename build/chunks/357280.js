/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  J: () => i
});
let r = "_errors";

function i(e) {
  let t = {};
  for (let n in e) {
    let i = e[n];
    if (null == i || (n === r && (t._misc = e[n].map(e => e.message)), Array.isArray(i))) continue;
    let o = i[r];
    null != o ? t[n] = o.map(e => e.message) : t[n] = [Object.keys(i)[0]]
  }
  return t
}