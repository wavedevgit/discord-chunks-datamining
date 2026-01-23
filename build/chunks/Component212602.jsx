/** Chunk was on 59275 **/
/** chunk id: 212602, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
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
let E = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, g.v)(), s = (0, d.uM)(), E = (0, f.y)("CollectiblesSortSelect"), v = n(), C = l.useMemo(() => m.QB.filter(e => e.sortType !== o.$.RELEVANCE || v), [v]), A = l.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === o.$.RECENCY ? {
      label: _.intl.string(_.t["51Bhiz"]),
      value: "recent",
      id: "recent"
    } : t === o.$.PRICE ? n === i.A.ASC ? {
      label: _.intl.string(_.t.m8RVU2),
      value: "price-asc",
      id: "price-asc"
    } : {
      label: _.intl.string(_.t.zBwQJO),
      value: "price-desc",
      id: "price-desc"
    } : t === o.$.RELEVANCE ? {
      label: _.intl.string(_.t["XoeT/z"]),
      value: "relevance",
      id: "relevance"
    } : {
      label: _.intl.string(_.t.Y68e5p),
      value: "popularity",
      id: "popularity"
    }
  }, []), x = l.useCallback(e => ({
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
  })[e], []), S = l.useCallback(e => {
    let n = A(x(e));
    u.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == s ? true : s.sessionId,
      page_section: null == s ? true : s.pageSection,
      page_category: null == s ? true : s.pageCategory,
      page_index: null == s ? true : s.pageIndex,
      page_size: null == s ? true : s.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(x(e))
  }, [s, A, x, t]), O = A(e);
  return (0, r.jsx)("div", {
    className: a()(b.k, {
      [h.T3]: E
    }),
    children: (0, r.jsx)(c.l6P, {
      label: _.intl.string(_.t.uaX705),
      hideLabel: true,
      options: C.map(A),
      onSelectionChange: S,
      value: O.value,
      selectionMode: "single",
      fullWidth: true
    })
  })
}