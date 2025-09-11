/** Chunk was on web.js **/
/** chunk id: 687383, original params: e,t,n (module,exports,re quire) **/
var r = require("./598892.js").default;
module.exports = function(e) {
  if (null != e) {
    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
      n = 0;
    if (t) return t.call(e);
    if ("function" == typeof e.next) return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = true), {
          value: e && e[n++],
          done: !e
        }
      }
    }
  }
  throw TypeError(r(e) + " is not iterable")
}, module.exports.__esModule = true, module.exports.default = module.exports