/** Chunk was on web.js **/
/** chunk id: 76494, original params: e,t,n (module,exports,re quire) **/
var Chunk41518 = require("./41518.js");
module.exports = function(e, t, n, i, a) {
  var o = r(e, t, n, i, a);
  return o.next().then(function(e) {
    return e.done ? e.value : o.next()
  })
}, module.exports.__esModule = true, module.exports.default = module.exports