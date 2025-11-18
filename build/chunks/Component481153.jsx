/** Chunk was on 27978 **/
/** chunk id: 481153, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk981632 = require("./981632.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk296848 = require("./296848.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124896 = require("./124896.js"),
  Chunk465106 = require("./465106.js"),
  Chunk10198 = require("./10198.js");
let y = Chunk442837.ZP.connectStores([Chunk55563.Z, Chunk812206.Z, Chunk509545.Z, Chunk594174.default], e => {
  let {
    giftCode: t
  } = e, n = f.Z.get(t.skuId), {
    subscriptionPlanId: r
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != r ? (0, _.oE)(r) : null,
    application: c.Z.getApplication(n.applicationId),
    gifter: m.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: s,
    sku: a,
    application: c,
    subscriptionPlan: m
  } = e, p = null == s ? v.intl.string(v.t.lTGZAl) : v.intl.formatToPlainString(v.t.TjWdPc, {
    username: s.username
  }), f = a.name;
  return null != m && (f = v.intl.formatToPlainString(m.interval === E.rV.MONTH ? v.t.CTpcCZ : v.t["rgPWG/"], {
    skuName: a.name,
    intervalCount: m.intervalCount
  })), (0, r.jsxs)(i.Fragment, {
    children: [null != n.giftStyle ? (0, r.jsx)(g.Z, {
      defaultAnimationState: h.SR.LOOP,
      giftStyle: n.giftStyle,
      className: j.seasonalIcon
    }) : (0, r.jsx)(u.qE, {
      src: null != s ? s.getAvatarURL(true, 100) : null,
      size: o.EFr.DEPRECATED_SIZE_100,
      className: I.marginBottom20
    }), null != t ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: v.intl.string(v.t.mDFGFj)
      }), (0, r.jsx)(u.Dx, {
        children: t
      })]
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(u.DK, {
        children: p
      }), (0, r.jsxs)(u.Dx, {
        className: l()(I.marginTop8, b.flexCenter),
        children: [a.productLine !== x.POd.COLLECTIBLES && (0, r.jsx)(d.Z, {
          size: d.A.MEDIUM,
          className: j.applicationIcon,
          game: c,
          skuId: a.id
        }), f]
      })]
    })]
  })
})