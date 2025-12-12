/** Chunk was on web.js **/
/** chunk id: 274616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  o: () => f
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk503013 = require("./503013.js"),
  Chunk283595 = require("./283595.js"),
  Chunk804739 = require("./804739.js"),
  Chunk981631 = require("./981631.js");
let d = 50;
async function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk283595.Z.entitledBranchIds;
  if (!(0, Chunk804739.Q)() || 0 === module.length) return [];
  let t = i().chunk(module, d);
  try {
    let e = exports.map(async e => (await o.tn.post({
        url: u.ANM.APPLICATION_BRANCHES,
        body: {
          branch_ids: e
        },
        oldFormErrors: true,
        rejectWithError: true
      })).body.map(s.Z.createFromServer)),
      n = await Promise.all(module),
      r = i().flatten(require);
    return Chunk570140.Z.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
      branches: Chunk392711
    }), Chunk392711
  } catch (t) {
    return Chunk570140.Z.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_FAIL",
      branchIds: module
    }), []
  }
}
async function p(e) {
  try {
    let t = await o.tn.get({
        url: u.ANM.OWNED_APPLICATION_BRANCHES(e),
        oldFormErrors: true,
        rejectWithError: true
      }),
      n = Array.isArray(t.body) ? t.body.map(s.Z.createFromServer) : [];
    return a.Z.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
      applicationId: e,
      branches: n
    }), n
  } catch (t) {
    return a.Z.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
      applicationId: e
    }), []
  }
}