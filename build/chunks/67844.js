/** Chunk was on web.js **/
/** chunk id: 67844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => o
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    enabled: t,
    join: n,
    channel: o,
    cameraUnavailable: a,
    hasPermission: s,
    channelLimit: l = false,
    channelLimitReached: c = false
  } = e, u = t ? i.intl.string(i.t["4xAQ5w"]) : i.intl.string(i.t.kgIe9a);
  return n && (u = (null == o ? true : o.isManaged()) || !(null == o ? true : o.isPrivate()) ? i.intl.string(i.t.clqrYm) : i.intl.string(i.t.W68MhH)), a && (u = i.intl.string(i.t["8jSzSe"])), s || (u = i.intl.string(i.t.uQn9B8)), c && !t && (u = (null == o ? true : o.isGuildStageVoice()) ? l >= r.RcX ? i.intl.string(i.t["j6h0/8"]) : i.intl.string(i.t["jlZ+0h"]) : i.intl.formatToPlainString(i.t.x9mtl4, {
    limit: l
  })), u
}