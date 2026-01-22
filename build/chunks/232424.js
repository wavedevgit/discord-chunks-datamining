/** Chunk was on web.js **/
/** chunk id: 232424, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk446474 = require("./446474.js"),
  Chunk739305 = require("./739305.js"),
  Chunk503199 = require("./503199.js"),
  Chunk777718 = require("./777718.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503628 = require("./503628.js"),
  u = Chunk860511.RangeError,
  d = Chunk860511.Int8Array,
  f = d && d.prototype,
  p = f && f.set,
  _ = Chunk739305.aTypedArray,
  h = Chunk739305.exportTypedArrayMethod,
  m = !Chunk503628(function() {
    var e = new Uint8ClampedArray(2);
    return i(p, e, {
      length: 1,
      0: 3
    }, 1), 3 !== e[1]
  }),
  g = m && Chunk739305.NATIVE_ARRAY_BUFFER_VIEWS && Chunk503628(function() {
    var e = new d(2);
    return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1]
  });
h("set", function(e) {
  _(this);
  var t = o(arguments.length > 1 ? arguments[1] : true, 1),
    n = l(e);
  if (m) return i(p, this, n, t);
  var r = this.length,
    a = s(n),
    c = 0;
  if (a + t > r) throw new u("Wrong length");
  for (; c < a;) this[t + c] = n[c++]
}, !m || g)