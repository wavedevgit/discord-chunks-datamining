/** Chunk was on web.js **/
/** chunk id: 74501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk822632 = require("./822632.js"),
  Chunk610388 = require("./610388.js"),
  Chunk765592 = require("./765592.js");
let a = {
    read: d
  },
  s = "8BIM",
  l = 2,
  c = 4,
  u = s.length;

function d(e, t) {
  let n = (0, r.Wp)(new Uint8Array(e).buffer),
    a = {},
    d = 0;
  for (; d < e.length;) {
    let e = (0, r.oH)(n, d, u);
    d += u;
    let p = i.Z.getShortAt(n, d),
      {
        tagName: _,
        tagNameSize: m
      } = f(n, d += l);
    d += m;
    let h = i.Z.getLongAt(n, d);
    if (d += c, e === s) {
      let e = (0, r.Wp)(n.buffer, d, h),
        i = {
          id: p,
          value: (0, r.oH)(e, 0, h)
        };
      if (o.Z[p]) {
        try {
          i.description = o.Z[p].description(e)
        } catch (e) {
          i.description = "<no description formatter>"
        }
        a[_ || o.Z[p].name] = i
      } else t && (a[`undefined-${p}`] = i)
    }
    d += h + h % 2
  }
  return a
}

function f(e, t) {
  let [n, i] = (0, r.nk)(e, t);
  return {
    tagName: i,
    tagNameSize: 1 + n + +(n % 2 == 0)
  }
}