/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var t = 0x3fffffff;
e.exports = function(e, n) {
  if ("number" != typeof e) throw TypeError("Iterations not a number");
  if (e < 0) throw TypeError("Bad iterations");
  if ("number" != typeof n) throw TypeError("Key length not a number");
  if (n < 0 || n > t || n != n) throw TypeError("Bad key length")
}