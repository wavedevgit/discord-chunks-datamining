/** Chunk was on web.js **/
/** chunk id: 441894, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk760373 = require("./760373.js");

function s(e) {
  var t;
  let [n, r] = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [o.Z, i.Z];
  if (null == e || n.getChannelId() !== e) returnfalse;
  let s = r.getChannel(e);
  if (null == s || s.isGuildStageVoice()) returnfalse;
  let l = null == (t = n.getSecureFramesState()) ? true : t.version;
  return null != l && l !== a.Eg
}

function l(e) {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([o.Z, i.Z], () => s(t, [o.Z, i.Z]), [t])
}