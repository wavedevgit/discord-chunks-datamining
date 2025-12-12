/** Chunk was on web.js **/
/** chunk id: 320215, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  let r, i = n,
    o;
  for (let n of e.fields) {
    let e = n.localName;
    if (n.oneof) {
      let a = i[n.oneof];
      if ((null == a ? true : a.oneofKind) == true) continue;
      if (r = a[e], (o = t[n.oneof]).oneofKind = a.oneofKind, true == r) {
        delete o[e];
        continue
      }
    } else if (r = i[e], o = t, true == r) continue;
    switch (n.repeat && (o[e].length = r.length), n.kind) {
      case "scalar":
      case "enum":
        if (n.repeat)
          for (let t = 0; t < r.length; t++) o[e][t] = r[t];
        else o[e] = r;
        break;
      case "message":
        let a = n.T();
        if (n.repeat)
          for (let t = 0; t < r.length; t++) o[e][t] = a.create(r[t]);
        else true === o[e] ? o[e] = a.create(r) : a.mergePartial(o[e], r);
        break;
      case "map":
        switch (n.V.kind) {
          case "scalar":
          case "enum":
            Object.assign(o[e], r);
            break;
          case "message":
            let s = n.V.T();
            for (let t of Object.keys(r)) o[e][t] = s.create(r[t])
        }
    }
  }
}
require.d(exports, {
  l: () => r
})