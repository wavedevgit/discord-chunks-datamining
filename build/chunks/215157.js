/** Chunk was on 60565 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => d
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

function g(e, t) {
  let n = p(e);
  return RegExp("".concat(c.Z.escape(n)), "i").test(t)
}

function d(e, t, n, c) {
  let d = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    f = (0, r.e7)([s.Z], () => null != e ? s.Z.getSortedRoles(e.id) : []),
    _ = (0, r.Wu)([o.ZP], () => null != e ? o.ZP.getMemberIds(e.id) : []),
    b = l.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (d) return u.Wx(e, f, null != t ? t : null, n, e => g(c, e));
      let l = u.ik(e, f, null != t ? t : null, n, e => g(c, e));
      return 0 === l.length && "" === c.trim() && 1 === f.length && (l = u.aq()), l
    }, [f, c, e, t, n, d]),
    v = l.useMemo(() => null == e ? [] : u.iI(_, null != t ? t : null, e, n, e => g(c, e)), [_, c, e, t, n]);
  return l.useEffect(() => {
    null != e && i.Z.requestMembers(e.id, p(c), h.EQ)
  }, [c, e]), {
    roles: b,
    members: v,
    getRichTag: l.useCallback(e => {
      let t = null;
      return e.rowType === h.aC.ROLE || e.rowType === h.aC.ADMINISTRATOR ? t = {
        type: a.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === h.aC.MEMBER || e.rowType === h.aC.OWNER) && (t = {
        type: a.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}