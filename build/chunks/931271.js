/** Chunk was on web.js **/
/** chunk id: 931271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => p,
  p: () => _
});
var Chunk358085 = require("./358085.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk984211 = require("./984211.js"),
  Chunk687131 = require("./687131.js"),
  Chunk620662 = require("./620662.js"),
  Chunk120021 = require("./120021.js"),
  Chunk994339 = require("./994339.js"),
  Chunk233487 = require("./233487.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t;
  let {
    presenceActivity: n,
    currentUserPresenceActivity: l,
    currentUserId: p,
    message: _,
    application: m,
    isEmbeddedApplication: h,
    isFrameApplication: g,
    isGameLaunchable: E
  } = e;
  if (_.author.id === p || !(0, u.Z)(n, _, m.id)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  let b = (0, a._)(n);
  if (!(0, c.n)(b) || (0, d.y)(b) || (0, o.g)(l, n) || (0, i.H)(_)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  if (h && g) return {
    canJoin: true,
    remoteJoinPlatform: null
  };
  if ((null == (t = _.activity) ? true : t.type) === f.mFx.JOIN && null != n) {
    let e = (0, s.z)(n);
    if (null != e) return {
      canJoin: true,
      remoteJoinPlatform: e
    }
  }
  return (0, r.platformSupportsActivityJoin)() && E ? {
    canJoin: true,
    remoteJoinPlatform: null
  } : {
    canJoin: false,
    remoteJoinPlatform: null
  }
}

function _(e, t, n, i) {
  return !(null == e || !(0, u.Z)(e, n, i.id) || !(0, l.Z)(e, f.xjy.SYNC) || !r.isPlatformEmbedded || (0, o.g)(t, e))
}