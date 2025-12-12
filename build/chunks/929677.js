/** Chunk was on web.js **/
/** chunk id: 929677, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk380221 = require("./380221.js"),
  Chunk981631 = require("./981631.js");
let c = {
    async fetchUserApplicationIdentitiesWithProfiles(e, t) {
      a.Z.dispatch({
        type: "USER_APPLICATION_IDENTITY_FETCH_USER_START",
        userId: e
      });
      try {
        let n = await i.tn.get({
          url: l.ANM.USER_APPLICATION_IDENTITIES(e),
          query: {
            with_profiles: true
          },
          rejectWithError: true,
          signal: t
        });
        a.Z.dispatch({
          type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
          userId: e,
          identities: n.body.identities
        })
      } catch (t) {
        throw a.Z.dispatch({
          type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE",
          userId: e
        }), o.Z.captureException(t), t
      }
    }
  },
  u = (0, Chunk442837.Kb)(Chunk380221.Z, {
    getQueryId: Chunk981631.McO.USER_APPLICATION_IDENTITIES,
    get: e => s.Z.getUserIdentities(e),
    load: e => c.fetchUserApplicationIdentitiesWithProfiles(e)
  })