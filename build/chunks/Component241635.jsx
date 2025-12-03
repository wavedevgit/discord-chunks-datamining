/** Chunk was on 86736 **/
/** chunk id: 241635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e, t) {
  var n;
  let b = (0, r.e7)([u.Z], () => {
      let n = u.Z.getHighestRole(e);
      return !u.Z.isRoleHigher(e, n, t)
    }),
    g = [],
    f = (0, p.Z)(e, t);
  null != f && g.push(f);
  let h = (0, c.Z)({
    id: t.id,
    label: m.intl.string(m.t.sMsaLg)
  });
  null != h && g.push(h);
  let x = (null == (n = t.tags) ? true : n.guild_connections) === null,
    j = t.managed && !x,
    v = null != t && (0, d.fI)(t);
  return b || j || v || g.push((0, i.jsx)(l.kSQ, {
    children: (0, i.jsx)(l.sNh, {
      id: "delete-role",
      label: m.intl.string(m.t.oyYWHE),
      color: "danger",
      icon: l.XHJ,
      action: () => {
        o.Z.show({
          title: m.intl.string(m.t.YWISbQ),
          body: m.intl.format(m.t["9+nrUS"], {
            name: t.name
          }),
          cancelText: m.intl.string(m.t["ETE/oC"]),
          onConfirm: async () => {
            x && await (0, s.L_)(e.id, t.id, []), a.Z.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), g
}