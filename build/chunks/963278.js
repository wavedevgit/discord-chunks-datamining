/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var l = n(120356),
  a = n.n(l),
  o = n(442837),
  s = n(481060),
  i = n(594174),
  c = n(381585),
  d = n(597688),
  u = n(709999),
  g = n(388032),
  f = n(39532);
let h = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: l
  } = e, h = (0, o.e7)([i.default], () => i.default.getCurrentUser());
  return null == h ? null : (0, r.jsxs)("div", {
    className: a()(f.shelfBlockContainer, f.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: f.blockHeader,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(s.zxk, {
        color: s.Ttl.PRIMARY,
        look: s.iLD.FILLED,
        onClick: () => n("shelf block see all", t.categorySkuId),
        children: g.NW.formatToPlainString(g.t.bc9RBA, {
          category_name: t.name
        })
      })]
    }), (0, r.jsx)("div", {
      className: f.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: t.rankedSkuIds.map((e, n) => {
          let a = d.Z.getCategoryForProduct(e),
            o = d.Z.getProduct(e);
          return null == a || null == o ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, r.jsx)(u.Z, {
              product: o,
              category: a,
              user: h,
              tab: l,
              isInFeedView: !0
            }, e)
          }, e)
        })
      })
    })]
  })
}