/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(814033),
  i = n(957578).Buffer;

function o(e, t) {
  return i.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
}
e.exports = o