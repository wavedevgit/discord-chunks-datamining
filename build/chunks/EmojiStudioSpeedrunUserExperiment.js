/** Chunk was on web.js **/
/** chunk id: 556019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qt: () => s
});
var Chunk818083 = require("./818083.js");
let i = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-07_emoji_studio_mobile",
    label: "Emoji Studio (Mobile)",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_emoji_studio_entrypoint",
    label: "Emoji Studio Entrypoint",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-08_emoji_studio_speedrun",
    label: "Emoji Studio V2 Speedrun",
    defaultConfig: {
      isEmojiEditingExperimentEnabled: false,
      isSelectFileBeforeEmojiStudioExperimentEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Emoji Editing",
      config: {
        isEmojiEditingExperimentEnabled: true,
        isSelectFileBeforeEmojiStudioExperimentEnabled: false
      }
    }, {
      id: 2,
      label: '"Speedrun": Select Image File Before Emoji Studio',
      config: {
        isEmojiEditingExperimentEnabled: false,
        isSelectFileBeforeEmojiStudioExperimentEnabled: true
      }
    }]
  });

function s(e) {
  let {
    location: t,
    autoTrackExposure: n,
    disable: r = false
  } = e, {
    enabled: s
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  }), {
    enabled: l
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  }), {
    isEmojiEditingExperimentEnabled: c,
    isSelectFileBeforeEmojiStudioExperimentEnabled: u
  } = o.useExperiment({
    location: t
  }, {
    autoTrackExposure: n,
    disable: r
  });
  return {
    enabled: l || c || u,
    isMobileEnabled: s
  }
}