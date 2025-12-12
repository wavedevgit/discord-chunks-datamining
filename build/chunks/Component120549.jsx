/** Chunk was on 69844 **/
/** chunk id: 120549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => _,
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk678694 = require("./678694.js"),
  Chunk216780 = require("./216780.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk647803 = require("./647803.js");

function g(e) {
  let {
    category: t,
    count: n,
    onSelectCategory: a,
    selected: s
  } = e, c = i.useCallback(() => {
    a(t.id)
  }, [t.id, a]), u = n.toLocaleString(d.default.locale);
  return (0, r.jsxs)(o.P3F, {
    onClick: c,
    className: l()(h.category, {
      [h.selected]: s
    }),
    children: [(0, r.jsx)(o.Text, {
      className: h.name,
      variant: "text-sm/medium",
      color: "text-strong",
      children: t.name
    }), (0, r.jsx)(o.Text, {
      className: h.count,
      variant: "text-sm/normal",
      color: "text-muted",
      children: u
    })]
  })
}

function f(e) {
  let {
    countsByCategory: t,
    onSelectCategory: n,
    selectedCategoryId: a
  } = e, l = (0, s.e7)([u.Z], () => u.Z.getCategories()), o = i.useMemo(() => [(0, p.KQ)(), ...l.filter(e => {
    var n;
    return (null != (n = t[e.id]) ? n : 0) !== 0
  })], [l, t]);
  return 0 === o.length ? null : (0, r.jsx)("div", {
    className: h.categories,
    children: o.map(e => {
      var i;
      let l = e.id,
        s = null != (i = t[l]) ? i : 0;
      return (0, r.jsx)(g, {
        category: e,
        count: s,
        selected: l === a,
        onSelectCategory: () => n(e)
      }, l)
    })
  })
}

function _(e) {
  var t;
  let {
    countsByCategory: n,
    onSelectCategory: a,
    selectedCategoryId: l
  } = e, d = (0, s.e7)([u.Z], () => u.Z.getCategories()), g = i.useMemo(() => [(0, p.KQ)(), ...d.filter(e => {
    var t;
    return (null != (t = n[e.id]) ? t : 0) !== 0
  })], [d, n]), f = i.useMemo(() => g.map(e => ({
    id: "".concat(e.id),
    label: (0, r.jsx)(c.iG, {
      count: n[e.id],
      name: e.name
    })
  })), [g, n]), _ = i.useCallback(e => {
    let t = g.find(t => t.id === Number(e));
    null != t && a(t)
  }, [a, g]), b = i.useMemo(() => g.find(e => e.id === l), [l, g]);
  return 0 === f.length ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: m.intl.string(m.t.f09BQJ)
    }), (0, r.jsx)(c.ZP, {
      items: f,
      title: null != (t = null == b ? true : b.name) ? t : "",
      onSelect: _,
      selected: "".concat(l),
      "aria-label": m.intl.string(m.t.WHdCwR),
      variant: c.PA.FILLED
    })]
  })
}