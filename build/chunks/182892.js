/** Chunk was on web.js **/
/** chunk id: 182892, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => c,
  e: () => u
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk506774 = require("./506774.js"),
  Chunk253932 = require("./253932.js"),
  Chunk765379 = require("./765379.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = a.e.getSetting(),
    n = a.UM.getSetting();
  return t ? e |= o.jUm.PARTY_PRIVACY_FRIENDS : e &= ~o.jUm.PARTY_PRIVACY_FRIENDS, n ? e |= o.jUm.PARTY_PRIVACY_VOICE_CHANNEL : e &= ~o.jUm.PARTY_PRIVACY_VOICE_CHANNEL, e
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    a = arguments.length > 4 && true !== arguments[4] ? arguments[4] : o.KIY.PRIVATE,
    {
      secrets: s
    } = e,
    c = 0;
  return (t && (c |= o.jUm.INSTANCE), (null == s ? true : s.join) != null && (c |= o.jUm.JOIN), r && (c |= o.jUm.CONTEXTLESS), n) ? (c |= o.jUm.EMBEDDED, c |= l(c)) : ((a === o.KIY.PUBLIC || i.w.get("ACTIVITIES_FORCE_PUBLIC")) && (c |= l(c)), c)
}

function u(e) {
  var t;
  return (0, r.Lt)(null != (t = null == e ? true : e.flags) ? t : 0, o.jUm.CONTEXTLESS) && (0, s.A)(e)
}