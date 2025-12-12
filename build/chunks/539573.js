/** Chunk was on web.js **/
/** chunk id: 539573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => u,
  U8: () => c,
  V6: () => s,
  uF: () => f,
  uS: () => l
}), require("./415506.js"), require("./388685.js");
var Chunk673750 = require("./673750.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
class s extends Error {}
class l extends Error {}
let c = new Set([Chunk981631.evJ.AUTOMOD_MESSAGE_BLOCKED, Chunk981631.evJ.AUTOMOD_TITLE_BLOCKED, Chunk981631.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

function u(e, t) {
  if (null == e) return null;
  let {
    code: n,
    message: r
  } = e;
  if (!c.has(n)) return null;
  if (null != r) return r;
  if (null == t) return null;
  let s = i.Z.getChannel(t);
  return (null == s ? true : s.isThread()) ? a.intl.string(a.t.DVdG9E) : ((null == s ? true : s.isForumPost()) || (null == s ? true : s.isForumLikeChannel())) && (n === o.evJ.AUTOMOD_TITLE_BLOCKED || n === o.evJ.AUTOMOD_MESSAGE_BLOCKED) ? a.intl.string(a.t.ipgKDg) : null
}

function d(e) {
  let t = i.Z.getChannel(e.message.channelId);
  return (0, r.Bz)(e) ? a.intl.string(a.t.bU6o0z) : (null == t ? true : t.isThread()) ? a.intl.string(a.t.DVdG9E) : (null == t ? true : t.isForumPost()) || (null == t ? true : t.isForumLikeChannel()) ? a.intl.string(a.t.ipgKDg) : a.intl.string(a.t.zQ69pv)
}

function f(e, t) {
  let n = u(t);
  return null != n ? n : null == e ? a.intl.string(a.t.zQ69pv) : d(e)
}