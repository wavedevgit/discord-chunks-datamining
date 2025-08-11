/** Chunk was on 45620 **/
/** chunk id: 193227, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.js"),
  Chunk870289 = require("./870289.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk823941 = require("./823941.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.js"),
  Chunk258939 = require("./258939.js"),
  Chunk81136 = require("./81136.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk484920 = require("./484920.js");

function y(e) {
  let {
    products: t,
    header: n,
    category: l
  } = e, a = (0, o.e7)([u.default], () => u.default.getCurrentUser()), i = (0, C.St)(t);
  return null == a || 0 === t.length ? null : <div>{null != n ? <s.Text className={S.itemTypeTitle} color={"header-secondary"} variant={"text-sm/bold"}>{n}</s.Text> : <s.LZC size={24} />}{<div className={S.cardsContainer}>{i.map((e, t) => (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(_.Z, {
          category: l,
          product: e,
          user: a,
          tab: E.AW.CATALOG
        }, e.skuId)
      }, e.skuId))}</div>}</div>
}

function x(e) {
  let {
    category: t
  } = e, n = (0, f.l)(t.products), l = (0, g.a)()(n);
  return <y products={l} category={t} />
}

function j(e) {
  let {
    category: t,
    isFullScreen: n
  } = e, [a, i] = l.useState(false), o = (0, c.O)(e => {
    i(e)
  }, n ? .13 : .15);
  return <div className={S.categoryWrapper} ref={o}>{<h.Z category={t} hideLimitedTimeBadge={false} />}{<x category={t} />}</div>
}

function T(e) {
  var t;
  let {
    sortedCategories: n,
    setCategoryRef: a,
    isFullScreen: o,
    currentPage: c,
    handlePageChange: u
  } = e, g = (0, d.sp)(), f = (0, v.R)(), h = null != (t = null == g ? true : g.sessionId) ? t : "", {
    noCache: _,
    includeUnpublished: C
  } = (0, O.Z)(), y = l.useMemo(() => n.filter(e => null == e.unpublishedAt || e.unpublishedAt > new Date).filter(e => {
    let {
      products: t
    } = e;
    return t.length > 0
  }), [n]), x = l.useMemo(() => {
    let e = (c - 1) * E.kN;
    return y.slice(e, e + E.kN)
  }, [y, c]);
  l.useEffect(() => {
    (0, b.n)({
      sessionId: h,
      checkpoint: b.a.SHOP_MOUNTED,
      tab: E.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, []), l.useEffect(() => {
    f || 0 === x.length || (0, b.n)({
      sessionId: h,
      checkpoint: b.a.SHOP_RENDERED,
      tab: E.AW.CATALOG,
      isFullScreen: o,
      unpublishedCategoriesShown: C,
      cacheDisabled: _
    })
  }, [h, o, C, _, f, x.length]);
  let T = (0, p.FF)("CollectiblesBrowse");
  return f ? <m.Z /> : <div className={i()(S.categories, {
      [S.categoriesNoFilter]: !T
    })}>{x.map((e, t) => <div ref={t => a(e.skuId, t)}><d.k0 newValue={{
          categoryPosition: t
        }}><j category={e} isFullScreen={o} /></d.k0></div>)}{<div className={S.paginationContainer}><s.DsT currentPage={c} totalCount={y.length} pageSize={E.kN} onPageChange={u} disablePaginationGap={true} /></div>}</div>
}