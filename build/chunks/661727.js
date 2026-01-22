/** Chunk was on 896 **/
/** chunk id: 661727, original params: e,r,t (module,exports,require) **/
"use strict";
var a, Chunk828066 = require("./828066.js");
require("./697509.js")(exports, "__esModule", {
  value: true
}), exports.default = true;
var o = Chunk828066(require("./442160.js")),
  s = Chunk828066(require("./733296.js")),
  n = Chunk828066(require("./768790.js")),
  i = Chunk828066(require("./204955.js")),
  u = Chunk828066(require("./287334.js")),
  d = Chunk828066(require("./520636.js")),
  c = Chunk828066(require("./36556.js")),
  p = Chunk828066(require("./688057.js")),
  m = Chunk828066(require("./729823.js")),
  b = Chunk828066(require("./747562.js")),
  f = Chunk828066(require("./358508.js")),
  v = new b.default([]);
(0, m.default)(a = (0, p.default)((0, c.default)(f.default).call(f.default))).call(a, function(e) {
  var r, t, a = f.default.get(e);
  a && (0, m.default)(r = (0, d.default)(t = []).call(t, (0, p.default)(a.baseConcepts), (0, p.default)(a.relatedConcepts))).call(r, function(r) {
    if ("HTML" === r.module) {
      var t = r.concept;
      if (t) {
        var a, l = (0, u.default)(t),
          d = ((0, i.default)(a = (0, p.default)((0, n.default)(v).call(v))).call(a, function(e) {
            var r = (0, s.default)(e, 2),
              t = r[0];
            return r[1], (0, u.default)(t) === l
          }) || [])[1];
        d || (d = new o.default([])), d.add(e), v.set(t, d)
      }
    }
  })
}), exports.default = v