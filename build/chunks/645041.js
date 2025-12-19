/** Chunk was on 51333 **/
/** chunk id: 645041, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FT: () => p,
  OY: () => f,
  Qd: () => g,
  c7: () => y
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

function f(e, t) {
  let n = a.Z.getDismissedGuildContent(t);
  return null != n && (0, s.jl)(n, e)
}

function p(e, t) {
  return (0, r.e7)([a.Z], () => f(e, t))
}

function m(e, t, n, r, a) {
  (0, l.PS)(n, r => {
    let i = f(t, n);
    if (e && i || !e && !i) returnfalse;
    r.dismissedGuildContent = (e ? s.GV : s.jx)(r.dismissedGuildContent, t)
  }, e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION), r && o.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.C[t],
    guild_id: n,
    action: null != a ? a : c.L.UNKNOWN
  })
}

function g(e, t, n, r) {
  m(true, e, t, n, r)
}

function y(e, t) {
  m(false, e, t)
}