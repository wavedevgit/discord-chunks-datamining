/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
t.publicEncrypt = n(739134), t.privateDecrypt = n(385203), t.privateEncrypt = function(e, n) {
  return t.publicEncrypt(e, n, !0)
}, t.publicDecrypt = function(e, n) {
  return t.privateDecrypt(e, n, !0)
}