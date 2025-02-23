/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  J: () => o,
  Z: () => a
});
var r = n(192379),
  i = n(149203);

function o(e) {
  let {
    topEmojis: t,
    newlyAddedEmojis: n,
    rowSize: r = i.N6
  } = e, o = t.slice(0, r - n.length);
  return {
    visibleTopEmojis: o,
    visibleNewlyAddedEmojis: n,
    allEmojis: o.concat(n)
  }
}

function a(e) {
  return r.useMemo(() => o(e), [e])
}