/** Chunk was on web.js **/
/** chunk id: 879815, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk979651 = require("./979651.js");

function s(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : a.Z,
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : o.Z,
    s = arguments.length > 3 && true !== arguments[3] ? arguments[3] : i.default,
    l = null != e ? n.getVoiceState(e.getGuildId(), s.getId()) : null;
  return {
    selfDeaf: r.isSelfDeaf(),
    deaf: null != (t = null == l ? true : l.deaf) && t
  }
}

function l(e) {
  return (0, r.cj)([a.Z, o.Z, i.default], () => s(e, a.Z, o.Z, i.default), [e])
}