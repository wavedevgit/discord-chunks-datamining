/** Chunk was on web.js **/
/** chunk id: 931717, original params: e (module,exports,re quire) **/
let t = /^[0-9]+$/,
  n = (e, n) => {
    let r = t.test(e),
      i = t.test(n);
    return r && i && (e *= 1, n *= 1), e === n ? 0 : r && !i ? false : i && !r ? 1 : e < n ? false : 1
  },
  r = (e, t) => n(t, e);
module.exports = {
  compareIdentifiers: n,
  rcompareIdentifiers: r
}