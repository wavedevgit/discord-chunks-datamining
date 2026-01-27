/** Chunk was on web.js **/
/** chunk id: 967245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i$: () => i,
  wm: () => o,
  xQ: () => a
});
var Chunk600975 = require("./600975.js");
let i = (0, Chunk600975.C)({
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
  a = (0, Chunk600975.C)({
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
  o = (0, Chunk600975.C)({
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
  })