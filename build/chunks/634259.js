/** Chunk was on 896 **/
/** chunk id: 634259, original params: e,r,t (module,exports,require) **/
var Chunk151502 = require("./151502.js"),
  Chunk855042 = require("./855042.js"),
  Chunk258509 = require("./258509.js");
module.exports = function(e, r) {
  if (e) {
    if ("string" == typeof e) return o(e, r);
    var t, s = a(t = ({}).toString.call(e)).call(t, 8, false);
    return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? l(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? o(e, r) : true
  }
}, module.exports.__esModule = true, module.exports.default = module.exports