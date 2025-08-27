/** Chunk was on web.js **/
/** chunk id: 931271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => f
});
var Chunk358085 = require("./358085.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk984211 = require("./984211.js");
require("./620662.js");
var Chunk120021 = require("./120021.js"),
  Chunk742889 = require("./742889.js"),
  Chunk994339 = require("./994339.js"),
  Chunk233487 = require("./233487.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t;
  let {
    presenceActivity: n,
    currentUserPresenceActivity: f,
    currentUserId: _,
    message: p,
    application: h,
    isEmbeddedApplication: m,
    isFrameApplication: g,
    isGameLaunchable: E
  } = e;
  if (p.author.id === _ || !(0, c.Z)(n, p, h.id)) return {
    canJoin: false,
    isRemoteJoin: false
  };
  let b = (0, o._)(n);
  return !(0, s.n)(b) || (0, u.y)(b) || (0, a.g)(f, n) || (0, i.H)(p) ? {
    canJoin: false,
    isRemoteJoin: false
  } : m && g ? {
    canJoin: true,
    isRemoteJoin: false
  } : (null == (t = p.activity) ? true : t.type) === d.mFx.JOIN && null != n && (0, l.K)(n) ? {
    canJoin: true,
    isRemoteJoin: true
  } : r.isPlatformEmbedded && E ? {
    canJoin: true,
    isRemoteJoin: false
  } : {
    canJoin: false,
    isRemoteJoin: false
  }
}