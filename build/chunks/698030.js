/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var t = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

function n(e) {
  return t.test(e)
}
e.exports = n