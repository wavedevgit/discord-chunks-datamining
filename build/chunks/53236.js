/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
var r = n(671235).default;

function i(e, t) {
  if ("object" != r(e) || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (void 0 !== n) {
    var i = n.call(e, t || "default");
    if ("object" != r(i)) return i;
    throw TypeError("@@toPrimitive must return a primitive value.")
  }
  return ("string" === t ? String : Number)(e)
}
e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports