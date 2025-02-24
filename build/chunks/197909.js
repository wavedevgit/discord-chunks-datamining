/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
t.publicEncrypt = n(739134), t.privateDecrypt = n(385203), t.privateEncrypt = function(e, n) {
  return t.publicEncrypt(e, n, !0)
}, t.publicDecrypt = function(e, n) {
  return t.privateDecrypt(e, n, !0)
}