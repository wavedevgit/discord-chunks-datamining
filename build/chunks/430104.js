/** Chunk was on web.js **/
/** chunk id: 430104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NE: () => d,
  sP: () => u,
  to: () => p,
  u1: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk81643 = require("./81643.js"),
  Chunk318370 = require("./318370.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk231338 = require("./231338.js");

function u() {
  let e = (0, Chunk81643.Jm)();
  return (0, Chunk318370.n)("useIsStageSpeakingDisabledForCurrentUser") && module
}

function d() {
  let e = (0, Chunk81643.yo)();
  return (0, Chunk318370.y)("isStageSpeakingDisabledForCurrentUser") && module
}

function f(e) {
  let t = (0, i.M$)(),
    n = null != e ? e : l.Z.getChannelId(),
    r = null != n ? o.Z.getChannel(n) : null,
    u = null != r && s.Z.can(c.Pl.REQUEST_TO_SPEAK, r);
  return (0, a.y)("shouldAgeVerifyToSpeakForCurrentUser") && !t && u
}

function p(e) {
  let t = null != e ? e : l.Z.getChannelId(),
    n = (0, r.e7)([s.Z, o.Z], () => {
      let e = null != t ? o.Z.getChannel(t) : null;
      return null != e && s.Z.can(c.Pl.REQUEST_TO_SPEAK, e)
    }, [t]),
    u = (0, i.gD)();
  return (0, a.n)("useShouldAgeVerifyToSpeakForCurrentUser") && !u && n
}