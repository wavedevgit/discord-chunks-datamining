/** Chunk was on 896 **/
/** chunk id: 214655, original params: e,r,t (module,exports,require) **/
"use strict";
var a, Chunk828066 = require("./828066.js");
require("./697509.js")(exports, "__esModule", {
  value: true
}), exports.default = true;
var o = Chunk828066(require("./442160.js")),
  s = Chunk828066(require("./520636.js")),
  n = Chunk828066(require("./36556.js")),
  i = Chunk828066(require("./688057.js")),
  u = Chunk828066(require("./729823.js")),
  d = Chunk828066(require("./747562.js")),
  c = Chunk828066(require("./358508.js")),
  p = new d.default([]);
(0, u.default)(a = (0, i.default)((0, n.default)(c.default).call(c.default))).call(a, function(e) {
  var r, t, a = c.default.get(e);
  a && (0, u.default)(r = (0, s.default)(t = []).call(t, (0, i.default)(a.baseConcepts), (0, i.default)(a.relatedConcepts))).call(r, function(r) {
    if ("HTML" === r.module) {
      var t = r.concept;
      if (t) {
        var a = p.get(e) || new o.default([]);
        a.add(t), p.set(e, a)
      }
    }
  })
}), exports.default = p