/** Chunk was on web.js **/
/** chunk id: 704454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G7: () => s,
  UQ: () => l,
  bc: () => u,
  g2: () => c
});
var Chunk818083 = require("./818083.js"),
  Chunk128064 = require("./128064.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_sensitive_content_defaults",
    label: "Sensitive Content Defaults",
    defaultConfig: {
      enabled: false,
      allBlur: false,
      mixed: false
    },
    treatments: [{
      id: 1,
      label: "Mixed",
      config: {
        enabled: true,
        mixed: true,
        allBlur: false
      }
    }, {
      id: 2,
      label: "Blur Default",
      config: {
        enabled: true,
        mixed: false,
        allBlur: true
      }
    }]
  }),
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-01_sensitive_content_defaults_new_users",
    label: "Sensitive Content Defaults - New Users",
    defaultConfig: {
      enabled: false,
      allBlur: false,
      mixed: false
    },
    treatments: [{
      id: 1,
      label: "Mixed",
      config: {
        enabled: true,
        mixed: true,
        allBlur: false
      }
    }, {
      id: 2,
      label: "Blur Default",
      config: {
        enabled: true,
        mixed: false,
        allBlur: true
      }
    }]
  });

function s(e) {
  let {
    enabled: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  }), {
    enabled: n
  } = o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t || n || (0, i.c_)(e)
}

function l(e) {
  let {
    enabled: t
  } = a.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }), {
    enabled: n
  } = o.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }), r = (0, i.pY)(e);
  return t || n || r
}

function c(e) {
  let {
    allBlur: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}

function u(e) {
  let {
    mixed: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t || (0, i.c_)(e)
}