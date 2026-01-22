/** Chunk was on web.js **/
/** chunk id: 734066, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BW: () => f,
  J: () => _,
  L_: () => o,
  Pm: () => c,
  Vr: () => p,
  cx: () => d,
  sw: () => u
});
var Chunk600975 = require("./600975.js"),
  Chunk670470 = require("./670470.js"),
  Chunk430452 = require("./430452.js");
require("./927578.js");
var Chunk915618 = require("./915618.js");
require("./788868.js");
let o = (0, Chunk600975.C)({
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
  l = (0, Chunk600975.C)({
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
  if (!(0, s.A)(a.A)) returnfalse;
  let {
    enableClips: e
  } = l.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), {
    enableClips: t
  } = o.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), {
    enableViewerClipping: n
  } = i.A.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  });
  return e || t || n
}

function u() {
  let e = (0, s.A)(a.A),
    {
      enableClips: t
    } = l.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    {
      enableClips: n
    } = o.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    {
      enableViewerClipping: r
    } = i.A.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    });
  return (n || t || r) && e
}

function d() {
  let {
    enableScreenshotKeybind: e
  } = o.getCurrentConfig({
    location: "isScreenshotKeybindEnabled"
  }, {
    autoTrackExposure: false
  });
  return e
}

function f() {
  let {
    enableScreenshotKeybind: e
  } = o.useExperiment({
    location: "useScreenshotKeybindEnabled"
  }, {
    autoTrackExposure: false
  });
  return e
}

function p() {
  let {
    enableVoiceOnlyClips: e
  } = o.getCurrentConfig({
    location: "areVoiceOnlyClipsEnabled"
  }, {
    autoTrackExposure: false
  });
  return e
}

function _() {
  let {
    enableAdvancedSignals: e
  } = o.getCurrentConfig({
    location: "areAdvancedSignalsEnabled"
  }, {
    autoTrackExposure: false
  });
  return e
}