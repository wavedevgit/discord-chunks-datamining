/** Chunk was on 74891 **/
/** chunk id: 929011, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  H: () => S,
  r: () => O
}), require("./997841.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
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
async function S(t) {
  let {
    subscriptionPlanId: e,
    sku: o,
    subscriptionGroupPlanIds: S,
    initialSubscribeForGuild: O,
    analyticsLocations: I,
    analyticsLocation: b,
    disableGuildSelector: g = false
  } = t, {
    promise: _,
    resolve: y
  } = Promise.withResolvers();
  if ((0, d.KK)(o.flags) && false === g) {
    let {
      promise: t,
      resolve: e
    } = Promise.withResolvers();
    (0, r.ZDy)(async () => {
      let {
        GuildSubscriptionSelectionModal: t
      } = await n.e("43889").then(n.bind(n, 279875));
      return n => (0, i.jsx)(t, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        sku: o,
        onSelect: e,
        currentGuildId: O
      })
    }, {
      stackingBehavior: "stack"
    }), O = await t
  }
  let P = s.Z.getParentSKU(o.id),
    v = null;
  return null != P && ([v] = (0, c.E8)({
    groupSku: P,
    SubscriptionStore: u.Z,
    SubscriptionPlanStore: a.Z,
    mapSubscriptionItems: c.ec,
    guildId: O
  })), (0, l.h)({
    initialPlanId: e,
    skuId: o.id,
    activeSubscription: v,
    applicationId: o.applicationId,
    planGroup: S,
    guildId: O,
    renderHeader: (t, e, n) => (0, i.jsx)(p.t, {
      step: n,
      onClose: () => e(false)
    }),
    analyticsSubscriptionType: f.NYc.APPLICATION,
    analyticsLocations: I,
    analyticsLocation: b,
    onComplete: y,
    showBenefitsFirst: false,
    forcesTransitionToGuild: false
  }), _
}

function O(t) {
  let {
    appId: e,
    skuId: n,
    analyticsLocations: i,
    isGift: r
  } = t;
  (0, o.Z)({
    applicationId: e,
    skuId: n,
    analyticsLocations: i,
    isGift: null != r && r
  })
}