/** Chunk was on web.js **/
/** chunk id: 141537, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => c,
  sM: () => l
}), require("./388685.js");
var Chunk818083 = require("./818083.js");

function i(e) {
  function t(t) {
    let n = false;
    for (let i of e) {
      var r;
      if (i.getCurrentConfig({
          location: t.location
        }, {
          autoTrackExposure: null == (r = t.autoTrackExposure) || r
        }).inHoldout) {
        n = true;
        break
      }
    }
    return n
  }
  return {
    useHoldoutExperiment: function(e, n) {
      var r;
      let i = t(n);
      return e.useExperiment({
        location: n.location
      }, {
        autoTrackExposure: null == (r = n.autoTrackExposure) || r,
        disable: n.disable || i
      })
    },
    getHoldoutExperiment: function(e, n) {
      var r;
      let i = t(n);
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
    useHoldoutExperiment: a,
    getHoldoutExperiment: s
  } = i([o, (0, Chunk818083.B)({
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
    useHoldoutExperiment: l,
    getHoldoutExperiment: c
  } = i([o, (0, Chunk818083.B)({
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
    useHoldoutExperiment: u,
    getHoldoutExperiment: d
  } = i([o, (0, Chunk818083.B)({
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