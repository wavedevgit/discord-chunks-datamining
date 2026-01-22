/** Chunk was on web.js **/
/** chunk id: 638643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => h,
  w: () => _
}), require("./938796.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk342098 = require("./342098.jsx"),
  Chunk216678 = require("./216678.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk67480 = require("./67480.js"),
  Chunk915043 = require("./915043.js"),
  Chunk163437 = require("./163437.js"),
  Chunk490744 = require("./490744.jsx"),
  Chunk652215 = require("./652215.js");
async function _(e) {
  let {
    subscriptionPlanId: t,
    sku: s,
    subscriptionGroupPlanIds: _,
    initialSubscribeForGuild: h,
    analyticsLocations: m,
    analyticsLocation: g,
    disableGuildSelector: E = false
  } = e, {
    promise: b,
    resolve: y
  } = Promise.withResolvers();
  if ((0, d.PJ)(s.flags) && false === E) {
    let {
      promise: e,
      resolve: t
    } = Promise.withResolvers();
    (0, i.mMO)(async () => {
      let {
        GuildSubscriptionSelectionModal: e
      } = await n.e("30476").then(n.bind(n, 399143));
      return n => (0, r.jsx)(e, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        sku: s,
        onSelect: t,
        currentGuildId: h
      })
    }, {
      stackingBehavior: "stack"
    }), h = await e
  }
  let O = c.A.getParentSKU(s.id),
    A = null;
  return null != O && ([A] = (0, u.wm)({
    groupSku: O,
    SubscriptionStore: l.A,
    SubscriptionPlanStore: o.A,
    mapSubscriptionItems: u.W_,
    guildId: h
  })), (0, a.A)({
    initialPlanId: t,
    skuId: s.id,
    activeSubscription: A,
    applicationId: s.applicationId,
    planGroup: _,
    guildId: h,
    renderHeader: (e, t, n) => (0, r.jsx)(f.fs, {
      step: n,
      onClose: () => t(false)
    }),
    analyticsSubscriptionType: p.rzx.APPLICATION,
    analyticsLocations: m,
    analyticsLocation: g,
    onComplete: y,
    showBenefitsFirst: false,
    forcesTransitionToGuild: false
  }), b
}

function h(e) {
  let {
    appId: t,
    skuId: n,
    analyticsLocations: r
  } = e;
  (0, s.A)({
    applicationId: t,
    skuId: n,
    analyticsLocations: r
  })
}