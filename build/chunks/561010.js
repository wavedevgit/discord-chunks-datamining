/** Chunk was on 97887 **/
/** chunk id: 561010, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => h
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk361610 = require("./361610.js"),
  Chunk964486 = require("./964486.js"),
  Chunk36124 = require("./36124.js"),
  Chunk317525 = require("./317525.js"),
  Chunk219065 = require("./219065.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");
let p = [];

function h(e, t) {
  (0, s.Ay)(() => {
    (null == t ? true : t.id) != null && (0, i.Ey)(t.id, e, a.LD)
  });
  let n = (0, l.bG)([o.A], () => null != t ? o.A.getSortedRoles(t.id) : []),
    {
      version: h,
      members: f
    } = (0, l.cf)([c.A], () => ({
      version: c.A.getMemberListVersion(e),
      members: c.A.getMemberListSections(e)
    })),
    g = null == t,
    m = r.useMemo(() => {
      if (g) return p;
      let e = n.filter(e => e.hoist).map(e => ({
        id: e.id,
        label: e.name
      }));
      return e.push({
        id: u.cl.ONLINE,
        label: d.intl.string(d.t.WbGtnH)
      }, {
        id: u.cl.OFFLINE,
        label: d.intl.string(d.t.Vv0abJ)
      }), e.map(e => {
        var t, n;
        let {
          id: r,
          label: l
        } = e;
        return {
          label: l,
          userIds: null != (t = null == f || null == (n = f[r]) ? true : n.userIds) ? t : [],
          id: r,
          roleId: r
        }
      })
    }, [n, f, h, g]);
  return null != f ? m : p
}