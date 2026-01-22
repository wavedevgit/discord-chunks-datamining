/** Chunk was on web.js **/
/** chunk id: 530804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $n: () => E,
  uy: () => A,
  vp: () => O
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk568598 = require("./568598.js"),
  Chunk313961 = require("./313961.js"),
  Chunk288737 = require("./288737.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk584569 = require("./584569.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js");

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
  let n = (0, a.bG)([f.A, p.A], () => e === p.A.getChannelId() ? f.A.getDesyncedVoiceStates() : null),
    i = (0, a.yK)([o.A], () => null == e ? [] : [...o.A.getGuildRingingUsers(e)]),
    s = (0, a.yK)([_.default], () => i.map(e => _.default.getUser(e)).filter(m.Vq)),
    c = (0, a.bG)([u.A], () => u.A.getBasicChannel(e)),
    h = r.useMemo(() => s.map(e => ({
      voiceState: new l.A(e.id),
      user: e,
      member: (null == c ? true : c.guild_id) != null ? d.Ay.getMember(null == c ? true : c.guild_id, e.id) : null,
      nick: e.globalName,
      comparator: e.globalName,
      _isPlaceholder: false
    })), [s, null == c ? true : c.guild_id]);
  return r.useMemo(() => g(n, t, h), [n, t, h])
}

function b(e, t) {
  if (null == e || 0 === e.length) return t;
  let n = [...t];
  return e.forEach(e => {
    n.splice((0, i.sortedIndexBy)(n, e, e => (0, s.KU)(e)), 0, e)
  }), n
}

function y(e) {
  return (0, a.bG)([f.A, p.A], () => e === p.A.getChannelId() ? f.A.getDesyncedParticipants() : null)
}

function O(e, t) {
  let n = y(e);
  return r.useMemo(() => b(n, t), [n, t])
}

function A(e, t) {
  let n = (0, a.bG)([c.default], () => c.default.getId() === t),
    i = (0, a.bG)([p.A], () => p.A.getChannelId()),
    s = r.useRef(null),
    [o, l] = r.useState(false),
    [u, d] = r.useState(false),
    f = (0, a.bG)([p.A, h.A], () => null != t && null != e && p.A.getChannelId() === e && null != h.A.isInChannel(e, t) && p.A.isUserConnected(t)),
    _ = (0, a.bG)([p.A, h.A], () => null != t && null != e && p.A.getChannelId() === e && null != h.A.isInChannel(e, t) && !p.A.isUserConnected(t));
  return r.useEffect(() => {
    f && d(true)
  }, [f]), r.useEffect(() => {
    i !== e && d(false)
  }, [e, i]), r.useEffect(() => (_ && null == s.current ? s.current = setTimeout(() => {
    s.current = null, l(true)
  }, 250) : (clearTimeout(s.current), s.current = null, l(false)), () => {
    clearTimeout(s.current), s.current = null
  }), [_]), !n && u && o
}