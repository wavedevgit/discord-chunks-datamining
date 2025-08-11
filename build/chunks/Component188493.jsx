/** Chunk was on 1272 **/
/** chunk id: 188493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk762692 = require("./762692.js"),
  Chunk959165 = require("./959165.js"),
  Chunk164991 = require("./164991.js"),
  Chunk726115 = require("./726115.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    loadId: t
  } = e, n = (0, l.e7)([o.default], () => (0, d.Xp)([o.default])), f = u.Z.useField("languageCode"), g = null != f ? f : n, m = i.useCallback(e => {
    u.Z.setState({
      languageCode: e
    });
    let n = u.Z.getField("fetchedQuery");
    s.Z.clearSearchResults({
      ignoreQueries: [n]
    }), c.Z.loadCategoryResults({
      loadId: t,
      categoryId: u.Z.getField("categoryId"),
      query: n,
      languageCode: e
    })
  }, [t]), b = i.useMemo(() => (0, p.Cf)().map(e => ({
    id: e.code,
    label: e.name
  })), []), _ = i.useMemo(() => {
    var e;
    let t = (0, p.Cf)().find(e => e.code === g);
    return null != (e = null == t ? true : t.name) ? e : h.intl.string(h.t.LQLMGB)
  }, [g]);
  return (0, r.jsx)(a.ZP, {
    items: b,
    title: _,
    onSelect: m,
    selected: g,
    "aria-label": h.intl.string(h.t.Ng5cTE)
  })
}