/** Chunk was on 46786 **/
/** chunk id: 215157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Q: () => b
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

function m(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function x(e, t) {
  let r = m(e);
  return RegExp("".concat(c.Z.escape(r)), "i").test(t)
}

function b(e, t, r, c) {
  let b = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    h = (0, l.e7)([s.Z], () => null != e ? s.Z.getSortedRoles(e.id) : []),
    f = (0, l.Wu)([i.ZP], () => null != e ? i.ZP.getMemberIds(e.id) : []),
    y = n.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (b) return u.Wx(e, h, null != t ? t : null, r, e => x(c, e));
      let n = u.ik(e, h, null != t ? t : null, r, e => x(c, e));
      return 0 === n.length && "" === c.trim() && 1 === h.length && (n = u.aq()), n
    }, [h, c, e, t, r, b]),
    g = n.useMemo(() => null == e ? [] : u.iI(f, null != t ? t : null, e, r, e => x(c, e)), [f, c, e, t, r]);
  return n.useEffect(() => {
    null != e && a.Z.requestMembers(e.id, m(c), d.EQ)
  }, [c, e]), {
    roles: y,
    members: g,
    getRichTag: n.useCallback(e => {
      let t = null;
      return e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR ? t = {
        type: o.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) && (t = {
        type: o.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}