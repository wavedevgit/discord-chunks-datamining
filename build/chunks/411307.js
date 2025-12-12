/** Chunk was on web.js **/
/** chunk id: 411307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
class r {
  refine(e, t) {
    if (t.length < 2) return t;
    let n = [],
      r = t[0];
    for (let i = 1; i < t.length; i++) {
      let o = t[i];
      if (o.index >= r.index + r.text.length) {
        n.push(r), r = o;
        continue
      }
      let a = null,
        s = null;
      o.text.length > r.text.length ? (a = o, s = r) : (a = r, s = o), e.debug(() => {
        console.log(`${this.constructor.name} remove ${s} by ${a}`)
      }), r = a
    }
    return null != r && n.push(r), n
  }
}