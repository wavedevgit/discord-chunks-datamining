/** Chunk was on 37697 **/
n.d(t, {
  V: () => f,
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(442837),
  s = n(481060),
  c = n(89182),
  d = n(706454),
  u = n(678694),
  p = n(216780),
  m = n(388032),
  h = n(43147);

function g(e) {
  let {
    category: t,
    count: n,
    onSelectCategory: a,
    selected: o
  } = e, c = i.useCallback(() => {
    a(t.id)
  }, [t.id, a]), u = n.toLocaleString(d.default.locale);
  return (0, r.jsxs)(s.P3F, {
    onClick: c,
    className: l()(h.category, {
      [h.selected]: o
    }),
    children: [(0, r.jsx)(s.Text, {
      className: h.name,
      variant: "text-sm/medium",
      color: "header-primary",
      children: t.name
    }), (0, r.jsx)(s.Text, {
      className: h.count,
      variant: "text-sm/normal",
      color: "text-muted",
      children: u
    })]
  })
}

function _(e) {
  let {
    countsByCategory: t,
    onSelectCategory: n,
    selectedCategoryId: a
  } = e, l = (0, o.e7)([u.Z], () => u.Z.getCategories()), s = i.useMemo(() => [(0, p.KQ)(), ...l.filter(e => {
    var n;
    return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0
  })], [l, t]);
  return 0 === s.length ? null : (0, r.jsx)("div", {
    className: h.categories,
    children: s.map(e => {
      var i;
      let l = e.id,
        o = null !== (i = t[l]) && void 0 !== i ? i : 0;
      return (0, r.jsx)(g, {
        category: e,
        count: o,
        selected: l === a,
        onSelectCategory: () => n(e)
      }, l)
    })
  })
}

function f(e) {
  var t;
  let {
    countsByCategory: n,
    onSelectCategory: a,
    selectedCategoryId: l
  } = e, d = (0, o.e7)([u.Z], () => u.Z.getCategories()), g = i.useMemo(() => [(0, p.KQ)(), ...d.filter(e => {
    var t;
    return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0
  })], [d, n]), _ = i.useMemo(() => g.map(e => ({
    id: "".concat(e.id),
    label: (0, r.jsx)(c.iG, {
      count: n[e.id],
      name: e.name
    })
  })), [g, n]), f = i.useCallback(e => {
    let t = g.find(t => t.id === Number(e));
    null != t && a(t)
  }, [a, g]), b = i.useMemo(() => g.find(e => e.id === l), [l, g]);
  return 0 === _.length ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: m.NW.string(m.t.f09BQE)
    }), (0, r.jsx)(c.ZP, {
      items: _,
      title: null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : "",
      onSelect: f,
      selected: "".concat(l),
      "aria-label": m.NW.string(m.t.WHdCwc),
      variant: c.PA.FILLED
    })]
  })
}