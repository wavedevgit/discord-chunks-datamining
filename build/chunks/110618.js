/** Chunk was on web.js **/
/** chunk id: 110618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DO: () => _,
  Mt: () => f,
  c: () => d,
  l7: () => p
}), require("./896048.js"), require("./735438.js");
var Chunk383501 = require("./383501.js"),
  Chunk562153 = require("./562153.js"),
  Chunk488926 = require("./488926.js"),
  Chunk446600 = require("./446600.js"),
  Chunk516607 = require("./516607.js"),
  Chunk652215 = require("./652215.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n, r) {
  let a = t[0],
    s = i.Ay.getName(e, n, a),
    o = null != r ? r : t.length;
  return 1 === o && null != a ? s : null == a ? u.intl.formatToPlainString(u.t.chmM9N, {
    count: o
  }) : u.intl.formatToPlainString(u.t.GhkJ21, {
    name: s,
    count: o - 1
  })
}

function f(e, t) {
  switch (e) {
    case c.T6.OWNER:
      return u.intl.string(u.t.icuNBM);
    case c.T6.ADMINISTRATOR:
      return u.intl.string(u.t.eTmN5a);
    case c.T6.MEMBER:
    case c.T6.ROLE:
      return t ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
    case c.T6.EMPTY_STATE:
  }
  return null
}

function p(e) {
  let t = s.A.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? true : t.topic,
    media_session_id: r.A.getMediaSessionId(),
    request_to_speak_state: a.MJ(l.xBc.REQUEST_TO_SPEAK, e) ? o.kw.EVERYONE : o.kw.NO_ONE,
    stage_instance_id: null == t ? true : t.id
  }
}

function _(e, t) {
  let n = t => i.Ay.getName(e.getGuildId(), e.id, t.user),
    r = new Set,
    a = t.filter(e => {
      let t = e.user.id;
      return !r.has(t) && (r.add(t), true)
    });
  return 0 === a.length ? u.intl.string(u.t.FUVhyC) : 1 === a.length ? u.intl.formatToPlainString(u.t.EQwZlN, {
    a: n(a[0])
  }) : 2 === a.length ? u.intl.formatToPlainString(u.t.zBcKoA, {
    a: n(a[0]),
    b: n(a[1])
  }) : u.intl.formatToPlainString(u.t["3AqFaG"], {
    a: n(a[0]),
    b: n(a[1]),
    n: a.length - 2
  })
}