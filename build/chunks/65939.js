/** Chunk was on web.js **/
/** chunk id: 65939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk960731 = require("./960731.js"),
  Chunk428420 = require("./428420.js");

function a(e) {
  let t = {};
  for (let n of (Object.defineProperty(t, i.$, {
      enumerable: false,
      value: e
    }), e.fields)) {
    let e = n.localName;
    if (!n.opt)
      if (n.oneof) t[n.oneof] = {
        oneofKind: true
      };
      else if (n.repeat) t[e] = [];
    else switch (n.kind) {
      case "scalar":
        t[e] = (0, r.V)(n.T, n.L);
        break;
      case "enum":
        t[e] = 0;
        break;
      case "map":
        t[e] = {}
    }
  }
  return t
}