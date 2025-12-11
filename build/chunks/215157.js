/** Chunk was on 81690 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => b
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
  return RegExp("".concat(s.Z.escape(n)), "i").test(t)
}

function b(e, t, n, s) {
  let b = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    h = (0, i.e7)([o.Z], () => null != e ? o.Z.getSortedRoles(e.id) : []),
    g = (0, i.Wu)([a.ZP], () => null != e ? a.ZP.getMemberIds(e.id) : []),
    _ = l.useMemo(() => {
      if (null == e || "@" === s[0]) return [];
      if (b) return u.Wx(e, h, null != t ? t : null, n, e => f(s, e));
      let l = u.ik(e, h, null != t ? t : null, n, e => f(s, e));
      return 0 === l.length && "" === s.trim() && 1 === h.length && (l = u.aq()), l
    }, [h, s, e, t, n, b]),
    x = l.useMemo(() => null == e ? [] : u.iI(g, null != t ? t : null, e, n, e => f(s, e)), [g, s, e, t, n]);
  return l.useEffect(() => {
    null != e && c.Z.requestMembers(e.id, p(s), d.EQ)
  }, [s, e]), {
    roles: _,
    members: x,
    getRichTag: l.useCallback(e => {
      let t = null;
      return e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR ? t = {
        type: r.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) && (t = {
        type: r.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}