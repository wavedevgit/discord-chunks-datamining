/** Chunk was on 93964 **/
/** chunk id: 490093, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  D2: () => n,
  nL: () => l
});
let n = 3e3,
  o = {
    EARN: .25,
    SPEND: .3
  },
  l = (e, t) => {
    let r = e > 0,
      n = t * o[r ? "EARN" : "SPEND"];
    return {
      duration: n,
      delay: r ? t - n : 0
    }
  }