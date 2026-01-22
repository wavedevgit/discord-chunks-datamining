/** Chunk was on web.js **/
/** chunk id: 428835, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dr: () => o,
  Kd: () => l,
  P2: () => u,
  u5: () => c
}), require("./896048.js");
var Chunk600975 = require("./600975.js"),
  Chunk49463 = require("./49463.js");

function a(e) {
  function t(t, n) {
    let r = false,
      a = i.A.getUserExperimentDescriptor(n.definition.id),
      s = "location:".concat(t.location, " experiment_name:").concat(n.definition.id);
    for (let n of (null != a && (s = "".concat(s, " revision:").concat(a.revision)), e)) {
      var o;
      if (n.getCurrentConfig({
          location: s
        }, {
          autoTrackExposure: null == (o = t.autoTrackExposure) || o
        }).inHoldout) {
        r = true;
        break
      }
    }
    return r
  }
  return {
    useHoldoutExperiment: function(e, n) {
      var r;
      let i = t(n, e);
      return e.useExperiment({
        location: n.location
      }, {
        autoTrackExposure: null == (r = n.autoTrackExposure) || r,
        disable: n.disable || i
      })
    },
    getHoldoutExperiment: function(e, n) {
      var r;
      let i = t(n, e);
      return e.getCurrentConfig({
        location: n.location
      }, {
        autoTrackExposure: null == (r = n.autoTrackExposure) || r,
        disable: n.disable || i
      })
    }
  }
}
let s = (0, Chunk600975.C)({
    kind: "user",
    id: "2025-07_growth_holdout_h2",
    label: "Growth Holdout H2",
    defaultConfig: {
      inHoldout: false
    },
    treatments: [{
      id: 0,
      label: "In Holdout",
      config: {
        inHoldout: true
      }
    }, {
      id: 1,
      label: "Treatment for comparison to holdout",
      config: {
        inHoldout: false
      }
    }]
  }),
  {
    useHoldoutExperiment: o,
    getHoldoutExperiment: l
  } = a([s, (0, Chunk600975.C)({
    kind: "user",
    id: "2025-07_access_holdout_h2",
    label: "Access Holdout H2",
    defaultConfig: {
      inHoldout: false
    },
    treatments: [{
      id: 0,
      label: "In Holdout",
      config: {
        inHoldout: true
      }
    }, {
      id: 1,
      label: "Treatment for comparison to holdout",
      config: {
        inHoldout: false
      }
    }]
  })]),
  {
    useHoldoutExperiment: c,
    getHoldoutExperiment: u
  } = a([s, (0, Chunk600975.C)({
    kind: "user",
    id: "2025-07_experiences_holdout_h2",
    label: "Experiences Holdout H2",
    defaultConfig: {
      inHoldout: false
    },
    treatments: [{
      id: 0,
      label: "In Holdout",
      config: {
        inHoldout: true
      }
    }, {
      id: 1,
      label: "Treatment for comparison to holdout",
      config: {
        inHoldout: false
      }
    }]
  })]),
  {
    useHoldoutExperiment: d,
    getHoldoutExperiment: f
  } = a([s, (0, Chunk600975.C)({
    kind: "user",
    id: "2025-07_notifications_platform_holdout_h2",
    label: "NotificationsPlatform Holdout H2",
    defaultConfig: {
      inHoldout: false
    },
    treatments: [{
      id: 0,
      label: "In Holdout",
      config: {
        inHoldout: true
      }
    }, {
      id: 1,
      label: "Treatment for comparison to holdout",
      config: {
        inHoldout: false
      }
    }]
  })])