/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => o,
  v: () => i
}), n(474991), n(398202), n(301563), n(566702);
let r = "@silent",
  i = new RegExp("^".concat(r, "(\\s|$)"));

function o(e) {
  return null == e ? [!1, ""] : null == e.match(i) ? [!1, e] : [!0, e.substring(r.length).trim()]
}