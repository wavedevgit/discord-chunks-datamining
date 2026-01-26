/** Chunk was on web.js **/
/** chunk id: 201718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  P: () => d
});
var Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk728458 = require("./728458.js"),
  Chunk339580 = require("./339580.js"),
  Chunk652215 = require("./652215.js");
let c = {
    async fetchUserApplicationIdentitiesWithProfiles(e, t) {
      a.h.dispatch({
        type: "USER_APPLICATION_IDENTITY_FETCH_USER_START",
        userId: e
      });
      try {
        let n = await i.Bo.get({
          url: l.Rsh.USER_APPLICATION_IDENTITIES(e),
          query: {
            with_profiles: true
          },
          rejectWithError: true,
          signal: t
        });
        a.h.dispatch({
          type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
          userId: e,
          identities: n.body.identities
        })
      } catch (t) {
        throw a.h.dispatch({
          type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE",
          userId: e
        }), s.A.captureException(t), t
      }
    }
  },
  u = c,
  d = (0, Chunk311907.UT)(Chunk339580.A, {
    getQueryId: Chunk652215.fic.USER_APPLICATION_IDENTITIES,
    get: e => o.A.getUserIdentities(e),
    load: e => c.fetchUserApplicationIdentitiesWithProfiles(e)
  })