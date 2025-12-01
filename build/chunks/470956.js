/** Chunk was on web.js **/
/** chunk id: 470956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Es: () => E,
  Eu: () => v,
  bt: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk189786 = require("./189786.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk878884 = require("./878884.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js");

function g(e, t, n) {
  if ((null == e || 0 === e.length) && 0 === n.length) return t;
  let r = [],
    a = new Set;
  for (let e of t) r.push(e), a.add(e.user.id);
  return null == e || e.forEach(e => {
    r.splice((0, i.sortedIndexBy)(r, e, e => {
      let {
        comparator: t
      } = e;
      return t
    }), 0, e)
  }), n.length > 0 && n.forEach(e => {
    a.has(e.user.id) || r.splice((0, i.sortedIndexBy)(r, e, e => {
      let {
        comparator: t
      } = e;
      return t
    }), 0, e)
  }), r
}

function E(e, t) {
  let n = (0, a.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null),
    i = (0, a.Wu)([s.Z], () => null == e ? [] : [...s.Z.getGuildRingingUsers(e)]),
    o = (0, a.Wu)([_.default], () => i.map(e => _.default.getUser(e)).filter(h.lm)),
    c = (0, a.e7)([u.Z], () => u.Z.getBasicChannel(e)),
    m = r.useMemo(() => o.map(e => ({
      voiceState: new l.Z(e.id),
      user: e,
      member: (null == c ? true : c.guild_id) != null ? d.ZP.getMember(null == c ? true : c.guild_id, e.id) : null,
      nick: e.globalName,
      comparator: e.globalName,
      _isPlaceholder: false
    })), [o, null == c ? true : c.guild_id]);
  return r.useMemo(() => g(n, t, m), [n, t, m])
}

function b(e, t) {
  if (null == e || 0 === e.length) return t;
  let n = [...t];
  return e.forEach(e => {
    n.splice((0, i.sortedIndexBy)(n, e, e => (0, o.Yr)(e)), 0, e)
  }), n
}

function y(e) {
  return (0, a.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null)
}

function O(e, t) {
  let n = y(e);
  return r.useMemo(() => b(n, t), [n, t])
}

function v(e, t) {
  let n = (0, a.e7)([c.default], () => c.default.getId() === t),
    i = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
    o = r.useRef(null),
    [s, l] = r.useState(false),
    [u, d] = r.useState(false),
    f = (0, a.e7)([p.Z, m.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != m.Z.isInChannel(e, t) && p.Z.isUserConnected(t)),
    _ = (0, a.e7)([p.Z, m.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != m.Z.isInChannel(e, t) && !p.Z.isUserConnected(t));
  return r.useEffect(() => {
    f && d(true)
  }, [f]), r.useEffect(() => {
    i !== e && d(false)
  }, [e, i]), r.useEffect(() => (_ && null == o.current ? o.current = setTimeout(() => {
    o.current = null, l(true)
  }, 250) : (clearTimeout(o.current), o.current = null, l(false)), () => {
    clearTimeout(o.current), o.current = null
  }), [_]), !n && u && s
}