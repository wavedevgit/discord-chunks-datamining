/** Chunk was on 94289 **/
n.d(t, {
  Z: () => o
});
var r = n(200651),
  l = n(192379),
  a = n(481060),
  i = n(412899),
  s = n(231338);

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    className: E,
    canRemove: c = !1,
    onRemove: u = s.dG
  } = e, _ = (0, a.dQu)(a.TVs.unsafe_rawColors.PRIMARY_300).hex(), d = null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : _, A = l.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == o ? null : (0, r.jsx)(a.P3F, {
    children: (0, r.jsx)(i.UB, {
      className: E,
      style: A,
      role: o,
      guildId: n,
      canRemove: c,
      onRemove: u
    })
  })
}