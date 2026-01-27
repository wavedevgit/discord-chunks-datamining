/** Chunk was on 13088 **/
/** chunk id: 638643, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  k: () => A,
  w: () => S
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
async function S(t) {
  let {
    subscriptionPlanId: e,
    sku: u,
    subscriptionGroupPlanIds: S,
    initialSubscribeForGuild: A,
    analyticsLocations: b,
    analyticsLocation: O,
    disableGuildSelector: g = false
  } = t, {
    promise: I,
    resolve: m
  } = Promise.withResolvers();
  if ((0, d.PJ)(u.flags) && false === g) {
    let {
      promise: t,
      resolve: e
    } = Promise.withResolvers();
    (0, r.mMO)(async () => {
      let {
        GuildSubscriptionSelectionModal: t
      } = await n.e("30476").then(n.bind(n, 399143));
      return n => (0, l.jsx)(t, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        sku: u,
        onSelect: e,
        currentGuildId: A
      })
    }, {
      stackingBehavior: "stack"
    }), A = await t
  }
  let v = a.A.getParentSKU(u.id),
    E = null;
  return null != v && ([E] = (0, c.wm)({
    groupSku: v,
    SubscriptionStore: s.A,
    SubscriptionPlanStore: o.A,
    mapSubscriptionItems: c.W_,
    guildId: A
  })), (0, i.A)({
    initialPlanId: e,
    skuId: u.id,
    activeSubscription: E,
    applicationId: u.applicationId,
    planGroup: S,
    guildId: A,
    renderHeader: (t, e, n) => (0, l.jsx)(p.fs, {
      step: n,
      onClose: () => e(false)
    }),
    analyticsSubscriptionType: f.rzx.APPLICATION,
    analyticsLocations: b,
    analyticsLocation: O,
    onComplete: m,
    showBenefitsFirst: false,
    forcesTransitionToGuild: false
  }), I
}

function A(t) {
  let {
    appId: e,
    skuId: n,
    analyticsLocations: l
  } = t;
  (0, u.A)({
    applicationId: e,
    skuId: n,
    analyticsLocations: l
  })
}