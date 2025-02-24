/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var t = Function.prototype.toString;

function n(e) {
  if (null != e) {
    try {
      return t.call(e)
    } catch (e) {}
    try {
      return e + ""
    } catch (e) {}
  }
  return ""
}
e.exports = n