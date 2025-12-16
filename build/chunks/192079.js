/** Chunk was on web.js **/
/** chunk id: 192079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ER: () => d,
  kk: () => f,
  s$: () => p,
  wQ: () => _
}), require("./388685.js"), require("./392711.js");
var Chunk19780 = require("./19780.js"),
  Chunk5192 = require("./5192.js"),
  Chunk700785 = require("./700785.js"),
  Chunk427679 = require("./427679.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n, r) {
  let a = t[0],
    o = i.ZP.getName(e, n, a),
    s = null != r ? r : t.length;
  return 1 === s && null != a ? o : null == a ? u.intl.formatToPlainString(u.t.chmM9N, {
    count: s
  }) : u.intl.formatToPlainString(u.t.GhkJ21, {
    name: o,
    count: s - 1
  })
}

function f(e, t) {
  switch (e) {
    case c.aC.OWNER:
      return u.intl.string(u.t.icuNBM);
    case c.aC.ADMINISTRATOR:
      return u.intl.string(u.t.eTmN5a);
    case c.aC.MEMBER:
    case c.aC.ROLE:
      return t ? u.intl.string(u.t.Hw3XWx) : u.intl.string(u.t.YieyPi);
    case c.aC.EMPTY_STATE:
  }
  return null
}

function p(e) {
  let t = o.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? true : t.topic,
    media_session_id: r.Z.getMediaSessionId(),
    request_to_speak_state: a.Uu(l.Plq.REQUEST_TO_SPEAK, e) ? s.BM.EVERYONE : s.BM.NO_ONE,
    stage_instance_id: null == t ? true : t.id
  }
}

function _(e, t) {
  let n = t => i.ZP.getName(e.getGuildId(), e.id, t.user),
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