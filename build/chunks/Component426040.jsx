/** Chunk was on 69220 **/
/** chunk id: 426040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313426 = require("./313426.js"),
  Chunk643327 = require("./643327.js"),
  Chunk699516 = require("./699516.js");

function u(e) {
  let {
    user: t,
    onAction: n,
    groupId: u
  } = e, s = t.id, [c, f] = (0, l.Wu)([d.Z, a.Z], () => [d.Z.isFriend(s), a.Z.getGroups()], [s]);
  if (!c || 0 === f.length) return null;
  let g = [];
  return f.length > 0 && g.push((0, i.jsx)(r.sNh, {
    id: "add-to-group",
    label: "Add to Group",
    children: f.map(e => (0, i.jsx)(r.sNh, {
      id: "add-".concat(e.id),
      label: e.name,
      action: () => {
        null == n || n(), o.Z.addUsersToGroup(e.id, s)
      }
    }, e.id))
  }, "add-to-group")), null != u && g.push((0, i.jsx)(r.sNh, {
    id: "remove-from-group",
    label: "Remove from Group",
    action: () => {
      null == n || n(), o.Z.removeUsersFromGroup(u, s)
    }
  }, "remove-from-group")), g
}