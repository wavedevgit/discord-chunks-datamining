/** Chunk was on web.js **/
/** chunk id: 212517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => u,
  S: () => c
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk433517 = require("./433517.js"),
  Chunk695346 = require("./695346.js"),
  Chunk841784 = require("./841784.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = o.cP.getSetting(),
    n = o.Ou.getSetting();
  return t ? e |= s.xjy.PARTY_PRIVACY_FRIENDS : e &= ~s.xjy.PARTY_PRIVACY_FRIENDS, n ? e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL : e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL, e
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : s.RYY.PRIVATE,
    {
      secrets: a
    } = e,
    c = 0;
  return (t && (c |= s.xjy.INSTANCE), (null == a ? true : a.join) != null && (c |= s.xjy.JOIN), r && (c |= s.xjy.CONTEXTLESS), n) ? (c |= s.xjy.EMBEDDED, c |= l(c)) : ((o === s.RYY.PUBLIC || i.K.get("ACTIVITIES_FORCE_PUBLIC")) && (c |= l(c)), c)
}

function u(e) {
  var t;
  return (0, r.yE)(null != (t = null == e ? true : e.flags) ? t : 0, s.xjy.CONTEXTLESS) && (0, a.Z)(e)
}