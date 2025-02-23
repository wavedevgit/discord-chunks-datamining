/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(257693);
t.encrypt = function(e, t) {
  var n = r(t, e._prev);
  return e._prev = e._cipher.encryptBlock(n), e._prev
}, t.decrypt = function(e, t) {
  var n = e._prev;
  return e._prev = t, r(e._cipher.decryptBlock(t), n)
}