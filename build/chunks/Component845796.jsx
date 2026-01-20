/** Chunk was on 45620 **/
/** chunk id: 845796, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk501431 = require("./501431.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk259163 = require("./259163.js"),
  Chunk868090 = require("./868090.js");
let E = () => {
  let {
    sort: e,
    onSetSort: t,
    hasRelevanceFilters: n
  } = (0, f.S)(), a = (0, d.sp)(), E = (0, g.B)("CollectiblesSortSelect"), v = n(), x = l.useMemo(() => b.aP.filter(e => e.sortType !== o.E.RELEVANCE || v), [v]), S = l.useCallback(e => {
    let {
      sortType: t,
      sortDirection: n
    } = e;
    return t === o.E.RECENCY ? {
      label: h.intl.string(h.t["51Bhiz"]),
      value: "recent",
      id: "recent"
    } : t === o.E.PRICE ? n === i.F.ASC ? {
      label: h.intl.string(h.t.m8RVU2),
      value: "price-asc",
      id: "price-asc"
    } : {
      label: h.intl.string(h.t.zBwQJO),
      value: "price-desc",
      id: "price-desc"
    } : t === o.E.RELEVANCE ? {
      label: h.intl.string(h.t["XoeT/z"]),
      value: "relevance",
      id: "relevance"
    } : {
      label: h.intl.string(h.t.Y68e5p),
      value: "popularity",
      id: "popularity"
    }
  }, []), O = l.useCallback(e => ({
    recent: {
      sortType: o.E.RECENCY,
      sortDirection: i.F.DESC
    },
    "price-asc": {
      sortType: o.E.PRICE,
      sortDirection: i.F.ASC
    },
    "price-desc": {
      sortType: o.E.PRICE,
      sortDirection: i.F.DESC
    },
    popularity: {
      sortType: o.E.POPULARITY,
      sortDirection: i.F.DESC
    },
    relevance: {
      sortType: o.E.RELEVANCE,
      sortDirection: i.F.DESC
    }
  })[e], []), _ = l.useCallback(e => {
    let n = S(O(e));
    u.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == a ? true : a.sessionId,
      page_section: null == a ? true : a.pageSection,
      page_category: null == a ? true : a.pageCategory,
      page_index: null == a ? true : a.pageIndex,
      page_size: null == a ? true : a.pageSize,
      cta_name: "sort by ".concat(n.label.toLowerCase()),
      page_type: "catalog"
    }), t(O(e))
  }, [a, S, O, t]), y = S(e);
  return (0, r.jsx)("div", {
    className: s()(m.container, {
      [C.customCursors]: E
    }),
    children: (0, r.jsx)(c.PhF, {
      label: h.intl.string(h.t.uaX705),
      hideLabel: true,
      options: x.map(S),
      onSelectionChange: _,
      value: y.value,
      selectionMode: "single",
      fullWidth: true
    })
  })
}