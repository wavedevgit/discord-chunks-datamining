/** Chunk was on 81985 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => h
}), require("./781311.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
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

function f(e, t) {
  let n = p(e);
  return RegExp("".concat(c.Z.escape(n)), "i").test(t)
}

function h(e, t, n, c) {
  let h = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    g = (0, i.e7)([o.Z], () => null != e ? o.Z.getSortedRoles(e.id) : []),
    m = (0, i.Wu)([a.ZP], () => null != e ? a.ZP.getMemberIds(e.id) : []),
    b = r.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (h) return u.Wx(e, g, null != t ? t : null, n, e => f(c, e));
      let r = u.ik(e, g, null != t ? t : null, n, e => f(c, e));
      return 0 === r.length && "" === c.trim() && 1 === g.length && (r = u.aq()), r
    }, [g, c, e, t, n, h]),
    y = r.useMemo(() => null == e ? [] : u.iI(m, null != t ? t : null, e, n, e => f(c, e)), [m, c, e, t, n]);
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