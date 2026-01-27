/** Chunk was on web.js **/
/** chunk id: 753738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nr: () => l,
  PD: () => f,
  cw: () => u,
  lH: () => s,
  yf: () => c
}), require("./65821.js"), require("./896048.js");
var Chunk884384 = require("./884384.js"),
  Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
class s extends Error {}
class l extends Error {}
let c = new Set([Chunk652215.t02.AUTOMOD_MESSAGE_BLOCKED, Chunk652215.t02.AUTOMOD_TITLE_BLOCKED, Chunk652215.t02.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

function u(e, t) {
  if (null == e) return null;
  let {
    code: n,
    message: r
  } = e;
  if (!c.has(n)) return null;
  if (null != r) return r;
  if (null == t) return null;
  let s = i.A.getChannel(t);
  return (null == s ? true : s.isThread()) ? o.intl.string(o.t.DVdG9E) : ((null == s ? true : s.isForumPost()) || (null == s ? true : s.isForumLikeChannel())) && (n === a.t02.AUTOMOD_TITLE_BLOCKED || n === a.t02.AUTOMOD_MESSAGE_BLOCKED) ? o.intl.string(o.t.ipgKDg) : null
}

function d(e) {
  let t = i.A.getChannel(e.message.channelId);
  return (0, r.Qn)(e) ? o.intl.string(o.t.bU6o0z) : (null == t ? true : t.isThread()) ? o.intl.string(o.t.DVdG9E) : (null == t ? true : t.isForumPost()) || (null == t ? true : t.isForumLikeChannel()) ? o.intl.string(o.t.ipgKDg) : o.intl.string(o.t.zQ69pv)
}

function f(e, t) {
  let n = u(t);
  return null != n ? n : null == e ? o.intl.string(o.t.zQ69pv) : d(e)
}