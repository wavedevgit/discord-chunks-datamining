/** Chunk was on web.js **/
/** chunk id: 924557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Go: () => d,
  NV: () => l,
  Zq: () => f,
  ln: () => u
});
var Chunk818083 = require("./818083.js"),
  Chunk441167 = require("./441167.js"),
  Chunk131951 = require("./131951.js");
require("./74538.js");
var Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js");
require("./474936.js");
let l = (0, Chunk818083.B)({
    kind: "user",
    id: "2022-11_clips_experiment",
    label: "Clips Experiment",
    defaultConfig: {
      enableClips: false,
      ignorePlatformRestriction: false,
      showClipsHeaderEntrypoint: false
    },
    treatments: [{
      id: 1,
      label: "Clips without upsells",
      config: {
        enableClips: true,
        ignorePlatformRestriction: false,
        showClipsHeaderEntrypoint: true
      }
    }, {
      id: 2,
      label: "Clips with upsells",
      config: {
        enableClips: true,
        ignorePlatformRestriction: false,
        showClipsHeaderEntrypoint: true
      }
    }, {
      id: 99,
      label: "Clips 4 da Developerz",
      config: {
        enableClips: true,
        ignorePlatformRestriction: true,
        showClipsHeaderEntrypoint: true
      }
    }]
  }),
  c = (0, Chunk818083.B)({
    kind: "user",
    id: "2023-09_clips_nitro_early_access",
    label: "Clips (Nitro EA)",
    defaultConfig: {
      enableClips: false,
      enablePremiumEarlyAccessAnnouncementCoachmark: false,
      enablePremiumEarlyAccessGoLiveRoadblock: false
    },
    treatments: [{
      id: 1,
      label: "Clips Nitro EA Upsells Visible",
      config: {
        enableClips: false,
        enablePremiumEarlyAccessAnnouncementCoachmark: true,
        enablePremiumEarlyAccessGoLiveRoadblock: true
      }
    }, {
      id: 2,
      label: "Clips Enabled (Nitro)",
      config: {
        enableClips: true,
        enablePremiumEarlyAccessAnnouncementCoachmark: true,
        enablePremiumEarlyAccessGoLiveRoadblock: false
      }
    }]
  });

function u() {
  if (!(0, Chunk779618.Z)(Chunk131951.Z)) returnfalse;
  let {
    enableClips: e
  } = c.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), {
    enableClips: t
  } = l.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  }), n = Chunk435064.Z.isDecoupledGameClippingEnabled(), {
    enableViewerClipping: r
  } = Chunk441167.Z.getCurrentConfig({
    location: "areClipsEnabled"
  }, {
    autoTrackExposure: false
  });
  return module || exports || require || Chunk818083
}

function d() {
  let e = (0, Chunk779618.Z)(Chunk131951.Z),
    {
      enableClips: t
    } = c.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    {
      enableClips: n
    } = l.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    }),
    r = Chunk435064.Z.isDecoupledGameClippingEnabled(),
    {
      enableViewerClipping: u
    } = Chunk441167.Z.useExperiment({
      location: "useEnableClips"
    }, {
      autoTrackExposure: false
    });
  return (require || exports || Chunk818083 || u) && module
}
let f = e => {
  let {
    autoTrackExposure: t
  } = e, n = (0, s.Z)(a.Z), {
    enablePremiumEarlyAccessGoLiveRoadblock: r
  } = c.useExperiment({
    location: "useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock"
  }, {
    autoTrackExposure: t && n
  });
  return !!n && r
}