/** Chunk was on 71172 **/
/** chunk id: 426517, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fp: () => r,
  GW: () => a,
  JB: () => u,
  NM: () => i,
  VV: () => o,
  ze: () => s
});
let o = Math.min,
  r = Math.max,
  i = Math.round,
  a = Math.floor,
  s = e => ({
    x: e,
    y: e
  });

function u(e) {
  let {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  }
}