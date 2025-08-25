/** Chunk was on web.js **/
/** chunk id: 386696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  Z: () => d
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  let [n, r, u] = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [s.default, o.Z, a.Z], d = r.getGuild(e), f = n.getUser(t);
  return !(null == d || null == f || f.isNonUserBot() || (0, i.eM)(d, f) || l.BT({
    permission: c.Plq.ADMINISTRATOR,
    user: f,
    context: d
  })) && u.canManageUser(c.Plq.MODERATE_MEMBERS, f, d)
}

function d(e, t) {
  return (0, r.e7)([s.default, o.Z, a.Z], () => u(e, t, [s.default, o.Z, a.Z]), [e, t])
}