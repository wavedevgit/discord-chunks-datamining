/** Chunk was on web.js **/
/** chunk id: 349992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => a
});
var Chunk436759 = require("./436759.js"),
  Chunk240773 = require("./240773.js");

function a(e) {
  let t = {};
  for (let n of (Object.defineProperty(t, i.C, {
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
        t[e] = (0, r.N)(n.T, n.L);
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