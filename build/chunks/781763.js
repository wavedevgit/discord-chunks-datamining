/** Chunk was on web.js **/
/** chunk id: 781763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => f,
  w: () => p
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk922512 = require("./922512.js"),
  Chunk189081 = require("./189081.js"),
  Chunk144914 = require("./144914.js"),
  Chunk652215 = require("./652215.js");
let d = 50;
async function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : l.A.entitledBranchIds;
  if (!(0, c.S)() || 0 === e.length) return [];
  let t = i().chunk(e, d);
  try {
    let e = t.map(async e => (await a.Bo.post({
        url: u.Rsh.APPLICATION_BRANCHES,
        body: {
          branch_ids: e
        },
        oldFormErrors: true,
        rejectWithError: true
      })).body.map(o.A.createFromServer)),
      n = await Promise.all(e),
      r = i().flatten(n);
    return s.h.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_SUCCESS",
      branches: r
    }), r
  } catch (t) {
    return s.h.dispatch({
      type: "APPLICATION_BRANCHES_FETCH_FAIL",
      branchIds: e
    }), []
  }
}
async function p(e) {
  try {
    let t = await a.Bo.get({
        url: u.Rsh.OWNED_APPLICATION_BRANCHES(e),
        oldFormErrors: true,
        rejectWithError: true
      }),
      n = Array.isArray(t.body) ? t.body.map(o.A.createFromServer) : [];
    return s.h.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS",
      applicationId: e,
      branches: n
    }), n
  } catch (t) {
    return s.h.dispatch({
      type: "OWNED_APPLICATION_BRANCHES_FETCH_FAIL",
      applicationId: e
    }), []
  }
}