/** Chunk was on web.js **/
/** chunk id: 851109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GE: () => u,
  RK: () => o,
  U5: () => a,
  X8: () => c,
  yF: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk428835 = require("./428835.js"),
  a = function(e) {
    return e.POPOUT = "popout", e.SIDEBAR = "sidebar", e.LEGACY = "legacy", e
  }({}),
  o = function(e) {
    return e.SERVER_RAIL_TOP = "server-rail-top", e.SERVER_RAIL_BOTTOM = "server-rail-bottom", e.TITLE_BAR_LEFT = "title-bar-left", e
  }({}),
  s = function(e) {
    return e.TABS = "tabs", e.DROPDOWN = "dropdown", e
  }({});
let l = (0, Chunk600975.C)({
    kind: "user",
    id: "2025-04_desktop_notification_center",
    label: "New Notification Center (Desktop)",
    defaultConfig: {
      notificationCenterVariant: null,
      entrypoint: null,
      filterStyle: null
    },
    treatments: [{
      id: 1,
      label: "Server Rail Entrypoint + Legacy Inbox",
      config: {
        notificationCenterVariant: "legacy",
        entrypoint: "server-rail-top",
        filterStyle: null
      }
    }, {
      id: 2,
      label: "Title Bar Entrypoint + Popout",
      config: {
        notificationCenterVariant: "popout",
        entrypoint: "title-bar-left",
        filterStyle: "dropdown"
      }
    }, {
      id: 3,
      label: "Server Rail Entrypoint + Sidebar",
      config: {
        notificationCenterVariant: "sidebar",
        entrypoint: "server-rail-top",
        filterStyle: "dropdown"
      }
    }, {
      id: 4,
      label: "Server Rail Entrypoint + Popout",
      config: {
        notificationCenterVariant: "popout",
        entrypoint: "server-rail-top",
        filterStyle: "dropdown"
      }
    }]
  }),
  c = e => (0, i.u5)(l, e),
  u = e => (0, i.P2)(l, e)