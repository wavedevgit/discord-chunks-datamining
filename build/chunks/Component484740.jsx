/** Chunk was on 21968 **/
/** chunk id: 484740, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk619006 = require("./619006.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk34457 = require("./34457.js"),
  Chunk576705 = require("./576705.js"),
  Chunk292024 = require("./292024.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  var n;
  let p = (0, r.bG)([u.A], () => {
      let n = u.A.getHighestRole(e);
      return !u.A.isRoleHigher(e, n, t)
    }),
    m = [],
    g = (0, b.A)(e, t);
  null != g && m.push(g);
  let h = (0, c.A)({
    id: t.id,
    label: f.intl.string(f.t.sMsaLg)
  });
  null != h && m.push(h);
  let x = (null == (n = t.tags) ? true : n.guild_connections) === null,
    j = t.managed && !x,
    O = null != t && (0, d.Oy)(t);
  return p || j || O || m.push((0, i.jsx)(l.rXV, {
    children: (0, i.jsx)(l.Drp, {
      id: "delete-role",
      label: f.intl.string(f.t.oyYWHE),
      color: "danger",
      icon: l.ucK,
      action: () => {
        s.A.show({
          title: f.intl.string(f.t.YWISbQ),
          body: f.intl.format(f.t["9+nrUS"], {
            name: t.name
          }),
          cancelText: f.intl.string(f.t["ETE/oC"]),
          onConfirm: async () => {
            x && await (0, o.qK)(e.id, t.id, []), a.A.deleteRole(e.id, t.id)
          }
        })
      }
    })
  }, "delete-role")), m
}