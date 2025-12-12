/** Chunk was on web.js **/
/** chunk id: 241559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hB: () => g,
  lv: () => f,
  n2: () => _,
  nX: () => h,
  rX: () => E,
  xC: () => m
}), require("./388685.js");
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk478743 = require("./478743.js"),
  Chunk981631 = require("./981631.js");
let d = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Z, s.default],
      [n, r] = t,
      i = n.getGuild(e);
    return {
      user: r.getCurrentUser(),
      guild: i
    }
  },
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Z, s.default],
      n = d(e, t);
    return null != n && r.Db(l.uB({
      user: n.user,
      context: n.guild,
      checkElevated: false
    }), c.N)
  },
  p = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.Z, s.default],
      n = d(e, t);
    return null != n && o.Z.can(u.Plq.MANAGE_GUILD, n.guild) && o.Z.can(u.Plq.BAN_MEMBERS, n.guild)
  };

function _(e) {
  return (0, i.e7)([a.Z, s.default], () => f(e, [a.Z, s.default]), [e])
}

function m(e) {
  let t = _(e),
    n = (0, i.e7)([a.Z, s.default], () => p(e, [a.Z, s.default]), [e]);
  return t && n
}

function h(e) {
  return (0, i.e7)([a.Z, o.Z], () => {
    let t = a.Z.getGuild(e);
    return null != t && o.Z.can(u.Plq.MANAGE_GUILD, t)
  }, [e])
}

function g(e, t, n) {
  return (0, i.e7)([o.Z, a.Z], () => {
    let r = a.Z.getGuild(e);
    return null != r && t && o.Z.canManageUser(u.Plq.BAN_MEMBERS, n, r)
  }, [t, e, n])
}

function E(e, t, n) {
  let r = a.Z.getGuild(e);
  return null != r && t && o.Z.canManageUser(u.Plq.BAN_MEMBERS, n, r)
}