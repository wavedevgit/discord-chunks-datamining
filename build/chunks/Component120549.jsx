/** Chunk was on 69844 **/
/** chunk id: 120549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => f,
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    onSelectCategory: i,
    selected: s
  } = e, c = a.useCallback(() => {
    i(t.id)
  }, [t.id, i]), u = n.toLocaleString(d.default.locale);
  return (0, r.jsxs)(o.P3F, {
    onClick: c,
    className: l()(h.category, {
      [h.selected]: s
    }),
    children: [(0, r.jsx)(o.Text, {
      className: h.name,
      variant: "text-sm/medium",
      color: "header-primary",
      children: t.name
    }), (0, r.jsx)(o.Text, {
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
    selectedCategoryId: i
  } = e, l = (0, s.e7)([u.Z], () => u.Z.getCategories()), o = a.useMemo(() => [(0, p.KQ)(), ...l.filter(e => {
    var n;
    return (null != (n = t[e.id]) ? n : 0) !== 0
  })], [l, t]);
  return 0 === o.length ? null : (0, r.jsx)("div", {
    className: h.categories,
    children: o.map(e => {
      var a;
      let l = e.id,
        s = null != (a = t[l]) ? a : 0;
      return (0, r.jsx)(g, {
        category: e,
        count: s,
        selected: l === i,
        onSelectCategory: () => n(e)
      }, l)
    })
  })
}

function f(e) {
  var t;
  let {
    countsByCategory: n,
    onSelectCategory: i,
    selectedCategoryId: l
  } = e, d = (0, s.e7)([u.Z], () => u.Z.getCategories()), g = a.useMemo(() => [(0, p.KQ)(), ...d.filter(e => {
    var t;
    return (null != (t = n[e.id]) ? t : 0) !== 0
  })], [d, n]), _ = a.useMemo(() => g.map(e => ({
    id: "".concat(e.id),
    label: (0, r.jsx)(c.iG, {
      count: n[e.id],
      name: e.name
    })
  })), [g, n]), f = a.useCallback(e => {
    let t = g.find(t => t.id === Number(e));
    null != t && i(t)
  }, [i, g]), b = a.useMemo(() => g.find(e => e.id === l), [l, g]);
  return 0 === _.length ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: m.intl.string(m.t.f09BQJ)
    }), (0, r.jsx)(c.ZP, {
      items: _,
      title: null != (t = null == b ? true : b.name) ? t : "",
      onSelect: f,
      selected: "".concat(l),
      "aria-label": m.intl.string(m.t.WHdCwR),
      variant: c.PA.FILLED
    })]
  })
}