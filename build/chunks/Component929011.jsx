/** Chunk was on web.js **/
/** chunk id: 929011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => _,
  r: () => h
}), require("./997841.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk724870 = require("./724870.jsx"),
  Chunk87484 = require("./87484.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk55563 = require("./55563.js"),
  Chunk270144 = require("./270144.js"),
  Chunk171246 = require("./171246.js"),
  Chunk689011 = require("./689011.jsx"),
  Chunk981631 = require("./981631.js");
async function _(e) {
  let {
    subscriptionPlanId: t,
    sku: o,
    subscriptionGroupPlanIds: _,
    initialSubscribeForGuild: h,
    analyticsLocations: m,
    analyticsLocation: g,
    disableGuildSelector: E = false
  } = e, {
    promise: b,
    resolve: y
  } = Promise.withResolvers();
  if ((0, d.KK)(o.flags) && false === E) {
    let {
      promise: e,
      resolve: t
    } = Promise.withResolvers();
    (0, i.ZDy)(async () => {
      let {
        GuildSubscriptionSelectionModal: e
      } = await n.e("43889").then(n.bind(n, 279875));
      return n => (0, r.jsx)(e, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        sku: o,
        onSelect: t,
        currentGuildId: h
      })
    }, {
      stackingBehavior: "stack"
    }), h = await e
  }
  let O = c.Z.getParentSKU(o.id),
    v = null;
  return null != O && ([v] = (0, u.E8)({
    groupSku: O,
    SubscriptionStore: l.Z,
    SubscriptionPlanStore: s.Z,
    mapSubscriptionItems: u.ec,
    guildId: h
  })), (0, a.h)({
    initialPlanId: t,
    skuId: o.id,
    activeSubscription: v,
    applicationId: o.applicationId,
    planGroup: _,
    guildId: h,
    renderHeader: (e, t, n) => (0, r.jsx)(f.t, {
      step: n,
      onClose: () => t(false)
    }),
    analyticsSubscriptionType: p.NYc.APPLICATION,
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
  (0, o.Z)({
    applicationId: t,
    skuId: n,
    analyticsLocations: r
  })
}