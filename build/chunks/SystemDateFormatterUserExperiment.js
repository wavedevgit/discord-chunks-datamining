/** Chunk was on web.js **/
/** chunk id: 145158, original params: e,t,n (module,exports,re quire) **/
"use strict";
(0, require("./818083.js").B)({
  kind: "user",
  id: "2024-10_system_date_formatter",
  label: "Use system APIs for date formatting",
  defaultConfig: {
    enableSystemFormatter: false,
    enable24HourPref: false
  },
  treatments: [{
    id: 1,
    label: "Enable system formatter",
    config: {
      enableSystemFormatter: true,
      enable24HourPref: false
    }
  }, {
    id: 2,
    label: "Enable pref for 24-hour time format",
    config: {
      enableSystemFormatter: true,
      enable24HourPref: true
    }
  }]
})