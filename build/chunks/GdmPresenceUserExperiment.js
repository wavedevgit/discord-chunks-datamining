/** Chunk was on web.js **/
/** chunk id: 93687, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-04_gdm_presence",
  label: "Group DM Presence",
  defaultConfig: {
    isFacepileEnabled: false,
    isStatusIndicatorEnabled: false,
    isTypingIndicatorEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Status Indicator Only",
    config: {
      isFacepileEnabled: false,
      isStatusIndicatorEnabled: true,
      isTypingIndicatorEnabled: false
    }
  }, {
    id: 2,
    label: "Typing Indicator Only",
    config: {
      isFacepileEnabled: false,
      isStatusIndicatorEnabled: false,
      isTypingIndicatorEnabled: true
    }
  }, {
    id: 3,
    label: "Status Indicator + Typing Indicator",
    config: {
      isFacepileEnabled: false,
      isStatusIndicatorEnabled: true,
      isTypingIndicatorEnabled: true
    }
  }, {
    id: 4,
    label: "Facepile Only",
    config: {
      isFacepileEnabled: true,
      isStatusIndicatorEnabled: false,
      isTypingIndicatorEnabled: false
    }
  }, {
    id: 5,
    label: "Facepile + Status Indicator",
    config: {
      isFacepileEnabled: true,
      isStatusIndicatorEnabled: true,
      isTypingIndicatorEnabled: false
    }
  }, {
    id: 6,
    label: "Facepile + Typing Indicator",
    config: {
      isFacepileEnabled: true,
      isStatusIndicatorEnabled: false,
      isTypingIndicatorEnabled: true
    }
  }, {
    id: 7,
    label: "Facepile + Typing Indicator + Status Indicator",
    config: {
      isFacepileEnabled: true,
      isStatusIndicatorEnabled: true,
      isTypingIndicatorEnabled: true
    }
  }]
})