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
  return (null == s ? true : s.isThread()) ? o.intl.string(o.t.DVdG9E) : ((null == s ? true : s.isForumPost()) || (null == s ? true : s.isForumLikeChannel())) && (n === a.evJ.AUTOMOD_TITLE_BLOCKED || n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) ? o.intl.string(o.t.ipgKDg) : null
}

function d(e) {
  let t = i.Z.getChannel(e.message.channelId);
  return (0, r.Bz)(e) ? o.intl.string(o.t.bU6o0z) : (null == t ? true : t.isThread()) ? o.intl.string(o.t.DVdG9E) : (null == t ? true : t.isForumPost()) || (null == t ? true : t.isForumLikeChannel()) ? o.intl.string(o.t.ipgKDg) : o.intl.string(o.t.zQ69pv)
}

function f(e, t) {
  let n = u(t);
  return null != n ? n : null == e ? o.intl.string(o.t.zQ69pv) : d(e)
}