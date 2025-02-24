/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
}), n(47120);
let r = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

function i(e) {
  let {
    allowPopups: t
  } = e, n = r;
  return t && (n = [...r, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
}