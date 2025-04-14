/** Chunk was on 95257 **/
l.d(n, {
  Z: () => v,
  q: () => j
}), l(290780);
var t = l(200651),
  i = l(192379),
  o = l(120356),
  a = l.n(o),
  r = l(442837),
  d = l(481060),
  c = l(565138),
  s = l(993413),
  u = l(430824),
  h = l(771845),
  m = l(823379),
  x = l(778825),
  g = l(388032),
  f = l(835813);

function v(e) {
  let {
    guildId: n,
    className: l,
    globalOption: i,
    hideDivider: o = !1,
    onChange: r,
    renderOptionSuffix: d
  } = e;
  return (0, t.jsx)(s.Z, {
    className: a()(f.section, l),
    title: g.NW.string(g.t.ref7Ki),
    hideDivider: o,
    forcedDivider: !0,
    children: (0, t.jsx)(j, {
      guildId: n,
      onChange: r,
      renderOptionSuffix: d,
      globalOption: i
    })
  })
}

function j(e) {
  let {
    guildId: n,
    globalOption: l,
    onChange: o,
    renderOptionSuffix: a
  } = e, s = (0, r.e7)([x.Z], () => x.Z.showNotice()), v = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()), j = (0, r.e7)([u.Z], () => u.Z.getGuilds()), p = i.useMemo(() => {
    let e = v.map(e => {
      let n = j[e];
      return null == n ? null : {
        label: n.name,
        value: n.id
      }
    }).filter(m.lm);
    return null != l && e.unshift(l), e
  }, [v, j, l]), N = i.useCallback(e => {
    let n = (null == e ? void 0 : e.label) === (null == l ? void 0 : l.label) && (null == e ? void 0 : e.value) === (null == l ? void 0 : l.value);
    return null == e || "" === e.value || n ? null : (0, t.jsx)(c.Z, {
      className: f.guildSelectOptionIcon,
      guild: j[e.value],
      size: c.Z.Sizes.SMOL,
      active: !0
    })
  }, [j, l]);
  return (0, t.jsx)(d.VcW, {
    isDisabled: s,
    onChange: e => {
      if ("" === e || e === (null == l ? void 0 : l.value)) return void o(null);
      let n = j[e];
      null != n && o(n)
    },
    value: n,
    options: p,
    renderOptionPrefix: N,
    renderOptionSuffix: a,
    placeholder: g.NW.string(g.t["kMgj+f"])
  })
}