/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
let t = /^[0-9]+$/,
  n = (e, n) => {
    let r = t.test(e),
      i = t.test(n);
    return r && i && (e *= 1, n *= 1), e === n ? 0 : r && !i ? -1 : i && !r ? 1 : e < n ? -1 : 1
  },
  r = (e, t) => n(t, e);
e.exports = {
  compareIdentifiers: n,
  rcompareIdentifiers: r
}