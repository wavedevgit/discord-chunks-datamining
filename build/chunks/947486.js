/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
}), n(26686);
var r = n(413135).Buffer;

function i(e) {
  try {
    return r.from(JSON.stringify(e)).toString("base64")
  } catch (e) {
    return null
  }
}