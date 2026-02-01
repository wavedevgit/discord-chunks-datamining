/** Chunk was on 88317 **/
/** chunk id: 110618, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  DO: () => E,
  Mt: () => u,
  c: () => s,
  l7: () => h
}), require("./896048.js"), require("./735438.js");
var Chunk383501 = require("./383501.js"),
  Chunk562153 = require("./562153.js"),
  Chunk488926 = require("./488926.js"),
  Chunk446600 = require("./446600.js"),
  Chunk516607 = require("./516607.js"),
  Chunk652215 = require("./652215.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, n, t, i) {
  let r = n[0],
    a = l.Ay.getName(e, t, r),
    o = null != i ? i : n.length;
  return 1 === o && null != r ? a : null == r ? d.intl.formatToPlainString(d.t.chmM9N, {
    count: o
  }) : d.intl.formatToPlainString(d.t.GhkJ21, {
    name: a,
    count: o - 1
  })
}

function u(e, n) {
  switch (e) {
    case c.T6.OWNER:
      return d.intl.string(d.t.icuNBM);
    case c.T6.ADMINISTRATOR:
      return d.intl.string(d.t.eTmN5a);
    case c.T6.MEMBER:
    case c.T6.ROLE:
      return n ? d.intl.string(d.t.Hw3XWx) : d.intl.string(d.t.YieyPi);
    case c.T6.EMPTY_STATE:
  }
  return null
}

function h(e) {
  let n = a.A.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == n ? true : n.topic,
    media_session_id: i.A.getMediaSessionId(),
    request_to_speak_state: r.MJ(_.xBc.REQUEST_TO_SPEAK, e) ? o.kw.EVERYONE : o.kw.NO_ONE,
    stage_instance_id: null == n ? true : n.id
  }
}

function E(e, n) {
  let t = n => l.Ay.getName(e.getGuildId(), e.id, n.user),
    i = new Set,
    r = n.filter(e => {
      let n = e.user.id;
      return !i.has(n) && (i.add(n), true)
    });
  return 0 === r.length ? d.intl.string(d.t.FUVhyC) : 1 === r.length ? d.intl.formatToPlainString(d.t.EQwZlN, {
    a: t(r[0])
  }) : 2 === r.length ? d.intl.formatToPlainString(d.t.zBcKoA, {
    a: t(r[0]),
    b: t(r[1])
  }) : d.intl.formatToPlainString(d.t["3AqFaG"], {
    a: t(r[0]),
    b: t(r[1]),
    n: r.length - 2
  })
}