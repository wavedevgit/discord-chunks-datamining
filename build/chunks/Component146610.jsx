/** Chunk was on 9536 **/
/** chunk id: 146610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk167533 = require("./167533.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk169903 = require("./169903.js"),
  Chunk67152 = require("./67152.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk199596 = require("./199596.js"),
  Chunk729124 = require("./729124.js");
let f = [{
    key: "tier_name",
    cellClassName: Chunk199596.tierNameColumn,
    renderHeader: () => d.intl.string(d.t["2Uiha2"]),
    render(e) {
      let t, {
        subscriptionListing: n
      } = e;
      if (null != n) {
        let e = (null == n ? true : n.image_asset) == null ? true : (0, s._W)(n.application_id, n.image_asset, 128);
        t = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            src: e,
            alt: "",
            className: u.tierImage
          }), n.name]
        })
      }
      return (0, r.jsx)(c.bL, {
        className: u.tierNameCell,
        children: t
      })
    }
  }, {
    key: "subscribers",
    cellClassName: l()(Chunk199596.subscribersColumn, Chunk729124.cellAlignRight),
    renderHeader: () => d.intl.string(d.t.zu8go1),
    render: e => (0, r.jsx)(c.av, {
      children: e.roleMemberCount
    })
  }, {
    key: "price",
    cellClassName: l()(Chunk199596.priceColumn, Chunk729124.cellAlignRight),
    renderHeader: () => d.intl.string(d.t.NcrbWI),
    render(e) {
      let {
        subscriptionListing: t
      } = e, n = null == t ? true : t.subscription_plans[0], i = null == n ? true : n.price;
      return (0, r.jsx)(c.kA, {
        children: i
      })
    }
  }],
  m = e => {
    let {
      totalPayoutsForPeriod: t,
      guildId: n,
      className: i
    } = e, s = (0, o.Z)(n, t);
    return (0, r.jsx)("div", {
      className: l()(g.tableContainer, i),
      children: (0, r.jsx)(a.Z, {
        columns: f,
        data: s,
        className: l()(g.table, u.table),
        rowClassName: u.row,
        headerClassName: l()(g.header, u.header)
      })
    })
  }