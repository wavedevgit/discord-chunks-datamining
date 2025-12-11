/** Chunk was on 9414 **/
/** chunk id: 241635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk228643 = require("./228643.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk496675 = require("./496675.js"),
  Chunk867108 = require("./867108.jsx"),
  Chunk388032 = require("./388032.jsx");

function m(e, t) {
  var n;
  let m = (0, r.e7)([u.Z], () => {
      let n = u.Z.getHighestRole(e);
      return !u.Z.isRoleHigher(e, n, t)
    }),
    f = [],
    g = (0, b.Z)(e, t);
  null != g && f.push(g);
  let h = (0, c.Z)({
    id: t.id,
    label: p.intl.string(p.t.sMsaLg)
  });
  null != h && f.push(h);
  let x = (null == (n = t.tags) ? true : n.guild_connections) === null,
    j = t.managed && !x,
    v = null != t && (0, d.fI)(t);
  return m || j || v || f.push((0, i.jsx)(l.kSQ, {
    children: (0, i.jsx)(l.sNh, {
      id: "delete-role",
      label: p.intl.string(p.t.oyYWHE),
      color: "danger",
      icon: l.XHJ,
      action: () => {
        o.Z.show({
          title: p.intl.string(p.t.YWISbQ),
          body: p.intl.format(p.t["9+nrUS"], {
            name: t.name
          }),
          cancelText: p.intl.string(p.t["ETE/oC"]),
          onConfirm: async () => {
            x && await (0, s.L_)(e.id, t.id, []), a.Z.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), f
}