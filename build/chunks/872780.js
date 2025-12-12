/** Chunk was on web.js **/
/** chunk id: 872780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => a
});
var Chunk544891 = require("./544891.js");
require("./588486.js");
var Chunk570140 = require("./570140.js");
require("./633289.js");
var Chunk981631 = require("./981631.js");
async function a(e) {
  try {
    let t = (await r.tn.get({
      url: o.ANM.APEX_EXPERIMENTS_METADATA,
      query: {
        surface: e
      },
      rejectWithError: true
    })).body.experiments.map(e => ({
      id: e.id,
      name: e.name,
      title: e.title,
      revision: e.revision,
      unitType: e.unit_type,
      variants: e.variants.map(e => ({
        id: e.id,
        label: e.label,
        type: e.type
      }))
    }));
    i.Z.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
      experiments: t
    })
  } catch (e) {
    i.Z.dispatch({
      type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE"
    }), console.log(e)
  }
}