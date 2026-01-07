/** Chunk was on web.js **/
/** chunk id: 384275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = {
  fetch() {
    i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_REQUEST"
    }), r.tn.get({
      url: a.ANM.OAUTH2_TOKENS,
      oldFormErrors: true,
      rejectWithError: true
    }).then(e => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      tokens: e.body
    }), () => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE",
      tokens: []
    }))
  },
  fetchByApplicationId(e) {
    i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_REQUEST_BY_ID",
      applicationId: e
    }), r.tn.get({
      url: a.ANM.GET_APPLICATION_TOKENS(e),
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
      tokens: t.body,
      applicationId: e
    }), () => i.Z.dispatch({
      type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
      tokens: [],
      applicationId: e
    }))
  },
  delete(e) {
    r.tn.del({
      url: a.ANM.OAUTH2_TOKEN(e),
      oldFormErrors: true,
      rejectWithError: true
    }).then(() => {
      this.fetch()
    })
  }
}