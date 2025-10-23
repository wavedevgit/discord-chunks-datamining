/** Chunk was on 60565 **/
/** chunk id: 215157, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Q: () => m
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

function s(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function b(e, t) {
  let r = s(e);
  return RegExp("".concat(c.Z.escape(r)), "i").test(t)
}

function m(e, t, r, c) {
  let m = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    p = (0, n.e7)([i.Z], () => null != e ? i.Z.getSortedRoles(e.id) : []),
    h = (0, n.Wu)([a.ZP], () => null != e ? a.ZP.getMemberIds(e.id) : []),
    f = o.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (m) return u.Wx(e, p, null != t ? t : null, r, e => b(c, e));
      let o = u.ik(e, p, null != t ? t : null, r, e => b(c, e));
      return 0 === o.length && "" === c.trim() && 1 === p.length && (o = u.aq()), o
    }, [p, c, e, t, r, m]),
    g = o.useMemo(() => null == e ? [] : u.iI(h, null != t ? t : null, e, r, e => b(c, e)), [h, c, e, t, r]);
  return o.useEffect(() => {
    null != e && _.Z.requestMembers(e.id, s(c), d.EQ)
  }, [c, e]), {
    roles: f,
    members: g,
    getRichTag: o.useCallback(e => {
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