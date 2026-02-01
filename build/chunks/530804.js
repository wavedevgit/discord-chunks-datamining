/** Chunk was on 88474 **/
/** chunk id: 530804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $n: () => b,
  uy: () => h,
  vp: () => _
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

function b(e, t) {
  let n = (0, i.bG)([p.A, f.A], () => e === f.A.getChannelId() ? p.A.getDesyncedVoiceStates() : null),
    a = (0, i.yK)([s.A], () => null == e ? [] : [...s.A.getGuildRingingUsers(e)]),
    c = (0, i.yK)([m.default], () => a.map(e => m.default.getUser(e)).filter(y.Vq)),
    g = (0, i.bG)([u.A], () => u.A.getBasicChannel(e)),
    b = r.useMemo(() => c.map(e => ({
      voiceState: new o.A(e.id),
      user: e,
      member: (null == g ? true : g.guild_id) != null ? d.Ay.getMember(null == g ? true : g.guild_id, e.id) : null,
      nick: e.globalName,
      comparator: e.globalName,
      _isPlaceholder: false
    })), [c, null == g ? true : g.guild_id]);
  return r.useMemo(() => (function(e, t, n) {
    if ((null == e || 0 === e.length) && 0 === n.length) return t;
    let r = [],
      i = new Set;
    for (let e of t) r.push(e), i.add(e.user.id);
    return null == e || e.forEach(e => {
      r.splice((0, l.sortedIndexBy)(r, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), n.length > 0 && n.forEach(e => {
      i.has(e.user.id) || r.splice((0, l.sortedIndexBy)(r, e, e => {
        let {
          comparator: t
        } = e;
        return t
      }), 0, e)
    }), r
  })(n, t, b), [n, t, b])
}

function _(e, t) {
  let n = (0, i.bG)([p.A, f.A], () => e === f.A.getChannelId() ? p.A.getDesyncedParticipants() : null);
  return r.useMemo(() => (function(e, t) {
    if (null == e || 0 === e.length) return t;
    let n = [...t];
    return e.forEach(e => {
      n.splice((0, l.sortedIndexBy)(n, e, e => (0, a.KU)(e)), 0, e)
    }), n
  })(n, t), [n, t])
}

function h(e, t) {
  let n = (0, i.bG)([c.default], () => c.default.getId() === t),
    l = (0, i.bG)([f.A], () => f.A.getChannelId()),
    a = r.useRef(null),
    [s, o] = r.useState(false),
    [u, d] = r.useState(false),
    p = (0, i.bG)([f.A, g.A], () => null != t && null != e && f.A.getChannelId() === e && null != g.A.isInChannel(e, t) && f.A.isUserConnected(t)),
    m = (0, i.bG)([f.A, g.A], () => null != t && null != e && f.A.getChannelId() === e && null != g.A.isInChannel(e, t) && !f.A.isUserConnected(t));
  return r.useEffect(() => {
    p && d(true)
  }, [p]), r.useEffect(() => {
    l !== e && d(false)
  }, [e, l]), r.useEffect(() => (m && null == a.current ? a.current = setTimeout(() => {
    a.current = null, o(true)
  }, 250) : (clearTimeout(a.current), a.current = null, o(false)), () => {
    clearTimeout(a.current), a.current = null
  }), [m]), !n && u && s
}