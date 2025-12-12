/** Chunk was on web.js **/
/** chunk id: 19467, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => i,
  w: () => r
});
class r {
  refine(e, t) {
    return t.filter(t => this.isValid(e, t))
  }
}
class i {
  refine(e, t) {
    if (t.length < 2) return t;
    let n = [],
      r = t[0],
      i = null;
    for (let o = 1; o < t.length; o++) {
      i = t[o];
      let a = e.text.substring(r.index + r.text.length, i.index);
      if (this.shouldMergeResults(a, r, i, e)) {
        let t = r,
          n = i,
          o = this.mergeResults(a, t, n, e);
        e.debug(() => {
          console.log(`${this.constructor.name} merged ${t} and ${n} into ${o}`)
        }), r = o
      } else n.push(r), r = i
    }
    return null != r && n.push(r), n
  }
}