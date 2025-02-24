/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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