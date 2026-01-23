/** Chunk was on 28636 **/
/** chunk id: 497773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => u
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk620140 = require("./620140.js"),
  Chunk38181 = require("./38181.js"),
  Chunk412461 = require("./412461.js"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let t = (0, l.bG)([a.A], () => a.A.getCategories()),
    n = (0, i.A)(),
    u = r.useMemo(() => [{
      id: n.id.toString(),
      label: n.name
    }, ...t.map(e => ({
      id: e.id.toString(),
      label: e.name
    }))], [t, n]),
    p = (0, o.R4)(),
    h = r.useCallback(e => {
      let t = u.find(t => t.id === e);
      null != t && ((0, s.TR)(d.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
        category: t.label,
        category_id: Number(t.id),
        current_page: null == p ? true : p.type
      }), (0, c.kq)({
        categoryId: e
      }))
    }, [null == p ? true : p.type, u]),
    m = null != e && u.some(t => t.id === e) ? e : u[0].id;
  return {
    tabs: u,
    selectedTab: m,
    onSelectTab: h
  }
}