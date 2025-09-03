/** Chunk was on web.js **/
/** chunk id: 212517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dp: () => u,
  S5: () => c,
  ZW: () => d
}), require("./997841.js");
var Chunk433517 = require("./433517.js"),
  Chunk695346 = require("./695346.js"),
  Chunk630388 = require("./630388.js"),
  Chunk841784 = require("./841784.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = i.cP.getSetting(),
    n = i.Ou.getSetting();
  return t ? e |= s.xjy.PARTY_PRIVACY_FRIENDS : e &= ~s.xjy.PARTY_PRIVACY_FRIENDS, n ? e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL : e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL, e
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      instance: n,
      secrets: i,
      party: a
    } = e,
    o = 0;
  return (n && (o |= s.xjy.INSTANCE), (null == i ? true : i.join) != null && (o |= s.xjy.JOIN), t) ? (o |= s.xjy.EMBEDDED, o |= l(o)) : (((null == a ? true : a.privacy) === s.RYY.PUBLIC || r.K.get("ACTIVITIES_FORCE_PUBLIC")) && (o |= l(o)), o)
}

function u(e) {
  var t;
  return (0, a.yE)(null != (t = null == e ? true : e.flags) ? t : 0, s.xjy.CONTEXTLESS) && (0, o.Z)(e)
}

function d(e) {
  return e | s.xjy.CONTEXTLESS
}