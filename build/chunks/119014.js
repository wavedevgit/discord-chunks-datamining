/** Chunk was on 84283 **/
/** chunk id: 119014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => u
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk493646 = require("./493646.js"),
  Chunk678694 = require("./678694.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let t = (0, a.e7)([l.Z], () => l.Z.getCategories()),
    n = (0, i.K)(),
    u = r.useMemo(() => [{
      id: n.id.toString(),
      label: n.name
    }, ...t.map(e => ({
      id: e.id.toString(),
      label: e.name
    }))], [t, n]),
    p = (0, o.Xh)(),
    m = r.useCallback(e => {
      let t = u.find(t => t.id === e);
      null != t && ((0, s.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: t.label,
        category_id: Number(t.id),
        current_page: null == p ? true : p.type
      }), (0, c.O4)({
        categoryId: e
      }))
    }, [null == p ? true : p.type, u]),
    h = null != e && u.some(t => t.id === e) ? e : u[0].id;
  return {
    tabs: u,
    selectedTab: h,
    onSelectTab: m
  }
}