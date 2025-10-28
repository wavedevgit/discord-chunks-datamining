/** Chunk was on 75215 **/
/** chunk id: 490093, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  D2: () => n,
  nL: () => o
});
let n = 3e3,
  l = {
    EARN: .25,
    SPEND: .3
  },
  o = (e, t) => {
    let r = e > 0,
      n = t * l[r ? "EARN" : "SPEND"];
    return {
      duration: n,
      delay: r ? t - n : 0
    }
  }