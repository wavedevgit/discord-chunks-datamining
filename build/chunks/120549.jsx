/** Chunk was on 88934 **/
/** chunk id: 120549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => _,
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk678694 = require("./678694.js"),
  Chunk216780 = require("./216780.js"),
  Chunk388032 = require("./388032.js"),
  Chunk129826 = require("./129826.js");

function g(e) {
  let {
    category: t,
    count: n,
    onSelectCategory: i,
    selected: s
  } = e, c = a.useCallback(() => {
    i(t.id)
  }, [t.id, i]), u = n.toLocaleString(d.default.locale);
  return <o.P3F onClick={c} className={l()(h.category, {
      [h.selected]: s
    })}>{<o.Text className={h.name} variant={"text-sm/medium"} color={"header-primary"}>{t.name}</o.Text>}{<o.Text className={h.count} variant={"text-sm/normal"} color={"text-muted"}>{u}</o.Text>}</o.P3F>
}

function f(e) {
  let {
    countsByCategory: t,
    onSelectCategory: n,
    selectedCategoryId: i
  } = e, l = (0, s.e7)([u.Z], () => u.Z.getCategories()), o = a.useMemo(() => [(0, p.KQ)(), ...l.filter(e => {
    var n;
    return (null != (n = t[e.id]) ? n : 0) !== 0
  })], [l, t]);
  return 0 === o.length ? null : <div className={h.categories}>{o.map(e => {
      var a;
      let l = e.id,
        s = null != (a = t[l]) ? a : 0;
      return (0, r.jsx)(g, {
        category: e,
        count: s,
        selected: l === i,
        onSelectCategory: () => n(e)
      }, l)
    })}</div>
}

function _(e) {
  var t;
  let {
    countsByCategory: n,
    onSelectCategory: i,
    selectedCategoryId: l
  } = e, d = (0, s.e7)([u.Z], () => u.Z.getCategories()), g = a.useMemo(() => [(0, p.KQ)(), ...d.filter(e => {
    var t;
    return (null != (t = n[e.id]) ? t : 0) !== 0
  })], [d, n]), f = a.useMemo(() => g.map(e => ({
    id: "".concat(e.id),
    label: <c.iG count={n[e.id]} name={e.name} />
  })), [g, n]), _ = a.useCallback(e => {
    let t = g.find(t => t.id === Number(e));
    null != t && i(t)
  }, [i, g]), b = a.useMemo(() => g.find(e => e.id === l), [l, g]);
  return 0 === f.length ? null : <div className={h.container}>{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{m.intl.string(m.t.f09BQE)}</o.Text>}{<c.ZP items={f} title={null != (t = null == b ? true : b.name) ? t : ""} onSelect={_} selected={"".concat(l)} aria-label={m.intl.string(m.t.WHdCwc)} variant={c.PA.FILLED} />}</div>
}