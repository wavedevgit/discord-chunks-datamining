/** Chunk was on 37865 **/
n.d(t, {
  Z: () => o
});
var r = n(200651),
  l = n(192379),
  a = n(481060),
  s = n(412899),
  i = n(231338);

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    className: E,
    canRemove: c = !1,
    onRemove: u = i.dG
  } = e, d = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), _ = null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : d, A = l.useMemo(() => ({
    backgroundColor: "".concat(_, "27")
  }), [_]);
  return null == o ? null : (0, r.jsx)(a.P3F, {
    children: (0, r.jsx)(s.UB, {
      className: E,
      style: A,
      role: o,
      guildId: n,
      canRemove: c,
      onRemove: u
    })
  })
}