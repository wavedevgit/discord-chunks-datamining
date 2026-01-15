/** Chunk was on web.js **/
/** chunk id: 166584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk635042 = require("./635042.js"),
  Chunk705007 = require("./705007.jsx");

function u(e) {
  let {
    userId: t,
    guild: n
  } = e, u = (0, i.e7)([a.ZP], () => a.ZP.getMember(n.id, t)), d = null == u ? true : u.roles, f = (0, i.Wu)([o.Z], () => o.Z.getManyRoles(n.id, null != d ? d : []).sort(l.Z), [d, n.id]), {
    trackUserProfileAction: p
  } = (0, s.KZ)();
  return (0, r.jsx)(c.F, {
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