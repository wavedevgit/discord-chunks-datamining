/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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