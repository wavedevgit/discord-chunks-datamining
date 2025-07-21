/** Chunk was on 85352 **/
r.d(t, {
  WE: () => d,
  lE: () => l
});
var a = r(709054),
  n = r(124368),
  o = r(388032);
let i = e => a.default.compare("992549565104128000", e) > -1,
  l = (e, t) => {
    if (null == e || e < 0) return "0";
    {
      let r = i(t);
      return (null == t || r) && e >= n.vw ? "50+" : e >= n.M3 ? "100k+" : "".concat(e)
    }
  },
  c = (e, t, r) => {
    let a = l(e, r);
    return "0" === a ? o.intl.string(o.t.eXHkho) : o.intl.formatToPlainString(t, {
      count: a
    })
  },
  d = (e, t) => c(e, o.t.rfAXDQ, t)