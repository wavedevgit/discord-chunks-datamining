/** Chunk was on 55305 **/
a.d(t, {
  WE: () => d,
  lE: () => l
});
var r = a(709054),
  n = a(124368),
  o = a(388032);
let i = e => r.default.compare("992549565104128000", e) > -1,
  l = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let a = i(t);
      return (null == t || a) && e >= n.vw ? "50+" : e >= n.M3 ? "100k+" : "".concat(e)
    }
  },
  c = (e, t, a) => {
    let r = l(e, a);
    return "0" === r ? o.intl.string(o.t.eXHkho) : o.intl.formatToPlainString(t, {
      count: r
    })
  },
  d = (e, t) => c(e, o.t.rfAXDQ, t)