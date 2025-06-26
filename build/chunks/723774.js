/** Chunk was on 39797 **/
l.d(t, {
  WE: () => u,
  lE: () => i
});
var n = l(709054),
  r = l(124368),
  a = l(388032);
let s = e => n.default.compare("992549565104128000", e) > -1,
  i = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let l = s(t);
      return (null == t || l) && e >= r.vw ? "50+" : e >= r.M3 ? "100k+" : "".concat(e)
    }
  },
  o = (e, t, l) => {
    let n = i(e, l);
    return "0" === n ? a.intl.string(a.t.eXHkho) : a.intl.formatToPlainString(t, {
      count: n
    })
  },
  u = (e, t) => o(e, a.t.rfAXDQ, t)