/** Chunk was on web.js **/
/** chunk id: 346951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk669764 = require("./669764.js"),
  Chunk981631 = require("./981631.js");
let s = 20;

function l(e) {
  let {
    forceFetch: t
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    forceFetch: false
  }, n = t ? e : e.filter(a.Z.canFetch);
  if (0 === n.length) return;
  i.Z.dispatch({
    type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
    applicationIds: n
  });
  let l = async e => {
    try {
      let t = await r.tn.get({
        url: o.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
        query: {
          application_ids: e
        },
        rejectWithError: true
      });
      i.Z.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
        applicationIds: e,
        supplementalGameData: t.body.supplemental_game_data
      })
    } catch (t) {
      i.Z.dispatch({
        type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
        applicationIds: e
      })
    }
  };
  for (; n.length > 0;) l(n.splice(0, s))
}