/** Chunk was on web.js **/
/** chunk id: 67844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => a
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    enabled: t,
    join: n,
    channel: a,
    cameraUnavailable: o,
    hasPermission: s,
    channelLimit: l = false,
    channelLimitReached: c = false
  } = e, u = t ? i.intl.string(i.t["4xAQ5+"]) : i.intl.string(i.t.kgIe9f);
  return n && (u = (null == a ? true : a.isManaged()) || !(null == a ? true : a.isPrivate()) ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhI)), o && (u = i.intl.string(i.t["8jSzSU"])), s || (u = i.intl.string(i.t.uQn9Bw)), c && !t && (u = (null == a ? true : a.isGuildStageVoice()) ? l >= r.RcX ? i.intl.string(i.t["j6h0//"]) : i.intl.string(i.t["jlZ+0t"]) : i.intl.formatToPlainString(i.t.x9mtl5, {
    limit: l
  })), u
}