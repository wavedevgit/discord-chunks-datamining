/** Chunk was on 96750 **/
/** chunk id: 470956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Es: () => b,
  Eu: () => _,
  bt: () => v
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
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

function b(e, t) {
  let n = (0, l.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null),
    a = (0, l.Wu)([o.Z], () => null == e ? [] : [...o.Z.getGuildRingingUsers(e)]),
    c = (0, l.Wu)([m.default], () => a.map(e => m.default.getUser(e)).filter(h.lm)),
    g = (0, l.e7)([u.Z], () => u.Z.getBasicChannel(e)),
    b = r.useMemo(() => c.map(e => ({
      voiceState: new s.Z(e.id),
      user: e,
      member: (null == g ? true : g.guild_id) != null ? d.ZP.getMember(null == g ? true : g.guild_id, e.id) : null,
      nick: e.globalName,
      comparator: e.globalName,
      _isPlaceholder: false
    })), [c, null == g ? true : g.guild_id]);
  return r.useMemo(() => (function(e, t, n) {
    if ((null == e || 0 === e.length) && 0 === n.length) return t;
    let r = [],
      l = new Set;
    for (let e of t) r.push(e), l.add(e.user.id);
    return null == e || e.forEach(e => {
      r.splice((0, i.sortedIndexBy)(r, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), n.length > 0 && n.forEach(e => {
      l.has(e.user.id) || r.splice((0, i.sortedIndexBy)(r, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), r
  })(n, t, b), [n, t, b])
}

function v(e, t) {
  let n = (0, l.e7)([f.Z, p.Z], () => e === p.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null);
  return r.useMemo(() => (function(e, t) {
    if (null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, i.sortedIndexBy)(n, e, e => (0, a.Yr)(e)), 0, e)
    }), n
  })(n, t), [n, t])
}

function _(e, t) {
  let n = (0, l.e7)([c.default], () => c.default.getId() === t),
    i = (0, l.e7)([p.Z], () => p.Z.getChannelId()),
    a = r.useRef(null),
    [o, s] = r.useState(false),
    [u, d] = r.useState(false),
    f = (0, l.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && p.Z.isUserConnected(t)),
    m = (0, l.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && !p.Z.isUserConnected(t));
  return r.useEffect(() => {
    f && d(true)
  }, [f]), r.useEffect(() => {
    i !== e && d(false)
  }, [e, i]), r.useEffect(() => (m && null == a.current ? a.current = setTimeout(() => {
    a.current = null, s(true)
  }, 250) : (clearTimeout(a.current), a.current = null, s(false)), () => {
    clearTimeout(a.current), a.current = null
  }), [m]), !n && u && o
}