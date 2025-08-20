/** Chunk was on web.js **/
/** chunk id: 931271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => u
});
var Chunk358085 = require("./358085.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk984211 = require("./984211.js");
require("./620662.js");
var Chunk120021 = require("./120021.js"),
  Chunk994339 = require("./994339.js"),
  Chunk233487 = require("./233487.js");

function u(e) {
  let {
    presenceActivity: t,
    currentUserPresenceActivity: n,
    currentUserId: u,
    message: d,
    application: f,
    isEmbeddedApplication: _,
    isFrameApplication: p,
    isGameLaunchable: h
  } = e;
  if (d.author.id === u || !(0, l.Z)(t, d, f.id)) returnfalse;
  let m = (0, o._)(t);
  return !(!(0, s.n)(m) || (0, c.y)(m) || (0, a.g)(n, t) || (0, i.H)(d)) && (!!_ && !!p || !!r.isPlatformEmbedded && !!h)
}
require("./981631.js")