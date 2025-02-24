/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e) {
  try {
    return -1 !== Function.toString.call(e).indexOf("[native code]")
  } catch (t) {
    return "function" == typeof e
  }
}
e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports