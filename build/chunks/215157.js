/** Chunk was on 88806 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => f
}), require("./781311.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk892880 = require("./892880.js"),
  Chunk226951 = require("./226951.js"),
  Chunk605436 = require("./605436.js"),
  Chunk71080 = require("./71080.js");

function p(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function h(e, t) {
  let n = p(e);
  return RegExp("".concat(c.Z.escape(n)), "i").test(t)
}

function f(e, t, n, c) {
  let f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    m = (0, i.e7)([o.Z], () => null != e ? o.Z.getSortedRoles(e.id) : []),
    g = (0, i.Wu)([a.ZP], () => null != e ? a.ZP.getMemberIds(e.id) : []),
    b = r.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (f) return u.Wx(e, m, null != t ? t : null, n, e => h(c, e));
      let r = u.ik(e, m, null != t ? t : null, n, e => h(c, e));
      return 0 === r.length && "" === c.trim() && 1 === m.length && (r = u.aq()), r
    }, [m, c, e, t, n, f]),
    y = r.useMemo(() => null == e ? [] : u.iI(g, null != t ? t : null, e, n, e => h(c, e)), [g, c, e, t, n]);
  return r.useEffect(() => {
    null != e && s.Z.requestMembers(e.id, p(c), d.EQ)
  }, [c, e]), {
    roles: b,
    members: y,
    getRichTag: r.useCallback(e => {
      let t = null;
      return e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR ? t = {
        type: l.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) && (t = {
        type: l.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}