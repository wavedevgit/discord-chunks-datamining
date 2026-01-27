/** Chunk was on web.js **/
/** chunk id: 489803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk524799 = require("./524799.js"),
  Chunk652215 = require("./652215.js");
let s = 20;

function l(e) {
  let {
    forceFetch: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    forceFetch: false
  }, n = t ? e : e.filter(a.A.canFetch);
  if (0 === n.length) return;
  i.h.dispatch({
    type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
    applicationIds: n
  });
  let l = async e => {
    try {
      let t = await r.Bo.get({
        url: o.Rsh.APPLICATIONS_GAMES_SUPPLEMENTAL,
        query: {
          application_ids: e
        },
        rejectWithError: true
      });
      i.h.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
        applicationIds: e,
        supplementalGameData: t.body.supplemental_game_data
      })
    } catch (t) {
      i.h.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
        applicationIds: e
      })
    }
  };
  for (; n.length > 0;) l(n.splice(0, s))
}