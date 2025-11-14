/** Chunk was on web.js **/
/** chunk id: 924557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NS: () => h,
  NV: () => s,
  PP: () => _,
  Zq: () => d,
  iL: () => f,
  n7: () => p,
  w2: () => c,
  w9: () => u
});
var Chunk818083 = require("./818083.js"),
  Chunk441167 = require("./441167.js"),
  Chunk131951 = require("./131951.js");
require("./74538.js");
var Chunk779618 = require("./779618.js");
require("./474936.js");
let s = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-11_clips_experiment",
    label: "Clips Experiment",
    defaultConfig: {
      enableClips: false,
      ignorePlatformRestriction: false,
      showClipsHeaderEntrypoint: false,
      enableScreenshotKeybind: false,
      enableVoiceOnlyClips: false,
      enableAdvancedSignals: false
    },
    treatments: [{
      id: 1,
      label: "Clips without upsells",
      config: {
        enableClips: true,
        ignorePlatformRestriction: false,
        showClipsHeaderEntrypoint: true,
        enableScreenshotKeybind: false,
        enableVoiceOnlyClips: false,
        enableAdvancedSignals: false
      }
    }, {
      id: 2,
      label: "Clips with upsells",
      config: {
        enableClips: true,
        ignorePlatformRestriction: false,
        showClipsHeaderEntrypoint: true,
        enableScreenshotKeybind: false,
        enableVoiceOnlyClips: false,
        enableAdvancedSignals: false
      }
    }, {
      id: 99,
      label: "Clips 4 da Developerz",
      config: {
        enableClips: true,
        ignorePlatformRestriction: true,
        showClipsHeaderEntrypoint: true,
        enableScreenshotKeybind: true,
        enableVoiceOnlyClips: true,
        enableAdvancedSignals: true
      }
    }]
  }),
  l = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-09_clips_nitro_early_access",
    label: "Clips (Nitro EA)",
    defaultConfig: {
      enableClips: false,
      enablePremiumEarlyAccessAnnouncementCoachmark: false,
      enablePremiumEarlyAccessGoLiveRoadblock: false,
      enableScreenshotKeybind: false,
      enableVoiceOnlyClips: false,
      enableAdvancedSignals: false
    },
    treatments: [{
      id: 1,
      label: "Clips Nitro EA Upsells Visible",
      config: {
        enableClips: false,
        enablePremiumEarlyAccessAnnouncementCoachmark: true,
        enablePremiumEarlyAccessGoLiveRoadblock: true,
        enableScreenshotKeybind: false,
        enableVoiceOnlyClips: false,
        enableAdvancedSignals: false
      }
    }, {
      id: 2,
      label: "Clips Enabled (Nitro)",
      config: {
        enableClips: true,
        enablePremiumEarlyAccessAnnouncementCoachmark: true,
        enablePremiumEarlyAccessGoLiveRoadblock: false,
        enableScreenshotKeybind: false,
        enableVoiceOnlyClips: false,
        enableAdvancedSignals: false
      }
    }]
  });

function c() {
  if (!(0, Chunk779618.Z)(Chunk131951.Z)) returnfalse;
  let {
    enableClips: e
  } = l.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), {
    enableClips: t
  } = s.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), {
    enableViewerClipping: n
  } = Chunk441167.Z.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  });
  return module || exports || require
}

function u() {
  let e = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      enableClips: t
    } = l.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    {
      enableClips: n
    } = s.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    {
      enableViewerClipping: r
    } = Chunk441167.Z.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    });
  return (require || exports || Chunk818083) && module
}
let d = e => {
  let {
    autoTrackExposure: t
  } = e, n = (0, o.Z)(a.Z), {
    enablePremiumEarlyAccessGoLiveRoadblock: r
  } = l.useExperiment({
    location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
  }, {
    autoTrackExposure: t && n
  });
  return !!n && r
};

function f() {
  let {
    enableScreenshotKeybind: e
  } = s.getCurrentConfig({
    location: "isScreenshotKeybindEnabled"
  }, {
    autoTrackExposure: false
  });
  return module
}

function _() {
  let {
    enableScreenshotKeybind: e
  } = s.useExperiment({
    location: "useScreenshotKeybindEnabled"
  }, {
    autoTrackExposure: false
  });
  return module
}

function p() {
  let {
    enableVoiceOnlyClips: e
  } = s.getCurrentConfig({
    location: "areVoiceOnlyClipsEnabled"
  }, {
    autoTrackExposure: false
  });
  return module
}

function h() {
  let {
    enableAdvancedSignals: e
  } = s.getCurrentConfig({
    location: "areAdvancedSignalsEnabled"
  }, {
    autoTrackExposure: false
  });
  return module
}