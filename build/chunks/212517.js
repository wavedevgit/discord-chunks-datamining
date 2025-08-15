/** Chunk was on web.js **/
/** chunk id: 212517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ix: () => o,
  S5: () => s,
  ZW: () => l
}), require("./997841.js");
var Chunk433517 = require("./433517.js"),
  Chunk695346 = require("./695346.js");
require("./630388.js"), require("./841784.js");
var Chunk981631 = require("./981631.js");

function o(e) {
  let t = i.cP.getSetting(),
    n = i.Ou.getSetting();
  return t ? e |= a.xjy.PARTY_PRIVACY_FRIENDS : e &= ~a.xjy.PARTY_PRIVACY_FRIENDS, n ? e |= a.xjy.PARTY_PRIVACY_VOICE_CHANNEL : e &= ~a.xjy.PARTY_PRIVACY_VOICE_CHANNEL, e
}

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: i,
      party: s
    } = e,
    l = 0;
  return (n && (l |= a.xjy.INSTANCE), (null == i ? true : i.join) != null && (l |= a.xjy.JOIN), t) ? (l |= a.xjy.EMBEDDED, l |= o(l)) : (((null == s ? true : s.privacy) === a.RYY.PUBLIC || r.K.get("ACTIVITIES_FORCE_PUBLIC")) && (l |= o(l)), l)
}

function l(e) {
  return e | a.xjy.CONTEXTLESS
}