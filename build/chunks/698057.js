/** Chunk was on web.js **/
/** chunk id: 698057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk463424 = require("./463424.js"),
  Chunk529883 = require("./529883.js"),
  Chunk897308 = require("./897308.js");
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
    let _ = i.Z.getShortAt(n, d),
      {
        tagName: p,
        tagNameSize: h
      } = f(n, d += l);
    d += h;
    let m = i.Z.getLongAt(n, d);
    if (d += c, e === s) {
      let e = (0, r.Wp)(n.buffer, d, m),
        i = {
          id: _,
          value: (0, r.oH)(e, 0, m)
        };
      if (o.Z[_]) {
        try {
          i.description = o.Z[_].description(e)
        } catch (e) {
          i.description = "<no description formatter>"
        }
        a[p || o.Z[_].name] = i
      } else t && (a[`undefined-${_}`] = i)
    }
    d += m + m % 2
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