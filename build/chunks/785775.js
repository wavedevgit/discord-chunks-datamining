/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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