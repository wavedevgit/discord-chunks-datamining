/** Chunk was on 9753 **/
/** chunk id: 131724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => m,
  M: () => f
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

function m(e) {
  var t;
  let {
    presenceActivity: n,
    currentUserPresenceActivity: o,
    currentUserId: m,
    message: f,
    application: g,
    isEmbeddedApplication: _,
    isFrameApplication: h,
    isGameLaunchable: b
  } = e;
  if (f.author.id === m || !(0, u.A)(n, f, g.id)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  let y = (0, a._)(n);
  if (!(0, c.A)(y) || (0, d.U)(y) || (0, l.w)(o, n) || (0, i.v)(f)) return {
    canJoin: false,
    remoteJoinPlatform: null
  };
  if (_ && h) return {
    canJoin: true,
    remoteJoinPlatform: null
  };
  if ((null == (t = f.activity) ? true : t.type) === p.xL.JOIN && null != n) {
    let e = (0, s.l)(n);
    if (null != e) return {
      canJoin: true,
      remoteJoinPlatform: e
    }
  }
  return (0, r.platformSupportsActivityJoin)() && b ? {
    canJoin: true,
    remoteJoinPlatform: null
  } : {
    canJoin: false,
    remoteJoinPlatform: null
  }
}

function f(e, t, n, i) {
  return !(null == e || !(0, u.A)(e, n, i.id) || !(0, o.A)(e, p.jUm.SYNC) || !r.isPlatformEmbedded || (0, l.w)(t, e))
}