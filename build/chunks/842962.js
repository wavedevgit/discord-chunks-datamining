/** Chunk was on web.js **/
/** chunk id: 842962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk643479 = require("./643479.js"),
  Chunk668459 = require("./668459.js"),
  Chunk420897 = require("./420897.js");
let o = {
    read: d
  },
  s = "8BIM",
  l = 2,
  c = 4,
  u = s.length;

function d(e, t) {
  let n = (0, r.MS)(new Uint8Array(e).buffer),
    o = {},
    d = 0;
  for (; d < e.length;) {
    let e = (0, r.hT)(n, d, u);
    d += u;
    let p = i.A.getShortAt(n, d),
      {
        tagName: _,
        tagNameSize: h
      } = f(n, d += l);
    d += h;
    let m = i.A.getLongAt(n, d);
    if (d += c, e === s) {
      let e = (0, r.MS)(n.buffer, d, m),
        i = {
          id: p,
          value: (0, r.hT)(e, 0, m)
        };
      if (a.A[p]) {
        try {
          i.description = a.A[p].description(e)
        } catch (e) {
          i.description = "<no description formatter>"
        }
        o[_ || a.A[p].name] = i
      } else t && (o[`undefined-${p}`] = i)
    }
    d += m + m % 2
  }
  return o
}

function f(e, t) {
  let [n, i] = (0, r.z6)(e, t);
  return {
    tagName: i,
    tagNameSize: 1 + n + +(n % 2 == 0)
  }
}