/** Chunk was on web.js **/
/** chunk id: 141537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z6: () => l,
  cE: () => u,
  sM: () => c
}), require("./388685.js");
var Chunk818083 = require("./818083.js"),
  Chunk353926 = require("./353926.js");

function a(e) {
  function t(t, n) {
    let r = false,
      a = i.Z.getUserExperimentDescriptor(n.definition.id),
      o = "location:".concat(t.location, " experiment_name:").concat(n.definition.id);
    for (let n of (null != a && (o = "".concat(o, " revision:").concat(a.revision)), e)) {
      var s;
      if (n.getCurrentConfig({
          location: o
        }, {
          autoTrackExposure: null == (s = t.autoTrackExposure) || s
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
let o = (0, Chunk818083.B)({
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
    useHoldoutExperiment: s,
    getHoldoutExperiment: l
  } = a([o, (0, Chunk818083.B)({
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
  } = a([o, (0, Chunk818083.B)({
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
  } = a([o, (0, Chunk818083.B)({
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