/** Chunk was on 15814 **/
r.d(t, {
  Z: () => s
});
var n = r(200651),
  l = r(192379),
  i = r(481060),
  a = r(412899),
  o = r(231338);

function s(e) {
  var t;
  let {
    guildId: r,
    role: s,
    className: h,
    canRemove: c = !1,
    onRemove: v = o.dG
  } = e, u = (0, i.dQu)(i.TVs.unsafe_rawColors.PRIMARY_300).hex(), d = null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : u, E = l.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == s ? null : (0, n.jsx)(i.P3F, {
    children: (0, n.jsx)(a.UB, {
      className: h,
      style: E,
      role: s,
      guildId: r,
      canRemove: c,
      onRemove: v
    })
  })
}