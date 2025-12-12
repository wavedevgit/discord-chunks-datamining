/** Chunk was on web.js **/
/** chunk id: 450940, original params: e,t,n (module,exports,re quire) **/
var Chunk948029 = require("./948029.js");
module.exports = function(e, t, n, i, o) {
  var a = r(e, t, n, i, o);
  return a.next().then(function(e) {
    return e.done ? e.value : a.next()
  })
}, module.exports.__esModule = true, module.exports.default = module.exports