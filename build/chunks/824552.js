/** Chunk was on web.js **/
/** chunk id: 824552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let s = {
  fetch() {
    i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_REQUEST"
    }), r.Bo.get({
      url: a.Rsh.OAUTH2_TOKENS,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      tokens: e.body
    }), () => i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      tokens: []
    }))
  },
  fetchByApplicationId(e) {
    i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_REQUEST_BY_ID",
      applicationId: e
    }), r.Bo.get({
      url: a.Rsh.GET_APPLICATION_TOKENS(e),
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
      tokens: t.body,
      applicationId: e
    }), () => i.h.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
      tokens: [],
      applicationId: e
    }))
  },
  delete(e) {
    r.Bo.del({
      url: a.Rsh.OAUTH2_TOKEN(e),
      oldFormErrors: true,
      rejectWithError: true
    }).then(() => {
      this.fetch()
    })
  }
}