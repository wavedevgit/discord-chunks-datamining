/** Chunk was on 47841 **/
/** chunk id: 27591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk596719 = require("./596719.jsx"),
  Chunk371794 = require("./371794.js"),
  Chunk836923 = require("./836923.js"),
  Chunk317547 = require("./317547.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk165683 = require("./165683.js"),
  Chunk921503 = require("./921503.js");
let g = [{
    key: "tier_name",
    cellClassName: Chunk165683.Cg,
    renderHeader: () => d.intl.string(d.t["2Uiha2"]),
    render(e) {
      let t, {
        subscriptionListing: n
      } = e;
      if (null != n) {
        let e = (null == n ? true : n.image_asset) == null ? true : (0, a.YE)(n.application_id, n.image_asset, 128);
        t = (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("img", {
            src: e,
            alt: "",
            className: u.ah
          }), n.name]
        })
      }
      return (0, r.jsx)(o.fh, {
        className: u.uR,
        children: t
      })
    }
  }, {
    key: "subscribers",
    cellClassName: l()(Chunk165683.wC, Chunk921503.WI),
    renderHeader: () => d.intl.string(d.t.zu8go1),
    render: e => (0, r.jsx)(o.MD, {
      children: e.roleMemberCount
    })
  }, {
    key: "price",
    cellClassName: l()(Chunk165683.k1, Chunk921503.WI),
    renderHeader: () => d.intl.string(d.t.NcrbWI),
    render(e) {
      let {
        subscriptionListing: t
      } = e, n = null == t ? true : t.subscription_plans[0], i = null == n ? true : n.price;
      return (0, r.jsx)(o.Kh, {
        children: i
      })
    }
  }],
  b = e => {
    let {
      totalPayoutsForPeriod: t,
      guildId: n,
      className: i
    } = e, a = (0, c.A)(n, t);
    return (0, r.jsx)("div", {
      className: l()(f.CZ, i),
      children: (0, r.jsx)(s.A, {
        columns: g,
        data: a,
        className: l()(f.tp, u.tp),
        rowClassName: u.nM,
        headerClassName: l()(f.wx, u.wx)
      })
    })
  }