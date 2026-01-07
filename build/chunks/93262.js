/** Chunk was on web.js **/
/** chunk id: 93262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk36982 = require("./36982.js"),
  Chunk981631 = require("./981631.js");

function s() {
  a.Z.isFetching() || (i.Z.dispatch({
    type: "SAVED_CUSTOM_THEMES_FETCH_START"
  }), r.tn.get({
    url: o.ANM.USERS_ME_CUSTOM_THEMES,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    var t, n;
    i.Z.dispatch({
      type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
      themes: null != (n = null == (t = e.body) ? true : t.custom_themes) ? n : []
    })
  }).catch(e => {
    i.Z.dispatch({
      type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE",
      error: e
    })
  }))
}