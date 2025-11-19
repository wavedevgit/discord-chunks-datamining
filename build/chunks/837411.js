/** Chunk was on web.js **/
/** chunk id: 837411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  n: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk91896 = require("./91896.js"),
  Chunk41776 = require("./41776.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js");
let u = (e, t) => {
  let n = s.default.getId() === e,
    r = null != t && a.Z.isLurking(t),
    u = o.h2.getSetting(),
    d = c.Z.isFriend(e);
  return !n && !r && (d || null != l.ZP.memberOf(e).find(e => !u.includes(e))) || i.Z.getGameFriendsForUser(e).length > 0 && o._j.getSetting()
};

function d(e, t) {
  let n = (0, r.e7)([s.default], () => s.default.getId() === e),
    u = (0, r.e7)([a.Z], () => null != t && a.Z.isLurking(t)),
    d = o.h2.useSetting();
  return (0, r.e7)([c.Z, l.ZP, i.Z], () => !n && !u && (c.Z.isFriend(e) || null != l.ZP.memberOf(e).find(e => !d.includes(e))) || i.Z.getGameFriendsForUser(e).length > 0 && o._j.getSetting())
}