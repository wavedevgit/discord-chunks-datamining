/** Chunk was on 86142 **/
/** chunk id: 161928, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk242874 = require("./242874.js"),
  Chunk75825 = require("./75825.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk615396 = require("./615396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk440526 = require("./440526.js"),
  Chunk20976 = require("./20976.js"),
  Chunk473169 = require("./473169.js");
let j = Chunk311907.Ay.connectStores([Chunk67480.A, Chunk587895.A, Chunk97352.A, Chunk287809.default], e => {
  let {
    giftCode: t
  } = e, n = _.A.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, m.c9)(r) : null,
    application: c.A.getApplication(n.applicationId),
    gifter: g.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: s,
    sku: a,
    application: c,
    subscriptionPlan: g
  } = e, f = null == s ? E.intl.string(E.t.lTGZAl) : E.intl.formatToPlainString(E.t.TjWdPc, {
    username: s.username
  }), _ = a.name;
  return null != g && (_ = E.intl.formatToPlainString(g.interval === x.WT.MONTH ? E.t.CTpcCZ : E.t["rgPWG/"], {
    skuName: a.name,
    intervalCount: g.intervalCount
  })), (0, r.jsxs)(i.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(p.A, {
      defaultAnimationState: h.oA.LOOP,
      giftStyle: n.giftStyle,
      className: v.e
    }) : (0, r.jsx)(u.eu, {
      src: null != s ? s.getAvatarURL(true, 100) : null,
      size: o._3J.DEPRECATED_SIZE_100,
      className: b.SX
    }), null != t ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.tK, {
        children: E.intl.string(E.t.mDFGFj)
      }), (0, r.jsx)(u.hE, {
        children: t
      })]
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.tK, {
        children: f
      }), (0, r.jsxs)(u.hE, {
        className: l()(b.Ot, y.tR),
        children: [a.productLine !== A.EZt.COLLECTIBLES && (0, r.jsx)(d.A, {
          size: d.M.MEDIUM,
          className: v.I,
          game: c,
          skuId: a.id
        }), _]
      })]
    })]
  })
})