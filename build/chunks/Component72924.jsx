/** Chunk was on web.js **/
/** chunk id: 72924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk558381 = require("./558381.js"),
  Chunk821849 = require("./821849.js"),
  Chunk531826 = require("./531826.js"),
  Chunk15640 = require("./15640.js"),
  Chunk724870 = require("./724870.jsx"),
  Chunk87484 = require("./87484.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk106976 = require("./106976.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk55563 = require("./55563.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  let t = (0, c.jA)({
      applicationId: e
    }),
    n = null != t ? p.Z.getWindow(t) : true;
  return null == n || n.closed ? a.z1l : a.u1M
}
async function b(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: r,
    analyticsLocations: i,
    analyticsLocationObject: a
  } = e, c = h.Z.get(n);
  if (null == c) {
    let e = (await (0, s.oJ)(t)).find(e => e.sku.id === n);
    o()(null != e, "Could not find store listing for sku"), e.sku.type === g.epS.SUBSCRIPTION_GROUP && await (0, _.rx)(t, e.id)
  }
  c = null != c ? c : h.Z.get(n), o()(null != c && c.applicationId === t, "SKU must belong to application"), c.type !== g.epS.SUBSCRIPTION || (0, u.a)([c.id]) || await (0, l.GZ)(c.id);
  let d = E(t);
  if (c.type !== g.epS.SUBSCRIPTION) return new Promise((e, r) => {
    let o = t => {
        var n;
        e(null != (n = null == t ? true : t.entitlements) ? n : [])
      },
      s = e => {
        e || r()
      };
    (0, f.Z)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: a,
      analyticsLocations: i,
      contextKey: d,
      onComplete: o,
      onClose: s
    })
  });
  await y(t, n, r, a, i)
}

function y(e, t, n, i, o) {
  let a = (e, t, n) => (0, r.jsx)(m.t, {
    step: n,
    onClose: () => t(false)
  });
  return (0, d.m)({
    applicationId: e,
    skuId: t,
    initialPlanId: n,
    analyticsLocationObject: i,
    analyticsLocations: o,
    renderHeader: a
  })
}