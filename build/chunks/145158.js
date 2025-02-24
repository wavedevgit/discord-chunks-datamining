/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => r
});
let r = (0, n(818083).B)({
  kind: "user",
  id: "2024-10_system_date_formatter",
  label: "Use system APIs for date formatting",
  defaultConfig: {
    enableSystemFormatter: !1,
    enable24HourPref: !1
  },
  treatments: [{
    id: 1,
    label: "Enable system formatter",
    config: {
      enableSystemFormatter: !0,
      enable24HourPref: !1
    }
  }, {
    id: 2,
    label: "Enable pref for 24-hour time format",
    config: {
      enableSystemFormatter: !0,
      enable24HourPref: !0
    }
  }]
})