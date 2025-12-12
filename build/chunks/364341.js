/** Chunk was on web.js **/
/** chunk id: 364341, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk580983 = require("./580983.js"),
  Chunk840475 = require("./840475.js"),
  Chunk914331 = require("./914331.js"),
  Chunk425105 = require("./425105.js"),
  Chunk527160 = require("./527160.js"),
  Chunk621523 = require("./621523.js"),
  u = Chunk127849.RangeError,
  d = Chunk127849.Int8Array,
  f = d && d.prototype,
  p = f && f.set,
  _ = Chunk840475.aTypedArray,
  m = Chunk840475.exportTypedArrayMethod,
  h = !Chunk621523(function() {
    var e = new Uint8ClampedArray(2);
    return Chunk580983(p, module, {
      length: 1,
      0: 3
    }, 1), 3 !== module[1]
  }),
  g = h && Chunk840475.NATIVE_ARRAY_BUFFER_VIEWS && Chunk621523(function() {
    var e = new d(2);
    return module.set(1), module.set("2", 1), 0 !== module[0] || 2 !== module[1]
  });
m("set", function(e) {
  _(this);
  var t = s(arguments.length > 1 ? arguments[1] : true, 1),
    n = l(e);
  if (h) return i(p, this, n, t);
  var r = this.length,
    a = o(n),
    c = 0;
  if (a + t > r) throw new u("Wrong length");
  for (; c < a;) this[t + c] = n[c++]
}, !h || g)