/** Chunk was on 5606 **/
/** chunk id: 920603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk74396 = require("./74396.js"),
  Chunk652215 = require("./652215.js");

function a() {
  l.A.isFetching() || (i.h.dispatch({
    type: "SAVED_CUSTOM_THEMES_FETCH_START"
  }), r.Bo.get({
    url: s.Rsh.USERS_ME_CUSTOM_THEMES,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => {
    var t, n;
    i.h.dispatch({
      type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
      themes: null != (t = null == (n = e.body) ? true : n.custom_themes) ? t : []
    })
  }).catch(e => {
    i.h.dispatch({
      type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE",
      error: e
    })
  }))
}