/** Chunk was on 82821 **/
/** chunk id: 34790, original params: e,r,t (module,exports,require) **/
"use strict";
var a, Chunk705723 = require("./705723.js");
require("./864733.js")(exports, "__esModule", {
  value: true
}), exports.default = true;
var n = Chunk705723(require("./131619.js")),
  l = Chunk705723(require("./698275.js")),
  i = Chunk705723(require("./972380.js")),
  s = Chunk705723(require("./823003.js")),
  u = Chunk705723(require("./139726.js")),
  d = Chunk705723(require("./485749.js")),
  c = Chunk705723(require("./690416.js")),
  p = new d.default([]);
(0, u.default)(a = (0, s.default)((0, i.default)(c.default).call(c.default))).call(a, function(e) {
  var r, t, a = c.default.get(e);
  a && (0, u.default)(r = (0, l.default)(t = []).call(t, (0, s.default)(a.baseConcepts), (0, s.default)(a.relatedConcepts))).call(r, function(r) {
    if ("HTML" === r.module) {
      var t = r.concept;
      if (t) {
        var a = p.get(e) || new n.default([]);
        a.add(t), p.set(e, a)
      }
    }
  })
}), exports.default = p