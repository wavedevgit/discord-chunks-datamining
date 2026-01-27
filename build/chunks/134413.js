/** Chunk was on web.js **/
/** chunk id: 134413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ml: () => f,
  O6: () => g,
  Ph: () => E,
  Y0: () => m,
  fw: () => _,
  vA: () => h
}), require("./896048.js");
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk402655 = require("./402655.js"),
  Chunk652215 = require("./652215.js");
let d = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, s.default],
      [n, r] = t,
      i = n.getGuild(e);
    return {
      user: r.getCurrentUser(),
      guild: i
    }
  },
  f = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, s.default],
      n = d(e, t);
    return null != n && r.X8(l.cc({
      user: n.user,
      context: n.guild,
      checkElevated: false
    }), c.M)
  },
  p = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [a.A, s.default],
      n = d(e, t);
    return null != n && o.A.can(u.xBc.MANAGE_GUILD, n.guild) && o.A.can(u.xBc.BAN_MEMBERS, n.guild)
  };

function _(e) {
  return (0, i.bG)([a.A, s.default], () => f(e, [a.A, s.default]), [e])
}

function h(e) {
  let t = _(e),
    n = (0, i.bG)([a.A, s.default], () => p(e, [a.A, s.default]), [e]);
  return t && n
}

function m(e) {
  return (0, i.bG)([a.A, o.A], () => {
    let t = a.A.getGuild(e);
    return null != t && o.A.can(u.xBc.MANAGE_GUILD, t)
  }, [e])
}

function g(e, t, n) {
  return (0, i.bG)([o.A, a.A], () => {
    let r = a.A.getGuild(e);
    return null != r && t && o.A.canManageUser(u.xBc.BAN_MEMBERS, n, r)
  }, [t, e, n])
}

function E(e, t, n) {
  let r = a.A.getGuild(e);
  return null != r && t && o.A.canManageUser(u.xBc.BAN_MEMBERS, n, r)
}