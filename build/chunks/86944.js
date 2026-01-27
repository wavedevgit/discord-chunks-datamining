/** Chunk was on 84497 **/
/** chunk id: 86944, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  K: () => g
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

function d(e, t) {
  let l = p(e);
  return RegExp("".concat(u.A.escape(l)), "i").test(t)
}

function g(e, t, l, u) {
  let g = arguments.length > 4 && true !== arguments[4] ? arguments[4] : null != t && t.isGuildStageVoice(),
    f = (0, r.bG)([o.A], () => null != e ? o.A.getSortedRoles(e.id) : []),
    _ = (0, r.yK)([s.Ay], () => null != e ? s.Ay.getMemberIds(e.id) : []),
    b = n.useMemo(() => {
      if (null == e || "@" === u[0]) return [];
      if (g) return c.M2(e, f, null != t ? t : null, l, e => d(u, e));
      let n = c.rT(e, f, null != t ? t : null, l, e => d(u, e));
      return 0 === n.length && "" === u.trim() && 1 === f.length && (n = c.Vl()), n
    }, [f, u, e, t, l, g]),
    v = n.useMemo(() => null == e ? [] : c.Lq(_, null != t ? t : null, e, l, e => d(u, e)), [_, u, e, t, l]);
  return n.useEffect(() => {
    null != e && i.A.requestMembers(e.id, p(u), h.$N)
  }, [u, e]), {
    roles: b,
    members: v,
    getRichTag: n.useCallback(e => {
      let t = null;
      return e.rowType === h.T6.ROLE || e.rowType === h.T6.ADMINISTRATOR ? t = {
        type: a._.ROLE,
        label: e.name,
        color: e.colorString
      } : (e.rowType === h.T6.MEMBER || e.rowType === h.T6.OWNER) && (t = {
        type: a._.MEMBER,
        label: e.name,
        avatar: e.avatarURL
      }), t
    }, [])
  }
}