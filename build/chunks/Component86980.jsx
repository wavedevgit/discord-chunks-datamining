/** Chunk was on web.js **/
/** chunk id: 86980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk800342 = require("./800342.js"),
  Chunk73825 = require("./73825.js"),
  Chunk851907 = require("./851907.js"),
  Chunk160946 = require("./160946.js"),
  Chunk342098 = require("./342098.jsx"),
  Chunk216678 = require("./216678.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk143582 = require("./143582.js"),
  Chunk490744 = require("./490744.jsx"),
  Chunk67480 = require("./67480.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  let t = (0, c.LU)({
      applicationId: e
    }),
    n = null != t ? p.A.getWindow(t) : true;
  return null == n || n.closed ? s.SYi : s.KX8
}
async function b(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: r,
    analyticsLocations: i,
    analyticsLocationObject: s
  } = e, c = m.A.get(n);
  if (null == c) {
    let e = (await (0, o.JI)(t)).find(e => e.sku.id === n);
    a()(null != e, "Could not find store listing for sku"), e.sku.type === g.Puh.SUBSCRIPTION_GROUP && await (0, _.vz)(t, e.id)
  }
  c = null != c ? c : m.A.get(n), a()(null != c && c.applicationId === t, "SKU must belong to application"), c.type !== g.Puh.SUBSCRIPTION || (0, u.B)([c.id]) || await (0, l.ur)(c.id);
  let d = E(t);
  if (c.type !== g.Puh.SUBSCRIPTION) return new Promise((e, r) => {
    let a = t => {
        var n;
        e(null != (n = null == t ? true : t.entitlements) ? n : [])
      },
      o = e => {
        e || r()
      };
    (0, f.A)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: s,
      analyticsLocations: i,
      contextKey: d,
      onComplete: a,
      onClose: o
    })
  });
  await y(t, n, r, s, i)
}

function y(e, t, n, i, a) {
  let s = (e, t, n) => (0, r.jsx)(h.fs, {
    step: n,
    onClose: () => t(false)
  });
  return (0, d.l)({
    applicationId: e,
    skuId: t,
    initialPlanId: n,
    analyticsLocationObject: i,
    analyticsLocations: a,
    renderHeader: s
  })
}