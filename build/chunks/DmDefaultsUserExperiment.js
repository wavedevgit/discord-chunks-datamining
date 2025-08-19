/** Chunk was on 66181 **/
/** chunk id: 750832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SI: () => c,
  nS: () => o
});
var Chunk81643 = require("./81643.js"),
  Chunk818083 = require("./818083.js"),
  Chunk128064 = require("./128064.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-02_dm_defaults_new_users",
    label: "Default DM Settings - New Users",
    defaultConfig: {
      enabled: false,
      dmOffByDefault: false,
      messageRequestOnByDefault: false
    },
    treatments: [{
      id: 1,
      label: "DM Off by Default",
      config: {
        enabled: true,
        dmOffByDefault: true,
        messageRequestOnByDefault: false
      }
    }, {
      id: 2,
      label: "Message Reqeust On by Default",
      config: {
        enabled: true,
        dmOffByDefault: false,
        messageRequestOnByDefault: true
      }
    }]
  }),
  l = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-02_dm_defaults",
    label: "Default DM Settings",
    defaultConfig: {
      enabled: false,
      dmOffByDefault: false,
      messageRequestOnByDefault: false
    },
    treatments: [{
      id: 1,
      label: "DM Off by Default",
      config: {
        enabled: true,
        dmOffByDefault: true,
        messageRequestOnByDefault: false
      }
    }, {
      id: 2,
      label: "Message Reqeust On by Default",
      config: {
        enabled: true,
        dmOffByDefault: false,
        messageRequestOnByDefault: true
      }
    }]
  }),
  o = e => {
    let t = l.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      }),
      n = a.useExperiment({
        location: e
      }, {
        autoTrackExposure: false
      });
    return t.dmOffByDefault || n.dmOffByDefault
  },
  c = () => (0, Chunk81643.sf)() && (e => {
    let t = l.getCurrentConfig({
        location: e
      }, {
        autoTrackExposure: false
      }),
      n = a.getCurrentConfig({
        location: e
      }, {
        autoTrackExposure: false
      });
    return t.messageRequestOnByDefault || n.messageRequestOnByDefault || (0, s.c_)(e)
  })("shouldAgeVerifyForDMDefaultOff")