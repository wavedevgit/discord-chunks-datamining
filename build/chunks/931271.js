/** Chunk was on 66866 **/
/** chunk id: 931271, original params: e,t,n (module,exports,require) **/
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
    application: p,
    isEmbeddedApplication: m,
    isFrameApplication: f,
    isGameLaunchable: _
  } = e;
  if (d.author.id === u || !(0, s.Z)(t, d, p.id)) returnfalse;
  let g = (0, a._)(t);
  return !(!(0, o.n)(g) || (0, c.y)(g) || (0, l.g)(n, t) || (0, i.H)(d)) && (!!m && !!f || !!r.isPlatformEmbedded && !!_)
}
require("./981631.js")