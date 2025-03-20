/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(167533),
  l = n(73346),
  o = n(169903),
  A = n(67152),
  c = n(388032),
  d = n(24651),
  u = n(379866);
let g = [{
    key: "tier_name",
    cellClassName: d.tierNameColumn,
    renderHeader: () => c.NW.string(c.t["2Uiha2"]),
    render(e) {
      let t, {
        subscriptionListing: n
      } = e;
      if (null != n) {
        let e = (null == n ? void 0 : n.image_asset) == null ? void 0 : (0, l._W)(n.application_id, n.image_asset, 128);
        t = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            src: e,
            alt: "",
            className: d.tierImage
          }), n.name]
        })
      }
      return (0, r.jsx)(A.bL, {
        className: d.tierNameCell,
        children: t
      })
    }
  }, {
    key: "subscribers",
    cellClassName: s()(d.subscribersColumn, u.cellAlignRight),
    renderHeader: () => c.NW.string(c.t.zu8go6),
    render: e => (0, r.jsx)(A.av, {
      children: e.roleMemberCount
    })
  }, {
    key: "price",
    cellClassName: s()(d.priceColumn, u.cellAlignRight),
    renderHeader: () => c.NW.string(c.t.NcrbWF),
    render(e) {
      let {
        subscriptionListing: t
      } = e, n = null == t ? void 0 : t.subscription_plans[0], i = null == n ? void 0 : n.price;
      return (0, r.jsx)(A.kA, {
        children: i
      })
    }
  }],
  f = e => {
    let {
      totalPayoutsForPeriod: t,
      guildId: n,
      className: i
    } = e, l = (0, o.Z)(n, t);
    return (0, r.jsx)("div", {
      className: s()(u.tableContainer, i),
      children: (0, r.jsx)(a.Z, {
        columns: g,
        data: l,
        className: s()(u.table, d.table),
        rowClassName: d.row,
        headerClassName: s()(u.header, d.header)
      })
    })
  }