/** Chunk was on web.js **/
/** chunk id: 645041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FT: () => _,
  OY: () => f,
  Qd: () => h,
  c7: () => m
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
  return null != n && (0, l.jl)(n, e)
}

function _(e, t) {
  return (0, r.e7)([a.Z], () => f(e, t))
}

function p(e, t, n, r, a) {
  (0, o.PS)(n, r => {
    let i = f(t, n);
    if (e && i || !e && !i) returnfalse;
    r.dismissedGuildContent = (e ? l.GV : l.jx)(r.dismissedGuildContent, t)
  }, e ? d.fy.INFREQUENT_USER_ACTION : d.fy.FREQUENT_USER_ACTION), r && s.default.track(c.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.C[t],
    guild_id: n,
    action: null != a ? a : u.L.UNKNOWN
  })
}

function h(e, t, n, r) {
  p(true, e, t, n, r)
}

function m(e, t) {
  p(false, e, t)
}