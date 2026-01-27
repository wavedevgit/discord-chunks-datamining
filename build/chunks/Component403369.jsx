/** Chunk was on web.js **/
/** chunk id: 403369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk1659 = require("./1659.js"),
  Chunk166005 = require("./166005.jsx");

function u(e) {
  let {
    userId: t,
    guild: n
  } = e, u = (0, i.bG)([a.Ay], () => a.Ay.getMember(n.id, t)), d = null == u ? true : u.roles, f = (0, i.yK)([o.A], () => o.A.getManyRoles(n.id, null != d ? d : []).sort(l.m), [d, n.id]), {
    trackUserProfileAction: p
  } = (0, s.NJ)();
  return (0, r.jsx)(c.Q, {
    userId: t,
    guild: n,
    roles: f,
    onAddRole: () => p({
      action: "ADD_ROLE"
    }),
    onRemoveRole: () => p({
      action: "REMOVE_ROLE"
    }),
    onExpand: () => p({
      action: "EXPAND_ROLES"
    }),
    onCollapse: () => p({
      action: "COLLAPSE_ROLES"
    }),
    allowEditing: true
  })
}