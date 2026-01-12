/** Chunk was on 83772 **/
/** chunk id: 645041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FT: () => f,
  OY: () => m,
  Qd: () => g,
  c7: () => v
});
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk915486 = require("./915486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk526761 = require("./526761.js");

function m(e, t) {
  let n = a.Z.getDismissedGuildContent(t);
  return null != n && (0, o.jl)(n, e)
}

function f(e, t) {
  return (0, r.e7)([a.Z], () => m(e, t))
}

function p(e, t, n, r, a) {
  (0, i.PS)(n, r => {
    let l = m(t, n);
    if (e && l || !e && !l) returnfalse;
    r.dismissedGuildContent = (e ? o.GV : o.jx)(r.dismissedGuildContent, t)
  }, e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION), r && s.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: l.C[t],
    guild_id: n,
    action: null != a ? a : c.L.UNKNOWN
  })
}

function g(e, t, n, r) {
  p(true, e, t, n, r)
}

function v(e, t) {
  p(false, e, t)
}