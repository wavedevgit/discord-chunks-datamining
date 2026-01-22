/** Chunk was on web.js **/
/** chunk id: 131724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => p,
  M: () => _
});
var Chunk723702 = require("./723702.js"),
  Chunk850670 = require("./850670.js"),
  Chunk206589 = require("./206589.js"),
  Chunk125017 = require("./125017.js"),
  Chunk625248 = require("./625248.js"),
  Chunk833349 = require("./833349.js"),
  Chunk287613 = require("./287613.js"),
  Chunk659051 = require("./659051.js"),
  Chunk702631 = require("./702631.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  var t;
  let {
    presenceActivity: n,
    currentUserPresenceActivity: l,
    currentUserId: p,
    message: _,
    application: h,
    isEmbeddedApplication: m,
    isFrameApplication: g,
    isGameLaunchable: E
  } = e;
  if (_.author.id === p || !(0, u.A)(n, _, h.id)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  let b = (0, s._)(n);
  if (!(0, c.A)(b) || (0, d.U)(b) || (0, a.w)(l, n) || (0, i.v)(_)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  if (m && g) return {
    canJoin: true,
    remoteJoinPlatform: null
  };
  if ((null == (t = _.activity) ? true : t.type) === f.xL.JOIN && null != n) {
    let e = (0, o.l)(n);
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
  return !(null == e || !(0, u.A)(e, n, i.id) || !(0, l.A)(e, f.jUm.SYNC) || !r.isPlatformEmbedded || (0, a.w)(t, e))
}