/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  T: () => o,
  _f: () => c,
  aq: () => l,
  m1: () => a,
  nS: () => s,
  xN: () => u
});
var r = n(818083),
  i = n(987338);
let o = (0, r.B)({
    kind: "user",
    id: "2023-11_app_launcher_desktop",
    label: "App Launcher - Desktop",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable the app launcher feature on desktop",
      config: {
        enabled: !0
      }
    }]
  }),
  a = (0, r.B)({
    kind: "user",
    id: "2024-06_desktop_app_launcher_in_activities_shelf",
    label: "Desktop App Launcher In Activities Shelf",
    defaultConfig: {
      enabled: !1,
      clickOnHomeActivityOpensAppDetail: !1
    },
    treatments: [{
      id: 1,
      label: "Enable the desktop app launcher in activities shelf: On home screen, clicking activity card -> performs activity action (i.e. launch)",
      config: {
        enabled: !0,
        clickOnHomeActivityOpensAppDetail: !1
      }
    }, {
      id: 2,
      label: "Enable the desktop app launcher in activities shelf: On home screen, clicking activity card -> activity detail page",
      config: {
        enabled: !0,
        clickOnHomeActivityOpensAppDetail: !0
      }
    }]
  }),
  s = (0, r.B)({
    kind: "user",
    id: "2024-07_open_platform_app_launcher",
    label: "Open Platform App Launcher",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable the App Launcher changes for Open Platform",
      config: {
        enabled: !0
      }
    }]
  }),
  l = (0, r.B)({
    kind: "user",
    id: "2024-08_open_platform_app_launcher_holdout",
    label: "Open Platform App Launcher Holdout",
    commonTriggerPoint: i.$P.VOICE_CALL,
    defaultConfig: {
      clickOnHomeActivityOpensAppDetail: !0
    },
    treatments: [{
      id: 1,
      label: "clicking activity in voice app launcher -> performs activity action",
      config: {
        clickOnHomeActivityOpensAppDetail: !1
      }
    }, {
      id: 2,
      label: "clicking activity in voice app launcher -> opens activity detail page",
      config: {
        clickOnHomeActivityOpensAppDetail: !0
      }
    }]
  }),
  c = (0, r.B)({
    kind: "user",
    id: "2024-09_user_app_install_education",
    label: "User App Install Education Experiment",
    defaultConfig: {
      enabled: !1,
      showsTooltip: !1
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "show animation on app launcher icon + tooltip when a user app is authorized when in a channel instead of showing auth success modal",
      config: {
        enabled: !0,
        showsTooltip: !0
      }
    }, {
      id: 2,
      label: "show animation on app launcher icon when a user app is authorized when in a channel instead of showing auth success modal",
      config: {
        enabled: !0,
        showsTooltip: !1
      }
    }]
  }),
  u = (0, r.B)({
    kind: "user",
    id: "2024-10_weighted_sample_activity_shelf",
    label: "Weighted Sample Activity Shelf",
    defaultConfig: {
      enabled: !1
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [{
      id: 1,
      label: "Enable weighted sample for activity shelf",
      config: {
        enabled: !0
      }
    }]
  })