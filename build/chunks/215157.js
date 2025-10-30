/** Chunk was on 99229 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
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

function _(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function p(e, t) {
  let n = _(e);
  return RegExp("".concat(c.Z.escape(n)), "i").test(t)
}

function m(e, t, n, c) {
  let m = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    b = (0, r.e7)([a.Z], () => null != e ? a.Z.getSortedRoles(e.id) : []),
    h = (0, r.Wu)([o.ZP], () => null != e ? o.ZP.getMemberIds(e.id) : []),
    g = i.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (m) return d.Wx(e, b, null != t ? t : null, n, e => p(c, e));
      let i = d.ik(e, b, null != t ? t : null, n, e => p(c, e));
      return 0 === i.length && "" === c.trim() && 1 === b.length && (i = d.aq()), i
    }, [b, c, e, t, n, m]),
    f = i.useMemo(() => null == e ? [] : d.iI(h, null != t ? t : null, e, n, e => p(c, e)), [h, c, e, t, n]);
  return i.useEffect(() => {
    null != e && s.Z.requestMembers(e.id, _(c), u.EQ)
  }, [c, e]), {
    roles: g,
    members: f,
    getRichTag: i.useCallback(e => {
      let t = null;
      return e.rowType === u.aC.ROLE || e.rowType === u.aC.ADMINISTRATOR ? t = {
        type: l.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === u.aC.MEMBER || e.rowType === u.aC.OWNER) && (t = {
        type: l.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}