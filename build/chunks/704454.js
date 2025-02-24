/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  G7: () => a,
  bc: () => l,
  g2: () => s
});
var r = n(818083);
let i = (0, r.B)({
    kind: "user",
    id: "2025-01_sensitive_content_defaults",
    label: "Sensitive Content Defaults",
    defaultConfig: {
      enabled: !1,
      allBlur: !1,
      mixed: !1
    },
    treatments: [{
      id: 1,
      label: "Mixed",
      config: {
        enabled: !0,
        mixed: !0,
        allBlur: !1
      }
    }, {
      id: 2,
      label: "Blur Default",
      config: {
        enabled: !0,
        mixed: !1,
        allBlur: !0
      }
    }]
  }),
  o = (0, r.B)({
    kind: "user",
    id: "2025-01_sensitive_content_defaults_new_users",
    label: "Sensitive Content Defaults - New Users",
    defaultConfig: {
      enabled: !1,
      allBlur: !1,
      mixed: !1
    },
    treatments: [{
      id: 1,
      label: "Mixed",
      config: {
        enabled: !0,
        mixed: !0,
        allBlur: !1
      }
    }, {
      id: 2,
      label: "Blur Default",
      config: {
        enabled: !0,
        mixed: !1,
        allBlur: !0
      }
    }]
  });

function a(e) {
  let {
    enabled: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  }), {
    enabled: n
  } = o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t || n
}

function s(e) {
  let {
    allBlur: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t
}

function l(e) {
  let {
    mixed: t
  } = i.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t
}