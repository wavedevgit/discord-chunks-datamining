/** Chunk was on web.js **/
/** chunk id: 616075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a,
  l: () => i
});
let r = (0, require("./600975.js").C)({
    kind: "user",
    id: "2021-09_favorites_server",
    label: "Favorites Server",
    defaultConfig: {
      favoritesEnabled: false,
      canShow: true,
      isFavoritesPerk: false,
      hasStaffPrivileges: false
    },
    treatments: [{
      id: 1,
      label: "Favorites v1 - On",
      config: {
        favoritesEnabled: true,
        canShow: true,
        isFavoritesPerk: false,
        hasStaffPrivileges: true
      }
    }, {
      id: 2,
      label: "Favorites v1 - Forced Off",
      config: {
        favoritesEnabled: false,
        canShow: false,
        isFavoritesPerk: false,
        hasStaffPrivileges: true
      }
    }, {
      id: 3,
      label: "Favorites v2",
      config: {
        favoritesEnabled: true,
        canShow: true,
        isFavoritesPerk: true,
        hasStaffPrivileges: true
      }
    }, {
      id: 4,
      label: "Favorites v2 w/o Staff Privileges",
      config: {
        favoritesEnabled: true,
        canShow: true,
        isFavoritesPerk: true,
        hasStaffPrivileges: false
      }
    }]
  }),
  i = e => r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }),
  a = r