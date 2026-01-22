/** Chunk was on 59275 **/
/** chunk id: 212602, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk401864 = require("./401864.js"),
  Chunk124987 = require("./124987.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk365491 = require("./365491.js"),
  Chunk938191 = require("./938191.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk785244 = require("./785244.js"),
  Chunk816917 = require("./816917.js");
let v = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: l
  } = (0, f.v)(), s = (0, d.uM)(), v = (0, b.y)("CollectiblesSortSelect"), A = l(), x = r.useMemo(() => g.QB.filter(e => e.sortType !== o.$.RELEVANCE || A), [A]), S = r.useCallback(e => {
    let {
      sortType: t,
      sortDirection: l
    } = e;
    return t === o.$.RECENCY ? {
      label: m.intl.string(m.t["51Bhiz"]),
      value: "recent",
      id: "recent"
    } : t === o.$.PRICE ? l === i.A.ASC ? {
      label: m.intl.string(m.t.m8RVU2),
      value: "price-asc",
      id: "price-asc"
    } : {
      label: m.intl.string(m.t.zBwQJO),
      value: "price-desc",
      id: "price-desc"
    } : t === o.$.RELEVANCE ? {
      label: m.intl.string(m.t["XoeT/z"]),
      value: "relevance",
      id: "relevance"
    } : {
      label: m.intl.string(m.t.Y68e5p),
      value: "popularity",
      id: "popularity"
    }
  }, []), C = r.useCallback(e => ({
    recent: {
      sortType: o.$.RECENCY,
      sortDirection: i.A.DESC
    },
    "price-asc": {
      sortType: o.$.PRICE,
      sortDirection: i.A.ASC
    },
    "price-desc": {
      sortType: o.$.PRICE,
      sortDirection: i.A.DESC
    },
    popularity: {
      sortType: o.$.POPULARITY,
      sortDirection: i.A.DESC
    },
    relevance: {
      sortType: o.$.RELEVANCE,
      sortDirection: i.A.DESC
    }
  })[e], []), O = r.useCallback(e => {
    let l = S(C(e));
    u.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == s ? true : s.sessionId,
      page_section: null == s ? true : s.pageSection,
      page_category: null == s ? true : s.pageCategory,
      page_index: null == s ? true : s.pageIndex,
      page_size: null == s ? true : s.pageSize,
      cta_name: "sort by ".concat(l.label.toLowerCase()),
      page_type: "catalog"
    }), t(C(e))
  }, [s, S, C, t]), _ = S(e);
  return (0, n.jsx)("div", {
    className: a()(h.k, {
      [E.T3]: v
    }),
    children: (0, n.jsx)(c.l6P, {
      label: m.intl.string(m.t.uaX705),
      hideLabel: true,
      options: x.map(S),
      onSelectionChange: O,
      value: _.value,
      selectionMode: "single",
      fullWidth: true
    })
  })
}