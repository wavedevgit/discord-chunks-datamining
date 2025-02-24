/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var n = "[object Arguments]" == function() {
  return Object.prototype.toString.call(arguments)
}();

function r(e) {
  return "[object Arguments]" == Object.prototype.toString.call(e)
}

function i(e) {
  return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
}(t = e.exports = n ? r : i).supported = r, t.unsupported = i