/** Chunk was on web.js **/
/** chunk id: 988965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => i
});
var Chunk818083 = require("./818083.js");
(0, Chunk818083.B)({
  kind: "user",
  id: "2022-09_mobile_account_switcher",
  label: "Mobile Account Switcher",
  defaultConfig: {
    isMultiAccountMobileEnabled: false,
    clearCanUseMultiAccountMobile: false
  },
  treatments: [{
    id: 1,
    label: "Enable Account Switcher on Mobile",
    config: {
      isMultiAccountMobileEnabled: true,
      clearCanUseMultiAccountMobile: false
    }
  }, {
    id: 2,
    label: "Unenroll Account Switcher on Mobile and Clear Local Flag",
    config: {
      isMultiAccountMobileEnabled: false,
      clearCanUseMultiAccountMobile: true
    }
  }]
});
let i = (0, Chunk818083.B)({
  kind: "user",
  id: "2022-11_mobile_account_switcher_notifications",
  label: "Mobile Account Switcher: Notifications",
  defaultConfig: {
    isMultiAccountMobileNotificationsEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable notifications for multiple accounts",
    config: {
      isMultiAccountMobileNotificationsEnabled: true
    }
  }]
})