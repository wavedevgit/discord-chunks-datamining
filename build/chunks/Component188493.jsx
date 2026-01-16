/** Chunk was on 1272 **/
/** chunk id: 188493, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk762692 = require("./762692.js"),
  Chunk959165 = require("./959165.js"),
  Chunk164991 = require("./164991.js"),
  Chunk726115 = require("./726115.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    loadId: t
  } = e, n = (0, l.e7)([o.default], () => (0, d.Xp)([o.default])), g = u.Z.useField("languageCode"), h = null != g ? g : n, m = i.useCallback(e => {
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
  })), []), E = i.useMemo(() => {
    var e;
    let t = (0, p.Cf)().find(e => e.code === h);
    return null != (e = null == t ? true : t.name) ? e : f.intl.string(f.t.LQLMGP)
  }, [h]);
  return (0, r.jsx)(a.ZP, {
    items: b,
    title: E,
    onSelect: m,
    selected: h,
    "aria-label": f.intl.string(f.t.Ng5cTK)
  })
}