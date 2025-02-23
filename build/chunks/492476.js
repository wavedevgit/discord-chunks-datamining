/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
e.exports = function(e) {
  return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase()
  })
}