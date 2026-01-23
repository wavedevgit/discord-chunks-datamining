/** Chunk was on 97492 **/
/** chunk id: 86944, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => f
}), require("./733351.js"), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk39255 = require("./39255.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk695184 = require("./695184.js"),
  Chunk257120 = require("./257120.js"),
  Chunk495273 = require("./495273.js"),
  Chunk737045 = require("./737045.js");

function p(e) {
  let t = e.trim();
  return "@" === t[0] ? t.slice(1) : t
}

function h(e, t) {
  let n = p(e);
  return RegExp("".concat(c.A.escape(n)), "i").test(t)
}

function f(e, t, n, c) {
  let f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    g = (0, l.bG)([a.A], () => null != e ? a.A.getSortedRoles(e.id) : []),
    m = (0, l.yK)([s.Ay], () => null != e ? s.Ay.getMemberIds(e.id) : []),
    b = r.useMemo(() => {
      if (null == e || "@" === c[0]) return [];
      if (f) return u.M2(e, g, null != t ? t : null, n, e => h(c, e));
      let r = u.rT(e, g, null != t ? t : null, n, e => h(c, e));
      return 0 === r.length && "" === c.trim() && 1 === g.length && (r = u.Vl()), r
    }, [g, c, e, t, n, f]),
    A = r.useMemo(() => null == e ? [] : u.Lq(m, null != t ? t : null, e, n, e => h(c, e)), [m, c, e, t, n]);
  return r.useEffect(() => {
    null != e && o.A.requestMembers(e.id, p(c), d.$N)
  }, [c, e]), {
    roles: b,
    members: A,
    getRichTag: r.useCallback(e => {
      let t = null;
      return e.rowType === d.T6.ROLE || e.rowType === d.T6.ADMINISTRATOR ? t = {
        type: i._.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === d.T6.MEMBER || e.rowType === d.T6.OWNER) && (t = {
        type: i._.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}