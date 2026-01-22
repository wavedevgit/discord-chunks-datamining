/** Chunk was on web.js **/
/** chunk id: 418208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => f,
  Vv: () => p,
  o$: () => d,
  tp: () => _,
  zU: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk36149 = require("./36149.js"),
  Chunk191541 = require("./191541.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk818348 = require("./818348.js");

function u() {
  let e = (0, i.yM)();
  return (0, a.f)("useIsStageSpeakingDisabledForCurrentUser") && e
}

function d() {
  let e = (0, i.NI)();
  return (0, a.W)("isStageSpeakingDisabledForCurrentUser") && e
}

function f(e) {
  let t = (0, i.$8)(),
    n = null != e ? e : l.A.getChannelId(),
    r = null != n ? s.A.getChannel(n) : null,
    u = null != r && o.A.can(c.xB.REQUEST_TO_SPEAK, r);
  return (0, a.W)("shouldAgeVerifyToSpeakForCurrentUser") && !t && u
}

function p(e) {
  let t = null != e ? e : l.A.getChannelId(),
    n = (0, r.bG)([o.A, s.A], () => {
      let e = null != t ? s.A.getChannel(t) : null;
      return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e)
    }, [t]),
    u = (0, i.uE)();
  return (0, a.f)("useShouldAgeVerifyToSpeakForCurrentUser") && !u && n
}

function _(e) {
  let t = null != e ? e : l.A.getChannelId(),
    n = (0, r.bG)([o.A, s.A], () => {
      let e = null != t ? s.A.getChannel(t) : null;
      return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e)
    }, [t]),
    u = (0, i.b8)();
  return (0, a.f)("useShouldShowAgeVerificationPopover") && !u && n
}