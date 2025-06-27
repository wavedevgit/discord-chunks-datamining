/** Chunk was on 89149 **/
n.d(e, {
  WE: () => c,
  lE: () => o
});
var r = n(709054),
  i = n(124368),
  l = n(388032);
let a = t => r.default.compare("992549565104128000", t) > -1,
  o = (t, e) => {
    if (null == t || t < 0) return "0";
    {
      let n = a(e);
      return (null == e || n) && t >= i.vw ? "50+" : t >= i.M3 ? "100k+" : "".concat(t)
    }
  },
  u = (t, e, n) => {
    let r = o(t, n);
    return "0" === r ? l.intl.string(l.t.eXHkho) : l.intl.formatToPlainString(e, {
      count: r
    })
  },
  c = (t, e) => u(t, l.t.rfAXDQ, e)