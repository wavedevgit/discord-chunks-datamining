/** Chunk was on 82124 **/
/** chunk id: 965376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => f
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk941028 = require("./941028.js"),
  Chunk493773 = require("./493773.js"),
  Chunk509848 = require("./509848.js"),
  Chunk485386 = require("./485386.js"),
  Chunk159299 = require("./159299.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");
let p = [];

function f(e, t) {
  (0, a.ZP)(() => {
    (null == t ? true : t.id) != null && (0, l.b8)(t.id, e, o.KV)
  });
  let n = (0, i.e7)([s.Z], () => null != t ? s.Z.getSortedRoles(t.id) : []),
    {
      version: f,
      members: h
    } = (0, i.cj)([c.Z], () => ({
      version: c.Z.getMemberListVersion(e),
      members: c.Z.getMemberListSections(e)
    })),
    g = null == t,
    m = r.useMemo(() => {
      if (g) return p;
      let e = n.filter(e => e.hoist).map(e => ({
        id: e.id,
        label: e.name
      }));
      return e.push({
        id: u.Sk.ONLINE,
        label: d.intl.string(d.t.WbGtnH)
      }, {
        id: u.Sk.OFFLINE,
        label: d.intl.string(d.t.Vv0abJ)
      }), e.map(e => {
        var t, n;
        let {
          id: r,
          label: i
        } = e;
        return {
          label: i,
          userIds: null != (n = null == h || null == (t = h[r]) ? true : t.userIds) ? n : [],
          id: r,
          roleId: r
        }
      })
    }, [n, h, f, g]);
  return null != h ? m : p
}