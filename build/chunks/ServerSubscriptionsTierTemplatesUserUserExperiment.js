/** Chunk was on web.js **/
/** chunk id: 175650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LD: () => s,
  ok: () => o,
  rh: () => a
});
var Chunk600975 = require("./600975.js"),
  Chunk2242 = require("./2242.js");
(0, Chunk600975.C)({
  kind: "guild",
  id: "2022-01_guild_role_subscription_trials",
  label: "Guild Role Subscription Trials",
  defaultConfig: {
    enableRoleSubscriptionTrialsForGuild: false
  },
  treatments: [{
    id: 1,
    label: "Enables guild to create Guild Role Subscription Trials",
    config: {
      enableRoleSubscriptionTrialsForGuild: true
    }
  }]
});
let a = (0, Chunk600975.C)({
  kind: "guild",
  id: "2022-07_guild_role_subscriptions_variable_max_tiers",
  label: "Guild Role Subscription Max Tiers",
  defaultConfig: {
    enabled: false,
    maxTiers: Chunk2242.f7
  },
  treatments: [4, 5, 6].map(e => ({
    id: e,
    label: "Enables {n} maximum published tiers",
    config: {
      enabled: true,
      maxTiers: e
    }
  }))
});
(0, Chunk600975.C)({
  kind: "guild",
  id: "2022-12_mobile_guild_role_subscription_team_setup",
  label: "Mobile Guild Role Subscription Team Setup",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enables guild to allow payout team setup on mobile",
    config: {
      enabled: true
    }
  }]
});
let o = (0, Chunk600975.C)({
    kind: "guild",
    id: "2023-03_server_subscriptions_tier_templates",
    label: "Server Subscriptions Tier Templates",
    defaultConfig: {
      enabled: false,
      showCreatorPortalLink: false
    },
    treatments: [{
      id: 1,
      label: "299 basic tier + no link",
      config: {
        enabled: true,
        showCreatorPortalLink: false
      }
    }, {
      id: 2,
      label: "399 basic tier + no link",
      config: {
        enabled: true,
        showCreatorPortalLink: false
      }
    }, {
      id: 3,
      label: "399 basic tier + link",
      config: {
        enabled: true,
        showCreatorPortalLink: true
      }
    }]
  }),
  s = (0, Chunk600975.C)({
    kind: "user",
    id: "2023-04_server_subscriptions_tier_templates_user",
    label: "Server Subscriptions Tier Templates",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enable tier templates for user",
      config: {
        enabled: true
      }
    }]
  })