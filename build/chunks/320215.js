/** Chunk was on web.js **/
/** chunk id: 320215, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  let r, i = n,
    a;
  for (let n of e.fields) {
    let e = n.localName;
    if (n.oneof) {
      let o = i[n.oneof];
      if ((null == o ? true : o.oneofKind) == true) continue;
      if (r = o[e], (a = t[n.oneof]).oneofKind = o.oneofKind, true == r) {
        delete a[e];
        continue
      }
    } else if (r = i[e], a = t, true == r) continue;
    switch (n.repeat && (a[e].length = r.length), n.kind) {
      case "scalar":
      case "enum":
        if (n.repeat)
          for (let t = 0; t < r.length; t++) a[e][t] = r[t];
        else a[e] = r;
        break;
      case "message":
        let o = n.T();
        if (n.repeat)
          for (let t = 0; t < r.length; t++) a[e][t] = o.create(r[t]);
        else true === a[e] ? a[e] = o.create(r) : o.mergePartial(a[e], r);
        break;
      case "map":
        switch (n.V.kind) {
          case "scalar":
          case "enum":
            Object.assign(a[e], r);
            break;
          case "message":
            let s = n.V.T();
            for (let t of Object.keys(r)) a[e][t] = s.create(r[t])
        }
    }
  }
}
require.d(exports, {
  l: () => r
})