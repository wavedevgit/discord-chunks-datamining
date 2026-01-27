/** Chunk was on web.js **/
/** chunk id: 675991, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a
});
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    enabled: t,
    join: n,
    channel: a,
    cameraUnavailable: o,
    hasPermission: s,
    channelLimit: l = false,
    channelLimitReached: c = false
  } = e, u = t ? i.intl.string(i.t["4xAQ5w"]) : i.intl.string(i.t.kgIe9a);
  return n && (u = (null == a ? true : a.isManaged()) || !(null == a ? true : a.isPrivate()) ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhH)), o && (u = i.intl.string(i.t["8jSzSe"])), s || (u = i.intl.string(i.t.uQn9B8)), c && !t && (u = (null == a ? true : a.isGuildStageVoice()) ? l >= r.uaN ? i.intl.string(i.t["j6h0/8"]) : i.intl.string(i.t["jlZ+0h"]) : i.intl.formatToPlainString(i.t.x9mtl4, {
    limit: l
  })), u
}