/** Chunk was on 60565 **/
/** chunk id: 215157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => h
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

function d(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function p(e, t) {
  let n = d(e);
  return RegExp("".concat(u.Z.escape(n)), "i").test(t)
}

function h(e, t, n, u) {
  let h = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    f = (0, l.e7)([i.Z], () => null != e ? i.Z.getSortedRoles(e.id) : []),
    b = (0, l.Wu)([c.ZP], () => null != e ? c.ZP.getMemberIds(e.id) : []),
    w = r.useMemo(() => {
      if (null == e || "@" === u[0]) return [];
      if (h) return _.Wx(e, f, null != t ? t : null, n, e => p(u, e));
      let r = _.ik(e, f, null != t ? t : null, n, e => p(u, e));
      return 0 === r.length && "" === u.trim() && 1 === f.length && (r = _.aq()), r
    }, [f, u, e, t, n, h]),
    g = r.useMemo(() => null == e ? [] : _.iI(b, null != t ? t : null, e, n, e => p(u, e)), [b, u, e, t, n]);
  return r.useEffect(() => {
    null != e && a.Z.requestMembers(e.id, d(u), s.EQ)
  }, [u, e]), {
    roles: w,
    members: g,
    getRichTag: r.useCallback(e => {
      let t = null;
      return e.rowType === s.aC.ROLE || e.rowType === s.aC.ADMINISTRATOR ? t = {
        type: o.F.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === s.aC.MEMBER || e.rowType === s.aC.OWNER) && (t = {
        type: o.F.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}