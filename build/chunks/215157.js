/** Chunk was on 98995 **/
/** chunk id: 215157, original params: e,c,a (module,exports,require) **/
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

function u(e) {
  let c = e.trim();
  return "@" === c[0] ? c.slice(1) : c
}

function b(e, c) {
  let a = u(e);
  return RegExp("".concat(_.Z.escape(a)), "i").test(c)
}

function m(e, c, a, _) {
  let m = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != c && c.isGuildStageVoice(),
    p = (0, o.e7)([l.Z], () => null != e ? l.Z.getSortedRoles(e.id) : []),
    h = (0, o.Wu)([n.ZP], () => null != e ? n.ZP.getMemberIds(e.id) : []),
    f = t.useMemo(() => {
      if (null == e || "@" === _[0]) return [];
      if (m) return s.Wx(e, p, null != c ? c : null, a, e => b(_, e));
      let t = s.ik(e, p, null != c ? c : null, a, e => b(_, e));
      return 0 === t.length && "" === _.trim() && 1 === p.length && (t = s.aq()), t
    }, [p, _, e, c, a, m]),
    w = t.useMemo(() => null == e ? [] : s.iI(h, null != c ? c : null, e, a, e => b(_, e)), [h, _, e, c, a]);
  return t.useEffect(() => {
    null != e && i.Z.requestMembers(e.id, u(_), d.EQ)
  }, [_, e]), {
    roles: f,
    members: w,
    getRichTag: t.useCallback(e => {
      let c = null;
      return e.rowType === d.aC.ROLE || e.rowType === d.aC.ADMINISTRATOR ? c = {
        type: r.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === d.aC.MEMBER || e.rowType === d.aC.OWNER) && (c = {
        type: r.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), c
    }, [])
  }
}