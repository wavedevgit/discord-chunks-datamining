/** Chunk was on 80451 **/
/** chunk id: 197208, original params: e,r,t (module,exports,require) **/
var Chunk936733 = require("./936733.js"),
  Chunk664417 = require("./664417.js"),
  Chunk623012 = require("./623012.js");
module.exports = function(e, r) {
  if (e) {
    if ("string" == typeof e) return n(e, r);
    var t, l = a(t = ({}).toString.call(e)).call(t, 8, false);
    return "Object" === l && e.constructor && (l = e.constructor.name), "Map" === l || "Set" === l ? o(e) : "Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? n(e, r) : true
  }
}, module.exports.__esModule = true, module.exports.default = module.exports