/** Chunk was on 15909 **/
n.d(t, {
  Z: () => s
});
var r = n(192379),
  i = n(817460),
  o = n(293810),
  l = n(474936),
  a = n(388032);

function s(e) {
  return r.useMemo(() => {
    var t;
    let n = o.DN.map(e => ({
        value: e,
        label: e.interval === l.rV.DAY && 7 === e.interval_count ? a.NW.formatToPlainString(a.t.XfSsr6, {
          defaultLimit: (0, i.iG)(e)
        }) : (0, i.iG)(e),
        isDefault: e.interval === l.rV.DAY && 7 === e.interval_count
      })),
      r = null != e ? null === (t = n.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
    return {
      options: n,
      selectedOption: r
    }
  }, [e])
}