/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
e.exports = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
  })
}