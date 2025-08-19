/** Chunk was on 66181 **/
/** chunk id: 645041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FT: () => p,
  OY: () => m,
  Qd: () => h,
  c7: () => f
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

function p(e, t) {
  return (0, i.e7)([a.Z], () => m(e, t))
}

function g(e, t, n, i, a) {
  (0, s.PS)(n, i => {
    let r = m(t, n);
    if (e && r || !e && !r) returnfalse;
    i.dismissedGuildContent = (e ? o.GV : o.jx)(i.dismissedGuildContent, t)
  }, e ? u.fy.INFREQUENT_USER_ACTION : u.fy.FREQUENT_USER_ACTION), i && l.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: r.C[t],
    guild_id: n,
    action: null != a ? a : d.L.UNKNOWN
  })
}

function h(e, t, n, i) {
  g(true, e, t, n, i)
}

function f(e, t) {
  g(false, e, t)
}