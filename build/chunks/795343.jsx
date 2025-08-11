/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk370039 = require("./370039.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk303952 = require("./303952.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk501638 = require("./501638.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk538314 = require("./538314.js");

function S(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: S,
    tab: y
  } = e, x = (0, d.sp)(), j = null != (t = null == x ? true : x.sessionId) ? t : "", {
    noCache: T,
    includeUnpublished: P
  } = (0, v.Z)(), L = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: k,
    currentPage: I,
    totalCount: N,
    isFetchingResults: w
  } = (0, b.a)(), A = (0, o.Wu)([p.Z], () => p.Z.getProductsBySkus(k)), B = l.useCallback(() => {
    var e;
    null == S || null == (e = S.current) || e.scrollToTop({
      animate: true
    })
  }, [S]), R = null == k ? true : k.join("");
  l.useEffect(() => {
    B()
  }, [R, B]);
  let Z = (0, g.a)(),
    D = l.useMemo(() => Z(A), [Z, A]);
  l.useEffect(() => {
    n || (0, h.n)({
      sessionId: j,
      checkpoint: h.a.SHOP_RENDERED,
      tab: y,
      isFullScreen: a,
      unpublishedCategoriesShown: P,
      cacheDisabled: T
    })
  }, [j, a, P, T, n, y]);
  let F = l.useRef(null),
    {
      setQueryPageSize: M,
      setQueryPageOffset: H,
      queryPageSize: W
    } = (0, f.S)(),
    [V, U] = l.useState(false),
    z = n || w || null == L;
  l.useEffect(() => {
    if (z) return void U(false);
    D.length > 0 && U(true)
  }, [z, D.length]);
  let G = W > 0 && !z && 0 === D.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != F.current && M(Math.floor(5 * getComputedStyle(F.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != F.current) return e.observe(F.current), () => e.disconnect()
  }, [M]);
  let q = l.useCallback(e => {
    u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == x ? true : x.sessionId,
      page_section: null == x ? true : x.pageSection,
      page_category: null == x ? true : x.pageCategory,
      page_index: e,
      page_size: W,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), H((e - 1) * W)
  }, [x, W, H]);
  return <r.Fragment>{<div className={i()({
        [E.productsEmpty]: G
      })}>{G && <O.Z />}{<div className={i()(E.products, {
          [E.loadIn]: V
        })} ref={F}>{z && [...Array(W)].map((e, t) => <m.K />)}{!z && D.map((e, t) => {
          let n = p.Z.getCategory(e.categorySkuId);
          return null == n ? null : <d.k0 newValue={{
              tilePosition: t
            }}><_.Z product={e} user={L} category={n} tab={y} /></d.k0>
        })}</div>}</div>}{N > W && <div className={E.paginationContainer}><div><s.DsT currentPage={I} totalCount={N} pageSize={W} onPageChange={q} disablePaginationGap={true} /></div></div>}</r.Fragment>
}