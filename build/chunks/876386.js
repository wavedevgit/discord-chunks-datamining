/** Chunk was on 80451 **/
/** chunk id: 876386, original params: e,r,t (module,exports,require) **/
"use strict";
var a, Chunk705723 = require("./705723.js");
require("./864733.js")(exports, "__esModule", {
  value: true
}), exports.default = true;
var n = Chunk705723(require("./131619.js")),
  l = Chunk705723(require("./271772.js")),
  i = Chunk705723(require("./744096.js")),
  s = Chunk705723(require("./78198.js")),
  u = Chunk705723(require("./737965.js")),
  d = Chunk705723(require("./698275.js")),
  c = Chunk705723(require("./972380.js")),
  p = Chunk705723(require("./823003.js")),
  m = Chunk705723(require("./139726.js")),
  f = Chunk705723(require("./485749.js")),
  b = Chunk705723(require("./690416.js")),
  v = new f.default([]);
(0, m.default)(a = (0, p.default)((0, c.default)(b.default).call(b.default))).call(a, function(e) {
  var r, t, a = b.default.get(e);
  a && (0, m.default)(r = (0, d.default)(t = []).call(t, (0, p.default)(a.baseConcepts), (0, p.default)(a.relatedConcepts))).call(r, function(r) {
    if ("HTML" === r.module) {
      var t = r.concept;
      if (t) {
        var a, o = (0, u.default)(t),
          d = ((0, s.default)(a = (0, p.default)((0, i.default)(v).call(v))).call(a, function(e) {
            var r = (0, l.default)(e, 2),
              t = r[0];
            return r[1], (0, u.default)(t) === o
          }) || [])[1];
        d || (d = new n.default([])), d.add(e), v.set(t, d)
      }
    }
  })
}), exports.default = v