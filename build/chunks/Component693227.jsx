/** Chunk was on 32418 **/
/** chunk id: 693227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk545059 = require("./545059.js"),
  Chunk870391 = require("./870391.js"),
  Chunk994500 = require("./994500.js");

function s(e) {
  let {
    user: t,
    onAction: n,
    groupId: s
  } = e, u = t.id, [c, A] = (0, i.yK)([d.A, a.A], () => [d.A.isFriend(u), a.A.getGroups()], [u]);
  if (!c || 0 === A.length) return null;
  let b = [];
  return A.length > 0 && b.push((0, r.jsx)(l.Drp, {
    id: "add-to-group",
    label: "Add to Group",
    children: A.map(e => (0, r.jsx)(l.Drp, {
      id: "add-".concat(e.id),
      label: e.name,
      action: () => {
        null == n || n(), o.A.addUsersToGroup(e.id, u)
      }
    }, e.id))
  }, "add-to-group")), null != s && b.push((0, r.jsx)(l.Drp, {
    id: "remove-from-group",
    label: "Remove from Group",
    action: () => {
      null == n || n(), o.A.removeUsersFromGroup(s, u)
    }
  }, "remove-from-group")), b
}