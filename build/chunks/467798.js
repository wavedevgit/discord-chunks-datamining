/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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