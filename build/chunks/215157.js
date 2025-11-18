/** Chunk was on 99229 **/
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

function _(e, t) {
  let n = p(e);
  return RegExp("".concat(s.Z.escape(n)), "i").test(t)
}

function h(e, t, n, s) {
  let h = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    g = (0, i.e7)([a.Z], () => null != e ? a.Z.getSortedRoles(e.id) : []),
    f = (0, i.Wu)([o.ZP], () => null != e ? o.ZP.getMemberIds(e.id) : []),
    b = l.useMemo(() => {
      if (null == e || "@" === s[0]) return [];
      if (h) return u.Wx(e, g, null != t ? t : null, n, e => _(s, e));
      let l = u.ik(e, g, null != t ? t : null, n, e => _(s, e));
      return 0 === l.length && "" === s.trim() && 1 === g.length && (l = u.aq()), l
    }, [g, s, e, t, n, h]),
    m = l.useMemo(() => null == e ? [] : u.iI(f, null != t ? t : null, e, n, e => _(s, e)), [f, s, e, t, n]);
  return l.useEffect(() => {
    null != e && c.Z.requestMembers(e.id, p(s), d.EQ)
  }, [s, e]), {
    roles: b,
    members: m,
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