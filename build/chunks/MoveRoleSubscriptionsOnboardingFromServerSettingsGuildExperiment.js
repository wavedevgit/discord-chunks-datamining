/** Chunk was on web.js **/
/** chunk id: 586072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AC: () => o,
  IW: () => s,
  aC: () => l,
  bT: () => i,
  kR: () => c,
  z: () => a
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-04_creator_monetization_country_allowlist",
    label: "Creator Monetization Available in Country",
    defaultConfig: {
      isUserEligibleForCreatorMonetization: false
    },
    treatments: [{
      id: 1,
      label: "Enables users to view Creator Monetization entrypoints",
      config: {
        isUserEligibleForCreatorMonetization: true
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    kind: "guild",
    id: "2022-09_creator_monetization_raven",
    label: "Creator Monetization Onboarding v2",
    defaultConfig: {
      enableFastMonetizationOnboardingForGuild: false
    },
    treatments: [{
      id: 1,
      label: "Enables guild to create Guild Role Subscriptions quickly",
      config: {
        enableFastMonetizationOnboardingForGuild: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-09_creator_monetization_raven_users",
    label: "Creator Monetization Onboarding v2 Users",
    defaultConfig: {
      enableFastMonetizationOnboardingForUser: false
    },
    treatments: [{
      id: 1,
      label: "Enables users to create Guild Role Subscriptions quickly",
      config: {
        enableFastMonetizationOnboardingForUser: true
      }
    }]
  }),
  s = (0, Chunk818083.B)({
    kind: "guild",
    id: "2022-11_creator_monetization_onboarding_waitlist",
    label: "Creator Monetization Onboarding Waitlist",
    defaultConfig: {
      enableWaitlist: false
    },
    treatments: [{
      id: 1,
      label: "Enables Guilds to (possibly) see the waitlist",
      config: {
        enableWaitlist: true
      }
    }]
  }),
  l = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-01_creator_monetization_nag_activate_users",
    label: "Creator Monetization Nag Activate Users",
    defaultConfig: {
      enableCreatorMonetizationNagActivateForUser: false
    },
    treatments: [{
      id: 1,
      label: "Enables users to see nag bar to activate server subscriptions",
      config: {
        enableCreatorMonetizationNagActivateForUser: true
      }
    }]
  }),
  c = (0, Chunk818083.B)({
    kind: "guild",
    id: "2025-08_move_role_subscriptions_onboarding_from_server_settings_",
    label: "Move Role Subscriptions Onboarding From Server Settings",
    defaultConfig: {
      hideMonetizatonOnboardingInServerSettings: false
    },
    treatments: [{
      id: 1,
      label: "Only shows onboarding page if first visited from new home",
      config: {
        hideMonetizatonOnboardingInServerSettings: true
      }
    }]
  })